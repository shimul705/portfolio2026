import type { LearnedSkill } from "../../types";

// Duration cycle taken from the reference site's own hexagon animation timing,
// so hexagons drift in and out of phase instead of bouncing in unison.
const DURATIONS = [10, 8, 10, 8, 9, 10, 8, 9, 9.5, 8, 9, 8];

export function HexIcon({
  skill,
  index = 0,
}: {
  skill: LearnedSkill;
  index?: number;
}) {
  const duration = DURATIONS[index % DURATIONS.length];

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative flex items-center justify-center"
        style={{
          width: 90,
          height: 100,
          animation: `hexFloat ${duration}s ease-in-out infinite alternate`,
        }}
      >
        <div className="hexagon-shape absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center justify-center">
          {skill.icon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={skill.icon} alt={skill.name} className="h-9 w-9 object-contain" />
          ) : (
            <span className="text-lg font-bold" style={{ color: "#1e293b" }}>
              {skill.name.charAt(0)}
            </span>
          )}
        </div>
      </div>
      <p className="text-xs" style={{ color: "var(--banner-muted, var(--muted))" }}>
        {skill.name}
      </p>
    </div>
  );
}
