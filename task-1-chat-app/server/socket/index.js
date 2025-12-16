const Message = require('../models/Message');
const User = require('../models/User');

// Store online users with their socket IDs
const onlineUsers = new Map();

/**
 * Socket.IO Event Handlers
 * Manages real-time chat functionality
 */
const socketHandler = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    /**
     * User joins - store socket ID and mark online
     */
    socket.on('user:join', async (userId) => {
      try {
        onlineUsers.set(userId, socket.id);
        socket.userId = userId;

        // Update user status in database
        await User.findByIdAndUpdate(userId, {
          status: 'online',
          lastSeen: Date.now()
        });

        // Notify all users about online status
        io.emit('user:status', {
          userId,
          status: 'online'
        });

        console.log(`User ${userId} is now online`);
      } catch (error) {
        console.error('User join error:', error);
      }
    });

    /**
     * Send message - save to DB and emit to recipient
     */
    socket.on('message:send', async (data) => {
      try {
        const { senderId, recipientId, content } = data;

        // Save message to database
        const message = new Message({
          sender: senderId,
          recipient: recipientId,
          content
        });

        await message.save();
        await message.populate([
          { path: 'sender', select: 'username avatar' },
          { path: 'recipient', select: 'username avatar' }
        ]);

        // Send to recipient if online
        const recipientSocketId = onlineUsers.get(recipientId);
        if (recipientSocketId) {
          io.to(recipientSocketId).emit('message:receive', message);
        }

        // Send back to sender for confirmation
        socket.emit('message:sent', message);

        console.log(`Message from ${senderId} to ${recipientId}`);
      } catch (error) {
        console.error('Send message error:', error);
        socket.emit('message:error', { message: 'Failed to send message' });
      }
    });

    /**
     * Typing indicator
     */
    socket.on('typing:start', (data) => {
      const { recipientId, senderId } = data;
      const recipientSocketId = onlineUsers.get(recipientId);
      
      if (recipientSocketId) {
        io.to(recipientSocketId).emit('typing:show', { userId: senderId });
      }
    });

    socket.on('typing:stop', (data) => {
      const { recipientId, senderId } = data;
      const recipientSocketId = onlineUsers.get(recipientId);
      
      if (recipientSocketId) {
        io.to(recipientSocketId).emit('typing:hide', { userId: senderId });
      }
    });

    /**
     * Mark messages as read
     */
    socket.on('message:read', async (data) => {
      try {
        const { messageIds, senderId } = data;

        await Message.updateMany(
          { _id: { $in: messageIds } },
          { read: true, readAt: Date.now() }
        );

        // Notify sender that messages were read
        const senderSocketId = onlineUsers.get(senderId);
        if (senderSocketId) {
          io.to(senderSocketId).emit('message:read:confirm', { messageIds });
        }
      } catch (error) {
        console.error('Mark read error:', error);
      }
    });

    /**
     * Disconnect - mark user offline
     */
    socket.on('disconnect', async () => {
      try {
        if (socket.userId) {
          onlineUsers.delete(socket.userId);

          // Update user status in database
          await User.findByIdAndUpdate(socket.userId, {
            status: 'offline',
            lastSeen: Date.now()
          });

          // Notify all users about offline status
          io.emit('user:status', {
            userId: socket.userId,
            status: 'offline'
          });

          console.log(`User ${socket.userId} is now offline`);
        }
      } catch (error) {
        console.error('Disconnect error:', error);
      }
    });
  });
};

module.exports = socketHandler;
