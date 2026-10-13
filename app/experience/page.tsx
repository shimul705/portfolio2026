import type { Metadata } from "next";
import { ContactCta } from "../../components/sections/contact-cta";
import { ArrowRight, Award, BookOpen, Briefcase, MapPin, Sparkles } from "../../components/ui/icons";
import { Badge, Card, Container, PageHeader, SectionHeading } from "../../components/ui/primitives";
import { experienceItems } from "../../lib/data/experience";
import { achievements } from "../../lib/data/profile";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Career path of Shimul Mahmud: Software Development Intern at ReformedTech, then Assistant Engineer (IT) and Senior Officer (IT) at CBC Capital & Equity Management.",
};

const typeMeta = {
  work: { label: "Full-time", Icon: Briefcase, tone: "accent" as const },
  internship: { label: "Internship", Icon: Sparkles, tone: "success" as const },
  learning: { label: "Training", Icon: BookOpen, tone: "neutral" as const },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="My career path"
        description="From building POS and e-commerce features as an intern, to writing enterprise software and running the entire IT department of a capital-markets firm."
      >
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {experienceItems
            .filter((e) => e.type !== "learning")
            .slice()
            .reverse()
            .map((e, i, arr) => (
              <li key={e.title} className="flex items-center gap-2">
                <span className="rounded-full border border-border bg-surface px-3 py-1.5">
                  <span className="font-medium">{e.title}</span>
                  <span className="text-subtle"> · {e.period.split(" – ")[0]}</span>
                </span>
                {i < arr.length - 1 && <ArrowRight size={15} className="text-subtle" />}
              </li>
            ))}
        </ol>
      </PageHeader>

      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <ol className="relative space-y-8 border-l border-border pl-8 sm:pl-10">
            {experienceItems.map((item) => {
              const meta = typeMeta[item.type];
              return (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[49px] top-5 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-accent shadow-sm sm:-left-[57px]">
                    <meta.Icon size={15} />
                  </span>
                  <Card className="p-6 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Badge tone={meta.tone}>{meta.label}</Badge>
                      <span className="font-mono text-xs text-subtle">{item.period}</span>
                    </div>
                    <h2 className="mt-4 text-xl font-semibold tracking-tight">{item.title}</h2>
                    <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                      <span className="font-medium text-foreground">{item.organization}</span>
                      {item.location && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={13} /> {item.location}
                        </span>
                      )}
                    </p>
                    {item.summary && <p className="mt-4 leading-relaxed text-muted">{item.summary}</p>}
                    <ul className="mt-4 space-y-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    {item.tags && (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {item.tags.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    )}
                  </Card>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="Impact" title="Achievements" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {achievements.map((a) => (
              <li key={a} className="flex gap-3 rounded-2xl border border-border bg-background p-4 text-[15px] leading-relaxed">
                <Award size={18} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-muted">{a}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <div className="mt-24">
        <ContactCta />
      </div>
    </>
  );
}
