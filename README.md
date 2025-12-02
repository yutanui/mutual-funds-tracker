# Mutual Funds Investment Tracker

A full-stack application to track and manage mutual funds investments with real-time NAV tracking and portfolio analysis.

## Tech Stack

### Backend
- NestJS + TypeScript
- PostgreSQL + TypeORM
- Docker Compose
- Swagger API Documentation

### Frontend
- React + TypeScript (Vite)
- Material-UI (Dark Theme)
- Context API
- React Hook Form + Zod
- Responsive Mobile Design

## Project Structure

```
mutual-funds-tracker/
├── backend/          # NestJS API server
├── frontend/         # React application
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0
- Docker & Docker Compose

### Installation

1. Install root dependencies:
```bash
npm install
```

2. Install backend dependencies:
```bash
npm run install:backend
```

3. Install frontend dependencies:
```bash
npm run install:frontend
```

Or install all at once:
```bash
npm run install:all
```

### Running the Application

1. Start PostgreSQL database:
```bash
npm run docker:up
```

2. Run both backend and frontend in development mode:
```bash
npm run dev
```

Or run them separately:
```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend
npm run dev:frontend
```

### Available Scripts

- `npm run install:all` - Install all dependencies
- `npm run dev` - Run both backend and frontend
- `npm run build` - Build both applications
- `npm run docker:up` - Start PostgreSQL container
- `npm run docker:down` - Stop PostgreSQL container
- `npm run docker:logs` - View database logs

## Features

- ✅ Track multiple mutual funds with NAV data
- ✅ Support for 5 fund types: Equity, Fixed Income, Gold, REIT, Money
- ✅ Automatic percentage calculation (Current vs Max NAV)
- ✅ Portfolio summary dashboard
- ✅ Type-based breakdown with percentages
- ✅ Dark theme UI
- ✅ Fully responsive mobile design
- ✅ RESTful API with Swagger documentation

## Environment Variables

See `.env.example` files in backend and frontend directories for required configuration.

## API Documentation

Once the backend is running, access Swagger documentation at:
```
http://localhost:3000/api
```

## License

MIT
