import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getCollabSocket } from '../services/socket';
import './Collab.css';

function Collab() {


  const [username, setUsername] = useState('');
  const [joined, setJoined] = useState(false);
  const [content, setContent] = useState('');
  const [users, setUsers] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    if (joined) {
      socketRef.current = getCollabSocket();
      
      socketRef.current.emit('user:join', username);

      
      socketRef.current.on('document:init', (initialContent) => {
        setContent(initialContent);
      });
      
      socketRef.current.on('content:sync', (newContent) => {
        setContent(newContent);
      });
      
      socketRef.current.on('users:update', (userList) => {
        setUsers(userList);
      });

      return () => {
        socketRef.current.disconnect();
      };
    }
  }, [joined, username]);

  const handleJoin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setJoined(true);
    }
  };

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    
    if (socketRef.current) {
      socketRef.current.emit('content:update', { content: newContent, username });
    }
  };

  if (!joined) {
    return (
      <div className="join-screen">
        <Link to="/" className="back-to-home">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Portfolio</span>
        </Link>
        <div className="join-card">
          <h1>📝 Real-Time Collaboration</h1>
          <p>Enter your name to start collaborating</p>
          <form onSubmit={handleJoin}>
            <input
              type="text"
              placeholder="Your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="name-input"
            />
            <button type="submit" className="join-button">Join Session</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Link to="/" className="back-to-home">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Portfolio</span>
      </Link>
      <header className="app-header">
        <h1>📝 Real-Time Collaboration Tool</h1>
        <div className="user-info">
          <span className="username">👤 {username}</span>
          <div className="active-users">
            <span>{users.length} active user{users.length !== 1 ? 's' : ''}</span>
            <div className="users-list">
              {users.map((user, idx) => (
                <span key={idx} className="user-badge">{user}</span>
              ))}
            </div>
          </div>
        </div>
      </header>
      
      <main className="editor-container">
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Start typing... Your changes will sync in real-time with all connected users."
          className="editor-textarea"
        />
      </main>
      
      <footer className="app-footer">
        <p>✨ Changes are synced automatically • All users see updates in real-time</p>
      </footer>
    </div>
  );
}

export default Collab;
