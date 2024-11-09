const express = require('express')
const { StatusCodes } = require('http-status-codes')
const AppError = require('./utils/AppError')
const errorHandler = require('./middlewares/errorHandler')
const cors = require("cors");

const { uploadDir, backgroundDir, publicUrl } = require('./config/config')

const UPLOADS_DIR = uploadDir
const BACKGROUNDS_DIR = backgroundDir

const app = express()
app.use(cors());

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Serve static files
app.use('/images', express.static(UPLOADS_DIR))
app.use('/backgrounds', express.static(BACKGROUNDS_DIR))
// API routes
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/quizzes', require('./routes/quiz.routes'))
app.use('/api/admin', require('./routes/adminQuiz.routes'))

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'Server is healthy',
  })
})

// Handle undefined routes
app.all('*', (req, res, next) => {
  next(AppError.notFound(`Can't find ${req.originalUrl} on this server!`))
})

// Global error handling middleware
app.use(errorHandler)

module.exports = app
