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

### Development Tools
- pnpm - Fast, disk space efficient package manager
- Biome - Fast linter and formatter for JavaScript/TypeScript
- Git - Version control

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
- pnpm >= 8.0.0
- Docker & Docker Compose

### Installation

1. Install pnpm globally (if not already installed):
```bash
npm install -g pnpm
```

2. Install all dependencies:
```bash
pnpm run install:all
```

Or install separately:
```bash
# Install root dependencies
pnpm install

# Install backend dependencies
pnpm run install:backend

# Install frontend dependencies
pnpm run install:frontend
```

### Running the Application

1. Start PostgreSQL database:
```bash
pnpm run docker:up
```

2. Run both backend and frontend in development mode:
```bash
pnpm run dev
```

Or run them separately:
```bash
# Terminal 1 - Backend
pnpm run dev:backend

# Terminal 2 - Frontend
pnpm run dev:frontend
```

### Available Scripts

**Development:**
- `pnpm run install:all` - Install all dependencies
- `pnpm run dev` - Run both backend and frontend
- `pnpm run build` - Build both applications

**Linting & Formatting (Biome):**
- `pnpm run lint` - Check for lint errors
- `pnpm run lint:fix` - Fix lint errors automatically
- `pnpm run format` - Check code formatting
- `pnpm run format:fix` - Format code automatically
- `pnpm run check` - Run both linting and formatting checks
- `pnpm run check:fix` - Fix both linting and formatting issues

**Docker:**
- `pnpm run docker:up` - Start PostgreSQL container
- `pnpm run docker:down` - Stop PostgreSQL container
- `pnpm run docker:logs` - View database logs

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
