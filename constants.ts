import { Project, Experience, SkillCategory, Education } from "./types";

export const PORTFOLIO_DATA = {
  name: "Wei Fan Wang",
  role: "Computer Science Graduate Student & Software Engineer",
  bio: "Master's student at Georgia State University with a 4.0 GPA Bachelor's background. Specialized in, Full-Stack systems and Machine Learning. Proven leader as President of the Taiwanese Student Association.",
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
      "Lab Instructor for Theoretical Foundations & Discrete Math",
      "President, Taiwanese Student Association",
      "Calculus I & II Math Tutor",
    ],
  } as Education,
  skills: [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "HTML/CSS", "SQL"],
    },
    {
      title: "Frameworks & DB",
      skills: [
        "React.js",
        "Node.js",
        "Android (Kotlin)",
        "Flutter",
        "Firebase",
        "MySQL",
        "PostgreSQL",
      ],
    },
    {
      title: "ML & Data Science",
      skills: [
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "TensorFlow",
        "XGBoost",
        "CNN",
        "YOLOv8",
      ],
    },

    {
      title: "Tools & OS",
      skills: ["Git", "Linux", "VS Code", "Android Studio", "MVC Architecture"],
    },
  ] as SkillCategory[],
  experiences: [
    {
      id: "exp-1",
      company: "EC Restaurant Supply",
      role: "System Developer / Solution Architect",
      period: "Jan 2026 - Present",
      description: [
        "Automated Market Intelligence: Engineered a custom Python web crawler using Playwright and Asyncio to perform real-time price monitoring across competitor platforms, enabling dynamic pricing strategies that increased profit margins.",
        "Technical SEO & Discoverability: Optimized search engine visibility for commercial kitchen equipment by leveraging Google Search Console to resolve critical indexing issues and analyze performance reports, significantly enhancing technical site health and organic reach.",
        "Data Integrity & Migration: Streamlined large-scale product data migrations by utilizing Excel with advanced formulas and data validation to ensure 100% catalog accuracy for high-volume e-commerce deployments.",
      ],
      skills: [
        "Python (Asyncio, Playwrigh)",
        "Web Scraping",
        "Data Migration",
        "Excel Data Modeling",
        "System Architecture",
        "Google Search Console",
        "AI Automation",
      ],
    },
    {
      id: "exp-2",
      company: "ZeonSolutions.ai",
      role: "AI Engineering Intern / Software Engineer Intern",
      period: "Oct 2025 - Present",
      description: [
        "Conducted technical consultations with partner companies on system architecture, deployment workflows, and API integrations to identify opportunities for implementing AI-driven automation solutions.",
        "Designed and built an automated TikTok video analysis pipeline using n8n, enabling scalable video crawling, structured data extraction, and ML-based content analysis for social media insights.",
        "Collaborated with cross-functional teams to align AI automation tools with client operational needs and business objectives.",
      ],
      skills: [
        "AI Automation",
        "System Architecture",
        "API Integration",
        "n8n",
        "Workflow Automation",
        "Machine Learning",
      ],
    },

    {
      id: "exp-3",
      company: "Georgia State University",
      role: "Lab Instructor (Discrete Math)",
      period: "Sep 2024 - Present",
      description: [
        "Assisted in delivering course content by holding weekly labs and office hours.",
        "Clarified complex concepts in theoretical foundations and discrete math for undergraduate students.",
        "Managed student queries and provided technical guidance on curriculum topics.",
      ],
      skills: ["Theoretical Foundations", "Discrete Math", "Teaching"],
    },
    {
      id: "exp-4",
      company: "National Science Foundation",
      role: "Software Development Intern",
      period: "June 2023 - Dec 2023",
      description: [
        "Developed advanced tools for real-time solar filament detection and tracking to forecast CMEs.",
        "Reduced impacts of space weather on satellite operations and communication systems.",
        "Created annotation workflows and data curation pipelines for 10,000+ datasets.",
      ],
      skills: ["Python", "Machine Learning", "Data Curation", "Solar Physics"],
    },
    {
      id: "exp-5",
      company: "Georgia State University",
      role: "Calculus I & II Math Tutor",
      period: "Jan 2023 - May 2023",
      description: [
        "Provided targeted instruction in Calculus I and II for over 50 students.",
        "Simplified complex topics like limits, derivatives, integrals, and series.",
        "Enhanced student understanding and performance through personalized tutoring sessions.",
      ],
      skills: ["Calculus", "Mathematics", "Communication"],
    },
  ] as Experience[],
  projects: [
    {
      id: "proj-1",
      title: "Market Intelligence Automation",
      description:
        "Developed a high-performance Python-based web crawler utilizing Playwright to automate real-time price monitoring across diverse competitor platforms.",
      tags: ["Python", "Playwright", "Data Analytics", "Automation"],
      image: "price_crawler.png",
    },
    {
      id: "proj-2",
      title: " Regalindustrial Website Development",
      description:
        "Developed a production-grade industrial website for Regal Industrial Corporation using Next.js and TypeScript, featuring responsive design, reusable UI components, and SEO optimizations to enhance digital presence and accurately represent certifications and services.",
      tags: ["Next.js", "React", "TypeScript", "SEO", "Web Development"],
      github: "https://regalindustrial.vercel.app",
      image: "img/regalindustrial.png",
    },
    {
      id: "proj-3",
      title: "Sensor Privacy App",
      description:
        "Android app recording motion sensor data during PIN entry to predict user inputs using Random Forest and XGBoost, demonstrating potential privacy risks.",
      tags: ["Android", "Kotlin", "Python", "ML", "Security"],
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
      title: "Membership System",
      description:
        "Full-stack gym management system using React, Node.js, and MySQL to streamline member tracking and data entry.",
      tags: ["TypeScript", "MySQL", "Node.js", "React"],
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    },
  ] as Project[],
};
