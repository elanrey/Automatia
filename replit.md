# AutomatIA - AI-Powered Process Automation Platform

## Overview

AutomatIA is a modern full-stack web application designed to showcase and provide AI-powered automation services for businesses. The platform focuses on eliminating manual tasks, implementing intelligent virtual assistants, and optimizing business processes through artificial intelligence integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query (TanStack Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact management
- **Middleware**: Custom logging and error handling

### Data Storage Solutions
- **Primary Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM for type-safe database operations
- **Development Storage**: In-memory storage implementation
- **Database Provider**: Neon Database (serverless PostgreSQL)

## Key Components

### Frontend Components
1. **Landing Page System**
   - Hero section with compelling value proposition
   - Services carousel showcasing automation solutions
   - Case studies demonstrating real-world success
   - Benefits section highlighting business value
   - Contact form for lead generation

2. **UI Component Library**
   - Comprehensive shadcn/ui implementation
   - Accessible components (Radix UI primitives)
   - Consistent design system with CSS variables
   - Dark/light theme support

3. **Responsive Design**
   - Mobile-first approach
   - Hamburger menu for mobile navigation
   - Smooth scrolling and section navigation

### Backend Components
1. **Contact Management API**
   - POST `/api/contact` - Create new contact submissions
   - GET `/api/contacts` - Retrieve all contacts (admin functionality)
   - Zod schema validation for data integrity

2. **Storage Abstraction**
   - Interface-based storage design (IStorage)
   - Memory storage for development
   - Database storage ready for production deployment

## Data Flow

1. **User Interaction**: Users navigate through the landing page sections
2. **Contact Submission**: Form data validated client-side with React Hook Form + Zod
3. **API Processing**: Server validates and stores contact information
4. **Response Handling**: Success/error feedback via toast notifications
5. **Admin Access**: Administrative endpoints for contact management

## External Dependencies

### Core Libraries
- **React Ecosystem**: React, React DOM, React Query
- **UI Components**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority
- **Forms**: React Hook Form, Hookform resolvers
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod for runtime type checking

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESBuild for production bundling
- **Development**: Hot module replacement and error overlay

## Deployment Strategy

### Development Environment
- Vite development server with HMR
- In-memory storage for rapid prototyping
- Replit-specific plugins for cloud development

### Production Build Process
1. **Frontend**: Vite builds optimized React bundle
2. **Backend**: ESBuild bundles Node.js server
3. **Database**: Drizzle migrations for schema deployment
4. **Static Assets**: Served from dist/public directory

### Environment Configuration
- Database URL configuration via environment variables
- Separate development and production database instances
- Session management with connect-pg-simple (PostgreSQL sessions)

## Changelog
```
Changelog:
- July 01, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```