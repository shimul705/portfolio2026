import Link from "next/link";
import type { FeaturedProject } from "../../types";

export function ProjectCard({ slug, title, description }: FeaturedProject) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="block rounded-lg border p-4 transition-colors"
      style={{ borderColor: "var(--card-border)" }}
    >
      <p className="mb-1 text-sm font-medium">{title}</p>
      <p className="text-xs" style={{ color: "var(--muted)" }}>
        {description}
      </p>
    </Link>
  );
}
