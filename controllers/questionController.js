const Question = require('../models/Question');

const listQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find().limit(10).sort('order');
    res.json(questions);
  } catch (error) {
    next(error);
  }
};

module.exports = { listQuestions };