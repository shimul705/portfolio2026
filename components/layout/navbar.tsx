"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { navLinks } from "../../lib/data/nav-links";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="relative border-b px-6 py-3"
      style={{ borderColor: "var(--nav-border)" }}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Shimul Mahmud
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm"
              style={{ color: "var(--muted)" }}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-md border lg:hidden"
          style={{ borderColor: "var(--nav-border)" }}
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          className="absolute left-0 right-0 top-full z-50 flex flex-col gap-4 border-b px-6 py-4 shadow-lg lg:hidden"
          style={{ background: "var(--background)", borderColor: "var(--nav-border)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm"
              style={{ color: "var(--muted)" }}
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