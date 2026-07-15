import { Navbar } from "../../components/layout/navbar";
import { skillGroups } from "../../lib/data/skills-detail";

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-2 text-2xl font-medium">Skills</h1>
        <p className="mb-10 text-sm" style={{ color: "var(--muted)" }}>
          A full breakdown of what I work with, grouped by area.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border p-5"
              style={{ borderColor: "var(--card-border)" }}
            >
              <p className="mb-3 text-sm font-medium">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md px-2 py-1 text-xs"
                    style={{ background: "var(--card-bg)", color: "var(--muted)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
