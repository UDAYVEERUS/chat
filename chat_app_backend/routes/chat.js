const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const authMiddleware = require('../middleware/auth');

// Send message
router.post('/send', authMiddleware, chatController.sendMessage);

// Get messages
router.get('/messages', authMiddleware, chatController.getMessages);

module.exports = router;
