import { Project, Experience, SkillCategory, Education } from "./types";

export const PORTFOLIO_DATA = {
  name: "Wei Fan Wang",
  role: "Computer Science Graduate Student & Software Engineer",
  bio: "Master's student at Georgia State University with a 4.0 GPA Bachelor's background. Specialized in Full-Stack systems and Machine Learning. Proven leader as President of the Taiwanese Student Association.",
  email: "wwgo168@gmail.com",
  github: "https://github.com/william9087",
  linkedin: "https://www.linkedin.com/in/wei-fan-wang-b04741227/",
  education: {
    degree: "M.S. in Computer Science",
    university: "Georgia State University",
    year: "Expected May 2026",
    gpa: "3.76 / 4.0",
    achievements: [
      "B.S. in Computer Science (GPA: 4.0/4.0, President List)",
      "Lab Instructor for Discrete Mathematics & Data Structures (CS 2510/2710)",
      "President, Taiwanese Student Association",
      "Calculus I & II Math Tutor",
    ],
  } as Education,
  skills: [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
    },
    {
      title: "Frameworks",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "FastAPI",
        "Android (Kotlin)",
      ],
    },
    {
      title: "Tools & Libraries",
      skills: [
        "Git",
        "Linux",
        "MySQL",
        "Firebase",
        "n8n",
        "nodriver",
        "Playwright",
        "Pandas",
        "XGBoost",
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        "Web Scraping",
        "REST APIs",
        "Data Pipelines",
        "Machine Learning",
        "Automation",
        "Technical SEO",
      ],
    },
  ] as SkillCategory[],
  experiences: [
    {
      id: "exp-1",
      company: "EC Restaurant Supply",
      role: "Software Engineer",
      period: "Jan 2026 - Present",
      description: [
        "Architected an asynchronous web scraping pipeline (Python, nodriver, Playwright, pandas) to automate price monitoring across e-commerce platforms, processing 9,000+ SKUs and eliminating hours of manual research weekly.",
        "Defeated advanced anti-bot detection by migrating from Playwright to undetected Chrome (nodriver), implementing randomized request timing and stealth browser contexts to achieve near-100% data extraction reliability at scale.",
        "Boosted organic site discoverability by configuring Google Search Console, resolving critical crawl and indexing errors, and interpreting performance analytics to drive overall technical site health.",
      ],
      skills: [
        "Python",
        "nodriver",
        "Playwright",
        "Pandas",
        "Web Scraping",
        "Google Search Console",
        "Data Pipelines",
      ],
    },
    {
      id: "exp-2",
      company: "ZeonSolutions.ai",
      role: "AI Engineering Intern",
      period: "Sep 2025 - Present",
      description: [
        "Built an automated video analysis pipeline using n8n workflow automation, enabling scalable video crawling, data extraction, and ML-based content analysis for social media insights.",
        "Led technical consultations with partner companies on system architecture, deployment workflows, and API integration to embed AI-driven automation tools into client operations.",
      ],
      skills: [
        "AI Automation",
        "n8n",
        "System Architecture",
        "API Integration",
        "Machine Learning",
        "Workflow Automation",
      ],
    },
    {
      id: "exp-3",
      company: "Georgia State University",
      role: "Lab Instructor (CS 2510 / 2710)",
      period: "Sep 2024 - Present",
      description: [
        "Instructed Discrete Mathematics and Data Structures to 50+ undergraduates per semester; facilitated weekly labs, significantly improving student engagement and comprehension of formal logic and algorithmic efficiency.",
      ],
      skills: ["Discrete Mathematics", "Data Structures", "Teaching"],
    },
    {
      id: "exp-4",
      company: "National Science Foundation (NSF) Research Program",
      role: "Software Engineering Intern",
      period: "June 2023 - Dec 2023",
      description: [
        "Developed MLEcoFi, a comprehensive machine learning ecosystem for solar-filament detection; engineered data pipelines processing 10,000+ astronomical images.",
        "Reduced impacts of space weather on satellite operations and communication systems.",
        "Created annotation workflows and data curation pipelines for large-scale astronomical datasets.",
      ],
      skills: ["Python", "Machine Learning", "Data Pipelines", "Solar Physics"],
    },
  ] as Experience[],
  projects: [
    {
      id: "proj-1",
      title: "Market Intelligence Automation",
      description:
        "Architected an asynchronous web scraping pipeline using Python, nodriver, and Playwright to automate real-time price monitoring across e-commerce platforms, processing 9,000+ SKUs and eliminating hours of manual research weekly.",
      tags: ["Python", "Playwright", "nodriver", "Data Pipelines", "Automation"],
      image: "price_crawler.png",
    },
    {
      id: "proj-2",
      title: "Industrial Web Platform | Regal Industrial Corporation",
      description:
        "Architected 5+ production-grade pages using Next.js and TypeScript, utilizing Framer Motion animations to deliver a polished, high-performance user experience with vivid page transitions. Implemented JSON-LD structured data, OpenGraph metadata, and technical SEO best practices to improve search engine indexing and surface SSPC certifications and regulatory compliance.",
      tags: ["Next.js", "React", "TypeScript", "Framer Motion", "SEO"],
      github: "https://regalindustrial.vercel.app",
      image: "img/regalindustrial.png",
    },
    {
      id: "proj-3",
      title: "Real-Time Sensor Data Classification System",
      description:
        "Built an Android data-capture client with a foreground service streaming 50Hz motion-sensor data and exporting structured CSVs, integrating with a FastAPI backend via REST and WebSocket endpoints for real-time ingestion. Architected a two-phase system processing 1,400+ recordings for offline model training and serving real-time inference through a low-latency prediction service.",
      tags: ["Java", "Python", "Android SDK", "FastAPI", "XGBoost", "CNN"],
      github:
        "https://github.com/william9087/Privacy-leakage-thru-mobile-sensor-data",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "proj-4",
      title: "To-Do List Web App",
      description:
        "Full-stack application built with MVC architecture, RESTful APIs, and PostgreSQL for data persistence with a responsive React frontend.",
      tags: ["Node.js", "Express", "PostgreSQL", "React"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "proj-5",
      title: "Calories Burned ML",
      description:
        "Predicting calories burned using XGBoost, FNN, and 1D-CNN models with fine-tuned hyperparameters for high accuracy and low MAE.",
      tags: ["Python", "TensorFlow", "CNN", "Neural Networks"],
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "proj-6",
      title: "Membership Management System",
      description:
        "Built a scalable membership platform to track members, payments, and attendance, using React for UI, Node.js for backend logic, and MySQL for data storage. Integrated secure authentication and CRUD operations, increasing administrative efficiency and ensuring accurate data management.",
      tags: ["TypeScript", "MySQL", "Node.js", "React"],
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    },
  ] as Project[],
};
