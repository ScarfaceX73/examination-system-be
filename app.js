const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const questionRoutes = require('./routes/questionRoutes');
const userRoutes = require('./routes/userRoutes');
const answerRoutes = require('./routes/answerRoutes');
const errorHandler = require('./middleware/errorHandler');

require('dotenv').config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/questions', questionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/answers', answerRoutes);

app.use(errorHandler);

module.exports = app;