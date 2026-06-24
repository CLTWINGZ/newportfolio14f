import {
  Zap, Layers, Globe, Monitor, Cloud, BrainCircuit, Shield, Server,
  Code2, Database, Network, Wrench,
  type LucideIcon,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   PROFILE
═══════════════════════════════════════════════════════════════ */
export const PROFILE = {
  name: "Chethana Lakthilina Jathunarachchi",
  shortName: "Chethana Lakthilina",
  initials: "CL",
  role: "Full-Stack Software Engineer",
  location: "Sri Lanka",
  tagline: "Full-Stack · AI · DevOps",
  bio: "Software Engineering graduate specializing in full-stack development, AI integration, DevOps, and enterprise infrastructure that defies the ordinary.",
  email: "chethanalakthilina3@gmail.com",
  github: "https://github.com/CLTWINGZ",
  linkedin: "https://linkedin.com/in/chethana-jathunarachchi-2ba45b281",
  cv: "https://www.overleaf.com/read/svtckzqczvpt#6b8332",
  photo: "/rmvbg.png",
};

export type Accent = "blue" | "red" | "yellow" | "green";

export interface Project {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  accent: Accent;
  icon: LucideIcon;
  featured?: boolean;
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "roamquest",
    eyebrow: "Web Application Development · 2026",
    title: "RoamQuest – Responsive Travel Booking & Trip Plan",
    subtitle: "Real-time Web Application · SEO",
    desc: "Designed and developed a modern responsive travel booking and trip-planning platform with desktop, tablet, and mobile optimization. Features include trip booking, itinerary planning, modern UI/UX, and fully responsive layouts.",
    tags: ["Next.js", "TypeScript"],
    accent: "green",
    icon: Zap,
    featured: true,
    link: "https://github.com/CLTWINGZ/",
  },
  {
    id: "aura",
    eyebrow: "Web Application Development · 2026",
    title: "Aura & Zen – Responsive Spa & Wellness Website",
    subtitle: "Real-time Web Application · SEO",
    desc: "Designed and developed a modern responsive spa and wellness website with desktop, tablet, and mobile optimization. Features include service booking, staff showcase, testimonials, contact forms, modern UI/UX, and responsive layouts for all devices.",
    tags: ["Next.js", "TypeScript"],
    accent: "green",
    icon: Zap,
    featured: true,
    link: "https://github.com/CLTWINGZ/",
  },
  {
    id: "cryptoinsight",
    eyebrow: "Engineering Excellence · Gemini 1.5 Pro",
    title: "Cryptoinsight — AI Trading Ecosystem",
    subtitle: "Real-time Systems · High-Frequency Analysis",
    desc: "An institutional-grade trading bot leveraging Gemini 1.5 Pro Vision to veto retail traps. Built with a high-performance asynchronous FastAPI backend and React frontend, it features real-time WebSocket signals and complex technical analysis using TA-Lib and Pandas.",
    tags: ["FastAPI", "React", "Python", "Pandas", "NumPy", "TA-Lib", "Docker", "Redis", "Supabase"],
    accent: "green",
    icon: Zap,
    featured: true,
    link: "https://cryptoinsigh.vercel.app/",
  },
  {
    id: "inventorybiz",
    eyebrow: "Core Engineering",
    title: "Small Business Inventory System",
    subtitle: "Full-Stack Web App",
    desc: "Full-stack inventory web app with JWT auth, CRUD operations, real-time stock updates, responsive UI and analytics dashboards.",
    tags: ["React", "Node.js", "Express", "JWT", "MongoDB"],
    accent: "yellow",
    icon: Layers,
    featured: true,
    link: "https://small-bussiness-inventory6.vercel.app/",
  },
  {
    id: "travelbloom",
    eyebrow: "Web Development · React",
    title: "Global Travel Explorer",
    subtitle: "Search & Discovery Engine",
    desc: "A travel recommendation platform featuring destination discovery for beaches, temples, and countries with integrated search and responsive design.",
    tags: ["React", "JavaScript", "REST API", "Responsive Design"],
    accent: "yellow",
    icon: Globe,
    featured: true,
    link: "https://cltwingz.github.io/final-ajax/index.html",
  },
  {
    id: "jobnexus",
    eyebrow: "Enterprise Solution · Laravel 2026",
    title: "JobNexus — Job Portal System",
    subtitle: "MVC · DDD Architecture",
    desc: "A senior-level job portal system with Domain-Driven Design (DDD) architecture. Features enterprise verification, role-based access control, and a cinematic UI.",
    tags: ["Laravel", "PHP", "DDD", "MySQL", "TailwindCSS"],
    accent: "blue",
    icon: Zap,
    featured: true,
    link: "https://github.com/CLTWINGZ/New-Job-Portal-System.git",
  },
  {
    id: "hotel-cms",
    eyebrow: "Featured Mission · CAASL 2024",
    title: "Aviation-Themed Hotel Management System",
    subtitle: "AI-Integrated",
    desc: "Full-stack hotel management system with automated room management, secure authentication, AI chatbot support, automated invoicing & email notifications.",
    tags: ["PHP", "JavaScript", "AJAX", "MySQL", "IBM Watson", "AI Chatbot"],
    accent: "blue",
    icon: Monitor,
    featured: true,
    link: "https://drive.google.com/file/d/1KmgMRHmz_VzqAZY7hFW3-pEE7W7cl7v1/view",
  },
  {
    id: "caaslinventory",
    eyebrow: "Enterprise Infrastructure · CAASL 2024",
    title: "Inventory Management System",
    subtitle: "CAASL IT Unit",
    desc: "Asset registration, monitoring, and automated reporting dashboards for IT inventory management at the Civil Aviation Authority of Sri Lanka.",
    tags: ["PHP", "JavaScript", "MySQL", "AJAX"],
    accent: "blue",
    icon: Monitor,
    featured: true,
    link: "https://www.linkedin.com/posts/chethana-jathunarachchi-2ba45b281_php-javascript-bootstrap-activity-7248674565084590081-yGqS",
  },
  {
    id: "weather",
    eyebrow: "Data Intelligence",
    title: "Weather Analytics Application",
    subtitle: "Real-Time Processing",
    desc: "Real-time weather data processing with Comfort Index scoring, server-side caching, responsive UI, and Auth0 authentication integration.",
    tags: ["React", "Node.js", "Auth0", "REST API"],
    accent: "green",
    icon: Cloud,
    link: "https://github.com/CLTWINGZ/weather_app",
  },
  {
    id: "watson",
    eyebrow: "AI Engineering",
    title: "AI-Based Web Application",
    subtitle: "IBM Watson",
    desc: "AI-driven web application using IBM Watson libraries with Flask REST APIs and server-side processing for intelligent data analysis.",
    tags: ["Python", "Flask", "IBM Watson", "REST API"],
    accent: "blue",
    icon: BrainCircuit,
  },
  {
    id: "prison",
    eyebrow: "Systems Engineering",
    title: "Online Prison Rehabilitation System",
    subtitle: "Backend Management",
    desc: "Backend system to manage rehabilitation activities with monitoring capabilities, reporting dashboards, and activity tracking.",
    tags: ["C#", "ASP.net", "SQL Server", "REST API"],
    accent: "red",
    icon: Shield,
  },
  {
    id: "customer-cms",
    eyebrow: "Enterprise System",
    title: "Customer Management System",
    subtitle: "Full-Stack Web App",
    desc: "A robust customer management system featuring advanced search, numeric pagination, bulk asynchronous file processing, and precise state management.",
    tags: ["React", "Spring Boot", "Java", "REST API"],
    accent: "blue",
    icon: Server,
    link: "https://github.com/CLTWINGZ",
  },
  {
    id: "event-manager",
    eyebrow: "Enterprise Solution · .NET",
    title: ".NET Event Manager",
    subtitle: "Full-Stack Security Integration",
    desc: "A secure event management system with RBAC, input validation, and XSS/SQL injection prevention. Features CRUD for user management, middleware logging, and automated security testing.",
    tags: ["C#", ".NET Core", "Blazor", "SQL Server", "REST API"],
    accent: "red",
    icon: Shield,
    link: "https://github.com/CLTWINGZ/dotnet4.git",
  },
  {
    id: "dealer-evaluation",
    eyebrow: "Microservices · IBM Cloud",
    title: "Dealer Evaluation System",
    subtitle: "Cloud Native Architecture",
    desc: "A distributed system featuring microservices for product details (Python) and dealer pricing (Node.js), deployed on IBM Cloud Code Engine with a unified frontend.",
    tags: ["Microservices", "IBM Cloud", "Node.js", "Python", "Docker"],
    accent: "blue",
    icon: Server,
    link: "https://github.com/CLTWINGZ",
  },
  {
    id: "guestbook-k8s",
    eyebrow: "DevOps · Kubernetes",
    title: "Cloud Native Guestbook",
    subtitle: "Container Orchestration",
    desc: "A scalable guestbook application deployed on Kubernetes with HPA, rolling updates, and automated rollbacks. Features multi-container pod architectures and persistent storage.",
    tags: ["Kubernetes", "Docker", "HPA", "CI/CD", "Cloud Native"],
    accent: "green",
    icon: Layers,
    link: "https://github.com/CLTWINGZ",
  },
  {
    id: "tax-devops",
    eyebrow: "CI/CD · Tekton",
    title: "Tax Calculator DevOps Pipeline",
    subtitle: "Automated Lifecycle Management",
    desc: "Modernized a legacy tax calculator into a containerized app with a robust Tekton CI/CD pipeline for automated testing, building, and deployment to cloud environments.",
    tags: ["Tekton", "DevOps", "Docker", "CI/CD", "Node.js"],
    accent: "red",
    icon: Zap,
    link: "https://github.com/CLTWINGZ/final-4.git",
  },
];

/* Featured project image galleries */
export const PROJECT_GALLERIES: Record<string, string[]> = {
  "hotel-cms": ["/caasl-1.png", "/caasl-2.png", "/caasl-3.png", "/caasl-4.png", "/caasl-5.png"],
  jobnexus: [
    "/jobnexus.png", "/jobnexus-1.png", "/jobnexus-3.png", "/jobnexus-4.png",
    "/jobnexus-5.png", "/jobnexus-6.png", "/jobnexus-7.png", "/jobnexus-8.png",
    "/jobnexus-9.png", "/jobnexus-10.png", "/jobnexus-11.png", "/jobnexus-12.png",
  ],
  cryptoinsight: ["/cryptoinsight-1.png", "/cryptoinsight-4.png", "/cryptoinsight-5.png"],
  aura: ["/aura-zen-mockup.png", "/aura-zen-mockup2.png.png"],
  roamquest: ["/roamquest-1.png.png"],
  caaslinventory: ["/caaslinventory-1.png", "/caaslinventory-2.png", "/caaslinventory-3.png", "/caaslinventory-4.png", "/caaslinventory-5.png"],
  inventorybiz: ["/inventorybiz-1.png", "/inventorybiz-2.png", "/inventorybiz-3.png", "/inventorybiz-4.png", "/inventorybiz-5.png"],
  travelbloom: ["/travelbloom-1.png", "/travelbloom-2.png", "/travelbloom-3.png", "/travelbloom-4.png", "/travelbloom-5.png"],
};

export const HOTEL_VIDEO = "https://drive.google.com/file/d/1KmgMRHmz_VzqAZY7hFW3-pEE7W7cl7v1/preview";

/* ═══════════════════════════════════════════════════════════════
   FIVERR GIGS
═══════════════════════════════════════════════════════════════ */
export interface Gig {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  tags: string[];
  accent: Accent;
  link: string;
}

export const FIVERR_GIGS: Gig[] = [
  {
    id: "fiverr-custom-website",
    title: "Custom Website Development",
    subtitle: "Tailor-made Web Solutions",
    desc: "Performant, high-quality, custom-tailored websites designed specifically to match your unique brand identity and user workflow. Built from scratch with clean, modular code.",
    img: "/fiverr-custom-website.png",
    tags: ["React", "Next.js", "PHP", "Node.js", "Spring Boot", "MySQL", "Docker", "Vercel"],
    accent: "red",
    link: "https://www.fiverr.com/s/AyN8mpR",
  },
  {
    id: "fiverr-erp-crm",
    title: "ERP & CRM System Development",
    subtitle: "Enterprise Workflow Automation",
    desc: "Bespoke ERP and CRM platforms designed to automate business operations, track inventory/sales, organize client relations, and provide rich data analytics dashboards.",
    img: "/fiverr-erp-crm.png",
    tags: ["React", "Next.js", "Spring Boot", "Node.js", "MySQL", "MongoDB", "JWT Auth", "Vercel"],
    accent: "yellow",
    link: "https://www.fiverr.com/s/pd7LKl8",
  },
  {
    id: "fiverr-full-stack",
    title: "Full-Stack Website Development",
    subtitle: "End-to-End Core Engineering",
    desc: "Robust full-stack development marrying high-fidelity frontend aesthetics with secure, scalable, and responsive API backends for absolute product integrity.",
    img: "/fiverr-full-stack.png",
    tags: ["React", "Next.js", "PHP", "Node.js", "Spring Boot", "MySQL", "MongoDB", "JWT Auth"],
    accent: "blue",
    link: "https://www.fiverr.com/s/0bp82eq",
  },
  {
    id: "fiverr-business-website",
    title: "Modern Business Website",
    subtitle: "SEO & Conversion Optimized",
    desc: "Sleek, lightning-fast business websites with SEO-friendly structure, rich responsive layouts, modern micro-interactions, and conversion-optimized funnels.",
    img: "/fiverr-business-website.png",
    tags: ["Next.js", "React", "TailwindCSS", "SEO Friendly", "PHP", "Node.js", "Vercel"],
    accent: "green",
    link: "https://www.fiverr.com/s/AyN8mdq",
  },
];

/* ═══════════════════════════════════════════════════════════════
   SKILLS
═══════════════════════════════════════════════════════════════ */
export interface SkillCategory {
  label: string;
  icon: LucideIcon;
  accent: Accent;
  items: string[];
}

export const SKILLS_BY_CATEGORY: SkillCategory[] = [
  {
    label: "Programming Languages",
    icon: Code2,
    accent: "blue",
    items: ["PHP", "JavaScript", "TypeScript", "Python", "Java", "C#", "Dart", "C", "SQL", "AJAX", "Bash", "Async Programming"],
  },
  {
    label: "Web & Mobile",
    icon: Globe,
    accent: "red",
    items: ["React", "Next.js", "Blazor", "FastAPI", "Node.js", "Express", "Flutter", "Spring Boot", "Flask", "HTML/CSS"],
  },
  {
    label: "Databases",
    icon: Database,
    accent: "yellow",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis", "Supabase"],
  },
  {
    label: "DevOps & Cloud",
    icon: Cloud,
    accent: "green",
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD", "Linux", "AWS"],
  },
  {
    label: "Networking & Systems",
    icon: Network,
    accent: "blue",
    items: ["LAN/WAN", "VPN", "Firewalls", "Directory Services", "Server Admin", "Cisco Packet Tracer"],
  },
  {
    label: "AI, Data Science & Platforms",
    icon: BrainCircuit,
    accent: "red",
    items: ["Pandas", "NumPy", "TA-Lib", "IBM Watson", "Google Cloud AI", "Auth0", "Docker Hub", "Git"],
  },
  {
    label: "Developer Tools",
    icon: Wrench,
    accent: "yellow",
    items: ["VS Code", "IntelliJ IDEA", "Postman", "GitHub", "Figma", "Overleaf"],
  },
  {
    label: "Backend & APIs",
    icon: Server,
    accent: "green",
    items: ["FastAPI", ".NET", "REST APIs", "API Design", "Security & Auth", "JWT Auth", "RBAC", "WebSockets", "Microservices", "MVC"],
  },
];

/* ═══════════════════════════════════════════════════════════════
   CERTIFICATIONS
═══════════════════════════════════════════════════════════════ */
export interface Issuer {
  color: string;
  abbr: string;
  logoUrl?: string;
}

export const ISSUERS: Record<string, Issuer> = {
  IBM: { color: "#0f62fe", abbr: "IBM", logoUrl: "https://www.vectorlogo.zone/logos/ibm/ibm-icon.svg" },
  "Google Cloud Skills Boost": { color: "#1a73e8", abbr: "GCP", logoUrl: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
  Microsoft: { color: "#00a4ef", abbr: "MS", logoUrl: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" },
  "DeepLearning.AI": { color: "#c9312a", abbr: "DL", logoUrl: "/deeplearning-logo.png" },
  KodeKloud: { color: "#326ce5", abbr: "KK", logoUrl: "/kodekloud-logo.png" },
  "University of Moratuwa": { color: "#8b1a1a", abbr: "UOM", logoUrl: "/uom-logo.png" },
  Udemy: { color: "#a435f0", abbr: "U", logoUrl: "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg" },
  "Peter the Great St. Petersburg Polytechnic University": { color: "#006699", abbr: "SPbPU", logoUrl: "/spbpu-logo.png" },
  SkillUp: { color: "#ff4b2b", abbr: "SU", logoUrl: "https://www.vectorlogo.zone/logos/coursera/coursera-icon.svg" },
};

export interface CertGroup {
  issuer: string;
  certs: { name: string; url: string }[];
}

export const CERT_GROUPS: CertGroup[] = [
  {
    issuer: "IBM",
    certs: [
      { name: "Node.js & MongoDB: Developing Back-end Database Applications", url: "https://www.coursera.org/account/accomplishments/records/PSERBGBDVYPW" },
      { name: "JavaScript Programming Essentials", url: "https://www.coursera.org/account/accomplishments/records/7X7U6NVPGV5T" },
      { name: "Django Application Development with SQL and Databases", url: "https://www.coursera.org/account/accomplishments/records/YDGU1376JODH" },
      { name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift", url: "https://www.coursera.org/account/accomplishments/records/1YJSCUKH0AEA" },
      { name: "Application Development using Microservices and Serverless", url: "https://www.coursera.org/account/accomplishments/verify/YFIQTCYV00RZ" },
      { name: "Get Started with Cloud Native, DevOps, Agile, and NoSQL", url: "https://www.coursera.org/account/accomplishments/records/JNI9UB2ABZ8O" },
      { name: "Introduction to Software Engineering", url: "https://www.coursera.org/account/accomplishments/certificate/TEYVGPXEU5UN" },
      { name: "Developing Front-End Apps with React", url: "https://www.coursera.org/account/accomplishments/records/1K108M55GVK0" },
      { name: "Developing Back-End Apps with Node.js & Express", url: "https://www.coursera.org/account/accomplishments/verify/GUTEOULFXA26" },
      { name: "Developing AI Applications with Python and Flask", url: "https://www.coursera.org/account/accomplishments/verify/AOTHF6P6HVPR" },
      { name: "Python for Data Science, AI & Development", url: "https://www.coursera.org/account/accomplishments/records/1SGGHL638T32" },
      { name: "Introduction to Cloud Computing", url: "https://www.coursera.org/account/accomplishments/records/7CWP06083H1C" },
      { name: "Getting Started with Git and GitHub", url: "https://www.coursera.org/account/accomplishments/verify/F7Z41MYSOCMJ" },
      { name: "Hands-On Introduction to Linux Commands & Shell Scripting", url: "https://www.coursera.org/account/accomplishments/records/BRT4TSA3E9ES" },
      { name: "Foundations of Computer Networking", url: "https://www.coursera.org/account/accomplishments/verify/FE4K9SLU0EHE" },
    ],
  },
  {
    issuer: "SkillUp",
    certs: [{ name: "Get Started with iOS App Development", url: "https://www.coursera.org/account/accomplishments/records/4YQ0JX5IXHCA" }],
  },
  {
    issuer: "Google Cloud Skills Boost",
    certs: [
      { name: "Introduction to Generative AI", url: "https://www.cloudskillsboost.google/course_templates/536/badge" },
      { name: "Data Analytics on Google Cloud", url: "https://www.cloudskillsboost.google/paths/18/course_templates/578/badge" },
    ],
  },
  {
    issuer: "Microsoft",
    certs: [
      { name: "Foundations of Coding: Full-Stack", url: "https://www.coursera.org/account/accomplishments/records/D5SKKBXIMXUL" },
      { name: "Introduction to Programming With C#", url: "https://www.coursera.org/account/accomplishments/records/ENB8CCO59V4Z" },
      { name: "Blazor for Front-End Development", url: "https://www.coursera.org/account/accomplishments/records/DXZUNNNHDKIP" },
      { name: "Back-End Development with .NET", url: "https://www.coursera.org/account/accomplishments/records/C6UOWGT4C0M2" },
      { name: "Introduction to Web Development", url: "https://www.coursera.org/account/accomplishments/records/RJURT5O18YKV" },
      { name: "Database Integration and Management", url: "https://www.coursera.org/account/accomplishments/records/L4XW6RDIHISO" },
      { name: "Security and Authentication", url: "https://www.coursera.org/account/accomplishments/records/GETMTC7L1449" },
      { name: "Full-Stack Integration", url: "https://www.coursera.org/account/accomplishments/verify/1PA5LRZLFEJA" },
    ],
  },
  {
    issuer: "DeepLearning.AI",
    certs: [{ name: "Supervised Machine Learning: Regression & Classification", url: "https://coursera-certificate-images.s3.amazonaws.com/QP439O3KFYTC" }],
  },
  {
    issuer: "KodeKloud",
    certs: [
      { name: "DevOps Prerequisite Course", url: "https://www.coursera.org/account/accomplishments/records/VFYLFKB7O4EV" },
      { name: "Jenkins for Beginners", url: "https://www.coursera.org/account/accomplishments/records/SBCBK6JOL6DO" },
      { name: "Docker Basics for DevOps", url: "https://www.coursera.org/account/accomplishments/records/2DJMO5FKIZWQ" },
      { name: "Kubernetes Basics for DevOps", url: "https://www.coursera.org/account/accomplishments/records/8VT2DP0FZV4H" },
    ],
  },
  {
    issuer: "University of Moratuwa",
    certs: [
      { name: "Introduction to Programming Using Web Application", url: "https://open.uom.lk/lms/mod/customcert/view.php?id=697&downloadown=1" },
      { name: "Introduction to Programming Using Python", url: "https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1" },
      { name: "Front-End Web Development", url: "https://open.uom.lk/lms/mod/customcert/view.php?id=697&downloadown=1" },
    ],
  },
  {
    issuer: "Udemy",
    certs: [{ name: "Practical Cisco Networking Labs in Cisco Packet Tracer", url: "https://www.udemy.com/certificate/UC-869b6820-1ea4-483f-b89a-215ff9b8096d/" }],
  },
  {
    issuer: "Peter the Great St. Petersburg Polytechnic University",
    certs: [{ name: "Web Development with Java Spring Framework", url: "" }],
  },
];

/* ═══════════════════════════════════════════════════════════════
   EXPERIENCE & EDUCATION
═══════════════════════════════════════════════════════════════ */
export const EXPERIENCE = {
  meta: "April 2024 – October 2024 · Katunayake, Sri Lanka",
  title: "Software Engineer Intern",
  unit: "Air Transport Regulations & IT Unit",
  org: "Civil Aviation Authority of Sri Lanka (CAASL)",
  tags: ["PHP", "JavaScript", "AJAX", "MySQL", "IBM Watson", "VPN", "LAN/WAN"],
  points: [
    "Developed and maintained internal web apps to streamline IT & regulatory workflows (PHP, JS, AJAX, MySQL)",
    "Designed and implemented an Inventory Management System for IT asset tracking, monitoring, and reporting",
    "Built an AI-powered aviation-themed hotel & bungalow management system with auth, chatbot, invoices & email notifications",
    "Supported network & systems operations: devices, servers, firewalls (LAN/WAN)",
    "Performed infrastructure security/maintenance: patching, VPN, directory services, monitoring",
    "Troubleshot hardware/software/network issues and optimized system performance",
  ],
};

export const EDUCATION = [
  {
    meta: "2021 – 2025 December",
    title: "BSc (Hons) in Software Engineering",
    org: "NSBM Green University, Sri Lanka",
    accent: "blue" as Accent,
    body: "In collaboration with Plymouth University, UK. Coursework covers Programming, Web/Mobile Development, Databases, Networks, Cloud Computing, IoT, and AI. Practical experience via real-world projects and the CAASL internship.",
    tags: ["Full-Stack Dev", "AI/ML", "Cloud", "Networks", "IoT", "Databases"],
  },
  {
    meta: "G.C.E. Advanced Level",
    title: "Physical Science Stream",
    org: "Ruhunu Vijayaba College, Sri Lanka",
    accent: "green" as Accent,
    body: "Combined Mathematics · Physics · Chemistry",
    tags: [],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DERIVED STATS
═══════════════════════════════════════════════════════════════ */
export const TOTAL_CERTS = CERT_GROUPS.reduce((acc, g) => acc + g.certs.length, 0);
export const TOTAL_PROJECTS = PROJECTS.length;

export const STATS = [
  { value: `${TOTAL_PROJECTS}+`, label: "Projects Shipped" },
  { value: `${TOTAL_CERTS}+`, label: "Certifications" },
  { value: "6mo", label: "Production Exp." },
  { value: "∞", label: "Drive" },
];

export const NAV_LINKS = [
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certs" },
];

export const iconAccentClass: Record<Accent, string> = {
  blue: "icon-blue",
  red: "icon-red",
  yellow: "icon-yellow",
  green: "icon-green",
};
