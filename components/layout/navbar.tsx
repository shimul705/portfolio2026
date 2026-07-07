import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { navLinks } from "../../lib/data/nav-links";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-neutral-200 px-6 py-3 dark:border-neutral-800">
      <Link href="/" className="text-sm font-medium">
        Shimul Mahmud
      </Link>
      <div className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}
