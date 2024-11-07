const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Question = sequelize.define(
  'Question',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    quizId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'quiz_id',
      references: {
        model: 'quizzes',
        key: 'id',
      },
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    options: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    correctAnswer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marks: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
    },
  },
  {
    underscored: true,
  }
)

module.exports = Question
