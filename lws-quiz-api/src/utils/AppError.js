const { StatusCodes } = require('http-status-codes')

class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
    this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error'
    this.isOperational = true

    Error.captureStackTrace(this, this.constructor)
  }

  static badRequest(message) {
    return new AppError(message, StatusCodes.BAD_REQUEST)
  }

  static unauthorized(message) {
    return new AppError(message, StatusCodes.UNAUTHORIZED)
  }

  static forbidden(message) {
    return new AppError(message, StatusCodes.FORBIDDEN)
  }

  static notFound(message) {
    return new AppError(message, StatusCodes.NOT_FOUND)
  }

  static conflict(message) {
    return new AppError(message, StatusCodes.CONFLICT)
  }

  static internal(message) {
    return new AppError(message, StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

module.exports = AppError
