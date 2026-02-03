# AI Agents Configuration

This document describes the AI agents configured for the PrismPioneer project.

## Project Agents

### Trae AI Assistant

- **Role**: Code assistant and project setup agent
- **Capabilities**:
  - Project structure creation
  - Code generation and refactoring
  - Frontend component development
  - GitHub API integration
  - Dynamic content generation
- **Frameworks**: Astro 5, TypeScript, Node.js
- **Tools**: File operations, command execution, code search

## Agent Guidelines

### Version Management

When updating CHANGELOGS.md, follow these versioning rules:

- **0.x.0** (Major Features): Use when creating new main functions, new UI components, new pages, or significant feature additions
  - Examples: New page creation, major component development, new API endpoints, database schema changes
  
- **0.0.x** (Minor Updates/Bug Fixes): Use for minor updates, bug fixes, styling improvements, or small enhancements
  - Examples: UI styling changes, bug fixes, accessibility improvements, text updates, performance optimizations

- **1.0.0** (Release): Use when all normal requirements are complete and the project is ready for production

Always update the version number at the top of the changelog entry with the date in YYYY-MM-DD format.

When updating CHANGELOGS.md, also update the version in:
- `PrismPioneer_Frontend/package.json`

Sync the package.json version to match the latest CHANGELOG version.

### Command Execution Restrictions

- **IMPORTANT**: Do NOT automatically run `npm run dev` or `npm run build` commands unless explicitly requested by the user
- Only run these commands when the user specifically asks to start the development server or build the project

### Frontend Development

- Follow Astro 5 framework conventions
- Implement responsive design with CSS-in-JS or inline styles
- Use TypeScript for type safety
- Optimize for performance and SEO
- Ensure accessibility standards
- Use modern JavaScript/TypeScript patterns
- Implement smooth scrolling behavior
- Create dynamic components with server-side rendering

### Code Quality

- Write clean, readable code
- Follow TypeScript best practices
- Use ESLint rules for TypeScript/JavaScript
- Add meaningful comments where necessary
- Use meaningful variable and function names
- Implement proper error handling
- Use async/await for asynchronous operations

## Future Agent Configurations

This section can be expanded to include additional AI agents for:

- Testing automation
- Deployment CI/CD
- Content generation
- SEO optimization
- Analytics integration
- Performance monitoring
