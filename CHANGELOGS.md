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

### Changed

- Backend framework migrated from Django to ElysiaJS
- Port configuration: Backend (4100), Frontend (4200)
- Database connection using direct PostgreSQL integration
- API structure following RESTful conventions

### Security

- Implemented API key authentication
- Added password complexity requirements
- Secure password hashing with bcrypt (12 salt rounds)
- JWT token-based authentication
- Input sanitization and validation

### Fixed

- Fixed TypeScript type errors in API key authentication middleware
- Fixed type casting issues with PostgreSQL RowList to User array conversion

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
