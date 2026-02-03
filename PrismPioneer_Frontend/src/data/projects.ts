export interface Project {
  id: string;
  title: string;
  description: string;
  description_th?: string;
  category: string;
  date: string;
  featured: boolean;
  color: string;
  icon: string;
  techStack: string[];
  longDescription: string;
  longDescription_th?: string;
  implementation: string[];
  implementation_th?: string[];
  outcomes: string[];
  outcomes_th?: string[];
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
    description_th: "แพลตฟอร์มแชท AI ขั้นสูงพร้อมระบบกำหนดเส้นทางหลายโมเดลและฟังก์ชันการปรับแต่ง",
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
    longDescription_th:
      "Axiomancer เป็นแพลตฟอร์มแชท AI ล้ำสมัยที่ปฏิวัติวิธีการโต้ตอบของผู้ใช้กับโมเดล AI หลายตัว ระบบใช้การกำหนดเส้นทางอัจฉริยะเพื่อเลือกโมเดล AI ที่เหมาะสมที่สุดตามความซับซ้อนของคำถาม ความชอบของผู้ใช้ และตัวชี้วัดประสิทธิภาพแบบเรียลไทม์ ฟีเจอร์ต่างๆ ได้แก่ การจัดการประวัติการสนทนา เครื่องมือเปรียบเทียบโมเดล และตัวเลือกการปรับแต่งที่หลากหลายสำหรับการปรับแต่งคำตอบ",
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
    implementation_th: [
      "พัฒนาอัลกอริทึมการกำหนดเส้นทางหลายโมเดลโดยใช้การวิเคราะห์ฮิวริสติกของรูปแบบคำถาม",
      "ใช้โครงสร้างพื้นฐาน WebSocket สำหรับการสื่อสารสองทางแบบเรียลไทม์",
      "สร้างระบบประวัติการสนทนาที่ครอบคลุมพร้อมการรับรู้บริบท",
      "สร้างอินเทอร์เฟซเปรียบเทียบโมเดลพร้อมการประเมินคำตอบแบบเคียงข้างกัน",
      "บูรณาการการยืนยันตัวตน JWT ด้วย bcrypt สำหรับการจัดการผู้ใช้ที่ปลอดภัย",
      "เพิ่มการรองรับ CORS และเอกสาร API Swagger",
      "ใช้การรองรับ i18n สำหรับผู้ใช้หลายภาษา",
      "บูรณาการ KaTeX สำหรับการแสดงผลคณิตศาสตร์ในการสนทนา",
    ],
    outcomes: [
      "Achieved high user satisfaction in beta testing",
      "Reduced API costs through intelligent model selection",
      "Supported concurrent users with sub-100ms response times",
      "Deployed with Bun runtime for optimal performance",
    ],
    outcomes_th: [
      "ได้รับความพึงพอใจจากผู้ใช้สูงในการทดสอบเบต้า",
      "ลดต้นทุน API ผ่านการเลือกโมเดลอัจฉริยะ",
      "รองรับผู้ใช้พร้อมกันด้วยเวลาตอบสนองต่ำกว่า 100ms",
      "ปรับใช้ด้วยรันไทม์ Bun สำหรับประสิทธิภาพสูงสุด",
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
    description_th:
      "แพลตฟอร์มการจัดการชีวิตส่วนตัวที่ครอบคลุมออกแบบมาเพื่อรวบรวมสิ่งที่สำคัญทุกอย่างไว้ด้วยกัน",
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
    longDescription_th:
      "AxionSync เป็นแพลตฟอร์มการจัดการชีวิตส่วนตัวที่ครอบคลุม ออกแบบมาเพื่อรวบรวมสิ่งที่สำคัญทุกอย่างไว้ในอินเทอร์เฟซเดียว แอปพลิเคชันมีส่วนประกอบ UI ที่ทันสมัย ภาพเคลื่อนไหวที่ราบรื่น และการจัดการสถานะเพื่อประสบการณ์ผู้ใช้ที่ดีที่สุด สร้างด้วย Next.js 16 และ React 19 พร้อมโหมด Turbo เพื่อประสิทธิภาพที่รวดเร็ว",
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
    implementation_th: [
      "สร้างแอปพลิเคชันด้วย Next.js 16 และ React 19 เพื่อประสิทธิภาพสูงสุด",
      "ใช้โหมด Turbo เพื่อการโหลดหน้าเว็บทันที",
      "สร้างส่วนประกอบ UI โดยใช้ Mantine UI และ Ant Design",
      "เพิ่มภาพเคลื่อนไหวที่ราบรื่นด้วย Framer Motion",
      "ใช้การจัดการสถานะโดยใช้ Zustand",
      "เพิ่มการรองรับความเป็นสากลด้วย next-intl",
      "ตกแต่งด้วย Tailwind CSS 4 สำหรับการออกแบบที่ตอบสนองได้ดี",
      "เปิดใช้งาน React Compiler เพื่อประสิทธิภาพที่ดียิ่งขึ้น",
    ],
    outcomes: [
      "Unified personal management into single cohesive platform",
      "Achieved lightning-fast page loads with Turbo mode",
      "Provided seamless user experience across all devices",
    ],
    outcomes_th: [
      "รวมการจัดการส่วนบุคคลเป็นแพลตฟอร์มเดียวที่สอดคล้องกัน",
      "บรรลุการโหลดหน้าเว็บที่รวดเร็วด้วยโหมด Turbo",
      "มอบประสบการณ์ผู้ใช้ที่ราบรื่นในทุกอุปกรณ์",
    ],
    githubUrl: "https://github.com/DotJumpDot/axionsync",
    images: ["/projects/axionsync-dashboard.png", "/projects/axionsync-mobile.png"],
  },
  {
    id: "prismpioneer",
    title: "Prism Pioneer",
    description: "Modern portfolio and blog website showcasing creative development work.",
    description_th: "เว็บไซต์พอร์ตโฟลิโอและบล็อกที่ทันสมัยแสดงผลงานการพัฒนาที่สร้างสรรค์",
    category: "Web Application",
    date: "2026-01-29",
    featured: true,
    color: "#00BFFF",
    icon: "globe",
    techStack: ["Astro 5", "TypeScript", "Zustand", "Sitemap"],
    longDescription:
      "PrismPioneer is a modern portfolio and blog website built with Astro 5 for optimal performance and SEO. The site features a clean design with smooth animations, responsive layouts, and server-side rendering.",
    longDescription_th:
      "PrismPioneer เป็นเว็บไซต์พอร์ตโฟลิโอและบล็อกที่ทันสมัย สร้างด้วย Astro 5 เพื่อประสิทธิภาพและ SEO ที่ดีที่สุด เว็บไซต์มีการออกแบบที่สะอาดตาพร้อมภาพเคลื่อนไหวที่ราบรื่น เลย์เอาต์ที่ตอบสนองได้ดี และการเรนเดอร์ฝั่งเซิร์ฟเวอร์",
    implementation: [
      "Built portfolio with Astro 5 for SSR and optimal performance",
      "Created state management with Zustand",
      "Created dynamic sitemap generation for SEO",
    ],
    implementation_th: [
      "สร้างพอร์ตโฟลิโอด้วย Astro 5 สำหรับ SSR และประสิทธิภาพสูงสุด",
      "สร้างการจัดการสถานะด้วย Zustand",
      "สร้างการสร้างแผนผังไซต์แบบไดนามิกสำหรับ SEO",
    ],
    outcomes: [
      "Achieved fast page loads with Astro 5 optimization",
      "Provided seamless user experience with responsive design",
    ],
    outcomes_th: [
      "บรรลุการโหลดหน้าเว็บที่รวดเร็วด้วยการเพิ่มประสิทธิภาพ Astro 5",
      "มอบประสบการณ์ผู้ใช้ที่ราบรื่นด้วยการออกแบบที่ตอบสนองได้ดี",
    ],
    githubUrl: "https://github.com/DotJumpDot/PrismPioneer",
    images: ["/projects/prismpioneer-home.png", "/projects/prismpioneer-projects.png"],
    deploy: {
      database: "Supabase",
    },
  },
  {
    id: "stringextractor",
    title: "String Extractor",
    description:
      "VS Code extension to identify repeated string literals and improve code maintainability.",
    description_th: "ส่วนขยาย VS Code เพื่อระบุข้อความสตริงที่ซ้ำกันและปรับปรุงการบำรุงรักษาโค้ด",
    category: "VSCode Extension",
    date: "2026-01-27",
    featured: true,
    color: "#00FF00",
    icon: "code",
    techStack: ["TypeScript", "VS Code API", "Node.js"],
    longDescription:
      "A powerful code analysis tool that scans for repeated string literals across your codebase and suggests refactoring opportunities. The extension uses abstract syntax tree parsing to accurately identify string literals, supports multiple programming languages, and provides intelligent suggestions for extracting constants or creating translation keys.",
    longDescription_th:
      "เครื่องมือวิเคราะห์โค้ดที่ทรงพลังซึ่งสแกนหาข้อความสตริงที่ซ้ำกันทั่วทั้งโค้ดเบสของคุณและแนะนำโอกาสในการรีแฟคเตอร์ ส่วนขยายนี้ใช้การแยกวิเคราะห์แผนผังไวยากรณ์นามธรรม (AST) เพื่อระบุข้อความสตริงอย่างแม่นยำ รองรับภาษาโปรแกรมหลายภาษา และให้คำแนะนำอัจฉริยะสำหรับการแยกค่าคงที่หรือสร้างคีย์การแปล",
    implementation: [
      "Implemented AST-based string literal detection algorithm",
      "Created multi-language parser for JavaScript and TypeScript",
      "Built suggestion engine with context-aware refactoring recommendations",
      "Developed code action providers for one-click constant extraction",
      "Added ignore configuration for false positive handling",
      "Built extension with VS Code API for seamless integration",
    ],
    implementation_th: [
      "ใช้อัลกอริทึมตรวจจับข้อความสตริงตาม AST",
      "สร้างตัวแยกวิเคราะห์หลายภาษาสำหรับ JavaScript และ TypeScript",
      "สร้างเครื่องมือแนะนำพร้อมคำแนะนำการรีแฟคเตอร์ที่รับรู้บริบท",
      "พัฒนาผู้ให้บริการการกระทำของโค้ดสำหรับการแยกค่าคงที่ในคลิกเดียว",
      "เพิ่มการกำหนดค่าการเพิกเฉยสำหรับการจัดการผลบวกปลอม",
      "สร้างส่วนขยายด้วย VS Code API เพื่อการทำงานร่วมกันที่ราบรื่น",
    ],
    outcomes: [
      "Helped developers reduce code duplication on average",
      "Achieved positive user feedback and ratings",
    ],
    outcomes_th: [
      "ช่วยให้นักพัฒนาลดความซ้ำซ้อนของโค้ดโดยเฉลี่ย",
      "ได้รับผลตอบรับและการให้คะแนนจากผู้ใช้ในเชิงบวก",
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
    description_th:
      "ส่วนขยาย VS Code เพื่อแสดงภาพสี CSS แบบอินไลน์ในเอกสาร HTML พร้อมการเน้นพื้นหลังที่กำหนดค่าได้",
    category: "VSCode Extension",
    date: "2026-01-28",
    featured: true,
    color: "#FFD700",
    icon: "palette",
    techStack: ["TypeScript", "VS Code API", "Node.js", "CSS"],
    longDescription:
      "This VS Code extension transforms the development experience by providing real-time visualization of inline CSS colors directly in HTML documents. The extension intelligently parses color values, supports various color formats (hex, rgb, hsl, named colors), and offers customizable highlighting options including background color indicators, border previews, and color picker integration.",
    longDescription_th:
      "ส่วนขยาย VS Code นี้เปลี่ยนประสบการณ์การพัฒนาโดยให้การแสดงผลสี CSS แบบอินไลน์โดยตรงในเอกสาร HTML แบบเรียลไทม์ ส่วนขยายจะแยกวิเคราะห์ค่าสีอย่างชาญฉลาด รองรับรูปแบบสีต่างๆ (hex, rgb, hsl, สีที่มีชื่อ) และเสนอตัวเลือกการไฮไลต์ที่ปรับแต่งได้รวมถึงตัวบ่งชี้สีพื้นหลัง การแสดงตัวอย่างขอบ และการรวมตัวเลือกสี",
    implementation: [
      "Built color parsing engine supporting multiple color formats",
      "Implemented TextEditor decoration API for visual highlighting",
      "Created configuration system for customizable visualization preferences",
      "Added color picker integration for quick color modifications",
      "Optimized performance to handle large files without lag",
      "Built extension with VS Code API and Node.js runtime",
    ],
    implementation_th: [
      "สร้างเครื่องมือแยกวิเคราะห์สีที่รองรับรูปแบบสีหลายรูปแบบ",
      "ใช้ API การตกแต่ง TextEditor สำหรับการไฮไลต์ภาพ",
      "สร้างระบบการกำหนดค่าสำหรับการตั้งค่าการแสดงผลที่ปรับแต่งได้",
      "เพิ่มการรวมตัวเลือกสีสำหรับการแก้ไขสีอย่างรวดเร็ว",
      "เพิ่มประสิทธิภาพเพื่อจัดการไฟล์ขนาดใหญ่โดยไม่มีอาการกระตุก",
      "สร้างส่วนขยายด้วย VS Code API และรันไทม์ Node.js",
    ],
    outcomes: [
      "Published to VS Code Marketplace with positive user reception",
      "Maintained strong rating with positive user feedback",
    ],
    outcomes_th: [
      "เผยแพร่ไปยัง VS Code Marketplace พร้อมการตอบรับจากผู้ใช้ที่ดี",
      "รักษาคะแนนที่แข็งแกร่งพร้อมผลตอบรับจากผู้ใช้ในเชิงบวก",
    ],
    githubUrl: "https://github.com/DotJumpDot/ColorFlow",
    liveUrl: "https://marketplace.visualstudio.com/items?itemName=DotJumpDot.ColorFlow",
    images: ["/projects/colorflow-demo.png", "/projects/colorflow-settings.png"],
  },
  {
    id: "forsakenhunters",
    title: "Forsaken Hunters",
    description: "HTML/JavaScript game project using simpleGame.js custom framework.",
    description_th: "โปรเจกต์เกม HTML/JavaScript โดยใช้เฟรมเวิร์ก simpleGame.js ที่กำหนดเอง",
    category: "Game",
    date: "2026-01-29",
    featured: false,
    color: "#FF4444",
    icon: "gamepad",
    techStack: ["HTML5", "JavaScript", "simpleGame.js", "PNG sprites", "MP3 audio"],
    longDescription:
      "An engaging HTML/JavaScript game project built using the simpleGame.js custom framework. The game features sprite-based graphics, audio effects, and smooth gameplay mechanics. Built entirely with vanilla HTML5 and JavaScript for maximum browser compatibility.",
    longDescription_th:
      "โปรเจกต์เกม HTML/JavaScript ที่น่าดึงดูดใจซึ่งสร้างโดยใช้เฟรมเวิร์ก simpleGame.js ที่กำหนดเอง เกมมีกราฟิกแบบสไปรต์ เอฟเฟกต์เสียง และกลไกการเล่นเกมที่ราบรื่น สร้างขึ้นด้วย HTML5 และ JavaScript แบบวานิลลาทั้งหมดเพื่อความเข้ากันได้กับเบราว์เซอร์สูงสุด",
    implementation: [
      "Developed game using simpleGame.js custom framework",
      "Created sprite-based character and environment graphics",
      "Implemented MP3 audio system for sound effects",
      "Built responsive game mechanics with HTML5 canvas",
      "Optimized for smooth performance across browsers",
    ],
    implementation_th: [
      "พัฒนาเกมโดยใช้เฟรมเวิร์ก simpleGame.js ที่กำหนดเอง",
      "สร้างกราฟิกตัวละครและสภาพแวดล้อมแบบสไปรต์",
      "ใช้ระบบเสียง MP3 สำหรับเอฟเฟกต์เสียง",
      "สร้างกลไกเกมที่ตอบสนองด้วย HTML5 canvas",
      "เพิ่มประสิทธิภาพเพื่อประสิทธิภาพที่ราบรื่นในเบราว์เซอร์ต่างๆ",
    ],
    outcomes: [
      "Created fully functional game with custom framework",
      "Achieved smooth gameplay with sprite animations",
    ],
    outcomes_th: [
      "สร้างเกมที่ใช้งานได้เต็มรูปแบบด้วยเฟรมเวิร์กที่กำหนดเอง",
      "บรรลุการเล่นเกมที่ราบรื่นด้วยภาพเคลื่อนไหวสไปรต์",
    ],
    githubUrl: "https://github.com/DotJumpDot/ForsakenHunters",
    images: ["/projects/forsakenhunters-gameplay.png", "/projects/forsakenhunters-sprites.png"],
  },
  {
    id: "2048-boxbox",
    title: "2048_BoxBox",
    description: "HTML/JavaScript game project containing 4 puzzle games including 2048 variant.",
    description_th: "โปรเจกต์เกม HTML/JavaScript ที่มีเกมปริศนา 4 เกมรวมถึงรูปแบบ 2048",
    category: "Game",
    date: "2026-01-28",
    featured: false,
    color: "#4444FF",
    icon: "puzzle",
    techStack: ["HTML5", "JavaScript", "Puzzle games"],
    longDescription:
      "A collection of puzzle games built with HTML5 and JavaScript, featuring multiple game types including a 2048 variant and BoxBox. The games are designed with clean, intuitive interfaces and responsive layouts for play on any device.",
    longDescription_th:
      "คอลเลกชันเกมปริศนาที่สร้างด้วย HTML5 และ JavaScript มีเกมหลายประเภท รวมถึงรูปแบบต่างๆ ของ 2048 และ BoxBox เกมได้รับการออกแบบด้วยอินเทอร์เฟซที่สะอาด ใช้งานง่าย และเลย์เอาต์ที่ตอบสนองได้ดีสำหรับการเล่นบนทุกอุปกรณ์",
    implementation: [
      "Built multiple puzzle games with HTML5 and JavaScript",
      "Created 2048 variant with smooth tile animations",
      "Developed BoxBox game with unique mechanics",
      "Implemented responsive design for mobile and desktop",
      "Added save functionality and score tracking",
    ],
    implementation_th: [
      "สร้างเกมปริศนาหลายเกมด้วย HTML5 และ JavaScript",
      "สร้างรูปแบบ 2048 พร้อมภาพเคลื่อนไหวไทล์ที่ราบรื่น",
      "พัฒนาเกม BoxBox ด้วยกลไกที่ไม่เหมือนใคร",
      "ใช้การออกแบบที่ตอบสนองสำหรับมือถือและเดสก์ท็อป",
      "เพิ่มฟังก์ชันบันทึกและการติดตามคะแนน",
    ],
    outcomes: [
      "Created entertaining puzzle game collection",
      "Achieved smooth gameplay across all devices",
    ],
    outcomes_th: ["สร้างคอลเลกชันเกมปริศนาที่สนุกสนาน", "บรรลุการเล่นเกมที่ราบรื่นในทุกอุปกรณ์"],
    githubUrl: "https://github.com/DotJumpDot/2048_BoxBox",
    images: ["/projects/2048-gameplay.png", "/projects/boxbox-gameplay.png"],
  },
  {
    id: "softdev-dcoffee",
    title: "SoftDev Dcoffee Application",
    description: "Coffee ordering and management desktop application with full CRUD operations.",
    description_th: "แอปพลิเคชันเดสก์ท็อปสำหรับสั่งและจัดการกาแฟพร้อมการดำเนินการ CRUD เต็มรูปแบบ",
    category: "Desktop Application",
    date: "2024-05-15",
    featured: true,
    color: "#8B4513",
    icon: "coffee",
    techStack: ["Java", "SQLite", "Vuetify"],
    longDescription:
      "SoftDev Dcoffee Application is a desktop-based coffee ordering and management system built entirely with Java. The application provides comprehensive functionality for managing coffee products, processing orders, and maintaining customer data. Built with SQLite for reliable local data storage and clean Java Swing-based user interface with Vuetify components.",
    longDescription_th:
      "SoftDev Dcoffee Application เป็นระบบจัดการและสั่งกาแฟบนเดสก์ท็อปที่สร้างขึ้นด้วย Java ทั้งหมด แอปพลิเคชันมีฟังก์ชันการทำงานที่ครอบคลุมสำหรับการจัดการผลิตภัณฑ์กาแฟ การประมวลผลคำสั่งซื้อ และการดูแลรักษาข้อมูลลูกค้า สร้างด้วย SQLite สำหรับการจัดเก็บข้อมูลในเครื่องที่เชื่อถือได้และอินเทอร์เฟซผู้ใช้ที่สะอาดตาโดยใช้ Java Swing ร่วมกับส่วนประกอบ Vuetify",
    implementation: [
      "Developed desktop application using Java with Swing framework and Vuetify components",
      "Implemented SQLite database for local data persistence",
      "Created full CRUD operations for products, orders, and customers",
      "Built responsive UI with Java Swing components",
      "Designed efficient database schema for coffee management",
      "Implemented order tracking and inventory management system",
    ],
    implementation_th: [
      "พัฒนาแอปพลิเคชันเดสก์ท็อปโดยใช้ Java พร้อมเฟรมเวิร์ก Swing และส่วนประกอบ Vuetify",
      "ใช้ฐานข้อมูล SQLite สำหรับการคงอยู่ของข้อมูลในเครื่อง",
      "สร้างการดำเนินการ CRUD เต็มรูปแบบสำหรับผลิตภัณฑ์ คำสั่งซื้อ และลูกค้า",
      "สร้าง UI ที่ตอบสนองด้วยส่วนประกอบ Java Swing",
      "ออกแบบสคีมาฐานข้อมูลที่มีประสิทธิภาพสำหรับการจัดการกาแฟ",
      "ใช้ระบบติดตามคำสั่งซื้อและการจัดการสินค้าคงคลัง",
    ],
    outcomes: [
      "Created fully functional desktop coffee management system",
      "Achieved reliable data storage with SQLite",
      "Provided intuitive user interface for daily operations",
    ],
    outcomes_th: [
      "สร้างระบบจัดการกาแฟบนเดสก์ท็อปที่ใช้งานได้เต็มรูปแบบ",
      "บรรลุการจัดเก็บข้อมูลที่เชื่อถือได้ด้วย SQLite",
      "มอบอินเทอร์เฟซผู้ใช้ที่ใช้งานง่ายสำหรับการดำเนินงานประจำวัน",
    ],
    gitlabUrl: "https://gitlab.com/softdev_65160309/termproject_softdev",
    images: ["/projects/softdev-dcoffee-ui.png", "/projects/softdev-dcoffee-order.png"],
  },
  {
    id: "topten-dcoffee",
    title: "Topten Dcoffee Web-Application",
    description: "Web-based coffee ordering platform with dual database support.",
    description_th: "แพลตฟอร์มสั่งกาแฟบนเว็บพร้อมการรองรับฐานข้อมูลคู่",
    category: "Web Application",
    date: "2024-03-12",
    featured: true,
    color: "#D2691E",
    icon: "globe",
    techStack: ["Vue", "NestJS", "MySQL", "SQLite", "TypeScript", "Vuetify"],
    longDescription:
      "Topten Dcoffee Web-Application is a modern web-based coffee ordering platform featuring dual database support for flexibility. The application provides seamless online ordering experience with real-time inventory management. Built with Vue.js and Vuetify for frontend, NestJS for backend, supporting both MySQL and SQLite databases.",
    longDescription_th:
      "Topten Dcoffee Web-Application เป็นแพลตฟอร์มสั่งกาแฟบนเว็บที่ทันสมัยซึ่งมีการรองรับฐานข้อมูลคู่เพื่อความยืดหยุ่น แอปพลิเคชันมอบประสบการณ์การสั่งซื้อออนไลน์ที่ราบรื่นพร้อมการจัดการสินค้าคงคลังแบบเรียลไทม์ สร้างด้วย Vue.js และ Vuetify สำหรับส่วนหน้า, NestJS สำหรับส่วนหลัง, รองรับทั้งฐานข้อมูล MySQL และ SQLite",
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
    implementation_th: [
      "สร้างส่วนหน้าด้วย Vue.js และ Vuetify สำหรับอินเทอร์เฟซผู้ใช้ที่ตอบสนอง",
      "พัฒนา API ส่วนหลังด้วยเฟรมเวิร์ก NestJS",
      "ใช้การรองรับฐานข้อมูลคู่ (MySQL และ SQLite)",
      "สร้างจุดสิ้นสุด RESTful API สำหรับการดำเนินการทั้งหมด",
      "สร้างระบบจัดการคำสั่งซื้อพร้อมการอัปเดตแบบเรียลไทม์",
      "ใช้การตรวจสอบสิทธิ์และการอนุญาตผู้ใช้",
      "ออกแบบ UI ที่ตอบสนองด้วยส่วนประกอบ Vuetify สำหรับมือถือและเดสก์ท็อป",
      "เพิ่มฟีเจอร์การติดตามสินค้าคงคลังและการรายงาน",
    ],
    outcomes: [
      "Created seamless web-based coffee ordering platform",
      "Achieved flexible database architecture",
      "Provided excellent user experience across devices",
    ],
    outcomes_th: [
      "สร้างแพลตฟอร์มสั่งกาแฟบนเว็บที่ราบรื่น",
      "บรรลุสถาปัตยกรรมฐานข้อมูลที่ยืดหยุ่น",
      "มอบประสบการณ์ผู้ใช้ที่ยอดเยี่ยมในทุกอุปกรณ์",
    ],
    gitlabUrl: "https://gitlab.com/softdev_65160293/webpro/topten-dcoffee-project",
    images: ["/projects/topten-dcoffee-home.png", "/projects/topten-dcoffee-order.png"],
  },
  {
    id: "vhealth",
    title: "VHealth",
    description: "Health management web application with MongoDB database.",
    description_th: "แอปพลิเคชันเว็บการจัดการสุขภาพพร้อมฐานข้อมูล MongoDB",
    category: "Web Application",
    date: "2025-10-10",
    featured: true,
    color: "#32CD32",
    icon: "heart",
    techStack: ["Quasar", "NestJS", "MongoDB", "TypeScript"],
    longDescription:
      "VHealth is a comprehensive health management web application designed to help users track their health metrics and medical records. The application features a modern Quasar-based frontend with NestJS backend and MongoDB for flexible data storage. Successfully deployed with Netlify for frontend, Railway for backend, and Atlas for database.",
    longDescription_th:
      "VHealth เป็นเว็บแอปพลิเคชันการจัดการสุขภาพที่ครอบคลุมซึ่งออกแบบมาเพื่อช่วยให้ผู้ใช้ติดตามตัวชี้วัดสุขภาพและประวัติทางการแพทย์ของตน แอปพลิเคชันมีส่วนหน้าแบบ Quasar ที่ทันสมัยพร้อมส่วนหลัง NestJS และ MongoDB สำหรับการจัดเก็บข้อมูลที่ยืดหยุ่น ปรับใช้สำเร็จด้วย Netlify สำหรับส่วนหน้า, Railway สำหรับส่วนหลัง และ Atlas สำหรับฐานข้อมูล",
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
    implementation_th: [
      "สร้างส่วนหน้าที่ตอบสนองด้วยเฟรมเวิร์ก Quasar",
      "พัฒนา API ส่วนหลังด้วย NestJS",
      "ใช้ฐานข้อมูล MongoDB สำหรับการจัดเก็บประวัติสุขภาพ",
      "สร้างฟีเจอร์การติดตามสุขภาพที่ครอบคลุม",
      "สร้างการยืนยันตัวตนผู้ใช้และการจัดการข้อมูลที่ปลอดภัย",
      "ออกแบบแดชบอร์ดที่ใช้งานง่ายสำหรับตัวชี้วัดสุขภาพ",
      "ใช้ฟีเจอร์การรายงานและการวิเคราะห์",
      "ปรับใช้ส่วนหน้าไปยัง Netlify, ส่วนหลังไปยัง Railway และฐานข้อมูลไปยัง Atlas",
    ],
    outcomes: [
      "Created comprehensive health management platform",
      "Achieved successful deployment on Netlify, Railway, and Atlas",
      "Provided secure and efficient health data management",
    ],
    outcomes_th: [
      "สร้างแพลตฟอร์มการจัดการสุขภาพที่ครอบคลุม",
      "บรรลุการปรับใช้ที่ประสบความสำเร็จบน Netlify, Railway และ Atlas",
      "มอบการจัดการข้อมูลสุขภาพที่ปลอดภัยและมีประสิทธิภาพ",
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
