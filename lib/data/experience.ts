import type { ExperienceItem } from "../../types";

export const experienceItems: ExperienceItem[] = [
  {
    title: "Senior Officer — Operations & IT Support",
    organization: "CBC Capital & Equity Management Ltd.",
    location: "Tejgaon I/A, Dhaka",
    period: "May 2024 – Present",
    type: "work",
    summary:
      "Sole technical resource at a capital & equity management firm, keeping the network, servers and trading back office running.",
    points: [
      "Sole technical resource for network infrastructure, server administration, and backoffice trading software",
      "Manage CDBL settlement processes and general office IT support",
      "Implement and maintain secure IT infrastructure and networking across the office",
      "Maintain the company website and build internal JavaScript scripts for data analysis",
      "Built a full self-hosted DevOps platform: GitLab, Docker, Nginx, and CI/CD pipelines",
    ],
    tags: ["Networking", "Linux servers", "JavaScript", "GitLab CI/CD", "Docker"],
  },
  {
    title: "SQA Intern",
    organization: "ReformedTech",
    location: "Shyamoli, Dhaka",
    period: "Oct 2023 – Feb 2024",
    type: "internship",
    summary: "Quality assurance in a professional software development team.",
    points: [
      "Planned and executed test cases for web applications",
      "Reported and tracked bugs and issues through to resolution",
      "Learned how professional teams ship: QA gates, bug triage and release checks",
    ],
    tags: ["Test planning", "Manual testing", "Bug reporting"],
  },
  {
    title: "Next Level Web Development (Level 2)",
    organization: "Programming Hero",
    period: "Completed",
    type: "learning",
    summary: "Advanced full-stack program covering backend, databases, AI engineering and DevOps.",
    points: [
      "Critical thinking, data structures, and algorithms",
      "TypeScript fundamentals and object-oriented TypeScript",
      "Node, Express, and SQL for backend development",
      "Relational database design and advanced SQL",
      "Prisma ORM and Next.js fundamentals and authentication",
      "Full-stack AI-powered project: PRD, database design, REST API design, Redis caching, query optimization",
      "AI engineering: LLM integration, AI chat assistants, embeddings, semantic search, RAG systems",
      "Docker and Nginx: images, volumes, networks, multi-container orchestration, reverse proxy, load balancing",
    ],
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Prisma", "Next.js", "Docker", "AI/LLM"],
  },
  {
    title: "Complete Web Development (Level 1)",
    organization: "Programming Hero",
    period: "2024",
    type: "learning",
    summary: "Foundation program — every module ended with a graded, deployed assignment.",
    points: [
      "HTML5, CSS3, Flexbox, Grid and responsive design, converting Figma designs to code",
      "Tailwind CSS and DaisyUI component libraries",
      "JavaScript (ES6+), problem solving and DOM manipulation",
      "React, React Router, Context API and Firebase authentication",
      "Shipped graded projects to GitHub Pages — see the Projects page",
    ],
    tags: ["HTML/CSS", "Tailwind", "JavaScript", "React", "Firebase"],
  },
];
