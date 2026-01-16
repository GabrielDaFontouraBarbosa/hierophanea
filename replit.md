# Hierophanea - Mystic Arts Website

## Overview

Hierophanea is a mystical, spiritually-themed landing page website built with React and Express. The site features a dark, elegant design with sections for showcasing magical services (spells, readings, consultations), an about section, and a contact inquiry form. The visual aesthetic draws from deep purples, gold accents, and cream colors to create an ethereal, mystical atmosphere.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for parallax effects, smooth reveals, and hover states
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Framework**: Express.js running on Node.js
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful API with typed route definitions in shared module
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schemas shared between client and server via drizzle-zod

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/   # UI components including shadcn/ui
│       ├── pages/        # Page components (Home, 404)
│       ├── hooks/        # Custom React hooks
│       └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route definitions with Zod validation
└── migrations/       # Drizzle database migrations
```

### Design Patterns
- **Shared Types**: Database schema and API contracts defined once in `/shared` and used by both client and server
- **Type-Safe API**: Zod schemas validate input on both client (before sending) and server (on receipt)
- **Component Architecture**: Atomic design with reusable UI primitives from shadcn/ui

### Typography System
- **Headings**: Cinzel (serif) - mystical, elegant titles
- **Body Text**: Alice (serif) - readable body copy
- **UI Elements**: Lato (sans-serif) - clean interface text

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connected via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database operations with automatic schema synchronization via `db:push`

### Key NPM Packages
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for parallax and transitions
- **lucide-react**: Icon library for mystical-themed icons
- **connect-pg-simple**: PostgreSQL session storage (available for future auth)
- **zod**: Runtime type validation for API contracts

### Build & Development
- **Vite**: Frontend bundler with HMR
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string (required for database operations)