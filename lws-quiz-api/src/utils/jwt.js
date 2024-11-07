const jwt = require('jsonwebtoken')
const config = require('../config/config')

const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { id: user.id, role: user.role },
    config.jwt.accessTokenSecret,
    { expiresIn: config.jwt.accessTokenExpiry }
  )

  const refreshToken = jwt.sign(
    { id: user.id },
    config.jwt.refreshTokenSecret,
    { expiresIn: config.jwt.refreshTokenExpiry }
  )

  return { accessToken, refreshToken }
}

module.exports = {
  generateTokens,
}
