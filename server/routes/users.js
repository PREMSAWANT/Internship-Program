const express = require('express');
const User = require('../models/User');
const Message = require('../models/Message');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

/**
 * @route   GET /api/users
 * @desc    Get all users except current user
 * @access  Private
 */
router.get('/', authMiddleware, async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.userId } })
      .select('-password')
      .sort({ status: -1, lastSeen: -1 });

    res.json(users);
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ message: 'Server error fetching users' });
  }
});

/**
 * @route   GET /api/users/:userId/messages
 * @desc    Get message history with a specific user
 * @access  Private
 */
router.get('/:userId/messages', authMiddleware, async (req, res) => {
  try {
    const { userId } = req.params;

    const messages = await Message.find({
      $or: [
        { sender: req.userId, recipient: userId },
        { sender: userId, recipient: req.userId }
      ]
    })
      .populate('sender', 'username avatar')
      .populate('recipient', 'username avatar')
      .sort({ createdAt: 1 })
      .limit(100);

    res.json(messages);
  } catch (error) {
    console.error('Get messages error:', error);
    res.status(500).json({ message: 'Server error fetching messages' });
  }
});

module.exports = router;
