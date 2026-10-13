import { profile } from "../../lib/data/profile";
import { ArrowRight, Mail } from "../ui/icons";
import { ButtonLink, Container } from "../ui/primitives";

export function ContactCta() {
  return (
    <Container>
      <div className="relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12" style={{ background: "var(--banner-bg)" }}>
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "var(--glow)" }}
        />
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: "var(--banner-muted)" }}>
            Let&apos;s work together
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-4xl" style={{ color: "var(--banner-fg)" }}>
            Looking for a developer who can build it <em className="not-italic text-accent">and</em> ship it?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed sm:text-base" style={{ color: "var(--banner-muted)" }}>
            I&apos;m open to software engineering roles — frontend, full-stack and backend. The fastest way to reach me is email —
            I usually reply within a day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={`mailto:${profile.email}`} variant="accent">
              <Mail size={16} /> {profile.email}
            </ButtonLink>
            <ButtonLink href="/contact" variant="inverse">
              All contact options <ArrowRight size={16} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </Container>
  );
}
