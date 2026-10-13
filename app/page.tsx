import Link from "next/link";
import { Hero } from "../components/sections/hero";
import { StackMarquee } from "../components/sections/stack-marquee";
import { LearningJourney } from "../components/sections/learning-journey";
import { ContactCta } from "../components/sections/contact-cta";
import { ProjectCard } from "../components/projects/project-card";
import { WorkCard } from "../components/projects/work-card";
import { ArrowRight, Briefcase, Check, Server } from "../components/ui/icons";
import { Badge, ButtonLink, Card, Container, SectionHeading } from "../components/ui/primitives";
import { featuredProjects, workProjects } from "../lib/data/projects";
import { experienceItems } from "../lib/data/experience";
import { infrastructureIntro, infrastructureStack } from "../lib/data/infrastructure";

export default function Home() {
  const work = experienceItems.filter((e) => e.type !== "learning");

  return (
    <>
      <Hero />
      <StackMarquee />

      {/* Professional work */}
      <section className="pt-20 sm:pt-24">
        <Container>
          <SectionHeading
            eyebrow="Professional work"
            title="Software I build and run at work"
            description="Internal tools I built at CBC Capital & Equity Management — in daily use for trading operations, reporting and administration."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workProjects.slice(0, 4).map((project) => (
              <WorkCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* Featured projects */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Open source"
            title="Projects you can try live"
            description="Live, responsive and documented — every project links to its source code and a write-up of what I built and learned."
            action={
              <ButtonLink href="/projects" variant="secondary">
                All projects <ArrowRight size={16} />
              </ButtonLink>
            }
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} priority={i === 0} />
            ))}
          </div>
        </Container>
      </section>

      {/* Learning journey */}
      <section className="border-y border-border bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Growth, step by step"
            title="From first HTML page to interactive apps in six weeks"
            description="Each Programming Hero module ended with a graded, deployed assignment. Read in order, they show one new skill at a time — and in 2026 I went back to fix what I'd do better now."
          />
          <LearningJourney />
        </Container>
      </section>

      {/* Experience + infrastructure */}
      <section className="py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card className="flex flex-col p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Briefcase size={20} />
              </span>
              <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
            </div>
            <ol className="space-y-6">
              {work.map((item) => (
                <li key={item.title} className="relative border-l-2 border-border pl-5">
                  <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-xs text-subtle">{item.period}</p>
                  <p className="mt-0.5 font-semibold">{item.title}</p>
                  <p className="text-sm text-muted">{item.organization}</p>
                  {item.summary && <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>}
                </li>
              ))}
            </ol>
            <Link href="/experience" className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-accent hover:underline">
              Full experience <ArrowRight size={15} />
            </Link>
          </Card>

          <Card className="flex flex-col p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Server size={20} />
              </span>
              <h2 className="text-xl font-semibold tracking-tight">Self-hosted infrastructure</h2>
            </div>
            <p className="text-sm leading-relaxed text-muted">{infrastructureIntro}</p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {infrastructureStack.slice(0, 6).map((item) => (
                <li key={item.name} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="mt-0.5 shrink-0 text-success" />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {["Staging → production", "Per-project subdomains", "No exposed ports"].map((t) => (
                <Badge key={t} tone="accent">
                  {t}
                </Badge>
              ))}
            </div>
            <Link href="/infrastructure" className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-accent hover:underline">
              How it works <ArrowRight size={15} />
            </Link>
          </Card>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
