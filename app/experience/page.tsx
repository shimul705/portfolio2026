import type { Metadata } from "next";
import { ContactCta } from "../../components/sections/contact-cta";
import { BookOpen, Briefcase, MapPin, Sparkles } from "../../components/ui/icons";
import { Badge, Card, Container, PageHeader } from "../../components/ui/primitives";
import { experienceItems } from "../../lib/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience of Shimul Mahmud: IT & operations at CBC Capital & Equity Management, SQA internship at ReformedTech, and full-stack training.",
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
        title="Where I've worked and trained"
        description="Professional IT experience, a QA internship in a software team, and structured full-stack training."
      />

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

      <ContactCta />
    </>
  );
}
