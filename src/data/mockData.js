export const INITIAL_PROJECTS = [
  {
    id: "doctor-ai",
    name: "Doctor AI",
    tagline: "Intelligent Healthcare & Medical Workflow Assistance Platform",
    category: "AI Applications",
    problem: "Healthcare providers and patients face significant friction, fragmented diagnostic record management, and delayed clinical triage response times.",
    solution: "An end-to-end AI platform that parses symptom patterns, streamlines patient-doctor interaction, automates clinical summary notes, and provides real-time triage guidance.",
    features: [
      "AI Symptom & Clinical Triage Engine",
      "Automated Medical Record Parsing & Summary",
      "Patient & Doctor Interactive Dashboards",
      "HIPAA-Compliant Encrypted Telehealth Workflow",
      "Multi-lingual Voice & Text Interface"
    ],
    techStack: ["React", "Node.js", "Python", "OpenAI / Claude API", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/kryptonode-tech/doctor-ai",
    liveDemo: "https://doctor-ai.kryptonode.dev",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    badge: "Featured AI Product",
    status: "Production Ready",
    featured: true,
    published: true,
    caseStudy: "Doctor AI reduced administrative note-taking time by 45% for partner clinics while giving patients instant initial guidance on non-emergency symptoms."
  },
  {
    id: "ewos",
    name: "EWOS (Essence Wholesale Ordering System)",
    tagline: "Enterprise Wholesale Ordering, Inventory & Multi-Branch Admin Platform",
    category: "Business Software",
    problem: "Wholesale distributors often struggle with manual order placement, inventory sync across multiple warehouses, and delayed payment reconciliations.",
    solution: "A unified B2B web and mobile ordering ecosystem designed for high-volume wholesale operations, featuring real-time stock sync, tier pricing, and automated dispatch.",
    features: [
      "Dynamic B2B Tiered Pricing Engine",
      "Real-time Multi-Warehouse Inventory Sync",
      "Custom Order Approval & Bulk Dispatch Workflows",
      "Interactive Admin & Branch Management Portal",
      "Automated GST & Billing Invoice Generator"
    ],
    techStack: ["React", "Express.js", "MongoDB", "Java Backend", "Tailwind CSS", "PDFKit"],
    github: "https://github.com/kryptonode-tech/ewos-system",
    liveDemo: "https://ewos.kryptonode.dev",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    badge: "Enterprise Solution",
    status: "Deployed in Production",
    featured: true,
    published: true,
    caseStudy: "EWOS automated order processing for wholesale distribution networks, handling over 10,000 monthly transactions with zero stock mismatch errors."
  },
  {
    id: "skilltracker",
    name: "SkillTracker",
    tagline: "Developer Skill Analytics, Progress Dashboard & Career Matrix",
    category: "Web Applications",
    problem: "Students, engineering teams, and interns lack a quantitative, visual way to measure technical skill acquisition, coding milestone progress, and project verification.",
    solution: "SkillTracker provides automated GitHub activity tracking, radar charts of skill domains, task completion validation, and personalized learning pathways.",
    features: [
      "Automated GitHub & Commit Velocity Sync",
      "Interactive Skill Radar & Domain Metrics",
      "Project Verification & Badge System",
      "Mentor Code Review & Feedback Workflow",
      "Shareable Verified Skill Certificate URL"
    ],
    techStack: ["React", "JavaScript", "Node.js", "Firebase", "Chart.js", "Tailwind CSS"],
    github: "https://github.com/kryptonode-tech/skill-tracker",
    liveDemo: "https://skilltracker.kryptonode.dev",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    badge: "EdTech Platform",
    status: "Active MVP",
    featured: true,
    published: true,
    caseStudy: "Used by tech interns to log learning milestones, review code pull requests, and showcase verified proof of work."
  }
];

export const INITIAL_TEAM = [
  {
    id: "thamizhprabha",
    name: "Thamizhprabha",
    role: "Technology / Product / Development",
    phone: "8668109481",
    bio: "Passionate about building scalable digital products, AI architecture, and empowering startups with modern web & cloud technology.",
    skills: ["Full Stack Architecture", "AI Integration", "Product Strategy", "React / Node.js"],
    github: "https://github.com/thamizhprabha",
    linkedin: "https://linkedin.com/in/thamizhprabha",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    published: true
  },
  {
    id: "danish-kumar",
    name: "Danish Kumar",
    role: "Technology / Development",
    phone: "9361215922",
    bio: "Specializing in high-performance backend systems, database optimization, and cross-platform mobile application engineering.",
    skills: ["Backend Systems", "Java / Node.js", "Database Design", "Mobile Dev"],
    github: "https://github.com/danishkumar",
    linkedin: "https://linkedin.com/in/danishkumar",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    published: true
  },
  {
    id: "sarveshkumar",
    name: "Sarveshkumar",
    role: "Technology / Development",
    phone: "9150185160",
    bio: "Focused on intuitive frontend user interfaces, smooth micro-interactions, responsive design systems, and startup web apps.",
    skills: ["React UI/UX", "Tailwind CSS", "JavaScript", "Cloud Deployment"],
    github: "https://github.com/sarveshkumar",
    linkedin: "https://linkedin.com/in/sarveshkumar",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    published: true
  }
];

export const TECHNOLOGIES_MASTERED = [
  {
    category: "Frontend & Mobile",
    items: [
      { name: "React.js", level: "Production Mastered", desc: "Component architecture, hooks, state management, and modern SPA performance.", badge: "Core Stack" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Asynchronous patterns, DOM APIs, modern ESNext capabilities, and clean code principles.", badge: "Foundation" },
      { name: "HTML5 & CSS3", level: "Expert", desc: "Semantic structure, accessible accessibility (a11y), responsive CSS Grid and Flexbox layouts.", badge: "Foundation" },
      { name: "Tailwind CSS", level: "Production Mastered", desc: "Utility-first design systems, dark modes, glassmorphism, and custom component tokens.", badge: "Styling System" },
      { name: "Vite", level: "Expert", desc: "Ultra-fast module bundling, HMR, asset optimization, and production build tooling.", badge: "Build Tooling" },
      { name: "React Native", level: "Production Ready", desc: "Cross-platform Android & iOS mobile applications with native device capabilities.", badge: "Mobile" }
    ]
  },
  {
    category: "Backend & Microservices",
    items: [
      { name: "Node.js", level: "Enterprise Grade", desc: "Event-driven asynchronous server runtimes, stream processing, and REST APIs.", badge: "Runtime Engine" },
      { name: "Express.js", level: "Production Mastered", desc: "Robust API routing, authentication middleware, error handling, and rate limiting.", badge: "Framework" },
      { name: "Java & Spring Boot", level: "Enterprise Grade", desc: "OOP design, enterprise microservices, robust multithreading, and secure APIs.", badge: "Enterprise Backend" },
      { name: "RESTful APIs & GraphQL", level: "Advanced", desc: "Scalable endpoint contracts, JSON schemas, payload compression, and query efficiency.", badge: "Data Protocol" }
    ]
  },
  {
    category: "Database & Cloud Storage",
    items: [
      { name: "MongoDB", level: "Production Mastered", desc: "NoSQL document store, aggregation pipelines, schema validation, and indexing.", badge: "Primary Database" },
      { name: "Firebase", level: "Expert", desc: "Realtime database, Cloud Firestore, authentication services, and edge hosting.", badge: "BaaS" },
      { name: "PostgreSQL & SQL", level: "Advanced", desc: "Relational database modeling, complex JOIN queries, ACID transactions, and indexing.", badge: "Relational DB" },
      { name: "Redis", level: "Production Ready", desc: "In-memory caching layer, session storage, and fast key-value data structures.", badge: "Cache Engine" }
    ]
  },
  {
    category: "AI & Intelligent Automation",
    items: [
      { name: "OpenAI & Claude APIs", level: "Cutting-Edge", desc: "LLM integration, automated document parsing, symptom triage engines, and chatbots.", badge: "AI APIs" },
      { name: "Gemini API", level: "Cutting-Edge", desc: "Multimodal AI processing, vision analysis, and real-time prompt pipelines.", badge: "AI Engine" },
      { name: "Prompt Engineering", level: "Expert", desc: "Structured system prompts, JSON mode enforcement, few-shot prompting, and guardrails.", badge: "AI Optimization" },
      { name: "Intelligent Workflows", level: "Production Mastered", desc: "Automating manual business tasks, data extraction, and clinical summary notes.", badge: "Automation" }
    ]
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git & GitHub", level: "Production Mastered", desc: "Version control, feature branching, pull request reviews, and GitHub Actions CI/CD.", badge: "Version Control" },
      { name: "VS Code", level: "Expert", desc: "Integrated development workspace, debugging suites, extensions, and code linting.", badge: "IDE Workspace" },
      { name: "Figma", level: "Advanced", desc: "UI/UX wireframing, component design systems, and interactive product prototypes.", badge: "UI/UX Design" },
      { name: "Vercel & Cloud Deploy", level: "Production Mastered", desc: "Global edge CDN deployment, zero-downtime releases, and environment configuration.", badge: "Cloud Hosting" }
    ]
  }
];

export const SERVICES_LIST = [
  {
    id: "web-dev",
    title: "Website Development",
    subtitle: "High-performance, visually stunning web applications and platforms.",
    icon: "Globe",
    projectType: "Website",
    items: [
      "Modern Business Websites",
      "Portfolio & Showcase Sites",
      "High-converting Landing Pages",
      "Full E-commerce Platforms",
      "Custom SaaS & Web Applications"
    ],
    description: "We craft responsive, lightning-fast web applications built on modern frameworks (React, Vite, Next.js) tailored for maximum engagement, accessibility, and conversion."
  },
  {
    id: "app-dev",
    title: "Mobile App Development",
    subtitle: "Native & cross-platform applications built for scale.",
    icon: "Smartphone",
    projectType: "Mobile App",
    items: [
      "Android Mobile Applications",
      "Cross-Platform Apps (React Native / Flutter)",
      "Business & Customer Apps",
      "Admin & Fleet Management Apps",
      "Offline-first Mobile Solutions"
    ],
    description: "Deliver flawless mobile experiences to your users on Android and iOS with real-time sync, offline caching, push notifications, and secure authentication."
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    subtitle: "Automate processes and build intelligent AI-driven products.",
    icon: "Cpu",
    projectType: "AI Application",
    items: [
      "Custom AI Assistants & Chatbots",
      "LLM & API Integration (OpenAI, Claude, Gemini)",
      "Intelligent Process Automation",
      "AI-Powered Web & Mobile Apps",
      "Smart Dashboards & Predictive Analytics"
    ],
    description: "Incorporate state-of-the-art artificial intelligence into your business workflow to reduce manual labor, enhance user experience, and extract deep insights from data."
  },
  {
    id: "business-software",
    title: "Business Software",
    subtitle: "Tailored management tools and enterprise automation systems.",
    icon: "Layers",
    projectType: "Business Software",
    items: [
      "Wholesale & Retail Ordering Systems",
      "Inventory & Supply Chain Systems",
      "CRM & Customer Portals",
      "Custom Admin & BI Dashboards",
      "Workflow Automation Platforms"
    ],
    description: "Replace messy spreadsheets with custom, secure internal software designed to streamline operations, manage inventory, track sales, and boost team productivity."
  },
  {
    id: "startup-dev",
    title: "Startup Development",
    subtitle: "Complete MVP build from zero to market launch.",
    icon: "Rocket",
    projectType: "Startup MVP",
    items: [
      "Idea Validation & Architecture Plan",
      "Rapid MVP Development (Web & Mobile)",
      "UI/UX Wireframing & Prototyping",
      "Scalable Cloud & Database Setup",
      "Launch Support & Growth Architecture"
    ],
    description: "We partner with ambitious founders to turn raw ideas into working, market-ready MVPs fast without sacrificing code quality or security."
  }
];

export const WHAT_WE_BUILD = [
  {
    id: "web-sites",
    title: "Websites",
    desc: "Modern, responsive business and personal websites engineered for speed, SEO, and conversion.",
    icon: "Globe",
    projectType: "Website"
  },
  {
    id: "web-apps",
    title: "Web Applications",
    desc: "Custom full-stack web applications, dynamic user portals, and real-time operational dashboards.",
    icon: "Code2",
    projectType: "Web Application"
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    desc: "Cross-platform and native mobile applications for Android and iOS with offline support.",
    icon: "Smartphone",
    projectType: "Mobile App"
  },
  {
    id: "ai-products",
    title: "AI Products",
    desc: "AI-powered applications, custom assistants, prompt pipelines, and intelligent workflow automation.",
    icon: "Cpu",
    projectType: "AI Application"
  },
  {
    id: "business-systems",
    title: "Business Systems",
    desc: "Custom software for business operations, wholesale inventory, CRM, and internal workflows.",
    icon: "Layers",
    projectType: "Business Software"
  },
  {
    id: "startup-mvps",
    title: "Startup MVPs",
    desc: "Rapid end-to-end MVP development from raw concept validation to production launch.",
    icon: "Rocket",
    projectType: "Startup MVP"
  }
];

export const HOW_WE_BUILD = [
  { step: "01", title: "Discover", desc: "Understand the core business problem, target users, and technical goals." },
  { step: "02", title: "Plan", desc: "Define precise requirements, user flows, database architecture, and project scope." },
  { step: "03", title: "Design", desc: "Craft intuitive UI/UX design systems, component libraries, and visual prototypes." },
  { step: "04", title: "Develop", desc: "Build scalable frontend code, robust backend microservices, and secure APIs." },
  { step: "05", title: "Test", desc: "Rigorous testing for functionality, security, performance, and cross-browser stability." },
  { step: "06", title: "Deploy", desc: "Deploy infrastructure to production cloud servers with monitoring telemetry." },
  { step: "07", title: "Improve", desc: "Continuous post-launch maintenance, user feedback iteration, and platform scale." }
];

export const INTERNSHIP_TRACKS = [
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    duration: "4 - 8 Weeks",
    level: "Beginner to Intermediate",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "Git"],
    description: "Master end-to-end web application development by building real client-level web projects from scratch."
  },
  {
    id: "mern",
    title: "MERN Stack Specialist",
    duration: "6 - 8 Weeks",
    level: "Intermediate",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT Auth"],
    description: "Dive deep into MERN stack architecture, state management, database schema design, and deployment."
  },
  {
    id: "java",
    title: "Java Enterprise Development",
    duration: "4 - 8 Weeks",
    level: "Beginner to Advanced",
    skills: ["Java Core", "Spring Boot", "OOP Concepts", "MySQL", "RESTful Web Services"],
    description: "Learn enterprise-grade Java development, backend API design, relational database integration, and OOP practices."
  },
  {
    id: "ai-dev",
    title: "AI Application Development",
    duration: "6 - 8 Weeks",
    level: "Intermediate to Advanced",
    skills: ["Python", "AI APIs", "LangChain / OpenAI", "Prompt Engineering", "FastAPI"],
    description: "Learn to build modern AI-powered applications, custom assistants, prompt pipelines, and intelligent interfaces."
  },
  {
    id: "uiux",
    title: "UI/UX & Product Design",
    duration: "4 - 6 Weeks",
    level: "All Levels",
    skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems"],
    description: "Design intuitive visual interfaces, interactive prototypes, micro-interactions, and modern design systems."
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    duration: "6 - 8 Weeks",
    level: "Intermediate",
    skills: ["React Native", "Android Fundamentals", "API Integration", "State Management"],
    description: "Build sleek, responsive mobile apps for Android with native components, navigation, and API data feeds."
  },
  {
    id: "backend-db",
    title: "Database & Backend Engineering",
    duration: "4 - 8 Weeks",
    level: "Intermediate",
    skills: ["Node.js", "SQL & NoSQL", "API Security", "Docker Basics", "Cloud Hosting"],
    description: "Focus on robust backend architectures, query optimization, database design, and secure authentication flows."
  }
];

export const TECH_WALL = [
  { category: "Frontend", items: ["React.js", "JavaScript (ES6+)", "HTML5 / Semantic", "CSS3 / Vanilla", "Tailwind CSS", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express.js", "Java / Spring", "REST APIs", "GraphQL"] },
  { category: "Database", items: ["MongoDB", "Firebase", "PostgreSQL", "Redis"] },
  { category: "AI & ML", items: ["OpenAI API", "Claude / Anthropic", "Gemini API", "Prompt Engineering", "Custom Workflows"] },
  { category: "Tools & DevOps", items: ["Git", "GitHub", "Figma", "VS Code", "Vercel", "Docker Basics"] }
];

export const INITIAL_LEADS = [
  {
    id: "lead-1",
    refId: "KN-849201",
    name: "Rajesh Sharma",
    email: "rajesh@techventure.in",
    phone: "+91 98765 43210",
    company: "TechVenture India",
    projectType: "Startup MVP",
    projectName: "LogiQuick Logistics App",
    idea: "On-demand hyper-local fleet dispatch platform for tier-2 cities.",
    features: "Driver app, Customer tracking, Admin dispatch dashboard, Automated billing",
    targetUsers: "Local merchants and delivery drivers",
    stage: "Idea & Wireframe",
    budgetRange: "₹50,000 – ₹1,00,000",
    timeline: "1–2 Months",
    referenceLink: "https://example-logistics.com",
    message: "We need a complete MVP build for our logistics delivery startup within 6 weeks.",
    status: "New",
    sourcePage: "Home Page",
    date: "2026-09-14",
    notes: "Requires mobile app and admin dashboard."
  },
  {
    id: "lead-2",
    refId: "KN-392014",
    name: "Ananya Roy",
    email: "ananya@healthconnect.io",
    phone: "+91 91234 56789",
    company: "HealthConnect",
    projectType: "AI Application",
    projectName: "Clinical Notes Summarizer",
    idea: "AI assistant for doctor consultation note extraction.",
    features: "Voice parsing, ICD-10 tagging, automated PDF report generation",
    targetUsers: "Private clinic practitioners",
    stage: "Concept Validation",
    budgetRange: "₹1,00,000+",
    timeline: "2–3 Months",
    referenceLink: "",
    message: "Looking for an AI integration for patient appointments and prescription summary.",
    status: "Discussion",
    sourcePage: "AI Solutions",
    date: "2026-09-12",
    notes: "Discussed initial scope call with team."
  }
];

export const INITIAL_APPLICANTS = [
  {
    id: "app-1",
    fullName: "Priya V",
    email: "priya.v@gmail.com",
    phone: "+91 94444 12345",
    college: "Anna University",
    degree: "B.E. Computer Science",
    department: "Computer Science",
    year: "3rd Year",
    track: "Full-Stack Web Development",
    skills: "React, JavaScript, HTML, CSS, Git",
    github: "https://github.com/priyav-dev",
    portfolio: "https://priyav.dev",
    reason: "Eager to gain practical startup experience and work on real client web applications.",
    resumeName: "Priya_V_Resume_2026.pdf",
    status: "New",
    date: "2026-09-13",
    notes: "Good GitHub commit history."
  },
  {
    id: "app-2",
    fullName: "Karthik R",
    email: "karthik.r@srmist.edu.in",
    phone: "+91 98888 67890",
    college: "SRM Institute of Science and Technology",
    degree: "B.Tech IT",
    department: "Information Technology",
    year: "4th Year",
    track: "AI Application Development",
    skills: "Python, OpenAI API, JavaScript",
    github: "https://github.com/karthik-ai",
    portfolio: "",
    reason: "Want to learn custom prompt engineering and LLM integrations in production.",
    resumeName: "Karthik_R_Resume.pdf",
    status: "Reviewed",
    date: "2026-09-11",
    notes: "Shortlisted for technical review call."
  }
];
