import Link from "next/link";
import type { FeaturedProject } from "../../types";

export function ProjectCard({ slug, title, description }: FeaturedProject) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="block rounded-lg border border-neutral-200 p-4 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
    >
      <p className="mb-1 text-sm font-medium">{title}</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        {description}
      </p>
    </Link>
  );
}
