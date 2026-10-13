import type { CourseSkillGroup, LearnedSkill } from "../../types";
import { Container } from "../ui/primitives";

// Varied durations so the hexagons drift in and out of phase instead of bouncing in unison.
const DURATIONS = [10, 8, 10, 8, 9, 10, 8, 9, 9.5, 8, 9, 8];

function HexIcon({ skill, index }: { skill: LearnedSkill; index: number }) {
  return (
    <div className="flex w-[84px] flex-col items-center gap-2">
      <div
        className="relative flex items-center justify-center"
        style={{
          width: 90,
          height: 100,
          animation: `hexFloat ${DURATIONS[index % DURATIONS.length]}s ease-in-out infinite alternate`,
        }}
      >
        <div className="hexagon-shape absolute inset-0" />
        <div className="relative z-10 flex items-center justify-center">
          {skill.icon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={skill.icon} alt="" className="h-9 w-9 object-contain" loading="lazy" />
          ) : (
            <span className="text-lg font-bold text-slate-800">{skill.name.charAt(0)}</span>
          )}
        </div>
      </div>
      <p className="text-center text-xs" style={{ color: "var(--banner-muted)" }}>
        {skill.name}
      </p>
    </div>
  );
}

export function TechBanner({ group }: { group: CourseSkillGroup }) {
  return (
    <div className="relative overflow-hidden rounded-3xl px-6 py-14" style={{ background: "var(--banner-bg)" }}>
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <Container className="relative text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: "var(--banner-muted)" }}>
          {group.provider} · {group.period}
        </p>
        <h3 className="mt-2 text-xl font-semibold sm:text-2xl" style={{ color: "var(--banner-fg)" }}>
          {group.courseName}
        </h3>
        <p className="mx-auto mb-10 mt-2 max-w-md text-sm" style={{ color: "var(--banner-muted)" }}>
          {group.groupLabel} skills learned through this course.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
          {group.skills.map((skill, index) => (
            <HexIcon key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </Container>
    </div>
  );
}
