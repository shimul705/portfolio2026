import type { SkillCategory } from "../../types";

export function SkillCard({ title, description }: SkillCategory) {
  return (
    <div
      className="rounded-lg p-5 text-center"
      style={{ background: "var(--card-bg)" }}
    >
      <p className="mb-1 text-sm font-medium">{title}</p>
      <p className="text-xs" style={{ color: "var(--muted)" }}>
        {description}
      </p>
    </div>
  );
}
