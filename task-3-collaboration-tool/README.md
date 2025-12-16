# Real-Time Collaboration Tool

A real-time shared text editor that allows multiple users to collaborate simultaneously using WebSocket technology.

![WebSocket](https://img.shields.io/badge/WebSocket-Real--Time-green) ![Socket.IO](https://img.shields.io/badge/Socket.IO-4.0-blue)

## 🌟 Features

- **Real-Time Synchronization**: Changes appear instantly for all connected users
- **Multi-User Support**: Multiple users can edit simultaneously
- **Active User Tracking**: See who's currently online
- **Conflict-Free Updates**: Smooth synchronization without conflicts
- **Simple & Clean UI**: Focus on collaboration, not complexity
- **No Login Required**: Just enter your name and start collaborating

## 🚀 Tech Stack

### Backend
- **Node.js** + **Express**
- **Socket.IO** for real-time WebSocket communication
- In-memory document storage

### Frontend
- **React 18** with Vite
- **Socket.IO Client**
- Real-time event handlers

## 📋 Setup & Installation

### 1. Backend Setup

```bash
cd task-3-collaboration-tool/server
npm install
npm run dev
```

Server will run on `http://localhost:5001`

### 2. Frontend Setup

```bash
cd task-3-collaboration-tool/client
npm install
npm run dev
```

Client will run on `http://localhost:5173`

## 🎮 Usage

1. Open the application in your browser
2. Enter your name and click "Join Session"
3. Start typing in the editor
4. Open the same URL in another browser/tab
5. Enter a different name and join
6. See real-time synchronization in action!

## 🔌 Socket.IO Events

### Client → Server
- `user:join` - User joins the collaboration session
- `content:update` - Document content changed
- `cursor:update` - Cursor position update (future enhancement)

### Server → Client
- `document:init` - Initial document content on join
- `content:sync` - Synchronized content update
- `users:update` - Active users list update

## 🗂️ Project Structure

```
task-3-collaboration-tool/
├── server/
│   ├── server.js         # Express + Socket.IO server
│   └── package.json
└── client/
    ├── src/
    │   ├── App.jsx       # Main collaboration interface
    │   └── App.css
    └── package.json
```

## 🧪 Testing Multi-User Collaboration

1. Start both server and client
2. Open `http://localhost:5173` in Browser 1
3. Join as "Alice"
4. Open `http://localhost:5173` in Browser 2 (or incognito)
5. Join as "Bob"
6. Type in either editor and watch real-time sync!

## 🎯 Key Features Demonstrated

✅ Real-time WebSocket communication  
✅ Conflict-free content synchronization  
✅ User presence detection  
✅ Graceful disconnect handling  
✅ Scalable architecture  

## 👤 Author

**Prem Sawant**  
GitHub: [@PREMSAWANT](https://github.com/PREMSAWANT)

---

**Note**: This is a demonstration project showcasing real-time collaboration technology for internship evaluation.
