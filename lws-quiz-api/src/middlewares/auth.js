const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const AppError = require('../utils/AppError')

const verifyAuth = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    throw AppError.unauthorized('Please login to access this resource')
  }

  try {
    const decoded = jwt.verify(token, config.jwt.accessTokenSecret)
    req.user = decoded
    next()
  } catch (err) {
    throw AppError.unauthorized('Invalid or expired token')
  }
})

const verifyAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    throw AppError.forbidden('Admin access required')
  }
  next()
}

const optionalAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (token) {
      const decoded = jwt.verify(token, config.jwt.accessTokenSecret)
      req.user = decoded
    }
    next()
  } catch (error) {
    // If token is invalid, just continue without user
    next()
  }
}

module.exports = {
  verifyAuth,
  verifyAdmin,
  optionalAuth,
}
