export type SkillIconKey =
  | "flutter"
  | "dart"
  | "react"
  | "nextjs"
  | "firebase"
  | "git";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images?: string[];
  image: string;
  github: string;
  live?: string;
  playStore?: string;
  category: "flutter" | "web";
}

export interface Skill {
  name: string;
  icon: SkillIconKey;
}

export interface SocialLink {
  platform: "GitHub" | "LinkedIn";
  url: string;
}

export interface ProfileData {
  name: string;
  role: string;
  bio: string;
}
