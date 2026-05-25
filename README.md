# 📝 Note-Taking App

A modern, full-stack note-taking application built with the MERN stack, featuring a beautiful UI, rate limiting, and real-time capabilities.

![MERN Stack](https://img.shields.io/badge/MERN-Stack-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## ✨ Features

- 🚀 **Modern UI**: Beautiful, responsive design with Tailwind CSS and DaisyUI
- 📱 **Mobile-First**: Optimized for all device sizes
- 🔒 **Rate Limiting**: Built-in protection against abuse using Upstash Redis
- ⚡ **Fast Performance**: Vite-powered React frontend with hot reload
- 🗄️ **Persistent Storage**: MongoDB integration with Mongoose ODM
- 🔄 **Real-time Updates**: Instant note creation, editing, and deletion
- 🛡️ **Security**: CORS protection and input validation
- 🐳 **Docker Ready**: Containerized deployment options

## 🎯 Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-00C7B7?style=for-the-badge)](https://your-demo-link.com)

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (local or Atlas)
- **Upstash Redis** account (for rate limiting)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/note-taking-app.git
   cd note-taking-app
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   ```bash
   # Backend
   cp backend/env.example backend/.env
   
   # Frontend
   cp frontend/env.example frontend/.env
   ```

4. **Configure your `.env` files** (see [SETUP.md](./SETUP.md) for detailed instructions)

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
note-taking-app/
├── 📁 backend/                 # Express.js API server
│   ├── 📁 src/
│   │   ├── 📁 config/         # Database & Redis config
│   │   ├── 📁 controller/     # Business logic
│   │   ├── 📁 middleware/     # Custom middleware
│   │   ├── 📁 models/         # Mongoose schemas
│   │   ├── 📁 routes/         # API endpoints
│   │   └── 📄 server.js       # Main server file
│   ├── 📄 Dockerfile          # Backend container
│   └── 📄 docker-compose.yaml # Multi-service setup
├── 📁 frontend/               # React application
│   ├── 📁 src/
│   │   ├── 📁 components/     # Reusable UI components
│   │   ├── 📁 lib/           # API client & utilities
│   │   ├── 📁 pages/         # Page components
│   │   └── 📄 App.jsx        # Main app component
│   └── 📄 dockerfile         # Frontend container
└── 📄 package.json           # Root package with scripts
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes` | Retrieve all notes |
| `POST` | `/api/notes` | Create a new note |
| `GET` | `/api/notes/:id` | Get a specific note |
| `PUT` | `/api/notes/:id` | Update a note |
| `DELETE` | `/api/notes/:id` | Delete a note |

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Beautiful component library
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

### Backend
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Upstash Redis** - Rate limiting service
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

```bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up -d
```

### Manual Docker Build

```bash
# Backend
cd backend
docker build -t note-app-backend .
docker run -p 5000:5000 note-app-backend

# Frontend
cd frontend
docker build -t note-app-frontend .
docker run -p 3000:3000 note-app-frontend
```

## 📊 Performance Features

- ⚡ **Rate Limiting**: 5 requests per 20 seconds per IP
- 🔄 **Hot Reload**: Instant development feedback
- 📦 **Code Splitting**: Optimized bundle sizes
- 🎨 **CSS Optimization**: Purged unused styles
- 🚀 **Fast API**: Optimized database queries

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Express.js](https://expressjs.com/) - The web framework used
- [MongoDB](https://www.mongodb.com/) - The database used
- [Tailwind CSS](https://tailwindcss.com/) - The CSS framework used
- [Upstash](https://upstash.com/) - Redis service for rate limiting

## 📞 Support

If you have any questions or need help, please:

- 📧 Open an issue on GitHub
- 📖 Check the [SETUP.md](./SETUP.md) for detailed setup instructions
- 🔍 Look at the troubleshooting section in SETUP.md

---

<div align="center">
  <p>Made with ❤️ using the MERN stack</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>