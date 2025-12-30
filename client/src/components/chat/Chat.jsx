import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { userAPI } from '../../services/api';
import { getSocket } from '../../services/socket';

import ChatWindow from './ChatWindow';
import './Chat.css';

const Chat = () => {
  const { user, logout } = useAuth();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState(new Set());

  useEffect(() => {
    loadUsers();
    
    const socket = getSocket();
    if (socket) {
      socket.on('user:status', ({ userId, status }) => {
        setOnlineUsers(prev => {
          const updated = new Set(prev);
          if (status === 'online') {
            updated.add(userId);
          } else {
            updated.delete(userId);
          }
          return updated;
        });
      });
    }

    return () => {
      if (socket) {
        socket.off('user:status');
      }
    };
  }, []);

  const loadUsers = async () => {
    try {
      const response = await userAPI.getAllUsers();
      setUsers(response.data);

      response.data.forEach(u => {
        if (u.status === 'online') {
          setOnlineUsers(prev => new Set([...prev, u._id]));
        }
      });
    } catch (error) {
      console.error('Failed to load users:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-sidebar">
        <div className="sidebar-header">
          <div className="user-info">
            <img src={user.avatar} alt={user.username} className="user-avatar" />
            <div>
              <h3>{user.username}</h3>
              <span className="online-badge">Online</span>
            </div>
          </div>
          <button onClick={logout} className="logout-button">Logout</button>
        </div>

        <div className="users-list">
          <h4 className="list-title">Messages</h4>
          {users.map(u => (
            <div
              key={u._id}
              className={`user-item ${selectedUser?._id === u._id ? 'active' : ''}`}
              onClick={() => setSelectedUser(u)}
            >
              <div className="user-avatar-wrapper">
                <img src={u.avatar} alt={u.username} className="user-avatar-small" />
                {onlineUsers.has(u._id) && <span className="status-dot online"></span>}
                {!onlineUsers.has(u._id) && <span className="status-dot offline"></span>}
              </div>
              <div className="user-details">
                <h5>{u.username}</h5>
                <p className="user-status">{onlineUsers.has(u._id) ? 'Online' : 'Offline'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-main">
        {selectedUser ? (
          <ChatWindow recipient={selectedUser} currentUser={user} />
        ) : (
          <div className="no-chat">
            <h2>💬</h2>
            <p>Select a user to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
