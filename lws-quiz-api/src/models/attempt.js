const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Attempt = sequelize.define(
  'Attempt',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id',
      },
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
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    submittedAnswers: {
      type: DataTypes.JSON,
      allowNull: false,
      field: 'submitted_answers',
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    underscored: true,
  }
)

module.exports = Attempt
