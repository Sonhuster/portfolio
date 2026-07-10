export interface BlogImageContent {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export type BlogContentItem = string | BlogImageContent;

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: "Academic" | "Survival Guide" | "Reflection";
  readTime: string;
  summary: string;
  content: BlogContentItem[];
  tags: string[];
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
  organization: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  subtitle: string;
  abstract: string;
  methodology: string[];
  keyFindings: string[];
  status: "Completed" | "In Progress" | "In Review";
  publication?: {
    journal: string;
    doi?: string;
    authors: string;
  };
}

export interface Experiment {
  id: string;
  title: string;
  category: "Wet Lab" | "Dry Lab";
  equipment: string[];
  objective: string;
  steps: {
    number: number;
    title: string;
    description: string;
  }[];
  simulationType: "electrophoresis" | "spectroscopy" | "sequence-alignment";
}

export interface Memory {
  id: string;
  title: string;
  date: string;
  description: string;
  category: "Academic" | "Daily Life" | "Field Trip" | "Lab Fun";
  iconName: string;
  location: string;
}

export interface PhilosophyItem {
  id: string;
  title: string;
  vietnameseTitle: string;
  quote: string;
  author: string;
  content: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  department: string;
  period: string;
  details: string[];
  isCurrent?: boolean;
  type?: "current" | "discontinued" | "completed";
}
