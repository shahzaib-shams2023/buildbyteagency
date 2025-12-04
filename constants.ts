import { NavLink, ServiceItem, Testimonial, EngagementModel, CaseStudyData, DetailedServiceItem, PortfolioItem, BlogPost, ServiceGroup } from './types';
import { 
  Globe, Smartphone, Cloud, Bot, Server, Database, 
  Terminal, ShieldCheck, Zap, Code, GitBranch, Layout, Monitor, Cpu, Layers, Box,
  ShoppingBag, FileCode, Tablet, HardDrive, Share2, Lock
} from 'lucide-react';

export const COMPANY_NAME = "BuiltByTeAgency";
export const CONTACT_EMAIL = "hello@builtbyteagency.com";
export const CONTACT_PHONE = "+92-300-1234567"; // Placeholder

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const TRUST_METRICS = [
  { label: "Years building production systems", value: "10+" },
  { label: "Clients across SaaS, Finance, Logistics", value: "50+" },
  { label: "Uptime architectures delivered", value: "99.99%" },
];

export const PROBLEMS = [
  "Legacy systems that block new features.",
  "Unreliable deployments causing customer downtime.",
  "Overly complex code that’s hard to change.",
];

export const CORE_SERVICES: ServiceItem[] = [
  { title: "Web Development", description: "Fast, SEO-ready, componentized frontends.", icon: Globe },
  { title: "Mobile Apps", description: "Native & cross-platform with offline-first sync.", icon: Smartphone },
  { title: "Cloud & DevOps", description: "Auto-scaling, cost-optimized environments.", icon: Cloud },
  { title: "AI & ML", description: "Predictive models and automation pipelines.", icon: Bot },
  { title: "API & Integrations", description: "Secure, versioned APIs.", icon: Server },
  { title: "Database Management", description: "Scalable schemas and backups.", icon: Database },
];

export const SERVICE_MENU_GROUPS: ServiceGroup[] = [
  {
    title: "Frontend & Web",
    mainServiceId: "web-development",
    items: ["react-development", "nextjs-development", "angular-development", "vue-development"]
  },
  {
    title: "Backend & CMS",
    mainServiceId: "custom-software",
    items: ["node-backend", "laravel-development", "dotnet-solutions", "wordpress-solutions", "shopify-development"]
  },
  {
    title: "Mobile Platforms",
    mainServiceId: "mobile-app-development",
    items: ["flutter-apps", "react-native-apps", "ios-swift", "android-kotlin"]
  },
  {
    title: "Cloud & Advanced",
    mainServiceId: "cloud-computing",
    items: ["aws-solutions", "azure-solutions", "gcp-solutions", "ai-machine-learning", "devops-pipelines"]
  },
];

export const DETAILED_SERVICES: DetailedServiceItem[] = [
  // --- WEB GROUP: FRONTEND ---
  {
    id: "web-development",
    title: "Web Development",
    group: "Frontend & Web",
    purpose: "Build fast, scalable, SEO-ready web systems.",
    deliverables: "Responsive interfaces, modular components, API-driven backends.",
    tech: "Angular, React, Vue, Node, .NET, Laravel",
    outcome: "New customer portal with simplified workflows.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
    keyFeatures: [
      "Component-based Architecture",
      "Server-Side Rendering (SSR) for Speed",
      "Progressive Web App (PWA) Capabilities",
      "High Performance & Core Web Vitals Optimization"
    ],
    perfectFor: [
      "SaaS Platforms",
      "E-commerce Stores",
      "Corporate Portals",
      "Complex Admin Dashboards"
    ],
    whyChoose: [
      "Clean, Maintainable Codebase",
      "SEO-First Approach",
      "Strict Accessibility Compliance"
    ]
  },
  {
    id: "react-development",
    title: "React Development",
    group: "Frontend & Web",
    purpose: "Create dynamic, interactive single-page applications.",
    deliverables: "Custom React components, State management (Redux/Zustand), API integration.",
    tech: "React, TypeScript, Redux, React Query, Tailwind",
    outcome: "Highly responsive user interface with instant transitions.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    keyFeatures: [
      "Virtual DOM Optimization",
      "Reusable Component Library",
      "Complex State Management",
      "Unit & Integration Testing"
    ],
    perfectFor: [
      "Interactive Dashboards",
      "Social Media Platforms",
      "Data Visualization Tools",
      "Real-time Chat Apps"
    ],
    whyChoose: [
      "Senior React Specialists",
      "Performance-focused Architecture",
      "Modern Hook-based Patterns"
    ]
  },
  {
    id: "nextjs-development",
    title: "Next.js Solutions",
    group: "Frontend & Web",
    purpose: "SEO-optimized, server-rendered applications for maximum performance.",
    deliverables: "SSR/SSG architecture, API routes, optimized images.",
    tech: "Next.js, Vercel, Edge Functions, TypeScript",
    outcome: "Perfect lighthouse scores and instant page loads.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop",
    keyFeatures: [
      "Server-Side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "Automatic Image Optimization",
      "Edge Middleware"
    ],
    perfectFor: [
      "Marketing Websites",
      "E-commerce Storefronts",
      "Content Heavy Portals",
      "Global SaaS Products"
    ],
    whyChoose: [
      "SEO Dominance",
      "Global Edge Caching",
      "Rapid Development Cycles"
    ]
  },
  {
    id: "angular-development",
    title: "Angular Development",
    group: "Frontend & Web",
    purpose: "Enterprise-grade scalable web applications with structured architecture.",
    deliverables: "Modular architecture, RxJS state management, TypeScript implementation.",
    tech: "Angular 14+, RxJS, NgRx, TypeScript",
    outcome: "Robust, enterprise-ready application with strict typing.",
    icon: Box,
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop",
    keyFeatures: [
      "Two-way Data Binding",
      "Dependency Injection",
      "Modular Component Structure",
      "Powerful CLI Tools"
    ],
    perfectFor: [
      "Large Enterprise Systems",
      "Banking & Finance Apps",
      "Complex Logistics Dashboards",
      "Long-term Maintenance Projects"
    ],
    whyChoose: [
      "Opinionated & Structured Framework",
      "Google-backed Long Term Support",
      "Excellent for large teams"
    ]
  },
  {
    id: "vue-development",
    title: "Vue.js Development",
    group: "Frontend & Web",
    purpose: "Progressive, lightweight, and flexible user interfaces.",
    deliverables: "Vue 3 Composition API, Pinia state management, Nuxt.js integration.",
    tech: "Vue.js, Nuxt.js, Pinia, Vite",
    outcome: "Lightweight, fast-loading application with gentle learning curve.",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
    keyFeatures: [
      "Lightweight Virtual DOM",
      "Reactive Data Binding",
      "Single-File Components",
      "Versatile Ecosystem"
    ],
    perfectFor: [
      "Single Page Applications",
      "Interactive Widgets",
      "Prototyping & MVPs",
      "Medium-scale SaaS"
    ],
    whyChoose: [
      "Fastest Rendering Performance",
      "Easy Integration with existing projects",
      "Flexible Architecture"
    ]
  },

  // --- WEB GROUP: BACKEND & CMS ---
  {
    id: "node-backend",
    title: "Node.js Backend",
    group: "Backend & CMS",
    purpose: "Scalable, event-driven backends for high-concurrency applications.",
    deliverables: "REST/GraphQL APIs, Microservices, Real-time sockets.",
    tech: "Node.js, Express, NestJS, Socket.io",
    outcome: "Backend handling 10k+ concurrent connections seamlessly.",
    icon: Server,
    image: "https://images.unsplash.com/photo-1627398242450-8df410321d42?q=80&w=2070&auto=format&fit=crop",
    keyFeatures: [
      "Non-blocking I/O Architecture",
      "Microservices Support",
      "Real-time Event Processing",
      "Horizontal Scaling"
    ],
    perfectFor: [
      "Streaming Services",
      "Real-time Collaboration Tools",
      "API Gateways",
      "IoT Data Processing"
    ],
    whyChoose: [
      "High Throughput Performance",
      "Unified JavaScript Stack",
      "Robust Security Patterns"
    ]
  },
  {
    id: "laravel-development",
    title: "Laravel Development",
    group: "Backend & CMS",
    purpose: "Elegant PHP framework for rapid, secure, and robust web applications.",
    deliverables: "Custom web apps, REST APIs, Admin panels, SaaS backends.",
    tech: "Laravel, PHP 8+, MySQL, Redis, Livewire",
    outcome: "Secure, full-featured web application launched in record time.",
    icon: FileCode,
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97663?q=80&w=2070&auto=format&fit=crop",
    keyFeatures: [
      "MVC Architecture Pattern",
      "Eloquent ORM",
      "Built-in Authentication & Security",
      "Task Scheduling & Queues"
    ],
    perfectFor: [
      "B2B SaaS Platforms",
      "Content Management Systems",
      "Booking & Reservation Systems",
      "Membership Sites"
    ],
    whyChoose: [
      "Rapid Application Development",
      "Huge Ecosystem of Packages",
      "Cost-Effective Maintenance"
    ]
  },
  {
    id: "dotnet-solutions",
    title: ".NET Solutions",
    group: "Backend & CMS",
    purpose: "High-performance, secure enterprise-grade applications on the Microsoft stack.",
    deliverables: "Web APIs, Microservices, Enterprise web apps, Cloud-native solutions.",
    tech: ".NET 6/7/8, C#, Azure, SQL Server, Entity Framework",
    outcome: "Mission-critical system with banking-grade security and performance.",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1964&auto=format&fit=crop",
    keyFeatures: [
      "High Performance Execution",
      "Cross-Platform Capabilities",
      "Strong Typing & Safety",
      "Enterprise Integration"
    ],
    perfectFor: [
      "Financial Trading Systems",
      "Healthcare Records (HIPAA)",
      "Government/Public Sector",
      "Large Scale Enterprise ERP"
    ],
    whyChoose: [
      "Microsoft Gold Standard Security",
      "Long-term Stability",
      "Seamless Azure Integration"
    ]
  },
  {
    id: "wordpress-solutions",
    title: "WordPress Solutions",
    group: "Backend & CMS",
    purpose: "Custom themes, plugins, and headless setups for the world's most popular CMS.",
    deliverables: "Custom Theme Development, Plugin Creation, Headless WP APIs, Performance Tuning.",
    tech: "WordPress, PHP, React (Headless), Gutenberg",
    outcome: "Unique, high-performance website easy for your team to manage.",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2070&auto=format&fit=crop",
    keyFeatures: [
      "Headless CMS Architecture",
      "Custom Block Development",
      "Advanced Security Hardening",
      "Core Web Vitals Optimization"
    ],
    perfectFor: [
      "Corporate Marketing Sites",
      "High-Traffic Blogs/News",
      "Membership Portals",
      "Creative Portfolios"
    ],
    whyChoose: [
      "Easy Content Management",
      "Total Ownership of Data",
      "Extensive Plugin Ecosystem"
    ]
  },
  {
    id: "shopify-development",
    title: "Shopify Development",
    group: "Backend & CMS",
    purpose: "High-converting e-commerce stores with custom functionality.",
    deliverables: "Custom Liquid Themes, Public/Private App Development, Store Migration.",
    tech: "Shopify Liquid, React (Hydrogen), Node.js, GraphQL",
    outcome: "Brand-unique store optimized for sales and conversion.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
    keyFeatures: [
      "Custom Theme Development",
      "Headless Commerce (Hydrogen)",
      "App Integration",
      "Checkout Customization"
    ],
    perfectFor: [
      "DTC Brands",
      "High-Volume Retailers",
      "B2B Wholesale Portals",
      "Subscription Services"
    ],
    whyChoose: [
      "Reliable Hosted Infrastructure",
      "Conversion-Focused Design",
      "Seamless Payment Integration"
    ]
  },

  // --- MOBILE GROUP ---
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    group: "Mobile Platforms",
    purpose: "Native and cross-platform apps optimized for performance and offline use.",
    deliverables: "iOS, Android, Flutter, React Native.",
    outcome: "Customer-facing apps or enterprise internal tools with real-time sync.",
    tech: "Flutter, React Native, Swift, Kotlin",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    keyFeatures: [
      "Offline-first Architecture",
      "Real-time Data Synchronization",
      "Native Performance Optimization",
      "Secure Local Storage"
    ],
    perfectFor: [
      "On-demand Service Apps",
      "Field Operations Tools",
      "Social Networking Platforms",
      "Health & Fitness Trackers"
    ],
    whyChoose: [
      "Single Codebase Efficiency",
      "Native-like User Experience",
      "Rapid Prototyping & Delivery"
    ]
  },
  {
    id: "flutter-apps",
    title: "Flutter Development",
    group: "Mobile Platforms",
    purpose: "Beautiful, natively compiled applications from a single codebase.",
    deliverables: "iOS & Android Apps, Custom Widgets, Material/Cupertino Design.",
    tech: "Flutter, Dart, Bloc/Riverpod, Firebase",
    outcome: "Pixel-perfect designs running at 60fps on all devices.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=2070&auto=format&fit=crop",
    keyFeatures: [
      "Hot Reload Development",
      "Expressive UIs",
      "Native Performance",
      "Web & Desktop Support"
    ],
    perfectFor: [
      "Brand-First Applications",
      "Startups needing MVP fast",
      "Cross-platform requirements",
      "Complex Animation needs"
    ],
    whyChoose: [
      "Fastest Time to Market",
      "Consistent UI across OS",
      "Google-backed stability"
    ]
  },
  {
    id: "react-native-apps",
    title: "React Native Apps",
    group: "Mobile Platforms",
    purpose: "Leverage web skills to build powerful native mobile experiences.",
    deliverables: "Cross-platform mobile apps, OTA updates, Native module bridges.",
    tech: "React Native, Expo, TypeScript, Redux",
    outcome: "App Store & Play Store apps sharing 90% code.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop",
    keyFeatures: [
      "Over-the-Air (OTA) Updates",
      "Access to Native APIs",
      "Huge Ecosystem Support",
      "Code sharing with Web"
    ],
    perfectFor: [
      "Teams with React expertise",
      "Community-driven apps",
      "E-commerce apps",
      "Lifestyle applications"
    ],
    whyChoose: [
      "Cost-Effective Scaling",
      "Seamless JavaScript Integration",
      "Rapid Iteration"
    ]
  },
  {
    id: "ios-swift",
    title: "iOS Native (Swift)",
    group: "Mobile Platforms",
    purpose: "Premium, high-performance applications specifically for the Apple ecosystem.",
    deliverables: "iPhone, iPad, WatchOS, and TVOS applications.",
    tech: "Swift, SwiftUI, UIKit, CoreData, ARKit",
    outcome: "Silky smooth native experience leveraging full device capabilities.",
    icon: Tablet,
    image: "https://images.unsplash.com/photo-1563206767-5b1d97287397?q=80&w=2070&auto=format&fit=crop",
    keyFeatures: [
      "Access to Latest iOS Features",
      "Best-in-class Performance",
      "Deep System Integration",
      "Advanced AR/ML Capabilities"
    ],
    perfectFor: [
      "High-end Consumer Apps",
      "AR/VR Experiences",
      "Hardware-connected IoT",
      "Video Processing Apps"
    ],
    whyChoose: [
      "Superior UX/UI Standards",
      "Maximum Hardware Efficiency",
      "Future-proof Apple Tech Stack"
    ]
  },
  {
    id: "android-kotlin",
    title: "Android Native (Kotlin)",
    group: "Mobile Platforms",
    purpose: "Powerful applications tailored for the diverse Android ecosystem.",
    deliverables: "Phone, Tablet, WearOS, and Android TV applications.",
    tech: "Kotlin, Jetpack Compose, Coroutines, Room",
    outcome: "Robust app compatible with thousands of device variations.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop",
    keyFeatures: [
      "Modern Declarative UI (Compose)",
      "Asynchronous Programming",
      "Hardware Level Access",
      "Material Design 3 Implementation"
    ],
    perfectFor: [
      "Background Processing Apps",
      "Custom Hardware Integrations",
      "Launcher/Utility Apps",
      "Mass Market Reach"
    ],
    whyChoose: [
      "Google's Preferred Language",
      "Type-safe & Concise Code",
      "Broad Device Compatibility"
    ]
  },

  // --- CLOUD GROUP ---
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    group: "Cloud & Advanced",
    purpose: "Scalable hosting, optimized deployments, cloud migrations.",
    deliverables: "AWS, Azure, GCP, containerized microservices, auto-scaling.",
    tech: "AWS, Azure, GCP, Docker, Kubernetes",
    outcome: "Reduced infrastructure cost, reliable uptime.",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    keyFeatures: [
      "Auto-scaling Infrastructure",
      "Infrastructure as Code (IaC)",
      "Multi-region Redundancy",
      "Real-time Cost Management"
    ],
    perfectFor: [
      "High-traffic Applications",
      "Global SaaS Products",
      "Data-intensive Workloads",
      "Legacy Migrations"
    ],
    whyChoose: [
      "Security Best Practices",
      "Cost Optimization Focus",
      "99.99% Reliability Service Level"
    ]
  },
  {
    id: "aws-solutions",
    title: "AWS Solutions",
    group: "Cloud & Advanced",
    purpose: "Architecting robust systems on the world's leading cloud platform.",
    deliverables: "EC2, Lambda, RDS, S3, CloudFront configurations.",
    tech: "AWS SDK, CloudFormation, Lambda, DynamoDB",
    outcome: "Highly available, serverless or containerized AWS architecture.",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2074&auto=format&fit=crop",
    keyFeatures: [
      "Serverless Architecture",
      "Managed Database Services",
      "Enterprise Security compliance",
      "Global Content Delivery"
    ],
    perfectFor: [
      "Enterprise workloads",
      "Serverless applications",
      "Big Data Processing",
      "Secure Storage needs"
    ],
    whyChoose: [
      "Certified AWS Architects",
      "Well-Architected Framework",
      "Cost-reduction audits"
    ]
  },
  {
    id: "azure-solutions",
    title: "Microsoft Azure",
    group: "Cloud & Advanced",
    purpose: "Enterprise-grade cloud solutions seamlessly integrated with Microsoft stack.",
    deliverables: "Azure App Service, AKS, Azure SQL, Blob Storage.",
    tech: "Azure DevOps, ARM Templates, Azure Functions, Active Directory",
    outcome: "Secure, hybrid-cloud ready infrastructure.",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop",
    keyFeatures: [
      "Hybrid Cloud Capabilities",
      "Active Directory Integration",
      "Enterprise-grade Compliance",
      "Cognitive Services AI"
    ],
    perfectFor: [
      ".NET Enterprises",
      "Hybrid Cloud Scenarios",
      "Corporate Intranets",
      "Windows-based Workloads"
    ],
    whyChoose: [
      "Seamless Microsoft Integration",
      "Industry Leading Compliance",
      "Robust Developer Tools"
    ]
  },
  {
    id: "gcp-solutions",
    title: "Google Cloud (GCP)",
    group: "Cloud & Advanced",
    purpose: "Data-driven cloud solutions leveraging Google's global network.",
    deliverables: "GKE (Kubernetes), BigQuery, Cloud Run, Firebase.",
    tech: "GCP, Kubernetes, BigQuery, Pub/Sub",
    outcome: "High-performance compute and unparalleled data analytics.",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2070&auto=format&fit=crop",
    keyFeatures: [
      "Premier Kubernetes Support (GKE)",
      "Best-in-class Data Analytics",
      "Global Fiber Network",
      "Serverless Containers (Cloud Run)"
    ],
    perfectFor: [
      "Machine Learning Workloads",
      "Containerized Applications",
      "Big Data Analytics",
      "Startups & Scaleups"
    ],
    whyChoose: [
      "Innovation Leader in AI/Data",
      "Developer-friendly Interface",
      "Sustainable Cloud Infrastructure"
    ]
  },
  {
    id: "devops-pipelines",
    title: "CI/CD & DevOps",
    group: "Cloud & Advanced",
    purpose: "Automate your release process from commit to production.",
    deliverables: "GitHub Actions/GitLab CI workflows, Automated Testing integration.",
    tech: "Docker, Kubernetes, ArgoCD, Terraform",
    outcome: "Deploy 10x faster with 0 manual errors.",
    icon: GitBranch,
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop",
    keyFeatures: [
      "Automated Testing Gates",
      "Blue/Green Deployments",
      "Infrastructure as Code",
      "Security Scanning"
    ],
    perfectFor: [
      "Growing Engineering Teams",
      "Compliance Requirements",
      "Quality Assurance",
      "Rapid Release Cycles"
    ],
    whyChoose: [
      "Zero-touch deployments",
      "Instant rollback capabilities",
      "Standardized environments"
    ]
  },
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    group: "Cloud & Advanced",
    purpose: "Integrate intelligent automation and predictive analytics.",
    deliverables: "NLP, predictive models, AI assistants, workflow automation.",
    tech: "TensorFlow, PyTorch, OpenAI API, LangChain, Python",
    outcome: "Automated reporting; AI-powered helpdesk.",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    keyFeatures: [
      "Natural Language Processing (NLP)",
      "Predictive Analytics Models",
      "Computer Vision Integration",
      "Automated Decision Engines"
    ],
    perfectFor: [
      "Customer Support Automation",
      "Financial Forecasting",
      "Content Recommendation",
      "Fraud Detection Systems"
    ],
    whyChoose: [
      "Practical Business Value Focus",
      "Ethical AI Practices",
      "Seamless Integration with Existing Apps"
    ]
  },
  {
    id: "custom-software",
    title: "Custom Software",
    group: "Backend & CMS",
    purpose: "Tailored tools, automation systems, dashboards, and workflow apps.",
    deliverables: "Fully custom architecture and feature sets.",
    tech: "Python, Java, C#, Go, Node.js",
    outcome: "One-click operations automation; multi-role admin systems.",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
    keyFeatures: [
      "Tailored Business Workflows",
      "Role-based Access Control (RBAC)",
      "Legacy System Integration",
      "Automated Reporting Engines"
    ],
    perfectFor: [
      "Logistics & Supply Chain",
      "Healthcare Management",
      "Internal Enterprise Tools",
      "Specialized B2B Solutions"
    ],
    whyChoose: [
      "Built for Your Specific Process",
      "No Vendor Lock-in",
      "Scalable Architecture from Day One"
    ]
  },
  {
    id: "api-development",
    title: "API Development",
    group: "Backend & CMS",
    purpose: "Stable communication layers for internal/external systems.",
    deliverables: "REST, GraphQL, OAuth, third-party integrations.",
    tech: "REST, GraphQL, Swagger/OpenAPI, gRPC",
    outcome: "Unified data exchange between platforms.",
    icon: Share2,
    image: "https://images.unsplash.com/photo-1558494949-ef2a27883e9f?q=80&w=2000&auto=format&fit=crop",
    keyFeatures: [
      "REST & GraphQL Architectures",
      "Comprehensive Documentation",
      "Rate Limiting & Caching",
      "OAuth2 & JWT Security"
    ],
    perfectFor: [
      "Mobile App Backends",
      "Third-party Integrations",
      "Microservices Communication",
      "Public Developer APIs"
    ],
    whyChoose: [
      "Scalable Design Patterns",
      "Secure by Default",
      "Excellent Developer Experience"
    ]
  },
  {
    id: "database-management",
    title: "Database Management",
    group: "Backend & CMS",
    purpose: "Reliable and scalable data structures.",
    deliverables: "MySQL, PostgreSQL, MongoDB, SQL Server, cloud databases.",
    tech: "PostgreSQL, MySQL, MongoDB, Redis",
    outcome: "Clean data models; optimized queries; backups.",
    icon: Database,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2121&auto=format&fit=crop",
    keyFeatures: [
      "Schema Design & Optimization",
      "Automated Backups & Recovery",
      "Replication & Sharding",
      "Query Performance Tuning"
    ],
    perfectFor: [
      "Big Data Applications",
      "Real-time Analytics",
      "Legacy Data Migration",
      "High-Transaction Systems"
    ],
    whyChoose: [
      "Data Integrity Guarantee",
      "High Availability Setup",
      "Optimized for Scale"
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    group: "Frontend & Web",
    purpose: "Interfaces built for usability, clarity, and conversion.",
    deliverables: "Wireframes, prototypes, user flows, visual systems.",
    tech: "Figma, Adobe XD, Sketch",
    outcome: "Simplified decision paths; usability-focused layouts.",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop",
    keyFeatures: [
      "User Research & Personas",
      "Interactive Prototyping",
      "Comprehensive Design Systems",
      "Usability Testing"
    ],
    perfectFor: [
      "New Product Launches",
      "Application Redesigns",
      "Complex Data Dashboards",
      "Conversion Optimization"
    ],
    whyChoose: [
      "Data-Driven Decisions",
      "Accessibility Focus (WCAG)",
      "Developer-Ready Handoffs"
    ]
  }
];

export const PROCESS_STEPS = [
  { title: "Define", description: "Clear scope, measurable outcomes." },
  { title: "Build", description: "Short iterations, automated tests, CI/CD." },
  { title: "Run", description: "Monitoring, incident playbooks, monthly reviews." },
];

export const CASE_STUDY: CaseStudyData = {
  client: "Acme Logistics",
  result: "Reduced infrastructure cost by 40%; releases from days → minutes.",
  metricLabel: "Deployment Time (Minutes)",
  chartData: [
    { name: 'Before', value: 240 },
    { name: 'After', value: 15 },
  ]
};

export const WHY_US_BULLETS = [
  "Senior engineers, small dedicated teams.",
  "Minimal overhead, predictable delivery cadence.",
  "Clear code and documentation.",
  "DevOps built into every project.",
  "Ownership transferred on delivery.",
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "They replaced our monolith with a clear API-first platform — launches are reliable now.",
    author: "Sara Khan",
    role: "CTO",
    company: "RetailX"
  },
  {
    quote: "Deployment time dropped from hours to minutes; our ops cost fell 30%.",
    author: "Omar Rizvi",
    role: "Head of Ops",
    company: "FinFlow"
  },
  {
    quote: "The cleanest code we've seen from an external team. Documentation was spot on.",
    author: "Elena Rodriguez",
    role: "VP Engineering",
    company: "TechNova"
  },
  {
    quote: "They didn't just build what we asked for; they helped us refine the architecture for scale.",
    author: "Mark Johnson",
    role: "Founder",
    company: "LogiStream"
  },
  {
    quote: "Exceptional quality and speed. The AI integration they built saved us hundreds of man-hours.",
    author: "James Wilson",
    role: "Director of Product",
    company: "AutoMate"
  },
  {
    quote: "Finally a team that understands business goals, not just code. Highly recommended.",
    author: "Priya Patel",
    role: "CEO",
    company: "GrowthLabs"
  }
];

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  { title: "Fixed-price project", description: "Defined scope, milestone payments." },
  { title: "Time & materials", description: "Hourly with monthly invoicing." },
  { title: "Retainer", description: "Ongoing support and platform operations." },
];

// --- About Page Data ---

export const ABOUT_APPROACH_BULLETS = [
  "Direct, implementation-first execution",
  "Minimalist architectures to reduce complexity",
  "Fast iterations with automated testing",
  "Cloud-ready, production-stable solutions",
];

export const ABOUT_DIFFERENTIATORS = [
  "Small senior teams, no juniors",
  "Transparent process, predictable delivery",
  "Codebases optimized for clarity and future-proofing",
  "DevOps and monitoring integrated from day one",
];

export const TEAM_MEMBERS = [
  { name: "Ali Raza", role: "CTO", expertise: "Builds scalable backend systems" },
  { name: "Sara Khan", role: "Lead Frontend", expertise: "UI/UX & web interfaces" },
  { name: "David Chen", role: "Cloud Architect", expertise: "AWS/Azure infrastructure & security" },
];

export const TIMELINE_EVENTS = [
  { year: "2015", event: "Founded with focus on clean code" },
  { year: "2017", event: "First SaaS client delivered" },
  { year: "2020", event: "Expanded to AI & Cloud solutions" },
  { year: "2023", event: "Over 50 clients served globally" },
];

// --- Portfolio Page Data ---

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Web Development",
  "Mobile Apps",
  "AI/ML",
  "Cloud",
  "Custom Software"
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "acme",
    title: "Acme Logistics Dashboard",
    categories: ["Web Development", "Cloud", "Custom Software"],
    description: "A centralized customer portal for real-time shipment tracking.",
    problem: "Slow, manual operations with high downtime.",
    solution: "Web portal with automated workflows, real-time reporting.",
    result: "Reduced infra cost by 40%, deployment from days → minutes.",
    tech: ["Angular", "Node.js", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    id: "finflow",
    title: "FinFlow Mobile App",
    categories: ["Mobile Apps"],
    description: "Cross-platform fintech application for personal finance management.",
    problem: "Fragmented finance tools, low adoption.",
    solution: "Cross-platform mobile app with offline sync.",
    result: "User adoption increased 70%, error rate reduced by 50%.",
    tech: ["Flutter", "Firebase", "GCP"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "retailx",
    title: "RetailX AI Integration",
    categories: ["AI/ML", "Custom Software"],
    description: "Predictive inventory management system for a retail chain.",
    problem: "Manual inventory forecasting causing stockouts.",
    solution: "AI-driven predictive models integrated into dashboard.",
    result: "Forecast accuracy improved 85%, stockouts minimized.",
    tech: ["Python", "TensorFlow", "AWS", "FastAPI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "cloud-migrate",
    title: "Global SaaS Migration",
    categories: ["Cloud", "DevOps"],
    description: "Migrating a legacy monolith to a containerized microservices architecture.",
    problem: "High hosting costs and slow scaling during peak traffic.",
    solution: "Dockerized microservices on Kubernetes with auto-scaling.",
    result: "Hosting costs reduced by 30%, 99.99% uptime achieved.",
    tech: ["Kubernetes", "Docker", "Azure", "Terraform"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  }
];

// --- Blog Page Data ---

export const BLOG_CATEGORIES = [
  "All",
  "Web Development",
  "Mobile Apps",
  "Custom Software",
  "Cloud & DevOps",
  "AI & Machine Learning",
  "UI/UX Design",
  "Database & APIs"
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "api-stability",
    title: "Designing APIs for long-term stability",
    excerpt: "Best practices for building predictable APIs that scale and integrate cleanly.",
    content: `
      <h2>The Challenge of API Longevity</h2>
      <p>Building an API is relatively easy. Building an API that survives 5 years of feature creep, business pivots, and client scaling is a different beast entirely. In the world of SaaS, your API is often your product. If it breaks, your customers' businesses break.</p>
      
      <p>When we design APIs at BuiltByTe, we start with the assumption that everything will change—except the contract you make with your consumers today. Here are the core principles we follow to ensure stability.</p>

      <h2>1. Explicit Versioning from Day One</h2>
      <p>Never release an API without a version identifier. Whether you choose URL path versioning (<code>/v1/resource</code>) or header-based versioning, make it mandatory. This allows you to introduce breaking changes in v2 without disrupting v1 consumers.</p>
      
      <h2>2. The "Additive Only" Rule</h2>
      <p>The golden rule of API evolution is to never remove or rename a field in a response. You can add new fields, but you must support old ones until the entire API version is deprecated. If you need to change <code>userName</code> to <code>fullName</code>, keep <code>userName</code> in the payload and map it in your serialization layer.</p>

      <h2>3. Idempotency Keys</h2>
      <p>Network failures happen. Clients will retry requests. If a client retries a payment request, you shouldn't charge them twice. Implementing idempotency keys in your POST and PATCH endpoints ensures that replaying a request results in the same state, preventing data corruption.</p>

      <h2>Conclusion</h2>
      <p>Stable APIs are boring. They don't surprise developers. They just work, year after year. That kind of boredom is what we strive for in engineering.</p>
    `,
    author: "Ali Raza",
    authorRole: "CTO",
    date: "Dec 2025",
    category: "Database & APIs",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "microservices-vs-monolith",
    title: "When to choose microservices vs monolith",
    excerpt: "Deciding the right architecture reduces maintenance and speeds delivery.",
    content: `
      <h2>The Microservices Hype Cycle</h2>
      <p>For the past decade, "monolith" has been a dirty word. If you weren't deploying 50 containerized microservices to Kubernetes, were you even coding? But the tide is turning. Teams are realizing that distributed systems come with a distributed set of problems.</p>

      <h2>The Cost of Complexity</h2>
      <p>Microservices introduce network latency, eventual consistency issues, and distributed tracing nightmares. If your team is small (under 20 engineers), the overhead of managing infrastructure often outweighs the benefits of decoupled code.</p>

      <h2>When to Stick with a Monolith</h2>
      <p>A "Modular Monolith" is often the sweet spot. You build a single deployable unit but enforce strict boundaries between modules within the code. This gives you:</p>
      <ul>
        <li><strong>Simple deployment:</strong> One CI/CD pipeline.</li>
        <li><strong>Atomic transactions:</strong> No need for complex sagas or two-phase commits.</li>
        <li><strong>Easy debugging:</strong> Stack traces actually make sense.</li>
      </ul>

      <h2>When to Break It Apart</h2>
      <p>Move to microservices only when:</p>
      <ol>
        <li>You need to scale different parts of the system independently (e.g., a video processing worker vs. a user profile service).</li>
        <li>Your team is too large to coordinate on a single codebase.</li>
        <li>You have strict isolation requirements for security or compliance.</li>
      </ol>
    `,
    author: "Sara Khan",
    authorRole: "Lead Frontend",
    date: "Nov 2025",
    category: "Cloud & DevOps",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: "minimalist-engineering",
    title: "Minimalist engineering: reducing complexity in product systems",
    excerpt: "Why simplicity in architecture improves stability and team velocity.",
    content: `
      <h2>Code is a Liability</h2>
      <p>Every line of code you write is a line that needs to be tested, debugged, and maintained. The best engineers don't measure their productivity by lines of code written, but by value delivered with minimal complexity.</p>

      <h2>The YAGNI Principle</h2>
      <p>"You Aren't Gonna Need It." It's an old XP (Extreme Programming) principle, but it's more relevant than ever. Don't build generic abstract factories for a feature that might get deleted next month. Build exactly what is needed to solve the current problem, and refactor later if the requirements grow.</p>

      <h2>Boring Tech Stack</h2>
      <p>At BuiltByTe, we choose "boring" technology. Postgres, Node.js, React. Why? Because they have huge ecosystems, known failure modes, and you can hire for them easily. Using the bleeding edge framework of the week might be fun, but it puts your project at risk.</p>

      <h2>Conclusion</h2>
      <p>Simplicity is the ultimate sophistication. It takes more effort to design a simple system than a complex one, but the payoff in maintainability is immense.</p>
    `,
    author: "Omar Rizvi",
    authorRole: "Head of Ops",
    date: "Oct 2025",
    category: "Custom Software",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=2070&auto=format&fit=crop"
  },
   {
    id: "ai-integration-patterns",
    title: "Practical AI integration patterns for legacy apps",
    excerpt: "How to safely introduce LLM capabilities into existing enterprise systems without breaking them.",
    content: `
      <h2>AI is Not Magic, It's an API</h2>
      <p>Integrating Large Language Models (LLMs) into legacy enterprise systems can feel daunting. But if you treat it as just another 3rd party API integration, the path becomes clear. The challenge isn't the API call; it's the context management and output validation.</p>

      <h2>Pattern 1: The Sidecar Assistant</h2>
      <p>Don't try to rewrite your core logic with AI. Instead, build a "sidecar" assistant. This is a separate UI element or service that can query your legacy database (read-only) and answer user questions. It adds value without risking the integrity of your transaction processing.</p>

      <h2>Pattern 2: RAG (Retrieval-Augmented Generation)</h2>
      <p>Legacy systems contain goldmines of data hidden in PDFs and old SQL tables. Implementing a RAG pipeline allows you to vectorise this data and let the LLM answer questions based on <em>your</em> specific business knowledge, not just general internet data.</p>

      <h2>Guardrails are Mandatory</h2>
      <p>Never pipe LLM output directly to a user without a validation layer. Use libraries or regex checks to ensure the output format (JSON, SQL, etc.) is valid before acting on it. Deterministic code must wrap non-deterministic AI outputs.</p>
    `,
    author: "Ali Raza",
    authorRole: "CTO",
    date: "Sep 2025",
    category: "AI & Machine Learning",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop"
  },
  {
    id: "flutter-performance",
    title: "Optimizing Flutter rendering performance on low-end devices",
    excerpt: "Techniques to ensure 60fps animations even on older hardware.",
    content: `
      <h2>The Jank Problem</h2>
      <p>Flutter is fast by default, but complex UIs can cause frame drops (jank), especially on low-end Android devices. Understanding the rendering pipeline is key to smooth performance.</p>

      <h2>1. const Constructors</h2>
      <p>Use <code>const</code> everywhere. If a widget is marked as const, Flutter knows it doesn't need to rebuild it when <code>setState</code> is called. This simple habit can drastically reduce the work of the garbage collector.</p>

      <h2>2. Minimize Layout Passes</h2>
      <p>Avoid using <code>SaveLayer</code> calls (often triggered by opacity or clipping). These require an off-screen buffer which is expensive on the GPU. If you need to fade an image, use the <code>Opacity</code> widget only if necessary, or better yet, bake the opacity into the color itself.</p>

      <h2>3. List View Optimization</h2>
      <p>Always use <code>ListView.builder</code> for long lists. It only renders the items currently visible on screen. If you put a Column inside a SingleChildScrollView for a list of 1000 items, you are forcing the phone to render all 1000 items at once.</p>
    `,
    author: "Sara Khan",
    authorRole: "Lead Frontend",
    date: "Aug 2025",
    category: "Mobile Apps",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "ux-conversion",
    title: "UI patterns that actually drive conversion",
    excerpt: "Data-backed design choices that clarify user intent and reduce bounce rates.",
    content: `
      <h2>Beauty vs. Function</h2>
      <p>Dribbble shots look great, but they often fail in the real world. Conversion design is about reducing cognitive load. Every pixel should serve the purpose of guiding the user to the next step.</p>

      <h2>The F-Pattern and Z-Pattern</h2>
      <p>Users scan screens. Text-heavy pages are scanned in an F-pattern. Visual landing pages are scanned in a Z-pattern. Design your layout to place your primary CTAs along these natural eye paths.</p>

      <h2>Micro-interactions Matter</h2>
      <p>A button that reacts when clicked (visual feedback) confirms the action to the user. A loading spinner that appears instantly prevents the user from rage-clicking. These small details build trust, and trust drives conversion.</p>

      <h2>Contrast is King</h2>
      <p>Your primary action button should have a color that appears nowhere else on the screen (or at least stands out significantly). If your "Buy Now" button is the same color as your header, you are losing sales.</p>
    `,
    author: "David Chen",
    authorRole: "Cloud Architect",
    date: "Jul 2025",
    category: "UI/UX Design",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop"
  }
];

// --- Contact Page Data ---

export const CONTACT_FAQS = [
  { question: "How fast will I get a reply?", answer: "Usually within 48 hours." },
  { question: "What info should I provide?", answer: "Short project description and goals." },
  { question: "Do you take international clients?", answer: "Yes, worldwide service." },
];