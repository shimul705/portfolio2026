import type { SkillCategory } from "../../types";

export function SkillCard({ title, description }: SkillCategory) {
  return (
    <div className="rounded-lg bg-neutral-100 p-5 text-center dark:bg-neutral-900">
      <p className="mb-1 text-sm font-medium">{title}</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
}
