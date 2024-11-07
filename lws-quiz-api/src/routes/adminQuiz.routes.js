const router = require('express').Router()
const quizController = require('../controllers/quiz.controller')
const { verifyAuth, verifyAdmin, optionalAuth } = require('../middlewares/auth')
const verifyQuizOwnership = require('../middlewares/quizOwnership')
const validate = require('../middlewares/validate')
const {
  createQuizSchema,
  updateQuizSchema,
  createQuestionSchema,
  submitAttemptSchema,
  createBulkQuestionsSchema,
} = require('../validators/quiz.validator')


// Admin routes
router.get('/quizzes', [verifyAuth, verifyAdmin], quizController.listQuizzesForAdmin)

router.post(
  '/quizzes',
  [verifyAuth, verifyAdmin, validate(createQuizSchema)],
  quizController.createQuiz
)
router.patch(
  '/quizzes/:id',
  [verifyAuth, verifyAdmin, verifyQuizOwnership, validate(updateQuizSchema)],
  quizController.updateQuiz
)
router.delete(
  '/quizzes/:id',
  [verifyAuth, verifyAdmin],
  quizController.deleteQuizSet
)

router.post(
  '/quizzes/:quizId/questions',
  [verifyAuth, verifyAdmin, validate(createQuestionSchema)],
  quizController.addQuestion
)
router.post(
  '/quizzes/:quizId/questions/bulk',
  [verifyAuth, verifyAdmin, validate(createBulkQuestionsSchema)],
  quizController.addBulkQuestions
)

router.delete(
  '/questions/:questionId',
  [verifyAuth, verifyAdmin],
  quizController.deleteQuestion
)

router.patch(
  '/questions/:questionId',
  [verifyAuth, verifyAdmin],
  quizController.editQuestion
)



module.exports = router
