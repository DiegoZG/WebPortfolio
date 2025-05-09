import { Experience, Project, TechStack } from "@/types";

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    title: "Mobile Software Engineer - Frontend",
    company: "Walmart",
    startDate: "2025-01",
    endDate: "Present",
    description: "Leading frontend development for Sam's Club e-commerce platform, focusing on performance optimization and user experience.",
    technologies: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "Full Stack Software Engineer",
    company: "Foundry",
    startDate: "2023-08",
    endDate: "2025-01",
    description: "Developed and maintained multiple client projects using modern web technologies.",
    technologies: ["React", "JavaScript", "SASS", "Bootstrap"],
  },
  {
    id: "3",
    title: "Full Stack Software Engineer",
    company: "Triblio",
    startDate: "2021-05",
    endDate: "2023-07",
    description: "Contributed to various web applications while completing education.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Pro Services",
    description: "Marketing website for a local service-based business (e.g., home improvement, fitness trainer, or tech consultant)",
    image: "/projects/proservices.png",
    technologies: ["Next.js", "GPT-4", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://landingsite-iota.vercel.app/",
    githubUrl: "https://github.com/username/resume-roaster",
  },
  {
    id: "2",
    title: "Dzhop",
    description: "Full-featured E-commerce website for a small online store (e.g., apparel, wellness products, or digital goods)",
    image: "/projects/dzhopW.png",
    technologies: ["Next.js", "Payload CMS", "Tailwind CSS"],
    liveUrl: "https://dzhop-commerce-oasis.vercel.app/",
  },
  {
    id: "3",
    title: "Epikcart",
    description: "Multi-vendor shopping cart with internationalization support.",
    image: "/projects/lp1.avif",
    technologies: ["React", "Redux", "React i18n"],
    liveUrl: "https://resume-roaster.com",
  },
  {
    id: "4",
    title: "Real Estate",
    description: "Real estate listings platform with advanced search.",
    image: "/projects/lp2.webp",
    technologies: ["React.js", "Redux", "Tailwind CSS"],
    liveUrl: "https://resume-roaster.com",
  },
  {
    id: "5",
    title: "Consulting Finance",
    description: "Consulting and finance dashboard for business analytics.",
    image: "/projects/lp3.png",
    technologies: ["HTML", "CSS & SCSS", "Javascript"],
    liveUrl: "https://resume-roaster.com",
  },
  {
    id: "6",
    title: "devLinks",
    description: "Developer link management with drag & drop.",
    image: "/projects/lp1.avif",
    technologies: ["Next.js", "Formik", "Drag & Drop"],
    liveUrl: "https://resume-roaster.com",
  },
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