import { Experience, Project, TechStack } from "@/types";

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    title: "Software Engineer (Frontend)",
    company: "Walmart",
    startDate: "2025-02",
    endDate: "Present",
    description: "Leading frontend development for Walmart's e-commerce platform, focusing on performance optimization and user experience.",
    technologies: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "Company 2",
    startDate: "2023-08",
    endDate: "2025-01",
    description: "Developed and maintained multiple client projects using modern web technologies.",
    technologies: ["React", "JavaScript", "SASS", "Bootstrap"],
  },
  {
    id: "3",
    title: "Frontend Engineer (Part-time)",
    company: "Company 3",
    startDate: "2022-03",
    endDate: "2023-07",
    description: "Contributed to various web applications while completing education.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Resume Roaster",
    description: "AI-powered resume review platform using GPT-4 for personalized feedback.",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Resume+Roaster",
    technologies: ["Next.js", "GPT-4", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://resume-roaster.com",
    githubUrl: "https://github.com/username/resume-roaster",
  },
  // Add more projects here
];

export const TECH_STACK: TechStack[] = [
  {
    category: "Frontend",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "SASS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Nest.js", "Express.js"],
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"],
  },
  {
    category: "Tools",
    technologies: ["Git", "Docker", "AWS"],
  },
]; 