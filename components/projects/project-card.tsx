import Image from "next/image";
import Link from "next/link";
import type { Project } from "../../types";
import { formatDate } from "../../lib/data/projects";
import { ArrowUpRight, Award, Code, GitHub, Server, Sparkles } from "../ui/icons";
import { Badge, cn } from "../ui/primitives";

export function MarkBadge({ project }: { project: Project }) {
  if (!project.mark) return null;
  const full = project.mark.score === project.mark.total;
  return (
    <Badge tone={full ? "success" : "warning"}>
      <Award size={12} />
      {project.mark.score}/{project.mark.total}
    </Badge>
  );
}

/** Placeholder cover for case studies that don't have screenshots yet. */
export function CaseStudyCover({ project, className }: { project: Project; className?: string }) {
  const Icon = project.slug.includes("server") ? Server : project.slug.includes("ai") ? Sparkles : Code;
  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-surface-2",
        className,
      )}
    >
      <div className="bg-grid absolute inset-0" />
      <div
        className="absolute -right-10 -top-10 h-48 w-48 rounded-full blur-3xl"
        style={{ background: "var(--glow)" }}
      />
      <div className="relative flex flex-col items-center gap-3 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface text-accent shadow-sm">
          <Icon size={26} />
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">Case study in progress</span>
      </div>
    </div>
  );
}

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const cover = project.images.find((i) => i.kind === "desktop");

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5">
      <div className="relative overflow-hidden border-b border-border">
        {cover ? (
          <div className="relative aspect-[16/10] bg-surface-2">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <CaseStudyCover project={project} />
        )}
        <div className="absolute left-3 top-3 flex gap-2">
          {project.status === "in-progress" && <Badge className="bg-surface/90 backdrop-blur">In progress</Badge>}
          {project.label && <Badge className="bg-surface/90 backdrop-blur">{project.label}</Badge>}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">
            <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
              {project.title}
            </Link>
          </h3>
          <MarkBadge project={project} />
        </div>
        <p className="text-sm font-medium text-accent">{project.tagline}</p>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-sm">
          <span className="text-xs text-subtle">{project.date ? formatDate(project.date) : "Coming soon"}</span>
          <div className="relative z-10 flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code`}
                className="text-muted transition-colors hover:text-foreground"
              >
                <GitHub size={17} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-accent"
              >
                Live <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
