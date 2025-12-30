# 🚀 Internship Portfolio - Unified Monorepo

[![MERN Stack](https://img.shields.io/badge/MERN-Fullstack-blue?style=for-the-badge&logo=mongodb)](https://mongodb.com)
[![Socket.IO](https://img.shields.io/badge/RealTime-Socket.io-green?style=for-the-badge&logo=socketdotio)](https://socket.io)

A comprehensive, production-ready monorepo showcasing four core internship projects integrated into a single, high-performance ecosystem. This platform demonstrates expertise in real-time communication, scalable architecture, and premium UI/UX design.

---

## 🌟 Featured Projects

| Project | Description | Key Technologies |
| :--- | :--- | :--- |
| **01. Real-Time Chat** | Secure MERN chat app with instant messaging & status tracking. | Socket.IO, JWT, bcrypt, MongoDB |
| **02. Weather App** | 3D-styled weather platform with intelligent data caching. | React, OpenWeatherMap API, Context API |
| **03. Collab Tool** | Multi-user real-time collaborative text editor with presence detection. | WebSockets, Node.js, CSS Grid |
| **04. Chrome Extension** | V3 Productivity tracker for automated website time analysis. | Manifest V3, Storage API, JavaScript |

---

## 🏗️ Technical Architecture

This project leverages a **Monorepo** structure for unified development and streamlined deployment.

### Key Innovations:
- **⚡ Performance:** Route-based Code Splitting (`React.lazy`) & `Suspense` for instant loading.
- **🛡️ Security:** Integrated `Helmet.js`, `Express-Rate-Limit`, and strict environment validation.
- **🔄 Scalability:** Shared Socket.IO namespaces (`/chat`, `/collab`) for resource efficiency.
- **🛠️ DX (Dev Experience):** Automated setup scripts and a unified Vite proxy for seamless local development.

---

## � System Structure

```
Internship-Program/
├── client/                 # Unified Vite/React frontend
│   ├── src/pages/          # Optimized Lazy-Loaded Pages
│   └── src/services/       # Centralized API & Socket logic
├── server/                 # Express Backend (Unified API & Sockets)
│   ├── socket/             # Namespace-based socket handlers
│   └── routes/             # Protected API endpoints
├── extension/              # Chrome Extension Source (V3)
├── scripts/                # Utility scripts (Setup, Migration)
└── README.md

```

---

## � Installation & Setup

### 1. Prerequisite
Ensure you have [Node.js](https://nodejs.org/) installed (v16+ recommended).

### 2. Local Setup
```bash
# Clone the repository
git clone https://github.com/PREMSAWANT/Internship-Program.git
cd Internship-Program

# Install all dependencies (Monorepo Workspaces)
npm install

# Automated Environment Setup
# This will create your local .env files from templates
npm run setup
```

### 3. Add Your Keys
Update the generated `.env` files:
- **`server/.env`**: Add your `MONGODB_URI`.
- **`client/.env`**: Add your `VITE_WEATHER_API_KEY`.

### 4. Launch Development
```bash
# Start both Backend and Frontend concurrently
npm run dev
```
- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:5000



## � Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launch Backend and Frontend in development mode. |
| `npm run setup` | Automatically generate .env files from templates. |
| `npm run build` | Build the entire monorepo for production. |
| `npm run install:all` | Force install dependencies for all workspaces. |

---

## �‍💻 Author

**Prem Sawant**
- **GitHub:** [@PREMSAWANT](https://github.com/PREMSAWANT)
- **LinkedIn:** [Prem Sawant](https://linkedin.com/in/premsawant)
- **Email:** premsawant600@gmail.com

---

## 📄 License & Safety
This project is for educational and evaluation purposes. **Important:** Real secret keys have been removed from the repository. Ensure you use the provided `.env.example` templates for your own deployment.

---
*Built with ❤️ by Prem Sawant | 2025 Internship Program*

