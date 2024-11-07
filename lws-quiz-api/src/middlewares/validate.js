const AppError = require('../utils/AppError')

const validate =
  (schema, source = 'body') =>
  (req, res, next) => {
    const { error } = schema.validate(req[source], {
      abortEarly: false,
      stripUnknown: true,
    })

    if (error) {
      const details = error.details.map((detail) => ({
        field: detail.path.join('.'),
        message: detail.message,
      }))
      throw AppError.badRequest('Validation failed', details)
    }

    next()
  }

module.exports = validate
