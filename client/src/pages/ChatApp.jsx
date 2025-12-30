import { AuthProvider, useAuth } from '../contexts/AuthContext';
import Auth from '../components/chat/Auth';
import Chat from '../components/chat/Chat';
import { Link } from 'react-router-dom';
import '../components/chat/Auth.css';
import '../components/chat/Chat.css';
import '../components/chat/ChatWindow.css';
import './ChatApp.css';

function ChatAppContent() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return user ? <Chat /> : <Auth />;
}

function ChatApp() {
  return (
    <div className="chat-app-page">
      <Link to="/" className="back-to-home">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span>Back to Portfolio</span>
      </Link>
      <AuthProvider>
        <ChatAppContent />
      </AuthProvider>
    </div>
  );
}

export default ChatApp;
