import Image from "next/image";
import { heroStats, profile } from "../../lib/data/profile";
import { ArrowRight, Download, MapPin, socialIcon } from "../ui/icons";
import { ButtonLink, Container } from "../ui/primitives";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <Container className="relative grid items-center gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-24">
        <div>
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            {profile.availability}
          </div>

          <p className="animate-fade-up mb-3 font-mono text-sm text-accent" style={{ animationDelay: "60ms" }}>
            Hi, I&apos;m {profile.name} — {profile.role}
          </p>
          <h1
            className="animate-fade-up text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]"
            style={{ animationDelay: "120ms" }}
          >
            {profile.headline}
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            {profile.intro}
          </p>

          <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "240ms" }}>
            <ButtonLink href="/projects">
              View my work <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href={profile.resumeUrl} variant="secondary">
              <Download size={16} /> Download resume
            </ButtonLink>
          </div>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted"
            style={{ animationDelay: "300ms" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} /> {profile.location}
            </span>
            {profile.socials.map((s) => {
              const Icon = socialIcon[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <Icon size={15} /> {s.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="animate-fade-up relative mx-auto w-full max-w-sm lg:max-w-none" style={{ animationDelay: "160ms" }}>
          <div
            className="absolute inset-x-6 bottom-0 top-12 rounded-[2.5rem] blur-3xl"
            style={{ background: "var(--glow)" }}
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-b from-accent-soft to-surface-2">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={350}
              height={409}
              priority
              className="mx-auto h-auto w-[82%] pt-6"
            />
          </div>
          <div className="absolute -bottom-4 left-2 rounded-2xl border border-border bg-surface px-4 py-3 shadow-lg sm:-left-6">
            <p className="text-xs text-subtle">Currently</p>
            <p className="text-sm font-semibold">IT & Ops @ CBC Capital</p>
          </div>
          <div className="absolute right-2 top-8 rounded-2xl border border-border bg-surface px-4 py-3 shadow-lg sm:-right-5">
            <p className="text-xs text-subtle">Building with</p>
            <p className="text-sm font-semibold">Next.js · Node · Docker</p>
          </div>
        </div>
      </Container>

      <Container className="relative pb-6">
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4 [&>*]:bg-surface">
          {heroStats.map((stat) => (
            <div key={stat.label} className="m-px flex flex-col px-5 py-5 sm:px-6">
              <dt className="text-xs leading-snug text-muted sm:text-sm">{stat.label}</dt>
              <dd className="order-first mb-1 text-xl font-semibold tracking-tight sm:text-2xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
