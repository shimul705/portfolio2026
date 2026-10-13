import type { Profile, Stat } from "../../types";

/** Production URL (Vercel). Used for canonical links, the sitemap and social previews. */
export const siteUrl = "https://shimul-portfolio2026.vercel.app";

export const profile: Profile = {
  name: "Shimul Mahmud",
  fullName: "Shimul Mahmud Rumel",
  initials: "SM",
  role: "Software Engineer",
  headline: "I build web software end to end — and the systems it runs on.",
  intro:
    "Software engineer working across web development, enterprise software and IT infrastructure. I build scalable web applications with React, Next.js, Node.js, NestJS, PostgreSQL and MongoDB — and as the sole IT professional at CBC Capital & Equity Management, I ship internal software and stock-market tools while running the servers, networks and trading back office they depend on.",
  location: "Dhaka, Bangladesh",
  email: "shimulmahmud.dev@gmail.com",
  phone: "+880 1779-951119",
  availability: "Open to software engineering roles",
  resumeUrl: "/Shimul_Mahmud_Resume.pdf",
  resumeDocxUrl: "/Shimul_Mahmud_Resume.docx",
  photo: "/shimul4.png",
  socials: [
    { label: "GitHub", href: "https://github.com/shimul705", handle: "@shimul705", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shimul-mahmud/",
      handle: "in/shimul-mahmud",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:shimulmahmud.dev@gmail.com", handle: "shimulmahmud.dev@gmail.com", icon: "mail" },
  ],
};

export const heroStats: Stat[] = [
  { value: "2.5+ yrs", label: "professional software & IT experience" },
  { value: "4", label: "enterprise tools built and in daily use" },
  { value: "5", label: "deployed portfolio projects" },
  { value: "B.Sc.", label: "Computer Science & Engineering" },
];

export const achievements = [
  "Managing the entire IT department independently",
  "Developed enterprise software solutions currently used within the organization",
  "Automated DSE market data collection and reporting",
  "Developed multiple financial analysis tools for stock market operations",
  "Built enterprise dashboards that improve business decision-making",
  "Managing software development alongside enterprise IT infrastructure and networking",
  "Delivered client training sessions that improved user adoption of POS features",
  "Played a key role in POS–e-commerce synchronization before deployment",
  "Handled frontend fixes for POS and B2B systems, ensuring stable, high-quality releases",
];
