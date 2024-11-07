const asyncHandler = require('express-async-handler')
const quizService = require('../services/quiz.service')
const { get } = require('../routes/quiz.routes')
const { generateThumbnail } = require('../utils/thumbnailGenerator')

const listQuizzes = asyncHandler(async (req, res) => {
  const result = await quizService.listQuizzes(
    {
      status: req.query.status,
      search: req.query.search,
    },
    req.user?.id
  )

  res.json(result)
})

const listQuizzesForAdmin = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const result = await quizService.listQuizSetForAdmin(userId)

  res.json(result)
})


const createQuiz = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const quiz = await quizService.createQuiz(req.body, userId)

  res.status(201).json({
    status: 'success',
    data: quiz,
  })
})

const updateQuiz = asyncHandler(async (req, res) => {
  const quiz = await quizService.updateQuiz(req.params.id, req.body)
  res.json({
    status: 'success',
    data: quiz,
  })
})

const addQuestion = asyncHandler(async (req, res) => {
  const question = await quizService.addQuestion(req.params.quizId, req.body)
  res.status(201).json({
    status: 'success',
    data: question,
  })
})
const addBulkQuestions = asyncHandler(async (req, res) => {
  const result = await quizService.addBulkQuestions(req.params.quizId, req.body)

  res.status(201).json({
    status: 'success',
    data: result,
  })
})

const getQuiz = asyncHandler(async (req, res) => {
  const quiz = await quizService.getQuiz(req.params.id, req.user.id)
  res.json({
    status: 'success',
    data: quiz,
  })
})

const submitAttempt = asyncHandler(async (req, res) => {
  const userId = req.user.id // Get from authenticated user
  const { quizId } = req.params
  const { answers } = req.body

  const attempt = await quizService.submitQuizAttempt(
    userId,
    quizId, // Ensure quizId is a number
    answers
  )

  res.json({
    status: 'success',
    data: attempt,
  })
})
const getAttempts = asyncHandler(async (req, res) => {
  const attempts = await quizService.getUserAttempts(req.user.id)
  res.json({
    status: 'success',
    data: attempts,
  })
})
const getQuizLeaderboard = asyncHandler(async (req, res) => {
  const result = await quizService.getQuizLeaderboard(
    req.params.quizId,
    req.query
  )
  res.json({
    status: 'success',
    data: result,
  })
})

const getOverallLeaderboard = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query
  const result = await quizService.getOverallLeaderboard({
    page: parseInt(page),
    limit: parseInt(limit),
  })

  res.json({
    status: 'success',
    data: result,
  })
})
const getQuizAttempts = asyncHandler(async (req, res) => {
  const result = await quizService.getQuizAttempts(req.params.quizId)

  res.json({
    status: 'success',
    data: result,
  })
})

const deleteQuestion = asyncHandler(async (req, res) => {
  const result = await quizService.deleteQuestion(req.params.questionId)

  res.json({
    status: 'success',
    data: result,
  })
});

const editQuestion = asyncHandler(async (req, res) => {
  const data = req.body
  const questionId = req?.params?.questionId || null
  const result = await quizService.editQuestion(questionId, data);

  res.json({
    status: 'success',
    data: result,
  })
});

const deleteQuizSet = asyncHandler(async (req, res) => {
  const result = await quizService.deleteQuizSet(req.params.id)

  res.json({
    status: 'success',
    data: result,
  })
});

module.exports = {
  listQuizzes,
  createQuiz,
  updateQuiz,
  addQuestion,
  addBulkQuestions,
  getQuiz,
  submitAttempt,
  getAttempts,
  getOverallLeaderboard,
  getQuizLeaderboard,
  getQuizAttempts,
  listQuizzesForAdmin,
  deleteQuestion,
  editQuestion,
  deleteQuizSet
}
