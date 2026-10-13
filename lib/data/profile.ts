import type { Profile, Stat } from "../../types";

/** Production URL (Vercel). Used for canonical links, the sitemap and social previews. */
export const siteUrl = "https://shimul-portfolio2026.vercel.app";

export const profile: Profile = {
  name: "Shimul Mahmud",
  fullName: "Shimul Mahmud Rumel",
  initials: "SM",
  role: "Full-Stack Developer",
  headline: "I build web products end to end — and run the infrastructure they ship on.",
  intro:
    "CSE graduate and full-stack developer working with React, Next.js, Node and SQL/NoSQL databases. By day I keep a capital-markets firm's network, servers and trading systems running; by night I build and deploy web apps on a self-hosted GitLab + Docker platform I set up myself.",
  location: "Dhaka, Bangladesh",
  email: "shimulgub@gmail.com",
  phone: "+880 1779-951119",
  availability: "Open to full-time developer roles",
  resumeUrl: "/portfolio.pdf",
  photo: "/shimul4.png",
  socials: [
    { label: "GitHub", href: "https://github.com/shimul705", handle: "@shimul705", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shimul-mahmud/",
      handle: "in/shimul-mahmud",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:shimulgub@gmail.com", handle: "shimulgub@gmail.com", icon: "mail" },
  ],
};

export const heroStats: Stat[] = [
  { value: "2+ yrs", label: "IT & infrastructure experience" },
  { value: "5", label: "deployed portfolio projects" },
  { value: "4 × 60/60", label: "full-mark assignments" },
  { value: "B.Sc.", label: "Computer Science & Engineering" },
];
