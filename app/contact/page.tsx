import type { Metadata } from "next";
import { ArrowUpRight, Download, MapPin, socialIcon } from "../../components/ui/icons";
import { Card, Container, PageHeader } from "../../components/ui/primitives";
import { profile } from "../../lib/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Shimul Mahmud — email, LinkedIn, GitHub and phone.",
};

export default function ContactPage() {
  const channels = [
    ...profile.socials,
    { label: "Phone", href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`, handle: profile.phone, icon: "phone" as const },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        description="I'm open to full-time frontend, full-stack and junior DevOps roles. Email is the fastest way to reach me — I usually reply within a day."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((c) => {
              const Icon = socialIcon[c.icon];
              const external = c.href.startsWith("http");
              return (
                <a
                  key={c.label}
                  href={c.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon size={20} />
                    </span>
                    <ArrowUpRight size={18} className="text-subtle transition-colors group-hover:text-accent" />
                  </div>
                  <p className="mt-6 text-sm text-muted">{c.label}</p>
                  <p className="mt-0.5 break-all font-medium">{c.handle}</p>
                </a>
              );
            })}
          </div>

          <Card className="flex flex-col p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">Quick facts</h2>
            <dl className="mt-6 space-y-4 text-sm">
              {[
                ["Role", "Full-stack / frontend developer"],
                ["Experience", "2+ years in IT & infrastructure"],
                ["Education", "B.Sc. in CSE, Green University of Bangladesh"],
                ["Availability", "Open to full-time roles"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-border pb-4 last:border-0">
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted">
              <MapPin size={15} /> {profile.location} · open to remote
            </p>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              style={{ marginTop: "2rem" }}
            >
              <Download size={16} /> Download resume (PDF)
            </a>
          </Card>
        </Container>
      </section>
    </>
  );
}
