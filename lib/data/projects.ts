import type { Project } from "../../types";

const shots = (slug: string, name: string, desktopCount: number, mobile = true) => [
  ...Array.from({ length: desktopCount }, (_, i) => ({
    src: `/projects/${slug}/desktop-${i + 1}.jpg`,
    alt: `${name} — desktop screenshot ${i + 1}`,
    kind: "desktop" as const,
  })),
  ...(mobile ? [{ src: `/projects/${slug}/mobile.jpg`, alt: `${name} — mobile screenshot`, kind: "mobile" as const }] : []),
];

export const projects: Project[] = [
  // -------------------------------------------------------------------------
  // Deployed projects (Programming Hero assignments, revisited in 2026)
  // -------------------------------------------------------------------------
  {
    slug: "sm-ticket",
    title: "SM Ticket",
    tagline: "Interactive bus ticket booking app",
    summary:
      "Pick seats on a live seat map, watch the price update, unlock coupon discounts and confirm the booking — all with vanilla JavaScript and DOM manipulation.",
    description: [
      "SM Ticket is a bus ticket booking page for a fictional operator. It was my first project where the page actually does something: JavaScript reads clicks and form input and updates the UI live through the DOM.",
      "Selecting a seat turns it green, adds it to the booking summary, updates the seat counter and recalculates the total. Up to four seats can be booked; with four selected the coupon box unlocks (NEW15 for 15% off, Couple 20 for 20% off). Clicking Next validates the seat, name and phone number before showing the success modal.",
    ],
    category: "assignment",
    status: "live",
    date: "2024-02-19",
    label: "Assignment 5",
    mark: { score: 60, total: 60 },
    techStack: ["JavaScript", "DOM API", "Tailwind CSS", "DaisyUI", "HTML5"],
    highlights: [
      "40-seat interactive seat map with a 4-seat limit",
      "Live total, grand total and seats-left counter",
      "Conditional coupon unlocking with discount calculation",
      "Form validation (seat, name, 11-digit phone) with modal feedback",
      "Responsive from 375px phones to wide desktops",
    ],
    learned: [
      "DOM selection and manipulation: createElement, appendChild, classList",
      "Event handling and keeping UI state in sync with a JavaScript array",
      "Object lookups for discount rules and regex validation",
      "Opening and closing DaisyUI modals from JavaScript",
    ],
    updates2026: [
      "Pinned the light theme so dark-mode devices no longer break the design",
      "Full responsive pass for mobile, tablet and small laptops (desktop unchanged)",
      "Replaced browser alert() popups with styled warning modals",
      "Next now validates the form and explains what's missing",
    ],
    liveUrl: "https://shimul705.github.io/assignment5-b9/",
    repoUrl: "https://github.com/shimul705/assignment5-b9",
    images: shots("sm-ticket", "SM Ticket", 3),
    featured: true,
  },
  {
    slug: "hockeys-club",
    title: "Hockey's",
    tagline: "Hockey club landing page with Tailwind & DaisyUI",
    summary:
      "A component-rich landing page — carousel, radial progress stats, product cards, FAQ accordion and a contact form — built with Tailwind CSS utility classes and DaisyUI.",
    description: [
      "Hockey's is a landing page for a professional hockey club and my first project using a CSS framework. Instead of a hand-written stylesheet, almost everything is built from Tailwind CSS utilities and DaisyUI components.",
      "Responsive behaviour is written inline with Tailwind's sm/md/lg/xl prefixes, and several sections use CSS Grid with column and row spans.",
    ],
    category: "assignment",
    status: "live",
    date: "2024-01-24",
    label: "Assignment 3",
    mark: { score: 60, total: 60 },
    techStack: ["Tailwind CSS", "DaisyUI", "HTML5", "CSS Grid", "Font Awesome"],
    highlights: [
      "Two-slide hero carousel with an overlapping banner",
      "Radial progress stat circles",
      "Six product cards with ratings, views and pricing",
      "Six-item accordion FAQ and a full contact form",
    ],
    learned: [
      "Setting up Tailwind CSS and DaisyUI and extending the theme with custom colours",
      "Responsive design with breakpoint prefixes instead of @media blocks",
      "Grid layouts with col-span and row-span",
    ],
    updates2026: [
      "Pinned the light theme for dark-mode devices",
      "Fixed tablet layout issues (contact grid, stats, FAQ image)",
      "Carousel arrows now slide without jumping the page",
    ],
    liveUrl: "https://shimul705.github.io/assignment3-b9/",
    repoUrl: "https://github.com/shimul705/assignment3-b9",
    images: shots("hockeys-club", "Hockey's", 3),
    featured: true,
  },
  {
    slug: "bengal-travel",
    title: "Bengal Travel",
    tagline: "Travel agency landing page in pure HTML & CSS",
    summary:
      "A responsive travel agency site with a CSS Grid destination gallery, pricing plans, an embedded video and a newsletter sign-up — no frameworks.",
    description: [
      "Bengal Travel turns a travel agency design into a static web page using only semantic HTML and hand-written CSS.",
      "Compared with my first project it introduced CSS Grid for a gallery with mixed card sizes, pricing cards, an embedded YouTube video and mobile touches such as a hamburger icon and a stacked search form. It also includes two bonus sections beyond the required design.",
    ],
    category: "assignment",
    status: "live",
    date: "2024-01-16",
    label: "Assignment 2",
    mark: { score: 60, total: 60 },
    techStack: ["HTML5", "CSS3", "CSS Grid", "Flexbox", "Media queries"],
    highlights: [
      "7-card destination gallery built with CSS Grid (2 / 3 / 2 rows)",
      "Search bar with destination, date and type filters",
      "Three gradient pricing cards (bonus section)",
      "Responsive embedded video and newsletter form",
    ],
    learned: [
      "Gallery layouts with grid-template-columns, fr units and span",
      "Centring overlay text with absolute positioning and transforms",
      "Writing tablet and mobile breakpoints for a multi-section page",
    ],
    updates2026: [
      "Fixed cut-off destination titles and a broken newsletter layout",
      "Added a tablet layout and matched the mobile hero to the Figma design",
      "Fixed the mobile search bar overflow",
    ],
    liveUrl: "https://shimul705.github.io/assignment2-b9/",
    repoUrl: "https://github.com/shimul705/assignment2-b9",
    images: shots("bengal-travel", "Bengal Travel", 3),
    featured: true,
  },
  {
    slug: "js-problem-solving",
    title: "JavaScript Problem Solving",
    tagline: "Five real-life problems solved with functions",
    summary:
      "Input validation, string handling, array filtering and object handling in plain JavaScript — with my original 2024 code kept next to a 2026 fixed version.",
    description: [
      "My first JavaScript assignment: five word problems (ticket revenue, name checking, filtering invalid array values, password generation and freelancer savings), each solved as a function with strict rules — exact function names, all logic inside the function, and bonus input validation.",
      "The original submission scored 46/60. Revisiting it in 2026, I found the mistakes: output strings that didn't match the specification exactly, two functions that crashed on null input, and a misplaced bracket that only passed the samples by luck. The original code is kept unchanged; the fixes live in a separate fix-2026.js so the growth is visible.",
    ],
    category: "assignment",
    status: "code",
    date: "2024-02-08",
    label: "Assignment 4",
    mark: { score: 46, total: 60 },
    techStack: ["JavaScript", "Functions", "Arrays", "Objects", "Node.js"],
    highlights: [
      "Five functions with typed input validation",
      "String handling: case, trimming, slicing and formatting",
      "Filtering arrays down to valid numbers only",
      "Building formatted strings from object properties",
    ],
    learned: [
      "When the output format is specified, match it exactly",
      "typeof null === 'object' and typeof NaN === 'number' are traps",
      "Test edge cases (null, wrong types), not just the samples",
    ],
    updates2026: [
      "Return strings now match the specification exactly",
      "No more crashes on null input",
      "Fixed a misplaced bracket in the NaN check",
      "Every sample input now returns the expected output",
    ],
    repoUrl: "https://github.com/shimul705/assignment4-b9",
    images: shots("js-problem-solving", "JavaScript Problem Solving", 2, false),
  },
  {
    slug: "new-year-party",
    title: "New Year Party",
    tagline: "Figma-to-code event landing page",
    summary:
      "My first project: a pixel-careful conversion of a Figma design into semantic HTML and hand-written CSS, with nine sections from hero to footer.",
    description: [
      "The goal was to turn a Figma design into a static web page that matches the design closely, using only semantic HTML and hand-written CSS — no frameworks and no JavaScript.",
      "The page promotes a midnight New Year party and a holiday sale, with layered image compositions, gradient overlays, a product gallery and a newsletter form.",
    ],
    category: "assignment",
    status: "live",
    date: "2024-01-09",
    label: "Assignment 1",
    mark: { score: 60, total: 60 },
    techStack: ["HTML5", "CSS3", "Flexbox", "Google Fonts", "Figma"],
    highlights: [
      "Nine sections converted from a Figma design",
      "Layered image compositions with absolute positioning",
      "Gradient overlays on background images",
      "Flexbox product gallery and newsletter form",
    ],
    learned: [
      "Converting a Figma design to HTML/CSS with attention to spacing and type",
      "Flexbox layouts and position: relative / absolute",
      "Deploying a static site with GitHub Pages",
    ],
    updates2026: ["Added responsive breakpoints (1200 / 992 / 768 / 480px) without changing the desktop design"],
    liveUrl: "https://shimul705.github.io/assignment1-b9/",
    repoUrl: "https://github.com/shimul705/assignment1-b9",
    images: shots("new-year-party", "New Year Party", 3),
  },

  // -------------------------------------------------------------------------
  // Case studies in progress
  // -------------------------------------------------------------------------
  {
    slug: "home-server-infrastructure",
    title: "Home Server Infrastructure",
    tagline: "Self-hosted GitLab, Docker & CI/CD platform",
    summary:
      "The full self-hosted stack I run on a single home server: GitLab, OpenProject, Docker, Nginx and CI/CD pipelines with isolated staging and production per project.",
    description: [
      "This project covers the full self-hosted stack: GitLab, OpenProject, Docker, Nginx, and CI/CD pipelines running on a single home server.",
      "Every project gets its own isolated staging and production containers, its own subdomain and its own pipeline. Networking is handled with MikroTik, remote access with Tailscale, and public client previews with Cloudflare Tunnel — no exposed ports.",
    ],
    category: "case-study",
    status: "in-progress",
    techStack: ["Docker", "GitLab CE", "Nginx", "MikroTik", "Cloudflare Tunnel"],
    highlights: [
      "Self-hosted GitLab with Docker-based runners",
      "Per-project staging and production environments",
      "Subdomain routing through Nginx Proxy Manager",
      "Remote and public access without port forwarding",
    ],
    images: [],
  },
  {
    slug: "ai-healthcare-platform",
    title: "AI Healthcare Platform",
    tagline: "Full-stack app with AI-assisted diagnostics",
    summary:
      "A full-stack healthcare product covering product design, a REST API and AI-assisted diagnostic features.",
    description: [
      "This project covers the product design, the API, and the AI-assisted diagnostic features.",
      "A full case study with screenshots and architecture is being written.",
    ],
    category: "case-study",
    status: "in-progress",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Redis", "AI/LLM"],
    highlights: ["Database and REST API design", "Redis caching and query optimization", "LLM-powered diagnostic assistant"],
    images: [],
  },
  {
    slug: "sunrise-bakery",
    title: "Sunrise Bakery",
    tagline: "Client site with automated CI/CD deploys",
    summary: "A client website delivered through my self-hosted pipeline, deploying automatically on every push.",
    description: [
      "This project covers the client brief, the build, and the CI/CD pipeline that deploys it automatically.",
      "A full case study with screenshots is being written.",
    ],
    category: "case-study",
    status: "in-progress",
    techStack: ["HTML", "CSS", "GitLab CI/CD", "Docker", "Nginx"],
    highlights: ["Client brief to production", "Automatic deploys from GitLab CI/CD", "Containerised with Docker behind Nginx"],
    images: [],
  },
];

export const deployedProjects = projects.filter((p) => p.category === "assignment");
export const caseStudies = projects.filter((p) => p.category === "case-study");
export const featuredProjects = projects.filter((p) => p.featured);

/** Assignments in the order they were built — the learning journey. */
export const journey = [...deployedProjects].sort((a, b) => (a.date ?? "").localeCompare(b.date ?? ""));

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
