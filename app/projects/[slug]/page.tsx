import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGallery } from "../../../components/projects/project-gallery";
import { CaseStudyCover, MarkBadge } from "../../../components/projects/project-card";
import { ContactCta } from "../../../components/sections/contact-cta";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Briefcase, Calendar, Check, GitHub, Lock, Wrench } from "../../../components/ui/icons";
import { Badge, ButtonLink, Card, Container } from "../../../components/ui/primitives";
import { formatDate, getProject, projects } from "../../../lib/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${project.tagline}. ${project.summary}`,
    openGraph: project.images[0] ? { images: [{ url: project.images[0].src, alt: project.images[0].alt }] } : undefined,
  };
}

function ListBlock({
  title,
  items,
  icon: Icon,
  tone = "text-success",
}: {
  title: string;
  items: string[];
  icon: typeof Check;
  tone?: string;
}) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold tracking-tight">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted">
            <Icon size={17} className={`mt-1 shrink-0 ${tone}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Container className="pt-10">
        <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground">
          <ArrowLeft size={15} /> All projects
        </Link>
      </Container>

      <Container className="grid gap-10 pt-8 lg:grid-cols-[1.45fr_1fr] lg:gap-12">
        <div className="animate-fade-up">
          {project.images.length > 0 ? (
            <ProjectGallery images={project.images} title={project.title} />
          ) : (
            <CaseStudyCover project={project} className="rounded-2xl border border-border" />
          )}
        </div>

        <aside className="animate-fade-up lg:sticky lg:top-24 lg:self-start" style={{ animationDelay: "80ms" }}>
          <div className="flex flex-wrap items-center gap-2">
            {project.label && <Badge tone="accent">{project.label}</Badge>}
            {project.status === "in-progress" && <Badge>Case study in progress</Badge>}
            {project.status === "internal" && <Badge tone="accent">Professional work</Badge>}
            <MarkBadge project={project} />
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h1>
          <p className="mt-2 text-lg text-accent">{project.tagline}</p>
          <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>

          {project.date && (
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-subtle">
              <Calendar size={15} /> Completed {formatDate(project.date)}
            </p>
          )}
          {project.context && (
            <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-subtle">
              <span className="inline-flex items-center gap-2">
                <Briefcase size={15} /> {project.context}
              </span>
              {project.period && (
                <span className="inline-flex items-center gap-2">
                  <Calendar size={15} /> {project.period}
                </span>
              )}
            </p>
          )}

          <div className="mt-6">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-subtle">Tech stack</p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>

          {project.status === "internal" && (
            <div className="mt-8 flex gap-3 rounded-2xl border border-border bg-surface-2 p-4 text-sm leading-relaxed text-muted">
              <Lock size={17} className="mt-0.5 shrink-0 text-subtle" />
              <p>
                Proprietary software built for my employer and used in daily operations, so the code and live system
                aren&apos;t public. I&apos;m happy to walk through how it works in an interview.
              </p>
            </div>
          )}

          {(project.liveUrl || project.repoUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <ButtonLink href={project.liveUrl}>
                  View live site <ArrowUpRight size={16} />
                </ButtonLink>
              )}
              {project.repoUrl && (
                <ButtonLink href={project.repoUrl} variant="secondary">
                  <GitHub size={16} /> Source code
                </ButtonLink>
              )}
            </div>
          )}
        </aside>
      </Container>

      <Container className="mt-16 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-12">
        <div className="space-y-12">
          <div>
            <h2 className="mb-4 text-lg font-semibold tracking-tight">Overview</h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted">
              {project.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <ListBlock title={project.status === "in-progress" ? "What it covers" : "Key features"} items={project.highlights} icon={Check} />
          {project.learned && <ListBlock title="What I learned" items={project.learned} icon={BookOpen} tone="text-accent" />}
        </div>

        {project.updates2026 && (
          <div>
            <Card className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-warning-soft text-warning">
                  <Wrench size={18} />
                </span>
                <div>
                  <h2 className="font-semibold tracking-tight">2026 update</h2>
                  <p className="text-xs text-subtle">Revisited for my portfolio</p>
                </div>
              </div>
              <ul className="space-y-3">
                {project.updates2026.map((u) => (
                  <li key={u} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <Check size={16} className="mt-0.5 shrink-0 text-success" />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-subtle">
                The original code and its mark are kept as they were; the README in the repo lists every change.
              </p>
            </Card>
          </div>
        )}
      </Container>

      <Container className="mt-20">
        <nav aria-label="More projects" className="grid gap-4 sm:grid-cols-2">
          <Link
            href={`/projects/${prev.slug}`}
            className="group rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
          >
            <span className="inline-flex items-center gap-1.5 text-xs text-subtle">
              <ArrowLeft size={14} /> Previous
            </span>
            <p className="mt-1 font-semibold group-hover:text-accent">{prev.title}</p>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group rounded-2xl border border-border bg-surface p-5 text-right transition-colors hover:border-accent/40"
          >
            <span className="inline-flex items-center gap-1.5 text-xs text-subtle">
              Next <ArrowRight size={14} />
            </span>
            <p className="mt-1 font-semibold group-hover:text-accent">{next.title}</p>
          </Link>
        </nav>
      </Container>

      <div className="mt-24">
        <ContactCta />
      </div>
    </>
  );
}
