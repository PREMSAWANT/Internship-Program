# Internship Portfolio - Unified Monorepo

A production-ready unified portfolio showcasing 4 full-stack internship projects with a single command deployment.

**Author:** Prem Sawant  
**GitHub:** [@PREMSAWANT](https://github.com/PREMSAWANT)  
**Live Demo:** [Deploy to Vercel](#deployment)

---

## 🚀 Quick Start

```bash
# 1. Install all dependencies (workspaces included)
npm install

# 2. Automated setup (creates .env files)
npm run setup

# 3. Run development servers (backend + frontend)
npm run dev

# 4. Build for production
npm run build
```


**Access the application:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

---

## 📁 Project Structure

```
internship-portfolio/
├── client/                    # React Frontend (Vite)
│   ├── src/
│   │   ├── pages/            # Application pages
│   │   │   ├── Home.jsx      # Landing page
│   │   │   ├── ChatApp.jsx   # Real-time chat
│   │   │   ├── Weather.jsx   # Weather forecast
│   │   │   ├── Collab.jsx    # Collaborative editor
│   │   │   └── Extension.jsx # Extension info
│   │   ├── components/       # React components
│   │   ├── contexts/         # React contexts
│   │   ├── hooks/            # Custom hooks
│   │   └── services/         # API services
│   └── package.json
│
├── server/                    # Node.js Backend
│   ├── models/               # MongoDB models
│   ├── routes/               # Express routes
│   ├── socket/               # Socket.IO handlers
│   ├── middleware/           # Express middleware
│   ├── server.js             # Main server
│   └── package.json
│
├── extension/                 # Chrome Extension Source
│   └── manifest.json
│
├── package.json               # Root package
├── vercel.json               # Vercel config
└── README.md
```

---

## ✨ Features

### 1. Real-Time Chat Application
- Full-stack MERN authentication (JWT)
- Real-time messaging with Socket.IO
- Online/offline status tracking
- Typing indicators
- Message persistence

### 2. Weather Application
- Real-time weather data (OpenWeatherMap API)
- Search history with localStorage
- Responsive 3D-style cards
- Dark/light theme toggle

### 3. Real-Time Collaboration Tool
- Multi-user collaborative text editor
- Real-time synchronization
- User presence detection
- Conflict-free updates

### 4. Chrome Productivity Extension
- Automatic website time tracking
- Daily productivity statistics
- Dark mode UI
- Local data storage

---

## 🛠️ Tech Stack

- bcrypt

---

## ⚡ Performance & Scalability

- **NPM Workspaces:** Centralized dependency management for faster installs and shared packages.
- **Code Splitting:** React pages are lazy-loaded via `Suspense` to ensure fast initial page loads.
- **Vite Proxy:** Transparent local development API/Socket routing without CORS issues.
- **Intelligent Caching:** 5-minute Weather API cache to save tokens and improve UX.
- **Fail-Fast Backend:** Strict environment validation to catch configuration errors instantly.

---

## 🛠️ Tech Stack

### Frontend
- React 18 (Lazy Loaded)
- React Router DOM
- Vite
- Socket.IO Client
- Axios

### Backend
- Node.js & Express.js
- MongoDB & Mongoose
- Socket.IO (with namespaces)
- JWT Authentication
- bcrypt


### Real-time
- Socket.IO namespaces:
  - `/chat` - Real-time messaging
  - `/collab` - Collaborative editing

---

## 🔧 Environment Setup

### Backend (`server/.env`)

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
CLIENT_URL=http://localhost:5173
```

### Frontend (`client/.env`)

```env
VITE_API_URL=http://localhost:5000
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/PREMSAWANT/Internship-Program.git
cd Internship-Program

# Install all dependencies (root, server, client)
npm run install:all

# Set up environment variables
# 1. Copy server/.env.example to server/.env
# 2. Copy client/.env.example to client/.env
# 3. Add your MongoDB URI and API keys

# Run the application
npm run dev
```

---

## 🚢 Deployment

### Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects `vercel.json`

3. **Set Environment Variables:**
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `VITE_WEATHER_API_KEY`
   - `CLIENT_URL` (your Vercel URL)

4. **Deploy:**
   - Click "Deploy"
   - Get your live URL!

---

## 📝 Available Scripts

```bash
# Development
npm run dev              # Run both server and client
npm run dev:server       # Run only backend
npm run dev:client       # Run only frontend

# Installation
npm run install:all      # Install all dependencies

# Production
npm run build            # Build for production
npm start                # Start production server
```

---

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID

### Health
- `GET /api/health` - Server health check

---

## 🔌 Socket.IO Namespaces

### Chat Namespace (`/chat`)
- `user:online` - User comes online
- `conversation:join` - Join conversation room
- `message:send` - Send message
- `typing:start` - Start typing indicator
- `typing:stop` - Stop typing indicator

### Collaboration Namespace (`/collab`)
- `user:join` - Join collaboration session
- `content:update` - Update document content
- `cursor:update` - Update cursor position

---

## 📊 Project Statistics

- **Total Pages:** 5
- **Backend Routes:** 2 main routes (auth, users)
- **Socket.IO Namespaces:** 2 (/chat, /collab)
- **Components:** 15+
- **Tech Stack:** MERN + Socket.IO

---

## 🎯 Skills Demonstrated

- Full-stack development (MERN)
- Real-time communication (Socket.IO, WebSocket)
- RESTful API design
- Authentication & Authorization (JWT)
- Database modeling (MongoDB/Mongoose)
- Modern React (Hooks, Router, Context)
- Responsive UI/UX design
- Chrome Extension development
- Deployment & DevOps (Vercel)

---

## 📄 License

This project is created for educational and internship evaluation purposes.

---

## 📧 Contact

**Prem Sawant**  
GitHub: [@PREMSAWANT](https://github.com/PREMSAWANT)  
Email: premsawant600@gmail.com

---

## 🙏 Acknowledgments

- OpenWeatherMap API for weather data
- MongoDB Atlas for database hosting
- Vercel for deployment platform

---

*Last Updated: December 30, 2025*
