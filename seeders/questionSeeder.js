const mongoose = require('mongoose');
const Question = require('../models/Question');
const connectDB = require('../config/db');

const seedQuestions = async () => {
  await connectDB();
  const questions = [
    {
      "text": "What is the capital of France?",
      "options": [
        { "text": "Paris", "isCorrect": true },
        { "text": "Berlin", "isCorrect": false },
        { "text": "Madrid", "isCorrect": false },
        { "text": "Rome", "isCorrect": false }
      ],
      "order": 1
    },
    {
      "text": "Who wrote 'Romeo and Juliet'?",
      "options": [
        { "text": "William Shakespeare", "isCorrect": true },
        { "text": "Charles Dickens", "isCorrect": false },
        { "text": "Mark Twain", "isCorrect": false },
        { "text": "Jane Austen", "isCorrect": false }
      ],
      "order": 2
    },
    {
      "text": "What is the boiling point of water at sea level?",
      "options": [
        { "text": "100°C", "isCorrect": true },
        { "text": "0°C", "isCorrect": false },
        { "text": "50°C", "isCorrect": false },
        { "text": "200°C", "isCorrect": false }
      ],
      "order": 3
    },
    {
      "text": "Which planet is known as the Red Planet?",
      "options": [
        { "text": "Mars", "isCorrect": true },
        { "text": "Earth", "isCorrect": false },
        { "text": "Jupiter", "isCorrect": false },
        { "text": "Venus", "isCorrect": false }
      ],
      "order": 4
    },
    {
      "text": "What is the largest mammal in the world?",
      "options": [
        { "text": "Blue Whale", "isCorrect": true },
        { "text": "Elephant", "isCorrect": false },
        { "text": "Giraffe", "isCorrect": false },
        { "text": "Hippopotamus", "isCorrect": false }
      ],
      "order": 5
    },
    {
      "text": "What is the primary ingredient in guacamole?",
      "options": [
        { "text": "Avocado", "isCorrect": true },
        { "text": "Tomato", "isCorrect": false },
        { "text": "Cucumber", "isCorrect": false },
        { "text": "Onion", "isCorrect": false }
      ],
      "order": 6
    },
    {
      "text": "Which element has the chemical symbol 'O'?",
      "options": [
        { "text": "Oxygen", "isCorrect": true },
        { "text": "Osmium", "isCorrect": false },
        { "text": "Gold", "isCorrect": false },
        { "text": "Silver", "isCorrect": false }
      ],
      "order": 7
    },
    {
      "text": "How many continents are there on Earth?",
      "options": [
        { "text": "7", "isCorrect": true },
        { "text": "5", "isCorrect": false },
        { "text": "6", "isCorrect": false },
        { "text": "8", "isCorrect": false }
      ],
      "order": 8
    },
    {
      "text": "What is the square root of 64?",
      "options": [
        { "text": "8", "isCorrect": true },
        { "text": "6", "isCorrect": false },
        { "text": "10", "isCorrect": false },
        { "text": "7", "isCorrect": false }
      ],
      "order": 9
    },
    {
      "text": "Who painted the Mona Lisa?",
      "options": [
        { "text": "Leonardo da Vinci", "isCorrect": true },
        { "text": "Pablo Picasso", "isCorrect": false },
        { "text": "Vincent van Gogh", "isCorrect": false },
        { "text": "Claude Monet", "isCorrect": false }
      ],
      "order": 10
    }
  ]
  

  await Question.deleteMany();
  await Question.insertMany(questions);
  console.log('Questions seeded');
  mongoose.connection.close();
};

seedQuestions();