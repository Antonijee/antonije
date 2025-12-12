import oceanThinkIt from "@/assets/thkit.jpg"
import valuerAi from "@/assets/val2.jpg"
import fatcatCoders from "@/assets/fatcoder.png"
import smartCat from "@/assets/sc.png"

export type ColorScheme = {
  primary: string      // Main accent color
  secondary: string    // Secondary accent
  accent: string       // Highlight color
  text: string         // Primary text
  textSecondary: string // Secondary text
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
  technologies: string[]
  responsibilities: string[]
  achievements?: string[]
  projects?: {
    name: string
    description: string
    tech: string[]
  }[]
  colorScheme: ColorScheme
}

export const companiesData: CompanyData[] = [
  {
    id: "smartcat",
    name: "SmartCat",
    position: "Senior Frontend Developer",
    period: "May 2025 - Present",
    client: "Content Lion",
    description: "Working on Content Lion project using React, TypeScript, Docker, and CI/CD. Building solutions to replace Oracle CM.",
    shortDescription: "Working on Content Lion project using React, TypeScript, Docker, and CI/CD. Building solutions to replace Oracle CM.",
    backgroundImage: smartCat,
    logo: smartCat,
    colorScheme: {
      primary: "#1E40AF",      // Dark Blue
      secondary: "#2563EB",    // Medium Blue
      accent: "#3B82F6",      // Bright Blue
      text: "#E0E7FF",         // Light Blue-White
      textSecondary: "#C7D2FE" // Light Blue
    },
    technologies: [
      "React",
      "TypeScript",
      "Docker",
      "Github",
      "CI/CD",
      "AI",
      "Playwright (E2E)",
      "Jest (Unit)",
      "GoLang",
      "Monorepo",
      "Tailwind",
      "React Query",
      "Context"
    ],
    responsibilities: [
      "Work daily with the listed technology stack on tasks such as bug fixes, feature development, spikes, and ongoing refactoring to improve technical quality",
      "Collaborate closely with clients, designers, frontend and backend engineers, infrastructure team, stakeholders, and delivery managers to plan next steps",
      "Evaluate suitable technologies and libraries for our needs",
      "Participate in the hiring process by evaluating candidates during technical interviews"
    ],
    achievements: [
      "Building a solution to replace Oracle CM with modern technology stack",
      "Working on complex application architecture in a monorepo environment",
      "Implementing comprehensive testing with Playwright for E2E and Jest for unit tests"
    ]
  },
  {
    id: "ocean-thinkit",
    name: "Ocean ThinkIt",
    position: "Senior Frontend Developer",
    period: "March 2024 - May 2025",
    client: "Lean Library (Web Browser Extension)",
    description: "Enhanced Lean Library browser extension for students to access global articles and eBooks. React, TypeScript, Playwright.",
    shortDescription: "Enhanced Lean Library browser extension for students to access global articles and eBooks. React, TypeScript, Playwright.",
    backgroundImage: oceanThinkIt,
    logo: oceanThinkIt,
    colorScheme: {
      primary: "#0E3386",      // Light Blue
      secondary: "#93C5FD",   // Lighter Blue
      accent: "#BFDBFE",       // Very Light Blue
      text: "#FFFFFF",         // White
      textSecondary: "#E0F2FE" // Light Blue-White
    },
    technologies: [
      "React",
      "TypeScript",
      "Vanilla JS",
      "Docker",
      "Gitlab workflow",
      "Playwright",
      "Jest",
      "AI"
    ],
    responsibilities: [
      "Work with React, TypeScript, and Vanilla JavaScript to enhance a web extension that provides students with seamless access to a wide range of global articles, eBooks, and educational resources",
      "Collaborate closely with clients, project managers, designers, and product owners to align on goals and deliverables",
      "Develop new features, resolve bugs, write unit and E2E tests, review colleagues' pull requests",
      "Refactor code to improve performance",
      "Take on exploratory tasks (spikes) to investigate, propose, and implement improvements to optimize the application's overall efficiency",
      "Simplify the application's architecture, such as consolidating storage systems, while continuously delivering new functionalities to meet user needs"
    ],
    achievements: [
      "Successfully enhanced browser extension for educational resource access",
      "Improved application architecture by consolidating storage systems",
      "Maintained high code quality through comprehensive testing and code reviews"
    ]
  },
  {
    id: "valuer-ai",
    name: "Valuer Ai",
    position: "Lead Frontend Developer",
    period: "September 2023 - March 2024",
    client: "Valuer.ai",
    description: "Led modernization of React app to React 18+ with TypeScript, Zustand, and React Query. Refactored legacy code.",
    shortDescription: "Led modernization of React app to React 18+ with TypeScript, Zustand, and React Query. Refactored legacy code.",
    backgroundImage: valuerAi,
    logo: valuerAi,
    colorScheme: {
      primary: "#C2410C",      // Elegant Burnt Orange
      secondary: "#EA580C",    // Rich Orange
      accent: "#F97316",       // Warm Orange
      text: "#FFF7ED",         // Warm Cream
      textSecondary: "#FFEDD5" // Soft Peach
    },
    technologies: [
      "React",
      "TypeScript",
      "Docker",
      "Zustand",
      "React Query",
      "Tailwind",
      "Laravel"
    ],
    responsibilities: [
      "Enhance and modernize a React application, upgrading it to the latest version (React 18+)",
      "Incorporate best practices such as Zustand, React Query, and TypeScript",
      "Refactor poorly written code to improve quality",
      "Implement new features",
      "Collaborate closely with backend teams to ensure alignment on data handling and code style",
      "Participate in meetings with stakeholders, including project managers, product owners, and data team members"
    ],
    achievements: [
      "Successfully upgraded React application to React 18+",
      "Modernized codebase with state management best practices (Zustand, React Query)",
      "Improved code quality through systematic refactoring of legacy code"
    ]
  },
  {
    id: "fatcat-coders",
    name: "FatCat Coders",
    position: "Full Stack Developer",
    period: "November 2019 - August 2023",
    description: "Worked on Calendly (Gatsby, GraphQL), SAGE (Next.js, Node.js), and Convertmore (React, Express, AWS) with scheduling features.",
    shortDescription: "Worked on Calendly (Gatsby, GraphQL), SAGE (Next.js, Node.js), and Convertmore (React, Express, AWS) with scheduling features.",
    backgroundImage: fatcatCoders,
    logo: fatcatCoders,
    colorScheme: {
      primary: "#166534",      // Darkish Green
      secondary: "#15803D",    // Medium Green
      accent: "#16A34A",      // Bright Green
      text: "#D1FAE5",        // Light Green-White
      textSecondary: "#A7F3D0" // Light Green
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
      "ExpressJS",
      "Redis",
      "AWS",
      "Twilio",
      "Cloudflare"
    ],
    responsibilities: [
      "Develop full-stack applications across multiple projects",
      "Work on both frontend and backend functionality",
      "Implement new features and optimize existing code",
      "Collaborate with cross-functional teams"
    ],
    projects: [
      {
        name: "Calendly",
        description: "Worked on the frontend of the Calendly marketing site using Gatsby, Contentful, and GraphQL. Our goal was to rewrite legacy code while delivering new features. Daily tasks included implementing new pages, creating and optimizing components, and redesigning site elements.",
        tech: ["Gatsby", "GraphQL", "Contentful", "Cloudflare", "In-house CSS framework"]
      },
      {
        name: "SAGE",
        description: "Developed an application for university professors to upload, download, and share academic work or reference materials.",
        tech: ["NextJS", "NodeJS", "Elastic Search", "PostgreSQL"]
      },
      {
        name: "Convertmore",
        description: "A complex project where I enhanced both frontend and backend functionality, particularly around scheduling appointments and live call features.",
        tech: ["React", "ExpressJS", "Redis", "PostgreSQL", "AWS", "Twilio"]
      }
    ],
    achievements: [
      "Worked on multiple high-profile projects including Calendly marketing site",
      "Developed full-stack solutions for various clients",
      "Grew from Junior to Medior level during tenure"
    ]
  }
]

export const getCompanyById = (id: string): CompanyData | undefined => {
  return companiesData.find(company => company.id === id)
}

export const getCompanyByName = (name: string): CompanyData | undefined => {
  const normalizedName = name.toLowerCase().replace(/\s+/g, '-');
  return companiesData.find(company => {
    const normalizedCompanyName = company.name.toLowerCase().replace(/\s+/g, '-');
    const normalizedCompanyId = company.id.toLowerCase();
    return normalizedCompanyName === normalizedName || normalizedCompanyId === normalizedName;
  })
}

