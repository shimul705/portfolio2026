import type { CourseSkillGroup, SkillGroup } from "../../types";

/** Full breakdown, used on the Skills page. */
export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    description: "Responsive, accessible interfaces from Figma to production.",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "DaisyUI", "Redux / Context API"],
  },
  {
    category: "Backend",
    description: "APIs and server logic.",
    items: ["Node.js", "Express.js", "REST API design", "MongoDB", "Mongoose", "BetterAuth", "Firebase Auth"],
  },
  {
    category: "Database & data",
    description: "Modelling, querying and caching data.",
    items: ["PostgreSQL", "MySQL", "Prisma", "Database normalization", "Advanced SQL", "Redis caching"],
  },
  {
    category: "DevOps & infrastructure",
    description: "Shipping and running what I build.",
    items: ["Docker", "Docker Compose", "Nginx", "Reverse proxy", "Load balancing", "GitLab CI/CD", "Cloudflare Tunnel"],
  },
  {
    category: "AI-assisted engineering",
    description: "Adding LLM features to real products.",
    items: ["LLM integration", "AI chat assistants", "Embeddings & semantic search", "RAG systems"],
  },
  {
    category: "Tools",
    description: "Day-to-day workflow.",
    items: ["Git & GitHub", "GitLab", "VS Code", "Figma", "Vercel", "Linux server administration", "MikroTik networking"],
  },
];

/** Compact list for the home page strip. */
export const coreStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Docker",
  "Nginx",
  "GitLab CI/CD",
];

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

/** Where each skill was learned — shown as banners on the About page. */
export const skillOrigins: CourseSkillGroup[] = [
  {
    courseName: "Complete Web Development",
    provider: "Programming Hero · Level 1",
    groupLabel: "Frontend",
    period: "2024",
    skills: [
      { name: "HTML", icon: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS", icon: `${DEVICON}/css3/css3-original.svg` },
      { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Tailwind CSS", icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "React", icon: `${DEVICON}/react/react-original.svg` },
      { name: "Firebase", icon: `${DEVICON}/firebase/firebase-original.svg` },
    ],
  },
  {
    courseName: "Next Level Web Development",
    provider: "Programming Hero · Level 2",
    groupLabel: "Full-stack & DevOps",
    period: "Completed",
    skills: [
      { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Express.js", icon: `${DEVICON}/express/express-original.svg` },
      { name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "Prisma", icon: `${DEVICON}/prisma/prisma-original.svg` },
      { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
      { name: "Mongoose" },
      { name: "BetterAuth" },
    ],
  },
];
