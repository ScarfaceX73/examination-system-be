const Answer = require('../models/Answer');
const Question = require('../models/Question');

const saveAttempt = async (req, res, next) => {
  try {
    const { userId, questionId, selectedOption } = req.body;
    const question = await Question.findById(questionId);
    const isCorrect = question.options.some(
      (option) => option.text === selectedOption && option.isCorrect
    );
    const answer = new Answer({ userId, questionId, selectedOption, isCorrect });
    await answer.save();
    res.status(201).json({ message: 'Answer saved', isCorrect });
  } catch (error) {
    next(error);
  }
};

const getUserAttempts = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const answers = await Answer.find({ userId }).populate('questionId');
    res.json(answers);
  } catch (error) {
    next(error);
  }
};

module.exports = { saveAttempt, getUserAttempts };