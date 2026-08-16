import { HexIcon } from "../ui/hex-icon";
import type { CourseSkillGroup } from "../../types";

export function TechBanner({ group }: { group: CourseSkillGroup }) {
  return (
    <div
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen px-6 py-16"
      style={{ background: "var(--banner-bg)" }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h3
          className="mb-2 text-xl font-bold"
          style={{ color: "var(--banner-fg)" }}
        >
          {group.courseName}
        </h3>
        <p
          className="mx-auto mb-10 max-w-md text-sm"
          style={{ color: "var(--banner-muted)" }}
        >
          {group.groupLabel} skills learned through this course.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {group.skills.map((skill, index) => (
            <HexIcon key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 h-16 w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"
          fill="var(--background)"
          opacity="0.5"
        />
        <path
          d="M0,70 C360,20 1080,100 1440,60 L1440,100 L0,100 Z"
          fill="var(--background)"
        />
      </svg>
    </div>
  );
}
