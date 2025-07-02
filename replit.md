# AutomatIA - AI-Powered Process Automation Platform

## Overview

AutomatIA is a web application designed to showcase and provide AI-powered automation services for businesses. The platform focuses on eliminating manual tasks, implementing intelligent virtual assistants, and optimizing business processes through artificial intelligence integration. 

**Current State**: The application has been converted from a React/TypeScript full-stack application to a pure HTML/CSS/JavaScript static website while maintaining all original functionality and design.

## System Architecture

### Current Architecture (Static Website)
- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript
- **Styling**: Custom CSS with CSS variables and modern responsive design
- **Interactions**: Vanilla JavaScript with modern ES6+ features
- **Forms**: Custom form validation and submission handling
- **Animations**: CSS animations and transitions with Intersection Observer API
- **Icons**: Font Awesome 6.4.0 for consistent iconography
- **Fonts**: Google Fonts (Inter) for typography

### Previous Architecture (Migrated From)
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query (TanStack Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds
- **Backend**: Node.js with Express.js server
- **Database**: PostgreSQL with Drizzle ORM

## Key Components

### Current Static Website Components
1. **Landing Page System**
   - Hero section with compelling value proposition
   - Interactive services carousel with autoplay functionality
   - Case studies demonstrating real-world success
   - Benefits section highlighting business value
   - Contact form with client-side validation

2. **Interactive Features**
   - Smooth scrolling navigation between sections
   - Responsive mobile hamburger menu
   - Animated services carousel with indicators
   - Form validation with real-time feedback
   - Toast notifications for user feedback
   - Intersection Observer for scroll animations

3. **Responsive Design**
   - Mobile-first CSS approach
   - Flexible grid layouts
   - Adaptive typography and spacing
   - Touch-friendly interface elements

### File Structure
- `index.html` - Main HTML structure and content
- `styles.css` - All CSS styles with CSS variables
- `script.js` - JavaScript functionality and interactions

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
- July 02, 2025. Converted from React/TypeScript full-stack to pure HTML/CSS/JavaScript
  - Maintained all original functionality and design
  - Created standalone index.html with complete page structure
  - Implemented custom CSS with modern features (variables, grid, flexbox)
  - Added vanilla JavaScript for interactivity (carousel, forms, navigation)
  - Preserved responsive design and animations
  - Added accessibility features and keyboard navigation
- July 01, 2025. Initial React/TypeScript setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```