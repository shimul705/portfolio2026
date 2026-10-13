import Link from "next/link";
import { formatDate, journey } from "../../lib/data/projects";
import { ArrowRight } from "../ui/icons";
import { MarkBadge } from "../projects/project-card";

/** Assignment 1 → 5 in build order, showing what each step added. */
const newSkill: Record<string, string> = {
  "new-year-party": "Figma → HTML/CSS, Flexbox",
  "bengal-travel": "CSS Grid, responsive breakpoints",
  "hockeys-club": "Tailwind CSS + DaisyUI",
  "js-problem-solving": "JavaScript functions & logic",
  "sm-ticket": "DOM manipulation & events",
};

export function LearningJourney() {
  return (
    <ol className="relative grid gap-4 md:grid-cols-5 md:gap-3">
      {/* connecting line */}
      <div className="absolute left-[19px] top-4 bottom-4 w-px bg-border md:left-4 md:right-4 md:top-[19px] md:bottom-auto md:h-px md:w-auto" />
      {journey.map((project, i) => (
        <li key={project.slug} className="relative flex gap-4 md:flex-col md:gap-0">
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface font-mono text-sm font-semibold text-accent shadow-sm">
            {String(i + 1).padStart(2, "0")}
          </span>
          <Link
            href={`/projects/${project.slug}`}
            className="group flex-1 rounded-2xl border border-border bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5 md:mt-4"
          >
            <p className="text-xs text-subtle">{formatDate(project.date)}</p>
            <p className="mt-1 font-semibold leading-snug">{project.title}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">{newSkill[project.slug] ?? project.tagline}</p>
            <div className="mt-3 flex items-center justify-between">
              <MarkBadge project={project} />
              <ArrowRight size={15} className="text-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
