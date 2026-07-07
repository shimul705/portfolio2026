import type { FeaturedProject } from "../../types";

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "sunrise-bakery",
    title: "Sunrise Bakery",
    description: "Client site with CI/CD deploy",
    longDescription:
      "Full case study coming soon. This project covers the client brief, the build, and the CI/CD pipeline that deploys it automatically.",
    images: ["/demo.jpg", "/demo1.jpg", "/demo2.jpg", "/demo.jpg", "/demo1.jpg"],
    techStack: ["HTML", "CSS", "GitLab CI/CD", "Docker", "Nginx"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    slug: "ai-healthcare-platform",
    title: "AI healthcare platform",
    description: "Full-stack with AI diagnostics",
    longDescription:
      "Full case study coming soon. This project covers the product design, the API, and the AI-assisted diagnostic features.",
    images: ["/demo1.jpg", "/demo2.jpg", "/demo.jpg", "/demo1.jpg", "/demo2.jpg"],
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Redis", "AI/LLM"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    slug: "home-server-infrastructure",
    title: "Home server infrastructure",
    description: "Self-hosted GitLab, Docker, CI/CD",
    longDescription:
      "Full case study coming soon. This project covers the full self-hosted stack: GitLab, OpenProject, Docker, Nginx, and CI/CD pipelines running on a single home server.",
    images: ["/demo2.jpg", "/demo.jpg", "/demo1.jpg", "/demo2.jpg", "/demo.jpg"],
    techStack: ["Docker", "GitLab CE", "Nginx", "MikroTik", "Cloudflare Tunnel"],
    liveUrl: "#",
    repoUrl: "#",
  },
];
