import type { MetadataRoute } from "next";
import { navLinks } from "../lib/data/nav-links";
import { projects } from "../lib/data/projects";
import { siteUrl } from "../lib/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [...navLinks.map((l) => l.href), "/resume"].map((href) => ({
    url: `${siteUrl}${href === "/" ? "" : href}`,
    changeFrequency: "monthly" as const,
    priority: href === "/" ? 1 : 0.7,
  }));
  const projectPages = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: p.category === "assignment" ? 0.6 : 0.4,
  }));
  return [...pages, ...projectPages];
}
