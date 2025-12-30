/**
 * Socket.IO Collaboration Namespace Handler
 * Handles real-time collaborative editing
 */
module.exports = (io) => {
  const collabNamespace = io.of('/collab');
  
  // Store document content and active users in memory
  let documentContent = '';
  const activeUsers = new Map(); // socketId -> username

  collabNamespace.on('connection', (socket) => {
    console.log(`[Collab] User connected: ${socket.id}`);

    // User joins collaboration session
    socket.on('user:join', (username) => {
      activeUsers.set(socket.id, username);
      
      // Send current document state to new user
      socket.emit('document:init', documentContent);
      
      // Broadcast updated user list to all
      collabNamespace.emit('users:update', Array.from(activeUsers.values()));
      
      console.log(`[Collab] ${username} joined. Active users: ${activeUsers.size}`);
    });

    // Content update from user
    socket.on('content:update', ({ content, username }) => {
      documentContent = content;
      
      // Broadcast to all other users
      socket.broadcast.emit('content:sync', content);
    });

    // Cursor position update
    socket.on('cursor:update', ({ position, username }) => {
      socket.broadcast.emit('cursor:show', {
        position,
        username,
        socketId: socket.id
      });
    });

    // Disconnect
    socket.on('disconnect', () => {
      const username = activeUsers.get(socket.id);
      activeUsers.delete(socket.id);
      
      // Broadcast updated user list
      collabNamespace.emit('users:update', Array.from(activeUsers.values()));
      
      console.log(`[Collab] ${username || 'User'} disconnected. Active users: ${activeUsers.size}`);
    });
  });
};
