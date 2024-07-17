export interface Experience {
  startYear: string;
  link: string;
  endYear: string;
  company: string;
  position: string;
  summary: string;
  skills: string[];
}

export interface ExperienceListProps {
  experience: Experience[];
}

export const ExperienceData: Experience[] = [
  {
    startYear: "May 2024",
    link: "https://www.chevron.com/",
    endYear: "Aug 2024",
    company: "Chevron",
    position: "Software Engineer Intern",
    summary:
      "Collaborated with a team of developers to build and deploy .NET 8 APIs, adding a security layer for business users and in-house Azure function apps.",
    skills: ["C#", ".NET 8", "SQL", "SSMS", "Azure DevOps", "Azure App Services"],
  },
  {
    startYear: "Dec 2022",
    link: "https://bbpsales.com/",
    endYear: "May 2024",
    company: "BBP",
    position: "Software Engineer Intern",
    summary:
      "Collaborated with a team of developers to build full-stack modules for linking and recording sensor data hosting on ignition. Designed and Implemented a redesigned full stack application of an ERP (Enterprise resource planning) software hosted on ignition. Increased load time of order and manufacture data as well as user productivity and engagement.",
    skills: ["Java", "Python", "React", "C#", "ASP.NET core", "SQL", "TypeScript"],
  },
];
