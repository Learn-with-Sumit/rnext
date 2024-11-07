require('dotenv').config()
const app = require('./src/app')
const sequelize = require('./src/config/database')
const config = require('./src/config/config')

const startServer = async () => {
  try {
    await sequelize.authenticate()
    console.log('Database connection has been established successfully.')

    // Force true will drop and recreate tables - use only in development
    await sequelize.sync({ force: false })
    console.log('Database synchronized')

    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`)
    })
  } catch (error) {
    console.error('Unable to start the server:', error)
    process.exit(1)
  }
}

startServer()

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...')
  console.error(err.name, err.message)
  process.exit(1)
})

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...')
  console.error(err.name, err.message)
  process.exit(1)
})
