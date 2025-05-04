export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface TechStack {
  category: string;
  technologies: string[];
} 