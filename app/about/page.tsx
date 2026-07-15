import { Navbar } from "../../components/layout/navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-6 text-2xl font-medium">About</h1>
        <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          <p>
            I come from a CSE background combined with real experience in
            capital markets, which gives me a slightly unusual mix: I can
            build a product end to end, and I understand the operational and
            financial context it needs to run in.
          </p>
          <p>
            Day to day, I work in an admin and IT role at a capital and
            equity management firm, where I am the sole technical resource
            responsible for network infrastructure, server administration,
            backoffice trading software, and general office systems.
            Alongside that, I run infrastructure and automation work under my
            own small software effort.
          </p>
          <p>
            Outside of work, I have built and run a full self-hosted
            development platform from scratch: GitLab, project management,
            Docker, and Nginx, all wired together with real CI/CD pipelines,
            on hardware I set up and maintain myself. That project is the
            reason I can talk about DevOps as something I have actually done,
            not just read about.
          </p>
          <p>
            On the development side, I have completed structured, project
            based coursework covering the modern full-stack path: TypeScript,
            React, Next.js, Node, Express, relational and document
            databases, and AI-assisted engineering. I like building things
            that are simple to use on the surface and solid underneath.
          </p>
        </div>
      </main>
    </div>
  );
}
