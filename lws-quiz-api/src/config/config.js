require('dotenv').config()

const path = require('path')

module.exports = {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || 'development',
  uploadDir: path.join(__dirname, '../../uploads'),
  backgroundDir: path.join(__dirname, '../../backgrounds'),
  publicUrl: process.env.PUBLIC_URL || 'http://localhost:5000',
  jwt: {
    accessTokenSecret: process.env.JWT_ACCESS_SECRET,
    refreshTokenSecret: process.env.JWT_REFRESH_SECRET,
    accessTokenExpiry: process.env.JWT_ACCESS_EXPIRY || '15m',
    refreshTokenExpiry: process.env.JWT_REFRESH_EXPIRY || '7d',
  },
}
