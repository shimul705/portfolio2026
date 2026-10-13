import Link from "next/link";
import type { Project } from "../../types";
import { ArrowRight, BarChart, Bot, Layers, Server } from "../ui/icons";
import { Badge } from "../ui/primitives";

function WorkIcon({ slug }: { slug: string }) {
  if (/market|toolkit/.test(slug)) return <BarChart size={21} />;
  if (/pull|automation/.test(slug)) return <Bot size={21} />;
  if (/office/.test(slug)) return <Layers size={21} />;
  return <Server size={21} />;
}

/** Compact card for internal work software (no screenshots). */
export function WorkCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <WorkIcon slug={project.slug} />
        </span>
        <span className="font-mono text-xs text-subtle">{project.period}</span>
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight group-hover:text-accent">{project.title}</h3>
      <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 3).map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-muted group-hover:text-accent">
        Details <ArrowRight size={15} />
      </span>
    </Link>
  );
}
