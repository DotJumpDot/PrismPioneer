# PrismPioneer

A modern portfolio and blog website built with Astro (frontend) and ElysiaJS (backend), powered by Supabase PostgreSQL database.

## Project Structure

```
PrismPioneer/
├── PrismPioneer_Backend/    # ElysiaJS backend API
├── PrismPioneer_Frontend/   # Astro frontend application
├── Docs/                    # Documentation
├── .env                     # Environment variables (shared)
├── .gitignore
├── AGENTS.md
├── env.example
├── LICENSE
└── README.md
```

## Tech Stack

### Frontend

- **Astro**: Modern web framework for content-focused websites
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API requests

### Backend

- **ElysiaJS**: Fast and friendly Bun web framework
- **TypeScript**: Type-safe JavaScript for backend
- **PostgreSQL**: Direct PostgreSQL integration with `postgres` package
- **JWT**: JSON Web Token authentication
- **Bcrypt**: Password hashing and verification
- **Swagger**: OpenAPI documentation generation
- **CORS**: Cross-Origin Resource Sharing support

### Database

- **Supabase PostgreSQL**: Managed PostgreSQL database

## Features

- Portfolio showcase
- Blog system with markdown support
- RESTful API with Swagger documentation
- Responsive design
- Fast page loads with Astro's zero-JS by default
- SEO optimized

## Getting Started

### Prerequisites

- Bun.js (latest version)
- Node.js 18+
- Supabase account

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd PrismPioneer
   ```

2. **Create environment file**

   ```bash
   cp env.example .env
   ```

   Fill in your environment variables in the `.env` file.

3. **Backend Setup**

   ```bash
   cd PrismPioneer_Backend

   # Install dependencies
   bun install

   # Run development server
   bun run dev
   ```

   The backend API will be available at `http://localhost:4100`
   Swagger documentation: `http://localhost:4100/docs`

4. **Frontend Setup**

   ```bash
   cd PrismPioneer_Frontend

   # Install dependencies
   npm install

   # Start development server
   npm run dev
   ```

   The frontend will be available at `http://localhost:4200`

## Environment Variables

See `env.example` for required environment variables.

## API Documentation

Once the backend is running, visit `http://localhost:4100/docs` for interactive API documentation.

## Development

### Backend Development

- API root: `http://localhost:4100/api/`
- Swagger docs: `http://localhost:4100/docs`
- Health check: `http://localhost:4100/health`

### Frontend Development

- Dev server: `http://localhost:4200`
- Build: `npm run build`
- Preview: `npm run preview`

## Contributing

This project is maintained by DotJumpDot. For questions or suggestions, please contact the maintainers.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Copyright

© 2026 DotJumpDot
