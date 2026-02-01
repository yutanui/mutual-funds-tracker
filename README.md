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

### Backend Environment Variables

Copy the example file and configure:
```bash
cp backend/.env.example backend/.env
```

Required variables:
- `PORT` - Backend server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)
- `FRONTEND_URL` - Frontend URL for CORS (default: http://localhost:5173)
- `DB_HOST` - PostgreSQL host (default: localhost)
- `DB_PORT` - PostgreSQL port (default: 5432)
- `DB_USERNAME` - Database username (default: postgres)
- `DB_PASSWORD` - Database password (default: postgres)
- `DB_DATABASE` - Database name (default: mutual_funds_tracker)

## Database Setup

The project uses PostgreSQL via Docker Compose.

### Starting the Database

```bash
pnpm run docker:up
```

This will:
- Pull PostgreSQL 16 Alpine image
- Create a container named `mutual-funds-postgres`
- Expose port 5432
- Create a persistent volume for data
- Set up health checks

### Stopping the Database

```bash
pnpm run docker:down
```

### Viewing Database Logs

```bash
pnpm run docker:logs
```

### Database Connection Details

When running via Docker Compose:
- Host: `localhost`
- Port: `5432`
- Database: `mutual_funds_tracker`
- Username: `postgres`
- Password: `postgres`

**Note:** The database credentials above are for development only. Use strong passwords in production.

## API Documentation

Once the backend is running, access Swagger documentation at:
```
http://localhost:3000/api
```

## License

MIT
