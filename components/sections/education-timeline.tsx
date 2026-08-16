import { educationItems } from "../../lib/data/education";

export function EducationTimeline() {
  return (
    <div className="space-y-4">
      {educationItems.map((item) => (
        <div
          key={item.level}
          className="flex items-center gap-4 rounded-lg border p-4"
          style={{ borderColor: "var(--card-border)" }}
        >
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border"
            style={{ borderColor: "var(--card-border)", background: "var(--card-bg)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.logo}
              alt={`${item.institution} logo`}
              className="h-full w-full object-contain p-1"
            />
          </div>
          <div>
            <p className="text-xs" style={{ color: "var(--accent)" }}>
              {item.level}
            </p>
            <p className="text-sm font-medium">{item.institution}</p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              {item.location} • {item.admissionYear} – {item.passingYear}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
