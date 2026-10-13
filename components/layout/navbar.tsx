"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../theme-toggle";
import { navLinks } from "../../lib/data/nav-links";
import { profile } from "../../lib/data/profile";
import { Close, Download, Menu } from "../ui/icons";
import { cn } from "../ui/primitives";

export function Navbar() {
  const pathname = usePathname();
  // The menu is open only for the route it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <div className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto max-w-6xl rounded-2xl border backdrop-blur-xl transition-all duration-300",
          scrolled || open ? "shadow-lg shadow-black/5" : "",
        )}
        style={{
          background: "var(--nav-bg)",
          borderColor: "color-mix(in srgb, var(--nav-muted) 18%, transparent)",
        }}
      >
        <div className="flex h-14 items-center justify-between gap-4 pl-4 pr-2.5 sm:pl-5">
          <Link href="/" className="flex items-center gap-2.5" style={{ color: "var(--nav-fg)" }}>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-mono text-xs font-bold text-accent-fg">
              {profile.initials}
            </span>
            <span className="text-[15px] font-semibold tracking-tight">{profile.name}</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm transition-colors",
                    isActive(link.href) ? "font-medium" : "hover:opacity-100",
                  )}
                  style={
                    isActive(link.href)
                      ? { color: "var(--nav-fg)", background: "color-mix(in srgb, var(--nav-muted) 14%, transparent)" }
                      : { color: "var(--nav-muted)" }
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90 sm:inline-flex"
            >
              <Download size={15} />
              Resume
            </a>
            <button
              onClick={() => setOpenOn(open ? null : pathname)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-9 w-9 items-center justify-center rounded-full lg:hidden"
              style={{ color: "var(--nav-fg)" }}
            >
              {open ? <Close size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t px-3 pb-3 pt-2 lg:hidden" style={{ borderColor: "color-mix(in srgb, var(--nav-muted) 18%, transparent)" }}>
            <ul className="grid gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className="block rounded-xl px-3 py-2.5 text-[15px]"
                    style={
                      isActive(link.href)
                        ? { color: "var(--nav-fg)", background: "color-mix(in srgb, var(--nav-muted) 14%, transparent)", fontWeight: 500 }
                        : { color: "var(--nav-muted)" }
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg sm:hidden"
            >
              <Download size={15} />
              Download resume
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
