const Joi = require('joi')

const registerSchema = Joi.object({
  full_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
})

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

module.exports = {
  registerSchema,
  loginSchema,
}
