import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000';

/**
 * Socket.IO client instance
 */
let socket = null;

/**
 * Initialize socket connection
 */
export const initSocket = (userId) => {
  if (!socket) {
    socket = io(SOCKET_URL, {
      autoConnect: false
    });
  }
  
  socket.connect();
  socket.emit('user:join', userId);
  
  return socket;
};

/**
 * Get socket instance
 */
export const getSocket = () => socket;

/**
 * Disconnect socket
 */
export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

export default { initSocket, getSocket, disconnectSocket };
