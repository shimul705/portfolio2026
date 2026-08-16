"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { navLinks } from "../../lib/data/nav-links";
import { featuredProjects } from "../../lib/data/projects";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <nav
      className="relative px-6 py-3"
      style={{ background: "var(--nav-bg)", borderBottom: "1px solid var(--nav-border)" }}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold" style={{ color: "var(--nav-fg)" }}>
          Shimul Mahmud
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const hasDropdown = link.label === "Projects";
            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => hasDropdown && setDropdown(link.label)}
                onMouseLeave={() => hasDropdown && setDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="nav-link-underline relative text-sm"
                  style={{ color: "var(--nav-muted)" }}
                >
                  {link.label}
                </Link>

                {hasDropdown && dropdown === "Projects" && (
                  <div
                    className="absolute left-0 top-full z-50 mt-3 w-56 rounded-md py-2 shadow-lg"
                    style={{ background: "var(--nav-bg)", border: "1px solid var(--nav-border)" }}
                  >
                    {featuredProjects.map((project) => (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="nav-link-underline relative mx-3 my-1 block text-sm"
                        style={{ color: "var(--nav-muted)" }}
                      >
                        {project.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-md border lg:hidden"
          style={{ borderColor: "var(--nav-border)", color: "var(--nav-fg)" }}
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          className="absolute left-0 right-0 top-full z-50 flex flex-col gap-4 px-6 py-4 shadow-lg lg:hidden"
          style={{ background: "var(--nav-bg)", borderBottom: "1px solid var(--nav-border)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm"
              style={{ color: "var(--nav-muted)" }}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
