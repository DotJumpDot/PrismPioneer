export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  featured: boolean;
  color: string;
  icon: string;
  techStack: string[];
  longDescription: string;
  implementation: string[];
  outcomes: string[];
  githubUrl?: string;
  gitlabUrl?: string;
  liveUrl?: string;
  images: string[];
  deploy?: {
    frontend?: string;
    backend?: string;
    database?: string;
  };
}

export const projects: Project[] = [
  {
    id: "axiomancer",
    title: "Axiomancer",
    description:
      "Advanced AI chat platform with multi-model routing system and customization functions.",
    category: "AI/ML",
    date: "2025-12-19",
    featured: true,
    color: "#9400D3",
    icon: "brain",
    techStack: [
      "Svelte 5",
      "TypeScript",
      "ElysiaJS",
      "Bun",
      "PostgreSQL",
      "JWT",
      "WebSocket",
      "CORS",
      "Swagger",
      "i18n",
      "KaTeX",
    ],
    longDescription:
      "Axiomancer is a cutting-edge AI chat platform that revolutionizes how users interact with multiple AI models. The system implements intelligent routing to select the most appropriate AI model based on query complexity, user preferences, and real-time performance metrics. Features include conversation history management, model comparison tools, and extensive customization options for fine-tuning responses.",
    implementation: [
      "Developed multi-model routing algorithm using heuristic analysis of query patterns",
      "Implemented WebSocket infrastructure for real-time bidirectional communication",
      "Built comprehensive conversation history system with contextual awareness",
      "Created model comparison interface with side-by-side response evaluation",
      "Integrated JWT authentication with bcrypt for secure user management",
      "Added CORS support and Swagger API documentation",
      "Implemented i18n support for multi-language users",
      "Integrated KaTeX for math rendering in conversations",
    ],
    outcomes: [
      "Achieved high user satisfaction in beta testing",
      "Reduced API costs through intelligent model selection",
      "Supported concurrent users with sub-100ms response times",
      "Deployed with Bun runtime for optimal performance",
    ],
    githubUrl: "https://github.com/DotJumpDot/axiomancer",
    images: [
      "/projects/axiomancer-hero.png",
      "/projects/axiomancer-dashboard.png",
      "/projects/axiomancer-routing.png",
    ],
  },
  {
    id: "axionsync",
    title: "AxionSync",
    description:
      "Comprehensive personal life management platform bringing everything important together.",
    category: "Full Stack",
    date: "2025-11-04",
    featured: true,
    color: "#FF7F00",
    icon: "sync",
    techStack: [
      "Next.js 16",
      "React 19",
      "FastAPI",
      "Yarn",
      "TypeScript",
      "Mantine UI",
      "Bcrypt",
      "Ant Design",
      "Framer Motion",
      "Zustand",
      "next-intl",
      "Tailwind CSS 4",
      "Turbo",
    ],
    longDescription:
      "AxionSync is a comprehensive personal life management platform designed to bring everything important into one unified interface. The application features modern UI components, smooth animations, and state management for optimal user experience. Built with Next.js 16 and React 19 with Turbo mode for blazing fast performance.",
    implementation: [
      "Built application with Next.js 16 and React 19 for optimal performance",
      "Implemented Turbo mode for instant page loads",
      "Created UI components using Mantine UI and Ant Design",
      "Added smooth animations with Framer Motion",
      "Implemented state management using Zustand",
      "Added internationalization support with next-intl",
      "Styled with Tailwind CSS 4 for responsive design",
      "Enabled React Compiler for enhanced performance",
    ],
    outcomes: [
      "Unified personal management into single cohesive platform",
      "Achieved lightning-fast page loads with Turbo mode",
      "Provided seamless user experience across all devices",
    ],
    githubUrl: "https://github.com/DotJumpDot/axionsync",
    images: ["/projects/axionsync-dashboard.png", "/projects/axionsync-mobile.png"],
  },
  {
    id: "prismpioneer",
    title: "Prism Pioneer",
    description: "Modern portfolio and blog website showcasing creative development work.",
    category: "Web Application",
    date: "2026-01-29",
    featured: true,
    color: "#00BFFF",
    icon: "globe",
    techStack: [
      "Astro 5",
      "ElysiaJS",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Zustand",
      "JWT",
      "CORS",
      "Swagger",
      "Sitemap",
    ],
    longDescription:
      "PrismPioneer is a modern portfolio and blog website built with Astro 5 for optimal performance and SEO. The site features a clean design with smooth animations, responsive layouts, and server-side rendering. Backend powered by ElysiaJS with Bun runtime, PostgreSQL database, and Supabase for storage.",
    implementation: [
      "Built portfolio with Astro 5 for SSR and optimal performance",
      "Developed backend API with ElysiaJS and Bun runtime",
      "Implemented PostgreSQL database with Supabase integration",
      "Created state management with Zustand",
      "Added JWT authentication with bcrypt password hashing",
      "Implemented CORS support for API security",
      "Generated Swagger API documentation",
      "Created dynamic sitemap generation for SEO",
    ],
    outcomes: [
      "Achieved fast page loads with Astro 5 optimization",
      "Provided seamless user experience with responsive design",
      "Built secure authentication system with modern standards",
    ],
    githubUrl: "https://github.com/DotJumpDot/PrismPioneer",
    images: ["/projects/prismpioneer-home.png", "/projects/prismpioneer-projects.png"],
  },
  {
    id: "stringextractor",
    title: "String Extractor",
    description:
      "VS Code extension to identify repeated string literals and improve code maintainability.",
    category: "VSCode Extension",
    date: "2026-01-27",
    featured: true,
    color: "#00FF00",
    icon: "code",
    techStack: ["TypeScript", "VS Code API", "Node.js"],
    longDescription:
      "A powerful code analysis tool that scans for repeated string literals across your codebase and suggests refactoring opportunities. The extension uses abstract syntax tree parsing to accurately identify string literals, supports multiple programming languages, and provides intelligent suggestions for extracting constants or creating translation keys.",
    implementation: [
      "Implemented AST-based string literal detection algorithm",
      "Created multi-language parser for JavaScript and TypeScript",
      "Built suggestion engine with context-aware refactoring recommendations",
      "Developed code action providers for one-click constant extraction",
      "Added ignore configuration for false positive handling",
      "Built extension with VS Code API for seamless integration",
    ],
    outcomes: [
      "Helped developers reduce code duplication on average",
      "Achieved positive user feedback and ratings",
    ],
    githubUrl: "https://github.com/DotJumpDot/StringExtractor",
    liveUrl: "https://marketplace.visualstudio.com/items?itemName=DotJumpDot.StringExtractor",
    images: ["/projects/stringextractor-demo.png", "/projects/stringextractor-report.png"],
  },
  {
    id: "colorflow",
    title: "Color Flow",
    description:
      "VS Code extension to visualize inline CSS colors in HTML documents with configurable background highlighting.",
    category: "VSCode Extension",
    date: "2026-01-28",
    featured: true,
    color: "#FFD700",
    icon: "palette",
    techStack: ["TypeScript", "VS Code API", "Node.js", "CSS"],
    longDescription:
      "This VS Code extension transforms the development experience by providing real-time visualization of inline CSS colors directly in HTML documents. The extension intelligently parses color values, supports various color formats (hex, rgb, hsl, named colors), and offers customizable highlighting options including background color indicators, border previews, and color picker integration.",
    implementation: [
      "Built color parsing engine supporting multiple color formats",
      "Implemented TextEditor decoration API for visual highlighting",
      "Created configuration system for customizable visualization preferences",
      "Added color picker integration for quick color modifications",
      "Optimized performance to handle large files without lag",
      "Built extension with VS Code API and Node.js runtime",
    ],
    outcomes: [
      "Published to VS Code Marketplace with positive user reception",
      "Maintained strong rating with positive user feedback",
    ],
    githubUrl: "https://github.com/DotJumpDot/ColorFlow",
    liveUrl: "https://marketplace.visualstudio.com/items?itemName=DotJumpDot.ColorFlow",
    images: ["/projects/colorflow-demo.png", "/projects/colorflow-settings.png"],
  },
  {
    id: "forsakenhunters",
    title: "Forsaken Hunters",
    description: "HTML/JavaScript game project using simpleGame.js custom framework.",
    category: "Game",
    date: "2026-01-29",
    featured: false,
    color: "#FF4444",
    icon: "gamepad",
    techStack: ["HTML5", "JavaScript", "simpleGame.js", "PNG sprites", "MP3 audio"],
    longDescription:
      "An engaging HTML/JavaScript game project built using the simpleGame.js custom framework. The game features sprite-based graphics, audio effects, and smooth gameplay mechanics. Built entirely with vanilla HTML5 and JavaScript for maximum browser compatibility.",
    implementation: [
      "Developed game using simpleGame.js custom framework",
      "Created sprite-based character and environment graphics",
      "Implemented MP3 audio system for sound effects",
      "Built responsive game mechanics with HTML5 canvas",
      "Optimized for smooth performance across browsers",
    ],
    outcomes: [
      "Created fully functional game with custom framework",
      "Achieved smooth gameplay with sprite animations",
    ],
    githubUrl: "https://github.com/DotJumpDot/ForsakenHunters",
    images: ["/projects/forsakenhunters-gameplay.png", "/projects/forsakenhunters-sprites.png"],
  },
  {
    id: "2048-boxbox",
    title: "2048_BoxBox",
    description: "HTML/JavaScript game project containing 4 puzzle games including 2048 variant.",
    category: "Game",
    date: "2026-01-28",
    featured: false,
    color: "#4444FF",
    icon: "puzzle",
    techStack: ["HTML5", "JavaScript", "Puzzle games"],
    longDescription:
      "A collection of puzzle games built with HTML5 and JavaScript, featuring multiple game types including a 2048 variant and BoxBox. The games are designed with clean, intuitive interfaces and responsive layouts for play on any device.",
    implementation: [
      "Built multiple puzzle games with HTML5 and JavaScript",
      "Created 2048 variant with smooth tile animations",
      "Developed BoxBox game with unique mechanics",
      "Implemented responsive design for mobile and desktop",
      "Added save functionality and score tracking",
    ],
    outcomes: [
      "Created entertaining puzzle game collection",
      "Achieved smooth gameplay across all devices",
    ],
    githubUrl: "https://github.com/DotJumpDot/2048_BoxBox",
    images: ["/projects/2048-gameplay.png", "/projects/boxbox-gameplay.png"],
  },
  {
    id: "softdev-dcoffee",
    title: "SoftDev Dcoffee Application",
    description: "Coffee ordering and management desktop application with full CRUD operations.",
    category: "Desktop Application",
    date: "2024-05-15",
    featured: true,
    color: "#8B4513",
    icon: "coffee",
    techStack: ["Java", "SQLite", "Vuetify"],
    longDescription:
      "SoftDev Dcoffee Application is a desktop-based coffee ordering and management system built entirely with Java. The application provides comprehensive functionality for managing coffee products, processing orders, and maintaining customer data. Built with SQLite for reliable local data storage and clean Java Swing-based user interface with Vuetify components.",
    implementation: [
      "Developed desktop application using Java with Swing framework and Vuetify components",
      "Implemented SQLite database for local data persistence",
      "Created full CRUD operations for products, orders, and customers",
      "Built responsive UI with Java Swing components",
      "Designed efficient database schema for coffee management",
      "Implemented order tracking and inventory management system",
    ],
    outcomes: [
      "Created fully functional desktop coffee management system",
      "Achieved reliable data storage with SQLite",
      "Provided intuitive user interface for daily operations",
    ],
    gitlabUrl: "https://gitlab.com/softdev_65160309/termproject_softdev",
    images: ["/projects/softdev-dcoffee-ui.png", "/projects/softdev-dcoffee-order.png"],
  },
  {
    id: "topten-dcoffee",
    title: "Topten Dcoffee Web-Application",
    description: "Web-based coffee ordering platform with dual database support.",
    category: "Web Application",
    date: "2024-03-12",
    featured: true,
    color: "#D2691E",
    icon: "globe",
    techStack: ["Vue", "NestJS", "MySQL", "SQLite", "TypeScript", "Vuetify"],
    longDescription:
      "Topten Dcoffee Web-Application is a modern web-based coffee ordering platform featuring dual database support for flexibility. The application provides seamless online ordering experience with real-time inventory management. Built with Vue.js and Vuetify for frontend, NestJS for backend, supporting both MySQL and SQLite databases.",
    implementation: [
      "Built frontend with Vue.js and Vuetify for responsive user interface",
      "Developed backend API with NestJS framework",
      "Implemented dual database support (MySQL and SQLite)",
      "Created RESTful API endpoints for all operations",
      "Built order management system with real-time updates",
      "Implemented user authentication and authorization",
      "Designed responsive UI with Vuetify components for mobile and desktop",
      "Added inventory tracking and reporting features",
    ],
    outcomes: [
      "Created seamless web-based coffee ordering platform",
      "Achieved flexible database architecture",
      "Provided excellent user experience across devices",
    ],
    gitlabUrl: "https://gitlab.com/softdev_65160293/webpro/topten-dcoffee-project",
    images: ["/projects/topten-dcoffee-home.png", "/projects/topten-dcoffee-order.png"],
  },
  {
    id: "vhealth",
    title: "VHealth",
    description: "Health management web application with MongoDB database.",
    category: "Web Application",
    date: "2025-10-10",
    featured: true,
    color: "#32CD32",
    icon: "heart",
    techStack: ["Quasar", "NestJS", "MongoDB", "TypeScript"],
    longDescription:
      "VHealth is a comprehensive health management web application designed to help users track their health metrics and medical records. The application features a modern Quasar-based frontend with NestJS backend and MongoDB for flexible data storage. Successfully deployed with Netlify for frontend, Railway for backend, and Atlas for database.",
    implementation: [
      "Built responsive frontend with Quasar framework",
      "Developed backend API with NestJS",
      "Implemented MongoDB database for health record storage",
      "Created comprehensive health tracking features",
      "Built user authentication and secure data management",
      "Designed intuitive dashboard for health metrics",
      "Implemented reporting and analytics features",
      "Deployed frontend to Netlify, backend to Railway, and database to Atlas",
    ],
    outcomes: [
      "Created comprehensive health management platform",
      "Achieved successful deployment on Netlify, Railway, and Atlas",
      "Provided secure and efficient health data management",
    ],
    gitlabUrl: "https://gitlab.com/need-and-go",
    deploy: {
      frontend: "Netlify",
      backend: "Railway",
      database: "Atlas",
    },
    images: ["/projects/vhealth-dashboard.png", "/projects/vhealth-tracking.png"],
  },
];

export const categories = [
  "All",
  "AI/ML",
  "VSCode Extension",
  "Web Application",
  "Desktop Application",
  "Full Stack",
  "Game",
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getRecentProjects(limit: number = 6): Project[] {
  return [...projects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
