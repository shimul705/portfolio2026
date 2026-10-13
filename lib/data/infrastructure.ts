import type { InfrastructureComponent } from "../../types";

export const infrastructureIntro =
  "I built and run a self-hosted development platform from a single home server: real GitLab CI/CD, isolated per-project environments, and networking set up from scratch.";

export const infrastructureStack: InfrastructureComponent[] = [
  { name: "GitLab CE", role: "Git hosting, issue tracking, and CI/CD pipelines", layer: "Source & CI/CD" },
  { name: "GitLab Runner", role: "Executes pipeline jobs in isolated Docker containers", layer: "Source & CI/CD" },
  { name: "Docker & Docker Compose", role: "Isolated staging and production environments per project", layer: "Runtime" },
  { name: "Nginx Proxy Manager", role: "Reverse proxy and clean subdomain routing", layer: "Runtime" },
  { name: "MikroTik", role: "Network routing, DHCP, static DNS for internal domains", layer: "Networking & access" },
  { name: "Tailscale", role: "Remote access to the home network without port forwarding", layer: "Networking & access" },
  { name: "Cloudflare Tunnel", role: "Public access for client previews, no exposed ports", layer: "Networking & access" },
  { name: "OpenProject", role: "Task tracking and project management, per client", layer: "Planning" },
];

export const shippingSteps = [
  { title: "Push", text: "Code is pushed to the project's repository on self-hosted GitLab." },
  { title: "Build & test", text: "GitLab Runner builds the app in an isolated Docker container." },
  { title: "Staging", text: "A push to main deploys automatically to the project's staging subdomain for review." },
  { title: "Production", text: "Once approved, a manual promotion ships the same build to production." },
];

export const infrastructureSummary =
  "Every client project gets its own isolated staging and production containers, its own subdomain, and its own CI/CD pipeline — the same workflow used at real software companies, running on infrastructure I set up and maintain myself.";
