import { useState, useEffect, useRef } from 'react';
import { userAPI } from '../../services/api';
import { getSocket } from '../../services/socket';

import './ChatWindow.css';

const ChatWindow = ({ recipient, currentUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  const getConversationId = (id1, id2) => {
    return [id1, id2].sort().join('_');
  };

  useEffect(() => {
    const conversationId = getConversationId(currentUser._id, recipient._id);
    loadMessages();
    
    const socket = getSocket();
    if (socket) {
      // Join room for this specific conversation
      socket.emit('conversation:join', conversationId);

      socket.on('message:receive', handleNewMessage);

      socket.on('message:sent', handleNewMessage);
      socket.on('typing:show', ({ userId }) => {
        if (userId === recipient._id) setTyping(true);
      });
      socket.on('typing:hide', ({ userId }) => {
        if (userId === recipient._id) setTyping(false);
      });
    }

    return () => {
      if (socket) {
        socket.off('message:receive');
        socket.off('message:sent');
        socket.off('typing:show');
        socket.off('typing:hide');
      }
    };
  }, [recipient]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadMessages = async () => {
    try {
      const response = await userAPI.getMessages(recipient._id);
      setMessages(response.data);
    } catch (error) {
      console.error('Failed to load messages:', error);
    }
  };

  const handleNewMessage = (message) => {
    if (
      (message.sender._id === currentUser._id && message.recipient._id === recipient._id) ||
      (message.sender._id === recipient._id && message.recipient._id === currentUser._id)
    ) {
      setMessages(prev => [...prev, message]);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const socket = getSocket();
    const conversationId = getConversationId(currentUser._id, recipient._id);
    
    socket.emit('message:send', {
      senderId: currentUser._id,
      recipientId: recipient._id,
      conversationId: conversationId,
      content: newMessage
    });


    setNewMessage('');
    stopTyping();
  };

  const handleTyping = (e) => {
    setNewMessage(e.target.value);
    
    const socket = getSocket();
    const conversationId = getConversationId(currentUser._id, recipient._id);

    socket.emit('typing:start', {
      senderId: currentUser._id,
      recipientId: recipient._id,
      conversationId: conversationId,
      username: currentUser.username
    });


    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(stopTyping, 1000);
  };

  const stopTyping = () => {
    const socket = getSocket();
    const conversationId = getConversationId(currentUser._id, recipient._id);

    socket.emit('typing:stop', {
      senderId: currentUser._id,
      recipientId: recipient._id,
      conversationId: conversationId
    });
  };


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <img src={recipient.avatar} alt={recipient.username} className="header-avatar" />
        <div>
          <h3>{recipient.username}</h3>
          {typing && <p className="typing-indicator">typing...</p>}
        </div>
      </div>

      <div className="messages-container">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className={`message ${msg.sender._id === currentUser._id ? 'sent' : 'received'}`}
          >
            <div className="message-content">
              <p>{msg.content}</p>
              <span className="message-time">{formatTime(msg.createdAt)}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="message-input-form">
        <input
          type="text"
          value={newMessage}
          onChange={handleTyping}
          placeholder="Type a message..."
          className="message-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;
