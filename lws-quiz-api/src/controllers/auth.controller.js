const asyncHandler = require('express-async-handler')
const authService = require('../services/auth.service')

const register = asyncHandler(async (req, res) => {
  const user = await authService.register(req.body)
  res.status(201).json({
    status: 'success',
    data: user,
  })
})

const login = asyncHandler(async (req, res) => {
  const result = await authService.login(req.body)
  res.json({
    status: 'success',
    data: result,
  })
})

const refreshToken = asyncHandler(async (req, res) => {
  const tokens = await authService.refreshToken(req.body.refreshToken)
  res.json({
    status: 'success',
    data: tokens,
  })
})

module.exports = {
  register,
  login,
  refreshToken,
}
