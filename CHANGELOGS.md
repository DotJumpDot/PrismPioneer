# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Dynamic GitHub project integration for Work Highlights section
- Automated Tech Stack visualization from GitHub repositories
- Mini Profile section with navigation to About page
- Three distinct scrollable blocks: Work Highlights, Tech Stack, Mini Profile
- Real-time project data fetching with error handling
- Color-coded technology badges with mini legends
- Responsive design with smooth scrolling behavior
- Updated project data with accurate GitHub repository information
- Header redesign with DotJumpDot branding and Prism Pioneer subtitle

## [0.2.0] - 2026-02-03

### Changed

- Removed backend architecture - project is now frontend-only
- Project simplified to pure Astro 5 portfolio and blog website
- Removed all ElysiaJS, PostgreSQL, Supabase, and backend dependencies
- Updated project structure to remove PrismPioneer_Backend directory
- Updated documentation to reflect frontend-only architecture
- Simplified setup process with no environment variables required
- Removed API endpoints, authentication, and database integration
- Updated Prism Pioneer project data to reflect frontend-only tech stack

## [0.1.2] - 2026-02-02

### Changed

- Reorganized Skills section on About page into categorized layout (Languages, Frontend, Backend, Database)
- Updated Skills display from progress bars to tag-based design with hover effects
- Added header decorations (lines and animated dots) to News & Projects page
- Added header decorations (lines and animated dots) to About page
- Updated title styling on News and About pages to match WorkHighlights design
- Improved title consistency with neon glow animation effect across all main pages
- Enhanced visual readability of page headers with decorative elements

## [0.1.1] - 2026-01-30

### Fixed

- Fixed TypeScript type errors in API key authentication middleware
- Fixed type casting issues with PostgreSQL RowList to User array conversion

## [0.1.0] - 2026-01-30

### Added

- Initial project setup with ElysiaJS backend
- User entity implementation with full CRUD operations
- PostgreSQL database integration with Supabase
- TypeScript type definitions for all user operations
- Comprehensive API documentation with Swagger
- Environment variable configuration
- Health check endpoint
- User authentication and authorization
- Password hashing and verification
- Input validation and error handling
- Pagination and filtering for user listings
- CORS support for frontend-backend communication

### Technical Details

- **Backend**: ElysiaJS with TypeScript
- **Database**: Supabase PostgreSQL
- **Authentication**: JWT tokens + API key middleware
- **Documentation**: Swagger/OpenAPI 3.0
- **Ports**: Backend (4100), Frontend (4200)
- **Architecture**: Clean separation with api/service/sql/type folders

---

**Version Convention:**

- **1.0.0**: All normal requirements complete
- **0.x.0**: New features, new UI, new pages
- **0.0.x**: Minor updates, bug fixes
