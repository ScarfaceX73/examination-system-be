const express = require('express');
const { saveAttempt, getUserAttempts } = require('../controllers/answerController');
const router = express.Router();

router.post('/attempt', saveAttempt);
router.get('/user/:userId', getUserAttempts);

module.exports = router;