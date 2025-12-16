# Real-Time Chat Application (MERN + Socket.IO)

A full-stack real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO for real-time bidirectional communication.

![Stack](https://img.shields.io/badge/Stack-MERN-green) ![Socket.IO](https://img.shields.io/badge/Socket.IO-Real--time-blue)

## 🌟 Features

### Authentication
- JWT-based secure authentication
- User registration and login
- Password encryption with bcrypt
- Token-based session management

### Real-Time Messaging
- One-to-one instant messaging
- Message persistence in MongoDB
- Real-time message delivery
- Message timestamps
- Read receipts

### User Experience
- Online/offline status indicators
- Typing indicators
- Auto-scroll to latest message
- User list with online status
- Message history retrieval
- Responsive UI design

## 🚀 Tech Stack

### Backend
- **Node.js** + **Express** - Server framework
- **MongoDB** + **Mongoose** - Database
- **Socket.IO** - Real-time communication
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### Frontend
- **React 18** - UI framework
- **Socket.IO Client** - Real-time client
- **Axios** - HTTP client
- **React Router** - Navigation

## 📋 Prerequisites

- Node.js (v16+)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## 🛠️ Installation & Setup

### 1. Clone Repository
```bash
cd task-1-chat-app
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/chat-app
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/chat-app
JWT_SECRET=your_very_secure_random_secret_key_here
CLIENT_URL=http://localhost:5173
```

Start backend server:
```bash
npm run dev
```

Server will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd ../client

# NOTE: Frontend implementation is in progress
# The backend is fully functional and ready for frontend integration
```

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users (authenticated) |
| GET | `/api/users/:userId/messages` | Get message history |

## 🔌 Socket.IO Events

### Client → Server
- `user:join` - User connects and goes online
- `message:send` - Send a message
- `typing:start` - Start typing indicator
- `typing:stop` - Stop typing indicator
- `message:read` - Mark messages as read

### Server → Client
- `user:status` - User online/offline status
- `message:receive` - Receive new message
- `message:sent` - Message sent confirmation
- `typing:show` - Show typing indicator
- `typing:hide` - Hide typing indicator
- `message:read:confirm` - Read receipt confirmation

## 🗂️ Project Structure

```
task-1-chat-app/
├── server/
│   ├── models/
│   │   ├── User.js          # User model with authentication
│   │   └── Message.js       # Message model
│   ├── routes/
│   │   ├── auth.js          # Auth endpoints (register/login)
│   │   └── users.js         # User endpoints
│   ├── middleware/
│   │   └── auth.js          # JWT verification middleware
│   ├── socket/
│   │   └── index.js         # Socket.IO event handlers
│   ├── server.js            # Main server file
│   ├── package.json
│   └── .env.example
└── client/                  # [Frontend in progress]
    ├── src/
    │   ├── components/      # React components
    │   ├── services/        # API and Socket services
    │   └── App.jsx
    └── package.json
```

## 🧪 Testing the Backend

1. Start the server: `npm run dev`
2. Test registration:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"password123"}'
```

3. Test login:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## 🎯 Current Status

### ✅ Completed
- [x] Backend architecture
- [x] MongoDB models (User, Message)
- [x] JWT authentication system
- [x] REST API endpoints
- [x] Socket.IO server implementation
- [x] Real-time messaging logic
- [x] Typing indicators
- [x] Online status tracking
- [x] Message persistence

### 🚧 In Progress
- [/] React frontend components
- [ ] Chat UI design
- [ ] Socket.IO client integration
- [ ] Complete end-to-end testing

## 🔒 Security Features

- Password hashing with bcrypt (10 rounds)
- JWT tokens with expiration
- Protected routes with middleware
- Input validation
- CORS configuration
- Environment variable protection

## 👤 Author

**Prem Sawant**
- GitHub: [@PREMSAWANT](https://github.com/PREMSAWANT)

## 📝 Notes

This is a demonstration project built as part of an internship program to showcase:
- Full-stack development skills
- Real-time technologies (Socket.IO)
- RESTful API design
- MongoDB data modeling
- JWT authentication implementation
- WebSocket event handling

---

**Backend is production-ready!** Frontend development is continuing...
