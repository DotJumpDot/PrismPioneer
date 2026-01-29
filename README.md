# PrismPioneer

A modern portfolio and blog website built with Astro (frontend) and Django (backend), powered by Supabase PostgreSQL database.

## Project Structure

```
PrismPioneer/
├── PrismPioneer_Backend/    # Django backend API
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
- **Django**: High-level Python web framework
- **Django REST Framework**: Powerful toolkit for building Web APIs
- **drf-spectacular**: OpenAPI 3.0 schema generation with Swagger UI
- **psycopg2**: PostgreSQL adapter for Python
- **python-dotenv**: Read environment variables from .env file

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

- Python 3.10+
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
   
   # Create virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   
   # Install dependencies
   pip install -r requirements.txt
   
   # Run migrations
   python manage.py migrate
   
   # Create superuser
   python manage.py createsuperuser
   
   # Run development server
   python manage.py runserver
   ```
   
   The backend API will be available at `http://localhost:8000`
   Swagger documentation: `http://localhost:8000/api/docs/`

4. **Frontend Setup**
   ```bash
   cd PrismPioneer_Frontend
   
   # Install dependencies
   npm install
   
   # Start development server
   npm run dev
   ```
   
   The frontend will be available at `http://localhost:4321`

## Environment Variables

See `env.example` for required environment variables.

## API Documentation

Once the backend is running, visit `http://localhost:8000/api/docs/` for interactive API documentation.

## Development

### Backend Development
- Django admin: `http://localhost:8000/admin`
- API root: `http://localhost:8000/api/`
- Swagger docs: `http://localhost:8000/api/docs/`

### Frontend Development
- Dev server: `http://localhost:4321`
- Build: `npm run build`
- Preview: `npm run preview`

## Contributing

This project is maintained by DotJumpDot. For questions or suggestions, please contact the maintainers.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Copyright

© 2026 DotJumpDot
