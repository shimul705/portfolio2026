# 👨‍💻 Shimul Mahmud — Developer Portfolio

My personal portfolio: a fast, fully static **Next.js 16 + TypeScript + Tailwind CSS v4** site that presents my projects, skills, experience and the self-hosted infrastructure I run.

<p>
  <a href="https://shimul-portfolio2026.vercel.app/"><img alt="Live Site" src="https://img.shields.io/badge/Live-Site-2563EB?style=for-the-badge&logo=vercel&logoColor=white"></a>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
</p>

---

## 🔗 Links

| | |
|---|---|
| **Live Site** | [shimul-portfolio2026.vercel.app](https://shimul-portfolio2026.vercel.app/) |
| **GitHub** | [@shimul705](https://github.com/shimul705) |
| **LinkedIn** | [in/shimul-mahmud](https://www.linkedin.com/in/shimul-mahmud/) |

---

## ✨ Features

- **Data-driven content:** every page is generated from typed data files in `lib/data/`, so updating the portfolio means editing data, not markup.
- **Project case pages:** each project gets its own statically generated page with a screenshot gallery (desktop and mobile), features, what I learned, and a **2026 update** section listing the fixes I made when I revisited it.
- **Learning journey timeline:** my Programming Hero assignments shown in build order, one new skill per step.
- **3 themes:** Light, Dark and DigitalVai, through `next-themes`. The default follows the visitor's OS setting.
- **Responsive and accessible:** works from 360px phones to wide desktops, with a skip link, focus rings, `aria-current` navigation, and respect for `prefers-reduced-motion`.
- **SEO ready:** per-page metadata, a generated **Open Graph image** for link previews, `sitemap.xml` and `robots.txt`.
- **Fast:** every route is prerendered at build time; images are optimised with `next/image`.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **Next.js 16** (App Router, Turbopack) | Routing, static generation, metadata, OG images |
| **React 19** | UI components |
| **TypeScript** | Typed data model (`types/index.ts`) and components |
| **Tailwind CSS v4** | Styling, with design tokens defined as CSS variables per theme |
| **next-themes** | Light / Dark / DigitalVai theme switching |
| **Vercel** | Hosting and deployment |

---

## 📂 Project Structure

```
portfolio2026/
├── app/                      # Routes (App Router)
│   ├── page.tsx              # Home: hero, featured work, journey, experience
│   ├── about/                # Bio, education, thesis, course skill banners
│   ├── projects/             # Project grid + [slug] detail pages
│   ├── skills/  experience/  infrastructure/  contact/  resume/
│   ├── opengraph-image.tsx   # Generated social preview card
│   ├── sitemap.ts  robots.ts
│   └── globals.css           # Theme tokens (light / dark / digitalvai)
├── components/
│   ├── layout/               # Navbar, footer
│   ├── projects/             # Project card, screenshot gallery
│   ├── sections/             # Hero, marquee, learning journey, CTA, tech banner
│   └── ui/                   # Primitives (Button, Badge, Card, headings) + icons
├── lib/data/                 # ✏️ All content lives here
│   ├── profile.ts            # Name, intro, contact links, hero stats
│   ├── projects.ts           # Projects + case studies
│   ├── experience.ts  education.ts  skills.ts  infrastructure.ts  nav-links.ts
├── types/index.ts            # Shared TypeScript types
└── public/
    ├── projects/<slug>/      # Project screenshots (desktop-N.jpg, mobile.jpg)
    ├── portfolio.pdf         # Resume
    └── portrait.jpg  shimul*.png
```

---

## ✏️ Updating Content

| To change… | Edit |
|---|---|
| Name, intro, email, social links, hero stats | `lib/data/profile.ts` |
| Add a project | Add an entry to `lib/data/projects.ts`, and put screenshots in `public/projects/<slug>/` |
| Experience / education | `lib/data/experience.ts`, `lib/data/education.ts` |
| Skills and course banners | `lib/data/skills.ts` |
| Resume | Replace `public/portfolio.pdf` |
| Colours | The theme tokens at the top of `app/globals.css` |

---

## 🚀 Run Locally

```bash
git clone https://github.com/shimul705/portfolio2026.git
cd portfolio2026
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run lint       # ESLint
npm run build      # Production build (type-checks and prerenders every page)
npm run start      # Serve the production build
```

---

## 👤 Author

**Shimul Mahmud**
GitHub: [@shimul705](https://github.com/shimul705) · Email: shimulgub@gmail.com
