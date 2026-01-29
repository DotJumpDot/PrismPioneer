## Project Setup Plan

### 1. **Create Project Structure**
```
PrismPioneer/
├── PrismPioneer_Backend/
├── PrismPioneer_Frontend/
├── Docs/
├── .env
├── .gitignore
├── AGENTS.md
├── env.example
├── LICENSE
└── README.md
```

### 2. **Backend Setup (Django)**
- Initialize Django project with latest version
- Install and configure:
  - Django REST Framework
  - drf-spectacular (for Swagger/OpenAPI docs)
  - django-cors-headers
  - psycopg2-binary (PostgreSQL adapter)
  - python-dotenv
  - django-environ
- Create Django apps for blog and portfolio
- Configure Supabase PostgreSQL connection
- Set up database models for blog posts and portfolio items
- Configure API endpoints with DRF
- Enable Swagger documentation at `/api/docs/`

### 3. **Frontend Setup (Astro)**
- Initialize Astro project with latest version
- Install dependencies:
  - Axios (for API calls)
  - TypeScript
  - Tailwind CSS (common Astro setup)
  - @astrojs/tailwind
- Configure environment variables for API URL
- Create base layout and page structure
- Set up portfolio and blog page templates

### 4. **Root Configuration Files**
- **.env**: Supabase credentials (shared by both)
- **.gitignore**: Python, Node, and environment-specific files
- **env.example**: Template for environment variables
- **README.md**: Project setup and usage instructions
- **AGENTS.md**: AI agent configuration documentation
- **LICENSE**: MIT License (2026 DotJumpDot)
- **Docs/Schema.md**: Database schema documentation

### 5. **Environment Setup**
- Backend reads from root .env using python-dotenv
- Frontend reads from root .env or its own .env
- Supabase connection configured in Django settings

### 6. **Initial Configuration**
- Django admin setup
- CORS configuration for frontend-backend communication
- API base URL configuration
- Sample data models for blog and portfolio

This will create a fully functional portfolio/blog system with Astro frontend, Django backend, and Supabase database, complete with Swagger API documentation.