import oceanThinkIt from "@/assets/thkit.jpg"
import valuerAi from "@/assets/val2.jpg"
import fatcatCoders from "@/assets/fatcoder.png"
import smartCat from "@/assets/sc.png"

export type ColorScheme = {
  primary: string
  secondary: string
  accent: string
  text: string
  textSecondary: string
}

export type CompanyData = {
  id: string
  name: string
  position: string
  period: string
  client?: string
  description: string
  shortDescription: string
  backgroundImage: string
  logo?: string
  logoInitial?: string
  technologies: string[]
  responsibilities?: string[]
  projects?: {
    name: string
    description: string
    tech: string[]
  }[]
  colorScheme: ColorScheme
}

export type SkillCategory = {
  title: string
  items: string[]
}

export const profileData = {
  email: "antonije.ljubisa@gmail.com",
  phone: "+381 60 470 3999",
  location: "Belgrade, Serbia",
  github: "https://github.com/Luffylando",
  linkedin: "https://www.linkedin.com/in/antonije-ljubiša-032955175",
}

export const educationData = {
  institution: "University of Belgrade, Faculty of Philosophy",
  period: "2013 – 2017",
}

export const interests = ["Chess", "Anime", "Non-smoker"]

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    items: ["JavaScript / TypeScript", "PHP", "Go (learning)"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Query",
      "Zustand",
      "Redux Toolkit",
      "React Native",
      "Gatsby",
      "Tailwind",
      "Recharts",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express", "Laravel"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Tools & Infra",
    items: [
      "Docker",
      "Git",
      "Jest",
      "Playwright",
      "GraphQL",
      "Kafka",
      "Microservices",
      "AWS",
      "GCP",
      "CI/CD",
    ],
  },
]

export const companiesData: CompanyData[] = [
  {
    id: "smartcat",
    name: "SmartCat",
    position: "Senior Frontend Engineer",
    period: "May 2025 – Present",
    description:
      "Working across two enterprise clients-leading frontend for Shopify and contributing senior-level development on Content Lion.",
    shortDescription:
      "Lead Frontend Engineer for Shopify and Senior Frontend Engineer on Content Lion. Architecture, best practices, and high-quality delivery across both clients.",
    backgroundImage: smartCat,
    logo: smartCat,
    colorScheme: {
      primary: "#1E40AF",
      secondary: "#2563EB",
      accent: "#3B82F6",
      text: "#E0E7FF",
      textSecondary: "#C7D2FE",
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Docker",
      "GitHub",
      "CI/CD",
      "Playwright",
      "Tailwind",
      "React Query",
      "Kafka",
      "Microservices",
      "Go",
      "Monorepo",
      "AI / Cursor",
      "Claude Code",
    ],
    projects: [
      {
        name: "Shopify",
        description:
          "Lead Frontend Engineer - owning architecture, technical direction, and engineering culture. Introduced team standards (ESLint, Husky, code review), mentored engineers, and stayed closely aligned with the client on product goals.",
        tech: [
          "Next.js",
          "TypeScript",
          "Docker",
          "GitHub",
          "CI/CD",
          "Playwright",
          "Tailwind",
          "React Query",
          "Kafka",
          "Microservices",
          "Cursor",
          "Claude Code",
        ],
      },
      {
        name: "Content Lion",
        description:
          "Senior Frontend Engineer on a platform replacing Oracle CM-shaping architecture decisions, guiding the team on what to change and when, and keeping quality high while shipping fast.",
        tech: [
          "React",
          "TypeScript",
          "Docker",
          "GitHub",
          "CI/CD",
          "Playwright",
          "Jest",
          "Go",
          "Monorepo",
          "Tailwind",
          "React Query",
        ],
      },
    ],
  },
  {
    id: "ocean-thinkit",
    name: "Ocean ThinkIt",
    position: "Senior Frontend Engineer",
    period: "March 2024 – May 2025",
    client: "Lean Library (Web Browser Extension)",
    description:
      "Enhanced a browser extension that gives students access to global articles and eBooks through their university library.",
    shortDescription:
      "Enhanced the Lean Library browser extension for students. React, TypeScript, Playwright, and close collaboration with cross-functional teams.",
    backgroundImage: oceanThinkIt,
    logo: oceanThinkIt,
    colorScheme: {
      primary: "#0E3386",
      secondary: "#93C5FD",
      accent: "#BFDBFE",
      text: "#FFFFFF",
      textSecondary: "#E0F2FE",
    },
    technologies: [
      "React",
      "TypeScript",
      "Vanilla JS",
      "Docker",
      "GitLab",
      "Playwright",
      "Jest",
      "Cursor",
    ],
    responsibilities: [
      "Shipped features and fixes across the extension's React and vanilla JS codebase",
      "Consolidated storage systems and simplified architecture through targeted spikes",
      "Maintained coverage with Playwright E2E and Jest unit tests",
    ],
  },
  {
    id: "valuer-ai",
    name: "Valuer.ai",
    position: "Lead Frontend Engineer",
    period: "September 2023 – March 2024",
    client: "Valuer.ai",
    description:
      "Brought in to modernize a legacy React codebase at a fast-moving startup product team.",
    shortDescription:
      "Led React 18+ modernization with TypeScript, Zustand, and React Query. Refactored legacy code and aligned frontend with backend and stakeholders.",
    backgroundImage: valuerAi,
    logo: valuerAi,
    colorScheme: {
      primary: "#C2410C",
      secondary: "#EA580C",
      accent: "#F97316",
      text: "#FFF7ED",
      textSecondary: "#FFEDD5",
    },
    technologies: [
      "React",
      "TypeScript",
      "Docker",
      "Zustand",
      "React Query",
      "Tailwind",
      "Laravel",
    ],
    responsibilities: [
      "Migrated the app to React 18+ with TypeScript, Zustand, and React Query",
      "Refactored legacy modules and shipped new product features on a steady release cadence",
      "Aligned API contracts and data-fetching patterns with the Laravel backend team",
    ],
  },
  {
    id: "fatcat-coders",
    name: "Fat Cat Coders",
    position: "Full Stack Engineer",
    period: "November 2020 - August 2023",
    description:
      "Full-stack work across several client products over nearly three years.",
    shortDescription:
      "Full Stack Engineer on Calendly, SAGE, and Convertmore-Gatsby, Next.js, React, Node.js, and AWS.",
    backgroundImage: fatcatCoders,
    logo: fatcatCoders,
    colorScheme: {
      primary: "#166534",
      secondary: "#15803D",
      accent: "#16A34A",
      text: "#D1FAE5",
      textSecondary: "#A7F3D0",
    },
    technologies: [
      "Gatsby",
      "GraphQL",
      "Contentful",
      "Next.js",
      "Node.js",
      "Elastic Search",
      "PostgreSQL",
      "React",
      "Express",
      "Redis",
      "AWS",
      "Twilio",
      "Cloudflare",
    ],
    projects: [
      {
        name: "Calendly",
        description:
          "Worked on the frontend of the Calendly marketing platform using Gatsby, Contentful, and GraphQL. Focused on rewriting legacy code while delivering new features - building pages, creating and optimizing components, and improving overall UX and site design.",
        tech: [
          "Gatsby",
          "GraphQL",
          "Contentful",
          "Cloudflare",
          "In-house CSS framework",
        ],
      },
      {
        name: "SAGE",
        description:
          "Developed an application enabling university professors to upload, manage, download, and share academic papers and reference materials efficiently.",
        tech: ["Next.js", "Node.js", "Elastic Search", "PostgreSQL"],
      },
      {
        name: "Convertmore",
        description:
          "Improved both frontend and backend functionality on a complex scheduling product, with a strong focus on appointment scheduling and live call features.",
        tech: ["React", "Express", "Redis", "PostgreSQL", "AWS", "Twilio"],
      },
    ],
  },
  {
    id: "cipher",
    name: "CIPHER",
    position: "Junior Full Stack Engineer",
    period: "May 2018 – August 2020",
    logoInitial: "C",
    description:
      "First professional role-learning full-stack delivery on client web applications.",
    shortDescription:
      "Junior Full Stack Engineer building web apps with PHP, Laravel, and JavaScript. First professional role-foundation for full-stack and frontend career.",
    backgroundImage: fatcatCoders,
    colorScheme: {
      primary: "#4C1D95",
      secondary: "#6D28D9",
      accent: "#8B5CF6",
      text: "#EDE9FE",
      textSecondary: "#DDD6FE",
    },
    technologies: [
      "PHP",
      "Laravel",
      "JavaScript",
      "MySQL",
      "HTML",
      "CSS",
      "Git",
      "REST APIs",
    ],
    responsibilities: [
      "Built and maintained Laravel and JavaScript features under senior mentorship",
      "Shipped client-facing functionality from ticket to production",
      "Picked up testing, code review, and REST API integration practices",
    ],
  },
]

export const getCompanyById = (id: string): CompanyData | undefined => {
  return companiesData.find((company) => company.id === id)
}

export const getCompanyByName = (name: string): CompanyData | undefined => {
  const normalizedName = name.toLowerCase().replace(/\s+/g, "-")
  return companiesData.find((company) => {
    const normalizedCompanyName = company.name
      .toLowerCase()
      .replace(/\s+/g, "-")
    const normalizedCompanyId = company.id.toLowerCase()
    return (
      normalizedCompanyName === normalizedName ||
      normalizedCompanyId === normalizedName
    )
  })
}
