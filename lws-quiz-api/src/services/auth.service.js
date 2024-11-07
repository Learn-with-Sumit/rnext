const bcrypt = require('bcryptjs')
const { User } = require('../models')
const AppError = require('../utils/AppError')
const { generateTokens } = require('../utils/jwt')
const { StatusCodes } = require('http-status-codes')

const register = async (userData) => {
  const existingUser = await User.findOne({
    where: { email: userData.email },
  })

  if (existingUser) {
    throw new AppError('Email already registered', StatusCodes.CONFLICT)
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10)
  const user = await User.create({
    ...userData,
    password: hashedPassword,
  })

  const { password, ...userWithoutPassword } = user.toJSON()
  return userWithoutPassword
}

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } })

  if (!user) {
    throw new AppError('Invalid email or password', StatusCodes.UNAUTHORIZED)
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    throw new AppError('Invalid email or password', StatusCodes.UNAUTHORIZED)
  }

  const tokens = generateTokens(user)
  await user.update({ refreshToken: tokens.refreshToken })

  const { password: _, ...userWithoutPassword } = user.toJSON()

  return {
    user: userWithoutPassword,
    tokens,
  }
}

const refreshToken = async (token) => {
  const user = await User.findOne({ where: { refreshToken: token } })

  if (!user) {
    throw AppError.unauthorized('Invalid refresh token')
  }

  const tokens = generateTokens(user)
  await user.update({ refreshToken: tokens.refreshToken })

  return tokens
}

module.exports = {
  register,
  login,
  refreshToken,
}
