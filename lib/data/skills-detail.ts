export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "Tailwind CSS", "React", "Next.js", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "BetterAuth", "REST API design"],
  },
  {
    category: "Database & data",
    items: ["PostgreSQL", "Prisma", "Database normalization", "Advanced SQL", "Redis caching"],
  },
  {
    category: "DevOps & infrastructure",
    items: ["Docker", "Docker Compose", "Nginx", "Reverse proxy", "Load balancing", "GitLab CI/CD"],
  },
  {
    category: "AI-assisted engineering",
    items: ["LLM integration", "AI chat assistants", "Embeddings & semantic search", "RAG systems"],
  },
  {
    category: "Tools",
    items: ["Git & GitHub", "GitLab", "Linux server administration", "MikroTik networking"],
  },
];
