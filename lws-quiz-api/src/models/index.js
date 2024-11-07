const sequelize = require('../config/database')
const User = require('./user')
const Quiz = require('./quiz')
const Question = require('./question')
const Attempt = require('./attempt')

// Define relationships without aliases
Quiz.hasMany(Question, {
  foreignKey: 'quizId',
  onDelete: 'CASCADE',
})
Question.belongsTo(Quiz, {
  foreignKey: 'quizId',
})

User.hasMany(Attempt, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
})
Attempt.belongsTo(User, {
  foreignKey: 'userId',
})

Quiz.hasMany(Attempt, {
  foreignKey: 'quizId',
  onDelete: 'CASCADE',
})
Attempt.belongsTo(Quiz, {
  foreignKey: 'quizId',
})


User.hasMany(Quiz, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
})

Quiz.belongsTo(User, {
  foreignKey: 'userId',
})

module.exports = {
  sequelize,
  User,
  Quiz,
  Question,
  Attempt,
}
