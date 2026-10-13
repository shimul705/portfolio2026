import type { CourseSkillGroup, SkillGroup } from "../../types";

/** Full breakdown, used on the Skills page (follows the resume's "Skills and Expertise"). */
export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    description: "Responsive interfaces from Figma to production.",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "DaisyUI", "Responsive web design"],
  },
  {
    category: "Backend & APIs",
    description: "Server logic, APIs and authentication.",
    items: ["Node.js", "Express.js", "NestJS", "REST API development", "JWT authentication", "Firebase Authentication"],
  },
  {
    category: "Database",
    description: "Modelling, querying and storing data.",
    items: ["PostgreSQL", "MongoDB", "Prisma ORM", "SQL"],
  },
  {
    category: "DevOps & cloud",
    description: "Shipping and running what I build.",
    items: ["Docker", "NGINX", "GitLab CI/CD", "AWS (basic)", "Cloudflare Tunnel"],
  },
  {
    category: "Automation & data",
    description: "Turning manual work into scripts and reports.",
    items: ["Puppeteer", "Excel automation", "CSV processing", "JSON processing", "Fixed-width flat files (CDBL)"],
  },
  {
    category: "Networking & infrastructure",
    description: "The systems my software runs on.",
    items: ["Windows Server", "Linux server", "Hyper-V", "Office networking", "MikroTik", "Cisco switches", "Server deployment", "Backup & recovery"],
  },
  {
    category: "Testing & workflow",
    description: "How I plan, test and collaborate.",
    items: ["Git & GitHub", "Agile", "Jira", "Trello", "Postman", "JMeter"],
  },
  {
    category: "Design & other tools",
    description: "Everyday tooling.",
    items: ["Figma", "Pixso", "Canva", "VS Code", "MS Office", "Windows", "Linux (Ubuntu, Fedora)"],
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
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Tailwind CSS",
  "Docker",
  "NGINX",
  "Puppeteer",
  "AWS",
];

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

/** Where each skill was learned — shown as banners on the About page. */
export const skillOrigins: CourseSkillGroup[] = [
  {
    courseName: "Complete Web Development",
    provider: "Programming Hero · Level 1",
    groupLabel: "Frontend & MERN",
    period: "2024",
    skills: [
      { name: "HTML", icon: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS", icon: `${DEVICON}/css3/css3-original.svg` },
      { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Tailwind CSS", icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "React", icon: `${DEVICON}/react/react-original.svg` },
      { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Express.js", icon: `${DEVICON}/express/express-original.svg` },
      { name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Firebase", icon: `${DEVICON}/firebase/firebase-original.svg` },
      { name: "JWT" },
    ],
  },
  {
    courseName: "Next Level Web Development",
    provider: "Programming Hero · Level 2",
    groupLabel: "Full-stack & DevOps",
    period: "Ongoing",
    skills: [
      { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "NestJS", icon: `${DEVICON}/nestjs/nestjs-original.svg` },
      { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "Prisma", icon: `${DEVICON}/prisma/prisma-original.svg` },
      { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
      { name: "NGINX", icon: `${DEVICON}/nginx/nginx-original.svg` },
      { name: "AWS", icon: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
    ],
  },
];
