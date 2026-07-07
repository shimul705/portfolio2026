import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { navLinks } from "../../lib/data/nav-links";

export function Navbar() {
  return (
    <nav
      className="flex items-center justify-between border-b px-6 py-3"
      style={{ borderColor: "var(--nav-border)" }}
    >
      <Link href="/" className="text-sm font-medium">
        Shimul Mahmud
      </Link>
      <div className="flex items-center gap-6">
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
    </nav>
  );
}
