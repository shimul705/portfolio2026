import { Navbar } from "../../components/layout/navbar";
import { EducationTimeline } from "../../components/sections/education-timeline";
import { TechBanner } from "../../components/sections/tech-banner";
import { skillOrigins } from "../../lib/data/skill-origins";

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-2 text-2xl font-medium">About</h1>
        <p className="mb-8 text-sm" style={{ color: "var(--muted)" }}>
          Based in Bogura, Bangladesh.
        </p>

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
        </div>

        <h2 className="mb-4 mt-14 text-lg font-medium">Education</h2>
        <EducationTimeline />
      </main>

      {skillOrigins.map((group) => (
        <TechBanner key={group.courseName} group={group} />
      ))}
    </div>
  );
}
