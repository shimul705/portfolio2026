export interface SkillCategory {
  title: string;
  description: string;
}

export interface FeaturedProject {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  images?: string[];
  techStack?: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
