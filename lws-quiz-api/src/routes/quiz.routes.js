const router = require('express').Router()
const quizController = require('../controllers/quiz.controller')
const { verifyAuth, verifyAdmin, optionalAuth } = require('../middlewares/auth')
const validate = require('../middlewares/validate')
const {
  createQuizSchema,
  updateQuizSchema,
  createQuestionSchema,
  submitAttemptSchema,
  createBulkQuestionsSchema,
} = require('../validators/quiz.validator')

// Leaderboard routes should be at the top to avoid conflicting with :id routes
router.get('/leaderboard', verifyAuth, quizController.getOverallLeaderboard)
router.get('/attempts', verifyAuth, quizController.getAttempts)

// Quiz specific routes
router.get('/', optionalAuth, quizController.listQuizzes)
router.get('/:id', verifyAuth, quizController.getQuiz)
router.get('/:id/leaderboard', verifyAuth, quizController.getQuizLeaderboard)
router.post(
  '/:quizId/attempt',
  [verifyAuth, validate(submitAttemptSchema)],
  quizController.submitAttempt
)

router.get('/:quizId/attempts', [verifyAuth], quizController.getQuizAttempts)

module.exports = router
