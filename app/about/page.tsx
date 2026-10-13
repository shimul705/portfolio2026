import type { Metadata } from "next";
import Image from "next/image";
import { ContactCta } from "../../components/sections/contact-cta";
import { TechBanner } from "../../components/sections/tech-banner";
import { BookOpen, GraduationCap, MapPin } from "../../components/ui/icons";
import { Badge, Card, Container, PageHeader, SectionHeading } from "../../components/ui/primitives";
import { educationItems, thesis } from "../../lib/data/education";
import { profile } from "../../lib/data/profile";
import { skillOrigins } from "../../lib/data/skills";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Shimul Mahmud — CSE graduate from Green University of Bangladesh, full-stack developer and IT professional in capital markets.",
};

const softSkills = ["Communication", "Problem solving", "Adaptability", "Working under pressure", "Team player", "Ownership"];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About me" title="Developer with an operations mindset">
        <p className="inline-flex items-center gap-2 text-sm text-muted">
          <MapPin size={15} /> {profile.location}
        </p>
      </PageHeader>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          <div className="space-y-5 text-[17px] leading-relaxed text-muted">
            <p className="text-xl leading-relaxed text-foreground">
              I come from a CSE background combined with real experience in capital markets, which gives me a slightly
              unusual mix: I can build a product end to end, and I understand the operational and financial context it
              needs to run in.
            </p>
            <p>
              Day to day, I work in an admin and IT role at a capital and equity management firm, where I am the sole
              technical resource responsible for network infrastructure, server administration, backoffice trading
              software, and general office systems. Alongside that, I run infrastructure and automation work under my own
              small software effort.
            </p>
            <p>
              Outside of work, I have built and run a full self-hosted development platform from scratch: GitLab, project
              management, Docker, and Nginx, all wired together with real CI/CD pipelines, on hardware I set up and
              maintain myself. That project is the reason I can talk about DevOps as something I have actually done, not
              just read about.
            </p>
            <p>
              On the development side, I learned the web the structured way — through Programming Hero&apos;s Level 1 and
              Level 2 programs — and I keep every graded project public, including the mistakes and how I fixed them later.
              I care about shipping things that work, are documented, and that the next person can maintain.
            </p>

            <div className="pt-4">
              <p className="mb-3 text-sm font-semibold text-foreground">How I work</p>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[340px]">
            <div className="absolute inset-6 rounded-[2rem] blur-3xl" style={{ background: "var(--glow)" }} />
            <div className="relative overflow-hidden rounded-[2rem] border border-border">
              <Image
                src="/portrait.jpg"
                alt={`Portrait of ${profile.name}`}
                width={720}
                height={876}
                sizes="340px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Education" title="Academic background" />
          <div className="grid gap-5 lg:grid-cols-3">
            {educationItems.map((item) => (
              <Card key={item.level} className="relative p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <GraduationCap size={22} />
                  </span>
                  <span className="font-mono text-xs text-subtle">
                    {item.admissionYear} – {item.passingYear}
                  </span>
                </div>
                <p className="text-xs font-medium uppercase tracking-wider text-accent">{item.level}</p>
                <h3 className="mt-1.5 font-semibold leading-snug">{item.degree}</h3>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
                <p className="text-sm text-subtle">{item.location}</p>
                <Badge tone="success" className="mt-4">
                  {item.result}
                </Badge>
              </Card>
            ))}
          </div>

          <Card className="mt-5 flex flex-col gap-5 p-6 sm:flex-row sm:items-start">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <BookOpen size={22} />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-accent">Undergraduate thesis</p>
              <h3 className="mt-1.5 font-semibold">{thesis.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{thesis.summary}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {thesis.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Where I learned it"
            title="Courses behind my stack"
            description="Structured programs where every module ended in a graded, deployed project."
          />
        </Container>
        <Container className="space-y-6">
          {skillOrigins.map((group) => (
            <TechBanner key={group.courseName} group={group} />
          ))}
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
