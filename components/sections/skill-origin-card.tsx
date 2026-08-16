import { HexIcon } from "../ui/hex-icon";
import type { CourseSkillGroup } from "../../types";

export function SkillOriginCard({ group }: { group: CourseSkillGroup }) {
  return (
    <div
      className="rounded-lg border p-5"
      style={{ borderColor: "var(--card-border)" }}
    >
      <p className="mb-1 text-sm font-medium">{group.courseName}</p>
      <p className="mb-4 text-xs" style={{ color: "var(--muted)" }}>
        {group.groupLabel}
      </p>
      <div className="flex flex-wrap gap-5">
        {group.skills.map((skill) => (
          <HexIcon
            key={skill.name}
            skill={skill}
          />
        ))}
      </div>
    </div>
  );
}
