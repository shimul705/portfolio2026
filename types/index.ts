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

export interface EducationItem {
  level: string;
  institution: string;
  location: string;
  admissionYear: string;
  passingYear: string;
  logo: string;
}

export interface LearnedSkill {
  name: string;
  icon?: string;
}

export interface CourseSkillGroup {
  courseName: string;
  groupLabel: string;
  skills: LearnedSkill[];
  clipId: string;
}

// Add this to the bottom of your types file:
export interface SkillCardProps {
  skill: LearnedSkill;
  index?: number;
  clipId: string; // 👈 This allows clipId to be passed
}
