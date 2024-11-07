const Joi = require('joi')
const listQuizSchema = Joi.object({
  page: Joi.number().min(1).default(1),
  limit: Joi.number().min(1).max(100).default(10),
  status: Joi.string().valid('published', 'draft').optional(),
  search: Joi.string().optional(),
})
const createQuizSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  status: Joi.string().valid('draft', 'published').default('draft'),
})
const createBulkQuestionsSchema = Joi.object({
  questions: Joi.array()
    .items(
      Joi.object({
        question: Joi.string().required(),
        options: Joi.array().items(Joi.string()).min(2).required(),
        correctAnswer: Joi.string().required(),
        marks: Joi.number().default(5),
      })
    )
    .min(1)
    .required(),
})
const updateQuizSchema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  status: Joi.string().valid('draft', 'published').optional(),
})

const createQuestionSchema = Joi.object({
  question: Joi.string().required(),
  options: Joi.array().items(Joi.string()).min(2).required(),
  correctAnswer: Joi.string().required(),
  marks: Joi.number().default(5),
})

const submitAttemptSchema = Joi.object({
  answers: Joi.object().pattern(/^\d+$/, Joi.string().required()).required(),
})

module.exports = {
  listQuizSchema,
  createQuizSchema,
  createBulkQuestionsSchema,
  updateQuizSchema,
  createQuestionSchema,
  submitAttemptSchema,
}
