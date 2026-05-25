# Note-Taking App

A MERN stack note-taking application with rate limiting and modern UI.

## Features

- Create, read, update, and delete notes
- Modern React frontend with Tailwind CSS and DaisyUI
- Express.js backend with MongoDB
- Rate limiting with Upstash Redis
- Responsive design

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Upstash Redis account (for rate limiting)

## Setup Instructions

### 1. Install Dependencies

```bash
# Install all dependencies (root, backend, and frontend)
npm run install:all
```

### 2. Environment Configuration

#### Backend Environment
Copy `backend/env.example` to `backend/.env` and update the values:

```bash
cp backend/env.example backend/.env
```

Update the following values in `backend/.env`:
- `MONGO_URI`: Your MongoDB connection string
- `UPSTASH_REDIS_REST_URL`: Your Upstash Redis REST URL
- `UPSTASH_REDIS_REST_TOKEN`: Your Upstash Redis REST token

#### Frontend Environment
Copy `frontend/env.example` to `frontend/.env`:

```bash
cp frontend/env.example frontend/.env
```

The frontend environment is already configured for local development.

### 3. Database Setup

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Use `MONGO_URI=mongodb://localhost:27017/note-taking-app` in your `.env`

#### Option B: MongoDB Atlas
1. Create a MongoDB Atlas account
2. Create a cluster
3. Get your connection string
4. Use the Atlas connection string in your `.env`

### 4. Upstash Redis Setup (for Rate Limiting)

1. Go to [Upstash Console](https://console.upstash.com/)
2. Create a new Redis database
3. Copy the REST URL and REST token
4. Add them to your `backend/.env` file

### 5. Running the Application

#### Development Mode (both frontend and backend)
```bash
npm run dev
```

#### Run Backend Only
```bash
npm run dev:backend
```

#### Run Frontend Only
```bash
npm run dev:frontend
```

#### Production Build
```bash
npm run build
npm start
```

## Project Structure

```
├── backend/                 # Express.js backend
│   ├── src/
│   │   ├── config/         # Database and Redis configuration
│   │   ├── controller/     # Route controllers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── server.js       # Main server file
│   └── package.json
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── lib/           # API configuration
│   │   ├── pages/         # Page components
│   │   └── App.jsx        # Main App component
│   └── package.json
└── package.json           # Root package.json with scripts
```

## API Endpoints

- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a new note
- `GET /api/notes/:id` - Get a specific note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## Technologies Used

### Frontend
- React 19
- Vite
- Tailwind CSS
- DaisyUI
- Axios
- React Router
- Lucide React (icons)

### Backend
- Express.js
- MongoDB with Mongoose
- Upstash Redis (rate limiting)
- CORS
- dotenv

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running locally or Atlas connection string is correct
   - Check if `MONGO_URI` is properly set in `.env`

2. **Upstash Redis Error**
   - Verify your Upstash credentials are correct
   - Check if the Redis database is active

3. **Port Already in Use**
   - Backend runs on port 5000 by default
   - Frontend runs on port 5173 by default
   - Change ports in `.env` files if needed

4. **CORS Issues**
   - Ensure frontend URL is correctly configured
   - Check if backend CORS is properly set up

## Development Notes

- The application uses ES modules (`"type": "module"`)
- Rate limiting is set to 5 requests per 20 seconds per IP
- Frontend is configured to run on `0.0.0.0` for Docker compatibility
- Hot reload is enabled for both frontend and backend in development mode
