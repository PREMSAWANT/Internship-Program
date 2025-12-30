import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_API_URL || '';


let chatSocket;
let collabSocket;

export const getSocket = () => {
  if (!chatSocket) {
    chatSocket = io(`${SOCKET_URL}/chat`, {
      auth: {
        token: localStorage.getItem('token')
      }
    });
    
    chatSocket.on('connect', () => {
      console.log('Connected to /chat namespace');
    });
  }
  return chatSocket;
};

export const getCollabSocket = () => {
  if (!collabSocket) {
    collabSocket = io(`${SOCKET_URL}/collab`);
    
    collabSocket.on('connect', () => {
      console.log('Connected to /collab namespace');
    });
  }
  return collabSocket;
};

export const disconnectAll = () => {
  if (chatSocket) chatSocket.disconnect();
  if (collabSocket) collabSocket.disconnect();
  chatSocket = null;
  collabSocket = null;
};

export const initSocket = (userId) => {
  const socket = getSocket();
  if (userId) {
    socket.emit('user:online', userId);
  }
  return socket;
};

export const disconnectSocket = () => {
  disconnectAll();
};
