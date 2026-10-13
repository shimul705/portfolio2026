// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------
export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  icon: "github" | "linkedin" | "mail" | "phone";
}

export interface Profile {
  name: string;
  fullName: string;
  initials: string;
  role: string;
  headline: string;
  intro: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  resumeUrl: string;
  resumeDocxUrl: string;
  photo: string;
  socials: SocialLink[];
}

export interface Stat {
  value: string;
  label: string;
}

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export type ProjectCategory = "work" | "assignment" | "case-study";
/** live = public demo, code = public repo only, internal = proprietary work software, in-progress = write-up coming */
export type ProjectStatus = "live" | "code" | "internal" | "in-progress";

export interface ProjectImage {
  src: string;
  alt: string;
  kind: "desktop" | "mobile";
}

export interface Project {
  slug: string;
  title: string;
  /** One line shown on cards. */
  tagline: string;
  /** Short paragraph shown on cards and in meta descriptions. */
  summary: string;
  /** Longer paragraphs for the detail page. */
  description: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  /** ISO date (YYYY-MM-DD) the project was completed, or started for work in progress. */
  date?: string;
  /** e.g. "Assignment 3" — shown as a small label. */
  label?: string;
  /** Free-text period for work projects, e.g. "2024 – 2025". */
  period?: string;
  /** Where it was built, e.g. the employer. */
  context?: string;
  mark?: { score: number; total: number };
  techStack: string[];
  /** What the project does / key features. */
  highlights: string[];
  /** What building it taught me. */
  learned?: string[];
  /** Fixes made when revisiting the project in 2026. */
  updates2026?: string[];
  liveUrl?: string;
  repoUrl?: string;
  images: ProjectImage[];
  featured?: boolean;
}

// ---------------------------------------------------------------------------
// About / skills / experience
// ---------------------------------------------------------------------------
export interface NavLink {
  label: string;
  href: string;
}

export interface EducationItem {
  level: string;
  degree: string;
  institution: string;
  location: string;
  admissionYear: string;
  passingYear: string;
  result: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  location?: string;
  period: string;
  type: "work" | "internship" | "learning";
  summary?: string;
  points: string[];
  tags?: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  items: string[];
}

export interface LearnedSkill {
  name: string;
  icon?: string;
}

export interface CourseSkillGroup {
  courseName: string;
  provider: string;
  groupLabel: string;
  period: string;
  skills: LearnedSkill[];
}

export interface InfrastructureComponent {
  name: string;
  role: string;
  layer: "Source & CI/CD" | "Runtime" | "Networking & access" | "Planning";
}
