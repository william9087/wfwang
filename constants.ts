import { Project, Experience, SkillCategory, Education } from "./types";

export const PORTFOLIO_DATA = {
  name: "Wei Fan Wang",
  role: "Computer Science Graduate Student & Software Engineer",
  bio: "Master's student at Georgia State University with a 4.0 GPA Bachelor's background. Specialized in, Full-Stack systems and Machine Learning. Proven leader as President of the Taiwanese Student Association.",
  email: "wwgo168@gmail.com",
  github: "https://github.com/william9087",
  linkedin: "https://linkedin.com/in/wei-fan-wang",
  education: {
    degree: "M.S. in Computer Science",
    university: "Georgia State University",
    year: "Expected May 2026",
    gpa: "3.72 / 4.0",
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
      id: "exp-2",
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
      id: "exp-3",
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
      title: "Sensor Privacy App",
      description:
        "Android app recording motion sensor data during PIN entry to predict user inputs using Random Forest and XGBoost, demonstrating potential privacy risks.",
      tags: ["Android", "Kotlin", "Python", "ML", "Security"],
      github: "https://github.com/william9087",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "proj-2",
      title: "To-Do List Web App",
      description:
        "Full-stack application built with MVC architecture, RESTful APIs, and PostgreSQL for data persistence with a responsive React frontend.",
      tags: ["Node.js", "Express", "PostgreSQL", "React"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "proj-3",
      title: "Calories Burned ML",
      description:
        "Predicting calories burned using XGBoost, FNN, and 1D-CNN models with fine-tuned hyperparameters for high accuracy and low MAE.",
      tags: ["Python", "TensorFlow", "CNN", "Neural Networks"],
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "proj-4",
      title: "Membership System",
      description:
        "Full-stack gym management system using React, Node.js, and MySQL to streamline member tracking and data entry.",
      tags: ["TypeScript", "MySQL", "Node.js", "React"],
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "proj-5",
      title: "EnviroEquity.org",
      description:
        "Community-driven platform for environmental justice, allowing users to sign petitions and share local environmental issues.",
      tags: ["HTML", "CSS", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    },
  ] as Project[],
};
