import { Navbar } from "../../components/layout/navbar";

const stack = [
  { name: "GitLab CE", role: "Git hosting, issue tracking, and CI/CD pipelines" },
  { name: "GitLab Runner", role: "Executes pipeline jobs in isolated Docker containers" },
  { name: "OpenProject", role: "Task tracking and project management, per client" },
  { name: "Docker & Docker Compose", role: "Isolated staging and production environments per project" },
  { name: "Nginx Proxy Manager", role: "Reverse proxy and clean subdomain routing" },
  { name: "MikroTik", role: "Network routing, DHCP, static DNS for internal domains" },
  { name: "Tailscale", role: "Remote access to the home network without port forwarding" },
  { name: "Cloudflare Tunnel", role: "Public access for client previews, no exposed ports" },
];

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-2 text-2xl font-medium">Infrastructure</h1>
        <p className="mb-10 text-sm" style={{ color: "var(--muted)" }}>
          I built and run a self-hosted development platform from a single
          home server: real GitLab CI/CD, isolated per-project environments,
          and networking set up from scratch. Most frontend-focused
          candidates haven&apos;t done this end to end. I have.
        </p>

        <div className="space-y-3">
          {stack.map((item) => (
            <div
              key={item.name}
              className="flex items-start justify-between rounded-lg border p-4"
              style={{ borderColor: "var(--card-border)" }}
            >
              <p className="text-sm font-medium">{item.name}</p>
              <p
                className="ml-4 max-w-xs text-right text-xs"
                style={{ color: "var(--muted)" }}
              >
                {item.role}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-10 rounded-lg border p-5"
          style={{ borderColor: "var(--card-border)" }}
        >
          <p className="mb-2 text-sm font-medium">How a project ships</p>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Every client project gets its own isolated staging and production
            containers, its own subdomain, and its own CI/CD pipeline. A push
            to the main branch triggers an automatic deploy to staging for
            review, then a manual promotion to production once approved —
            the same workflow used at real software companies, running on
            infrastructure I set up and maintain myself.
          </p>
        </div>
      </main>
    </div>
  );
}
