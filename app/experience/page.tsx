import { Navbar } from "../../components/layout/navbar";
import { experienceItems } from "../../lib/data/experience";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-10 text-2xl font-medium">Experience</h1>
        <div className="space-y-8">
          {experienceItems.map((item) => (
            <div
              key={item.title}
              className="border-l-2 pl-5"
              style={{ borderColor: "var(--accent)" }}
            >
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                {item.period}
              </p>
              <p className="text-base font-medium">{item.title}</p>
              <p className="mb-3 text-sm" style={{ color: "var(--muted)" }}>
                {item.organization}
              </p>
              <ul className="list-disc space-y-1 pl-4 text-sm" style={{ color: "var(--muted)" }}>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
