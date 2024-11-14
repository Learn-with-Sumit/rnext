const { Op } = require('sequelize')
const { StatusCodes } = require('http-status-codes')
const { Quiz, Question, Attempt, User, sequelize } = require('../models')
const AppError = require('../utils/AppError')
const { generateThumbnail } = require('../utils/thumbnailGenerator')

const listQuizzes = async ({ status, search }, userId = null) => {
  try {
    // Build where clause
    const where = {}
    if (status) {
      where.status = status
    } else {
      where.status = 'published' // Default to published quizzes
    }

    if (search) {
      where.title = {
        [Op.like]: `%${search}%`,
      }
    }

    // Get quizzes with counts
    const quizzes = await Quiz.findAll({
      where,
      attributes: [
        'id',
        'title',
        'description',
        'thumbnail',
        'status',
        'created_at',
        [
          sequelize.literal(`(
            SELECT COUNT(*)
            FROM "Questions"
            WHERE "Questions"."quiz_id" = "Quiz"."id"
          )`),
          'total_questions',
        ],
        [
          sequelize.literal(`(
            SELECT COUNT(*)
            FROM "Attempts"
            WHERE "Attempts"."quiz_id" = "Quiz"."id"
            AND "Attempts"."completed" = 1
          )`),
          'total_attempts',
        ],
        ...(userId
          ? [
            [
              sequelize.literal(`(
            SELECT COUNT(*)
            FROM "Attempts"
            WHERE "Attempts"."quiz_id" = "Quiz"."id"
            AND "Attempts"."user_id" = '${userId}'
            AND "Attempts"."completed" = 1
          )`),
              'is_attempted',
            ],
          ]
          : []),
      ],
      order: [['created_at', 'DESC']],
    })

    // Transform the results
    const transformedQuizzes = quizzes.map((quiz) => {
      const quizData = quiz.get({ plain: true })
      return {
        id: quizData.id,
        title: quizData.title,
        description: quizData.description,
        thumbnail: quizData.thumbnail,
        status: quizData.status,
        created_at: quizData.created_at,
        total_questions: parseInt(quizData.total_questions || 0),
        total_attempts: parseInt(quizData.total_attempts || 0),
        is_attempted: userId
          ? Boolean(parseInt(quizData.is_attempted || 0))
          : false,
      }
    })

    return {
      status: 'success',
      data: transformedQuizzes,
    }
  } catch (error) {
    console.error('Error in listQuizzes:', error)
    throw error
  }
}

const listQuizSetForAdmin = async (userId = null) => {
  try {
    const quizzes = await Quiz.findAll({
      where: {
        userId: userId
      },
      include: [{
        model: Question,
        // Optional: if you want to include questions
      }],
      order: [['created_at', 'DESC']] // Optional: to sort by creation date
    });
    return quizzes;
  } catch (error) {
    throw error;
  }
}

const createQuiz = async (quizData, userId) => {
  const thumbnail = generateThumbnail()

  return await Quiz.create({ ...quizData, thumbnail: thumbnail, userId: userId })
}

const updateQuiz = async (quizId, updateData) => {
  const quiz = await Quiz.findByPk(quizId)

  if (!quiz) {
    throw AppError.notFound('Quiz not found')
  }

  if (updateData.status === 'published') {
    const questionCount = await Question.count({ where: { quizId } })
    if (questionCount === 0) {
      throw AppError.badRequest('Cannot publish quiz without questions')
    }
  }

  return await quiz.update(updateData)
}

const addQuestion = async (quizId, questionData) => {
  const quiz = await Quiz.findByPk(quizId)

  if (!quiz) {
    throw AppError.notFound('Quiz not found')
  }

  return await Question.create({
    ...questionData,
    quizId,
  })
}

const addBulkQuestions = async (quizId, questionsData) => {
  const quiz = await Quiz.findByPk(quizId)

  if (!quiz) {
    throw new AppError('Quiz not found', StatusCodes.NOT_FOUND)
  }

  // Validate that all correctAnswers are in their respective options arrays
  questionsData.questions.forEach((questionData, index) => {
    if (!questionData.options.includes(questionData.correctAnswer)) {
      throw new AppError(
        `Correct answer must be one of the options for question at index ${index}`,
        StatusCodes.BAD_REQUEST
      )
    }
  })

  try {
    const questions = await sequelize.transaction(async (t) => {
      // Add quizId to each question
      const questionsWithQuizId = questionsData.questions.map((question) => ({
        ...question,
        quizId,
      }))

      // Bulk create questions
      const createdQuestions = await Question.bulkCreate(questionsWithQuizId, {
        transaction: t,
        validate: true,
      })

      return createdQuestions
    })

    // Get updated quiz with question count
    const updatedQuiz = await Quiz.findOne({
      where: { id: quizId },
      attributes: [
        'id',
        'title',
        [
          sequelize.fn('COUNT', sequelize.col('Questions.id')),
          'total_questions',
        ],
        [sequelize.fn('SUM', sequelize.col('Questions.marks')), 'total_marks'],
      ],
      include: [
        {
          model: Question,
          attributes: [],
        },
      ],
      group: ['Quiz.id'],
    })

    return {
      message: `Successfully added ${questions.length} questions`,
      quiz: {
        id: updatedQuiz.id,
        title: updatedQuiz.title,
        total_questions: parseInt(updatedQuiz.get('total_questions')),
        total_marks: parseInt(updatedQuiz.get('total_marks')),
      },
      questions: questions.map((q) => ({
        id: q.id,
        question: q.question,
        options: q.options,
        marks: q.marks,
      })),
    }
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      throw new AppError(
        'Invalid question data: ' + error.message,
        StatusCodes.BAD_REQUEST
      )
    }
    throw error
  }
}

const getPublishedQuiz = async (quizId) => {
  const quiz = await Quiz.findOne({
    where: {
      id: quizId,
      status: 'published',
    },
    include: [Question],
  })

  if (!quiz) {
    throw AppError.notFound('Quiz not found or not published')
  }

  return quiz
}

const submitQuizAttempt = async (userId, quizId, answers) => {
  console.log('quizId', quizId)
  // First verify the user exists
  const user = await User.findByPk(userId)
  if (!user) {
    throw new AppError('User not found', StatusCodes.NOT_FOUND)
  }

  // Get quiz with questions
  const quiz = await Quiz.findOne({
    where: {
      id: quizId,
      status: 'published',
    },
    include: [
      {
        model: Question,
        attributes: ['id', 'question', 'correctAnswer', 'marks'],
      },
    ],
  })

  if (!quiz) {
    throw new AppError('Quiz not found or not published', StatusCodes.NOT_FOUND)
  }

  // Check for existing attempt
  const existingAttempt = await Attempt.findOne({
    where: {
      userId,
      quizId,
      completed: true,
    },
  })

  if (existingAttempt) {
    throw new AppError(
      'You have already completed this quiz',
      StatusCodes.CONFLICT
    )
  }

  // Validate that answers correspond to actual questions
  const validQuestionIds = new Set(quiz.Questions.map((q) => q.id))
  for (const questionId of Object.keys(answers)) {
    if (!validQuestionIds.has(questionId)) {
      throw new AppError(
        `Invalid question ID: ${questionId}`,
        StatusCodes.BAD_REQUEST
      )
    }
  }

  // Calculate score and prepare answer details
  let score = 0
  const answerDetails = []
  const submitted_answers = []
  const correct_answers = []
  const correctAnswers = {}

  quiz.Questions.forEach((question) => {
    const userAnswer = answers[question.id]
    const isCorrect = userAnswer === question.correctAnswer
    if (isCorrect) {
      score += question.marks
    }

    correctAnswers[question.id] = question.correctAnswer

    answerDetails.push({
      question_id: question.id,
      question: question.question,
      submitted_answer: userAnswer,
      correct_answer: question.correctAnswer,
      is_correct: isCorrect,
      marks: question.marks,
      marks_obtained: isCorrect ? question.marks : 0,
    })
    submitted_answers.push({
      question_id: question.id,
      answer: userAnswer || null,
    })
    correct_answers.push({
      question_id: question.id,
      answer: question.correctAnswer,
      marks: question.marks,
    })
  })

  try {
    // Create attempt record
    const attempt = await Attempt.create({
      userId,
      quizId,
      // score,
      submittedAnswers: answers, // Renamed from answers to submittedAnswers
      completed: true,
    })

    // Prepare response
    return {
      attempt_id: attempt.id,
      quiz: {
        id: quiz.id,
        title: quiz.title,
        total_marks: quiz.Questions.reduce((sum, q) => sum + q.marks, 0),
      },
      // score,
      percentage: (
        (score / quiz.Questions.reduce((sum, q) => sum + q.marks, 0)) *
        100
      ).toFixed(2),
      submitted_answers: submitted_answers, // Detailed breakdown of each answer
      correct_answers: correct_answers, // Detailed breakdown of each correct answer
      submitted_at: attempt.createdAt,
    }
  } catch (error) {
    console.error('Error submitting quiz attempt:', error)
    throw new AppError(
      'Failed to submit quiz attempt',
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}

const getUserAttempts = async (userId) => {
  const attempts = await Attempt.findAll({
    where: {
      userId,
      completed: true,
    },
    include: [
      {
        model: Quiz,
        attributes: ['id', 'title', 'description'],
      },
    ],
    order: [['createdAt', 'DESC']],
  })

  return attempts.map((attempt) => ({
    id: attempt.id,
    quiz: {
      id: attempt.Quiz.id,
      title: attempt.Quiz.title,
      description: attempt.Quiz.description,
    },
    score: attempt.score,
    answers: attempt.answers,
    submittedAt: attempt.createdAt,
  }))
}

const getQuizLeaderboard = async (quizId, { page = 1, limit = 10 }) => {
  const offset = (page - 1) * limit

  const leaderboard = await Attempt.findAndCountAll({
    where: {
      quizId,
      completed: true,
    },
    include: [
      {
        model: User,
        attributes: ['id', 'full_name'], // Only select needed fields
      },
    ],
    attributes: ['score', 'createdAt'],
    order: [
      ['score', 'DESC'],
      ['createdAt', 'ASC'], // For ties, earlier attempt ranks higher
    ],
    limit,
    offset,
    distinct: true,
  })

  return {
    rankings: leaderboard.rows.map((attempt, index) => ({
      rank: offset + index + 1,
      full_name: attempt.User.full_name,
      score: attempt.score,
      attemptDate: attempt.createdAt,
    })),
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      totalPages: Math.ceil(leaderboard.count / limit),
      totalAttempts: leaderboard.count,
    },
  }
}

// Get overall user rankings across all quizzes
const getOverallLeaderboard = async ({ page = 1, limit = 10 }) => {
  const offset = (page - 1) * limit

  try {
    const userScores = await User.findAll({
      attributes: [
        'id',
        'full_name',
        [
          sequelize.fn(
            'COUNT',
            sequelize.fn('DISTINCT', sequelize.col('Attempts.quiz_id')) // Changed from quizId to quiz_id
          ),
          'quizzes_attempted',
        ],
        [sequelize.fn('SUM', sequelize.col('Attempts.score')), 'total_score'],
        [sequelize.fn('AVG', sequelize.col('Attempts.score')), 'average_score'],
        [
          sequelize.fn('MAX', sequelize.col('Attempts.created_at')), // Changed from createdAt to created_at
          'last_attempt',
        ],
      ],
      include: [
        {
          model: Attempt,
          attributes: [],
          where: { completed: true },
          required: true,
        },
      ],
      group: ['User.id', 'User.full_name'],
      order: [
        [sequelize.literal('total_score'), 'DESC'],
        [sequelize.literal('last_attempt'), 'ASC'],
      ],
      limit,
      offset,
      subQuery: false,
    })

    // Get total users with attempts
    const totalUsersResult = await User.findOne({
      attributes: [
        [
          sequelize.fn(
            'COUNT',
            sequelize.fn('DISTINCT', sequelize.col('User.id'))
          ),
          'total',
        ],
      ],
      include: [
        {
          model: Attempt,
          attributes: [],
          where: { completed: true },
          required: true,
        },
      ],
      raw: true,
    })

    const totalUsers = parseInt(totalUsersResult?.total || 0)

    // Get total published quizzes
    const totalQuizzes = await Quiz.count({
      where: { status: 'published' },
    })

    // Transform the data
    const rankings = userScores.map((user, index) => {
      const userData = user.get({ plain: true })
      return {
        rank: offset + index + 1,
        user: {
          id: userData.id,
          full_name: userData.full_name,
        },
        stats: {
          total_score: parseInt(userData.total_score || 0),
          quizzes_attempted: parseInt(userData.quizzes_attempted || 0),
          completion_rate: totalQuizzes
            ? Math.round((userData.quizzes_attempted / totalQuizzes) * 100)
            : 0,
          average_score: parseFloat(userData.average_score || 0).toFixed(2),
          last_attempt: userData.last_attempt,
        },
      }
    })

    return {
      rankings,
      stats: {
        total_quizzes: totalQuizzes,
      },
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(totalUsers / limit),
        totalUsers,
      },
    }
  } catch (error) {
    console.error('Error getting overall leaderboard:', error)
    throw new AppError(
      'Failed to get leaderboard',
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}
const getQuiz = async (quizId, userId) => {
  const quiz = await Quiz.findOne({
    where: {
      id: quizId,
      status: 'published',
    },
    include: [
      {
        model: Question,
        attributes: ['id', 'question', 'options', 'marks', 'correctAnswer'],
      },
    ],
  })

  if (!quiz) {
    throw new AppError('Quiz not found or not published', StatusCodes.NOT_FOUND)
  }

  const [userAttempt, stats] = await Promise.all([
    userId
      ? Attempt.findOne({
        where: {
          quiz_id: quizId,
          user_id: userId,
          completed: true,
        },
      })
      : null,
    Attempt.findOne({
      where: {
        quiz_id: quizId,
        completed: true,
      },
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('id')), 'total_attempts'],
        [sequelize.fn('AVG', sequelize.col('score')), 'average_score'],
        [sequelize.fn('MAX', sequelize.col('score')), 'highest_score'],
      ],
      raw: true,
    }),
  ])

  const questions = quiz.Questions.map((question) => ({
    id: question.id,
    question: question.question,
    options: question.options,
    marks: question.marks,
    correctAnswer: question.correctAnswer,
  }))

  const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0)

  return {
    id: quiz.id,
    title: quiz.title,
    description: quiz.description,
    thumbnail: quiz.thumbnail,
    status: quiz.status,
    created_at: quiz.created_at,
    stats: {
      total_questions: questions.length,
      total_marks: totalMarks,
      total_attempts: parseInt(stats?.total_attempts || 0),
      average_score: parseFloat(stats?.average_score || 0).toFixed(2),
      highest_score: parseInt(stats?.highest_score || 0),
    },
    questions,
    user_attempt: userAttempt
      ? {
        attempted: true,
        attempt_id: userAttempt.id,
        score: userAttempt.score,
        percentage: ((userAttempt.score / totalMarks) * 100).toFixed(2),
        submitted_at: userAttempt.created_at,
      }
      : {
        attempted: false,
      },
  }
}

const getQuizAttempts = async (quizId) => {
  // First verify the quiz exists with its questions
  const quiz = await Quiz.findOne({
    where: { id: quizId },
    include: [
      {
        model: Question,
        attributes: ['id', 'question', 'correctAnswer', 'marks'],
      },
    ],
    attributes: ['id', 'title', 'description'],
  })

  if (!quiz) {
    throw new AppError('Quiz not found', StatusCodes.NOT_FOUND)
  }

  // Get all attempts with user details
  const attempts = await Attempt.findAll({
    where: {
      quizId,
      completed: true,
    },
    include: [
      {
        model: User,
        attributes: ['id', 'full_name', 'email'],
      },
    ],
    order: [['created_at', 'DESC']], // Most recent attempts first
    attributes: ['id', 'score', 'submittedAnswers', 'created_at'],
  })

  // Get quiz statistics
  const stats = await Attempt.findOne({
    where: {
      quizId,
      completed: true,
    },
    attributes: [
      [sequelize.fn('COUNT', sequelize.col('id')), 'total_attempts'],
      [sequelize.fn('AVG', sequelize.col('score')), 'average_score'],
      [sequelize.fn('MAX', sequelize.col('score')), 'highest_score'],
      [sequelize.fn('MIN', sequelize.col('score')), 'lowest_score'],
    ],
    raw: true,
  })

  // Create a map of correct answers
  const correctAnswers = {}
  quiz.Questions.forEach((question) => {
    correctAnswers[question.id] = question.correctAnswer
  })

  // Transform the data
  const transformedAttempts = attempts.map((attempt) => {
    const submitted_answers = []
    const correct_answers = []

    // Calculate answer details for each attempt
    const answerDetails = quiz.Questions.map((question) => {
      const submittedAnswer = attempt.submittedAnswers[question.id]
      const isCorrect = submittedAnswer === question.correctAnswer
      submitted_answers.push({
        question_id: question.id,
        answer: submittedAnswer || null,
      })
      correct_answers.push({
        question_id: question.id,
        answer: question.correctAnswer,
        marks: question.marks,
      })
      return {
        question_id: question.id,
        question: question.question,
        submitted_answer: submittedAnswer,
        correct_answer: question.correctAnswer,
        is_correct: isCorrect,
        marks: question.marks,
        marks_obtained: isCorrect ? question.marks : 0,
      }
    })

    return {
      id: attempt.id,
      user: {
        id: attempt.User.id,
        full_name: attempt.User.full_name,
        email: attempt.User.email,
      },
      // score: attempt.score,
      submitted_at: attempt.created_at,
      // percentage: (
      //   (attempt.score / quiz.Questions.reduce((sum, q) => sum + q.marks, 0)) *
      //   100
      // ).toFixed(2),
      // submittedAnswers: attempt.submittedAnswers,
      // correctAnswers,
      submitted_answers,
      correct_answers,
      // answer_details: answerDetails,
    }
  })

  return {
    quiz: {
      id: quiz.id,
      title: quiz.title,
      description: quiz.description,
      total_marks: quiz.Questions.reduce((sum, q) => sum + q.marks, 0),
      total_questions: quiz.Questions.length,
    },
    stats: {
      total_attempts: parseInt(stats?.total_attempts || 0),
      average_score: parseFloat(stats?.average_score || 0).toFixed(2),
      highest_score: parseInt(stats?.highest_score || 0),
      lowest_score: parseInt(stats?.lowest_score || 0),
    },
    attempts: transformedAttempts,
  }
}

const deleteQuestion = async (questionId) => {
  return await Question.destroy({
    where: {
      id: questionId,
    },
  })
}

const editQuestion = async (questionId, body) => {
  const question = await Question.findByPk(questionId)

  if (!question) {
    throw AppError.notFound('question not found')
  }


  Object.assign(question, body);
  await question.save();

  return question;
}

const deleteQuizSet = async (quizId) => {
  return await Quiz.destroy({
    where: {
      id: quizId,
    },
  })
}

module.exports = {
  listQuizzes,
  getQuiz,
  createQuiz,
  updateQuiz,
  addQuestion,
  addBulkQuestions,
  getPublishedQuiz,
  submitQuizAttempt,
  getUserAttempts,
  getQuizLeaderboard,
  getOverallLeaderboard,
  getQuizAttempts,
  listQuizSetForAdmin,
  deleteQuestion,
  editQuestion,
  deleteQuizSet
}
