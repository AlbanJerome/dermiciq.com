# Dermiciq Technologies

## Overview

Dermiciq Technologies is a personalized skincare intelligence SaaS platform that provides context-aware ingredient analysis for users with sensitive skin conditions like eczema, rosacea, and contact dermatitis. The platform differentiates itself from binary "safe vs. toxic" ingredient checkers by offering personalized, biology-aware analysis.

The application follows a no-human-touch SaaS model designed for automated conversion, where the marketing website acts as a high-trust funnel directing users into the authenticated app experience. The core product is a "Mapper Engine" that provides personalized skincare ingredient analysis.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Routing**: Wouter for client-side routing with protected routes for authenticated sections
- **State Management**: TanStack React Query for server state and data fetching
- **Styling**: Tailwind CSS with custom design tokens following brand guidelines (turquoise/teal color palette)
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Theme Support**: Light/dark mode with CSS custom properties

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints under `/api/` prefix
- **Authentication**: Replit Auth integration using OpenID Connect with session-based authentication
- **Session Storage**: PostgreSQL-backed sessions via connect-pg-simple

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts` with models in `shared/models/`
- **Key Tables**: Users (auth), Sessions (auth), Contact Submissions
- **Migrations**: Drizzle Kit with migrations output to `/migrations`

### Authentication Flow
- Replit Auth provides OAuth-based authentication
- Protected routes redirect unauthenticated users to login
- User data stored in PostgreSQL users table
- Session persistence with 1-week TTL

### Build System
- Development: Vite dev server with HMR
- Production: esbuild bundles server code, Vite builds client assets
- Output: `dist/` directory with `public/` for static assets and `index.cjs` for server

## External Dependencies

### Third-Party Services
- **Formspree**: Contact form submissions proxied through `/api/contact` endpoint (https://formspree.io/f/mbdlqdow)
- **Replit Auth**: OAuth provider for user authentication via OpenID Connect

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Required Tables**: sessions, users (mandatory for Replit Auth)

### Key NPM Packages
- `drizzle-orm` / `drizzle-kit`: Database ORM and migrations
- `@tanstack/react-query`: Data fetching and caching
- `openid-client`: OAuth/OIDC client for Replit Auth
- `express-session` / `connect-pg-simple`: Session management
- `passport`: Authentication middleware
- Radix UI components: Accessible UI primitives