import type { Metadata } from "next";
import { ProjectCard } from "../../components/projects/project-card";
import { LearningJourney } from "../../components/sections/learning-journey";
import { ContactCta } from "../../components/sections/contact-cta";
import { Container, PageHeader, SectionHeading } from "../../components/ui/primitives";
import { caseStudies, deployedProjects } from "../../lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Deployed web projects by Shimul Mahmud — JavaScript apps, Tailwind and HTML/CSS sites — plus case studies on self-hosted infrastructure and full-stack work.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        description="Deployed projects with live demos and source code, plus case studies I'm writing up from my infrastructure and full-stack work."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Live & documented"
            title="Deployed projects"
            description="Built for Programming Hero, revisited in 2026 to fix responsiveness and bugs. Each repo has a full README."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {deployedProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} priority={i < 3} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Build order"
            title="The learning journey"
            description="The same projects in the order I built them — one new skill per step."
          />
          <LearningJourney />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Coming soon"
            title="Case studies in progress"
            description="Larger projects from my infrastructure and full-stack work. Full write-ups with screenshots and architecture are on the way."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
