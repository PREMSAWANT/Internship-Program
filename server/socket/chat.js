const Message = require('../models/Message');

/**
 * Socket.IO Chat Namespace Handler
 * Handles real-time chat functionality
 */
module.exports = (io) => {
  const chatNamespace = io.of('/chat');

  chatNamespace.on('connection', (socket) => {
    console.log(`[Chat] User connected: ${socket.id}`);

    // User joins chat
    socket.on('user:online', async (userId) => {
      socket.userId = userId;
      socket.join(`user:${userId}`);
      socket.broadcast.emit('user:status', { userId, status: 'online' });
    });

    // Join conversation room
    socket.on('conversation:join', (conversationId) => {
      socket.join(`conversation:${conversationId}`);
      console.log(`[Chat] User ${socket.userId} joined conversation ${conversationId}`);
    });

    // Send message
    socket.on('message:send', async (data) => {
      try {
        const { conversationId, senderId, receiverId, content } = data;

        // Save message to database
        const message = new Message({
          sender: senderId,
          recipient: receiverId,
          content,
          timestamp: new Date()
        });
        await message.save();

        // Emit to conversation room
        chatNamespace.to(`conversation:${conversationId}`).emit('message:receive', {
          ...message.toJSON(),
          _id: message._id
        });

      } catch (error) {
        console.error('[Chat] Error sending message:', error);
        socket.emit('message:error', { error: 'Failed to send message' });
      }
    });

    // Typing indicator
    socket.on('typing:start', (data) => {
      socket.to(`conversation:${data.conversationId}`).emit('typing:show', {
        userId: socket.userId,
        username: data.username
      });
    });

    socket.on('typing:stop', (data) => {
      socket.to(`conversation:${data.conversationId}`).emit('typing:hide', {
        userId: socket.userId
      });
    });

    // Disconnect
    socket.on('disconnect', () => {
      if (socket.userId) {
        socket.broadcast.emit('user:status', { userId: socket.userId, status: 'offline' });
      }
      console.log(`[Chat] User disconnected: ${socket.id}`);
    });
  });
};
