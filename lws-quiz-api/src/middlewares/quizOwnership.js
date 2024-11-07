const { Quiz } = require('../models');
const AppError = require('../utils/AppError');
const { StatusCodes } = require('http-status-codes');

const verifyQuizOwnership = async (req, res, next) => {
  const quizId = req.params.quizId || req.params.id;
  const userId = req.user.id;

  // Skip ownership check if user is super admin (if you have such a role)
  if (req.user.role === 'super_admin') {
    return next();
  }

  const quiz = await Quiz.findOne({
    where: { id: quizId }
  });

  if (!quiz) {
    throw new AppError('Quiz not found', StatusCodes.NOT_FOUND);
  }

  if (quiz.userId !== userId) {
    throw new AppError('You do not have permission to modify this quiz', StatusCodes.FORBIDDEN);
  }

  next();
};

module.exports = verifyQuizOwnership;