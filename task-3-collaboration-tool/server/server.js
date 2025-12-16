const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

app.use(cors());

// Store document content and connected users
let documentContent = '';
const activeUsers = new Map(); // userId -> username

/**
 * Socket.IO Real-Time Collaboration Handler
 */
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // User joins collaboration session
  socket.on('user:join', (username) => {
    activeUsers.set(socket.id, username);
    socket.emit('document:init', documentContent);
    io.emit('users:update', Array.from(activeUsers.values()));
    console.log(`${username} joined. Active users: ${activeUsers.size}`);
  });

  // Content update from user
  socket.on('content:update', ({ content, username }) => {
    documentContent = content;
    // Broadcast to all other users
    socket.broadcast.emit('content:sync', content);
  });

  // Cursor position update
  socket.on('cursor:update', ({ position, username }) => {
    socket.broadcast.emit('cursor:show', { position, username, socketId: socket.id });
  });

  // Disconnect
  socket.on('disconnect', () => {
    const username = activeUsers.get(socket.id);
    activeUsers.delete(socket.id);
    io.emit('users:update', Array.from(activeUsers.values()));
    console.log(`${username || 'User'} disconnected. Active users: ${activeUsers.size}`);
  });
});

app.get('/', (req, res) => {
  res.json({ message: 'Collaboration Server Running', activeUsers: activeUsers.size });
});

const PORT = 5001;
httpServer.listen(PORT, () => {
  console.log(`✓ Collaboration server running on port ${PORT}`);
});
