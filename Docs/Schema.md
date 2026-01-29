# Database Schema Documentation

This document describes the database schema for PrismPioneer, a portfolio and blog website built with Django and Supabase PostgreSQL.

## Overview

The database consists of two main applications:

1. **Blog** - Manages blog posts, categories, and tags
2. **Portfolio** - Manages projects, project categories, technologies, and project images

## Blog Schema

### Categories Table

**Table Name:** `blog_category`

| Field       | Type        | Description          | Constraints      |
| ----------- | ----------- | -------------------- | ---------------- |
| id          | Integer     | Primary Key          | Auto-increment   |
| name        | String(100) | Category name        | Unique, Required |
| slug        | String(100) | URL-friendly slug    | Unique, Required |
| description | Text        | Category description | Optional         |
| created_at  | DateTime    | Creation timestamp   | Auto-generated   |

**Relationships:**

- One-to-many with BlogPost (reverse: `posts`)

---

### Tags Table

**Table Name:** `blog_tag`

| Field | Type       | Description       | Constraints      |
| ----- | ---------- | ----------------- | ---------------- |
| id    | Integer    | Primary Key       | Auto-increment   |
| name  | String(50) | Tag name          | Unique, Required |
| slug  | String(50) | URL-friendly slug | Unique, Required |

**Relationships:**

- Many-to-many with BlogPost (through: `blog_post_tags`)

---

### Blog Posts Table

**Table Name:** `blog_blogpost`

| Field          | Type        | Description               | Constraints                 |
| -------------- | ----------- | ------------------------- | --------------------------- |
| id             | Integer     | Primary Key               | Auto-increment              |
| title          | String(200) | Post title                | Required                    |
| slug           | String(200) | URL-friendly slug         | Unique, Required            |
| author         | Foreign Key | User who created the post | Required, links to User     |
| category       | Foreign Key | Post category             | Optional, links to Category |
| excerpt        | String(500) | Short description         | Required                    |
| content        | Text        | Post content (markdown)   | Required                    |
| featured_image | Image       | Featured image URL        | Optional                    |
| status         | String(20)  | Post status               | Draft/Published/Archived    |
| is_featured    | Boolean     | Featured post flag        | Default: False              |
| views          | Integer     | View count                | Default: 0                  |
| created_at     | DateTime    | Creation timestamp        | Auto-generated              |
| updated_at     | DateTime    | Last update timestamp     | Auto-generated              |
| published_at   | DateTime    | Publication date          | Optional                    |

**Status Options:**

- `draft` - Post is not published
- `published` - Post is publicly visible
- `archived` - Post is archived

**Relationships:**

- Many-to-one with User (via `author`)
- Many-to-one with Category (via `category`)
- Many-to-many with Tag (through: `blog_post_tags`)

---

## Portfolio Schema

### Project Categories Table

**Table Name:** `portfolio_projectcategory`

| Field       | Type        | Description          | Constraints      |
| ----------- | ----------- | -------------------- | ---------------- |
| id          | Integer     | Primary Key          | Auto-increment   |
| name        | String(100) | Category name        | Unique, Required |
| slug        | String(100) | URL-friendly slug    | Unique, Required |
| description | Text        | Category description | Optional         |
| created_at  | DateTime    | Creation timestamp   | Auto-generated   |

**Relationships:**

- One-to-many with Project (reverse: `projects`)

---

### Technologies Table

**Table Name:** `portfolio_technology`

| Field | Type       | Description       | Constraints      |
| ----- | ---------- | ----------------- | ---------------- |
| id    | Integer    | Primary Key       | Auto-increment   |
| name  | String(50) | Technology name   | Unique, Required |
| slug  | String(50) | URL-friendly slug | Unique, Required |
| icon  | String(50) | Icon class name   | Optional         |

**Relationships:**

- Many-to-many with Project (through: `project_technologies`)

---

### Projects Table

**Table Name:** `portfolio_project`

| Field             | Type        | Description              | Constraints                        |
| ----------------- | ----------- | ------------------------ | ---------------------------------- |
| id                | Integer     | Primary Key              | Auto-increment                     |
| title             | String(200) | Project title            | Required                           |
| slug              | String(200) | URL-friendly slug        | Unique, Required                   |
| short_description | String(200) | Brief description        | Required                           |
| description       | Text        | Full project description | Required                           |
| category          | Foreign Key | Project category         | Optional, links to ProjectCategory |
| thumbnail         | Image       | Project thumbnail image  | Required                           |
| cover_image       | Image       | Project cover image      | Optional                           |
| github_url        | String      | GitHub repository URL    | Optional                           |
| live_url          | String      | Live demo URL            | Optional                           |
| demo_url          | String      | Demo video URL           | Optional                           |
| status            | String(20)  | Project status           | Draft/Published/Archived           |
| is_featured       | Boolean     | Featured project flag    | Default: False                     |
| order             | Integer     | Display order            | Default: 0                         |
| created_at        | DateTime    | Creation timestamp       | Auto-generated                     |
| updated_at        | DateTime    | Last update timestamp    | Auto-generated                     |
| completed_at      | Date        | Project completion date  | Optional                           |

**Status Options:**

- `draft` - Project is not published
- `published` - Project is publicly visible
- `archived` - Project is archived

**Relationships:**

- Many-to-one with ProjectCategory (via `category`)
- Many-to-many with Technology (through: `project_technologies`)
- One-to-many with ProjectImage (reverse: `images`)

---

### Project Images Table

**Table Name:** `portfolio_projectimage`

| Field   | Type        | Description        | Constraints                |
| ------- | ----------- | ------------------ | -------------------------- |
| id      | Integer     | Primary Key        | Auto-increment             |
| project | Foreign Key | Associated project | Required, links to Project |
| image   | Image       | Image file         | Required                   |
| caption | String(200) | Image caption      | Optional                   |
| order   | Integer     | Display order      | Default: 0                 |

**Relationships:**

- Many-to-one with Project (via `project`)

---

## ER Diagram (Text Representation)

```
┌─────────────┐         ┌──────────────┐         ┌──────────┐
│   User      │         │ BlogPost     │         │  Tag    │
│ (Django)    │         │              │         │         │
├─────────────┤         ├──────────────┤         ├──────────┤
│ id          │◄────────│ id           │         │ id       │
│ username    │ 1     N │ title        │         │ name     │
│ email       │         │ slug         │         │ slug     │
│ ...         │         │ author_id    │──┐      └──────────┘
└─────────────┘         │ excerpt      │  │           │
                       │ content      │  │           │ N
                       │ status       │  │           │
                       │ is_featured  │  │           ▼
                       │ views        │  │    ┌──────────────┐
                       │ created_at   │  │    │ BlogPost_Tag │
                       │ updated_at   │  │    │   (M2M)     │
                       └──────────────┘  │    ├──────────────┤
                              │         │    │ id           │
                              │         │    │ post_id      │
                              │ N       │    │ tag_id       │
                              ▼         │    └──────────────┘
                       ┌──────────────┐  │
                       │ Category     │  │
                       │              │  │
                       ├──────────────┤  │
                       │ id           │  │
                       │ name         │  │
                       │ slug         │◄─┘
                       │ description  │
                       │ created_at   │
                       └──────────────┘
                              │ 1
                              │ N
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        PORTFOLIO APP                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐      ┌──────────┐      ┌──────────────┐   │
│  │  Project     │◄────│ Category │      │ Technology  │   │
│  │              │ N   1 │          │ N   1 │             │   │
│  ├──────────────┤      ├──────────┤      ├──────────────┤   │
│  │ id           │      │ id       │      │ id           │   │
│  │ title        │      │ name     │      │ name         │   │
│  │ slug         │      │ slug     │      │ slug         │   │
│  │ description  │      │ ...      │      │ icon         │   │
│  │ thumbnail    │      └──────────┘      └──────────────┘   │
│  │ status       │                                      │   │
│  │ is_featured  │      ┌──────────────┐              │   │
│  │ order        │      │ ProjectImage │              │   │
│  │ ...          │      │              │              │   │
│  ├──────────────┤      ├──────────────┤              │   │
│  │             │      │ id           │              │   │
│  │             │◄────│ project_id   │              │   │
│  │             │ 1   N │ image        │              │   │
│  │             │      │ caption      │              │   │
│  │             │      │ order        │              │   │
│  │             │      └──────────────┘              │   │
│  └──────────────┘                                    │   │
│       │ 1                                             │   │
│       │ N                                             │   │
│       ▼                                             │   │
│  ┌──────────────────┐                               │   │
│  │ Project_Technology│                               │   │
│  │     (M2M)        │                               │   │
│  ├──────────────────┤                               │   │
│  │ id              │                               │   │
│  │ project_id      │                               │   │
│  │ technology_id   │                               │   │
│  └──────────────────┘                               │   │
│                                                       │   │
└───────────────────────────────────────────────────────────────┘
```

## Database Connection

**Database Type:** PostgreSQL (Supabase)
**Connection Details:**

- Host: `mkqqvsypssmwlulpenyd.supabase.co`
- Port: `5432`
- Database Name: `postgres`
- User: `postgres`

## Migration Strategy

To apply database changes:

```bash
cd PrismPioneer_Backend

# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate
```

## API Endpoints

### Blog API

- `GET /api/blog/posts/` - List all blog posts
- `GET /api/blog/posts/{slug}/` - Get single post
- `GET /api/blog/categories/` - List categories
- `GET /api/blog/tags/` - List tags
- `GET /api/blog/posts/featured/` - Get featured posts
- `POST /api/blog/posts/{slug}/increment_views/` - Increment post views

### Portfolio API

- `GET /api/portfolio/projects/` - List all projects
- `GET /api/portfolio/projects/{slug}/` - Get single project
- `GET /api/portfolio/categories/` - List project categories
- `GET /api/portfolio/technologies/` - List technologies
- `GET /api/portfolio/projects/featured/` - Get featured projects

## API Documentation

Interactive API documentation is available at:

- Swagger UI: `http://localhost:8000/api/docs/`
- ReDoc: `http://localhost:8000/api/redoc/`
- OpenAPI Schema: `http://localhost:8000/api/schema/`

---

_Last Updated: January 2026_
_Project: PrismPioneer_
_License: MIT License © 2026 DotJumpDot_
