const { StatusCodes } = require('http-status-codes')
const AppError = require('../utils/AppError')

const handleJWTError = () =>
  AppError.unauthorized('Invalid token. Please log in again!')

const handleJWTExpiredError = () =>
  AppError.unauthorized('Your token has expired! Please log in again.')

const handleSequelizeValidationError = (err) => {
  const message = Object.values(err.errors).map((val) => val.message)
  return AppError.badRequest(`Invalid input: ${message.join('. ')}`)
}

const handleSequelizeUniqueConstraintError = (err) => {
  const message = `Duplicate field value: ${err.errors[0].value}. Please use another value!`
  return AppError.conflict(message)
}

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  })
}

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    })
  } else {
    console.error('ERROR 💥', err)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: 'Something went wrong!',
    })
  }
}

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
  err.status = err.status || 'error'

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res)
  } else {
    let error = { ...err }
    error.message = err.message

    if (error.name === 'JsonWebTokenError') error = handleJWTError()
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError()
    if (error.name === 'SequelizeValidationError')
      error = handleSequelizeValidationError(error)
    if (error.name === 'SequelizeUniqueConstraintError')
      error = handleSequelizeUniqueConstraintError(error)

    sendErrorProd(error, res)
  }
}

module.exports = errorHandler
