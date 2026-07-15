export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  points: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    title: "Admin & IT",
    organization: "CBC Capital & Equity Management Ltd.",
    period: "Current",
    points: [
      "Sole technical resource for network infrastructure, server administration, and backoffice trading software",
      "Manage CDBL settlement processes and general office IT support",
      "Built a full self-hosted DevOps platform: GitLab, Docker, Nginx, and CI/CD pipelines",
    ],
  },
  {
    title: "Full-stack development coursework",
    organization: "Programming Hero — Level 2",
    period: "Completed",
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
  },
];
