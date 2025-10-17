export type TabType = "all" | "experiences" | "education" | "skills" | "projects" | "search";

interface SearchableItem {
    keywords: string[];
    label: string;
}

export const levels = new Map([
    ['beginner', 1],
    ['intermediate', 2],
    ['advanced', 3],
    ['expert', 4],
]);

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";
export type SkillType = "frontend" | "backend" | "fullstack" | "devops" | "other";

export interface Skill extends SearchableItem {
    id: number;
  name: string;
  level: SkillLevel;
  imageSrc?: string;
  type: SkillType;
}

export interface Project extends SearchableItem {
  name: string;
  id: number;
  description: string;
  url?: string;
  companyId: number;
  imageSrc?: string;
}

export interface Experience extends SearchableItem {
    id: number;
  company: string;
  position: string;
  startDate: Date;
  endDate: Date | null;  
  description: string;
  imageSrc: string;
  url?: string;
  skillIds: number[];
  projectsIds: number[];
}

export interface Education extends SearchableItem {
  institution: string;
  title: string;
  startDate: Date;
  endDate: Date;  
  type: "degree" | "course" | "master";
  url: string;
  imageSrc: string;
}

export interface PersonalData {
  name: string;
  title: string;
  linkedin: string;
  github: string;
}

export interface CV {
  personalData: PersonalData;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
}