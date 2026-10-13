import Link from "next/link";
import { navLinks } from "../../lib/data/nav-links";
import { profile } from "../../lib/data/profile";
import { socialIcon } from "../ui/icons";
import { Container } from "../ui/primitives";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-mono text-xs font-bold text-accent-fg">
              {profile.initials}
            </span>
            <span className="font-semibold">{profile.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {profile.role} based in {profile.location}. {profile.availability}.
          </p>
          <div className="mt-5 flex gap-2">
            {profile.socials.map((s) => {
              const Icon = socialIcon[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold">Pages</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-muted sm:grid-cols-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold">Get in touch</p>
          <ul className="space-y-2.5 text-sm text-muted">
            <li>
              <a href={`mailto:${profile.email}`} className="transition-colors hover:text-foreground">
                {profile.email}
              </a>
            </li>
            <li>{profile.location}</li>
            <li>
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                Resume (PDF)
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-6 text-xs text-subtle sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </Container>
      </div>
    </footer>
  );
}
