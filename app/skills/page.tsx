import type { Metadata } from "next";
import Link from "next/link";
import { ContactCta } from "../../components/sections/contact-cta";
import { ArrowRight, Code, Layers, Server, Sparkles, Wrench, BookOpen } from "../../components/ui/icons";
import { Badge, Card, Container, PageHeader } from "../../components/ui/primitives";
import { skillGroups } from "../../lib/data/skills";
import { deployedProjects } from "../../lib/data/projects";

export const metadata: Metadata = {
  title: "Skills",
  description: "Frontend, backend, database, DevOps and AI skills of Shimul Mahmud, with the projects that prove them.",
};

const icons = [Code, Layers, BookOpen, Server, Sparkles, Wrench];

export default function SkillsPage() {
  // Skills that appear in deployed projects, by the tech-stack names those projects use.
  const evidence: Record<string, string[]> = {
    HTML5: ["HTML5"],
    CSS3: ["CSS3", "CSS Grid", "Flexbox"],
    "JavaScript (ES6+)": ["JavaScript"],
    "Tailwind CSS": ["Tailwind CSS"],
    DaisyUI: ["DaisyUI"],
    "Node.js": ["Node.js"],
    Figma: ["Figma"],
  };
  const usedIn = (skill: string) =>
    deployedProjects.filter((p) => (evidence[skill] ?? []).some((name) => p.techStack.includes(name)));

  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="What I work with"
        description="A full breakdown, grouped by area. Highlighted skills are used in my deployed projects, so you can see them in action."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Card key={group.category} className="p-6 sm:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h2 className="font-semibold tracking-tight">{group.category}</h2>
                    <p className="text-sm text-muted">{group.description}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const projects = usedIn(item);
                    return (
                      <li key={item}>
                        <Badge tone={projects.length ? "accent" : "neutral"} className="px-3 py-1.5 text-[13px]">
                          {item}
                          {projects.length > 0 && <span className="text-[11px] opacity-70">· {projects.length}</span>}
                        </Badge>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            );
          })}
        </Container>
        <Container>
          <p className="mt-6 text-sm text-subtle">
            Highlighted skills appear in deployed projects — the number shows how many.{" "}
            <Link href="/projects" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
              See the projects <ArrowRight size={14} />
            </Link>
          </p>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
