export interface Experience {
  startYear: string;
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
    startYear: "2022",
    endYear: "PRESENT",
    company: "BBP Sales",
    position: "Software Developer",
    summary:
      "Collaborated with a team of developers to build full-stack modules for linking and recording sensor data hosting on ignition.Designed and Implemented a redesigned full stack application of an ERP (Enterprise resource planning) software hosted on ignition. Increased load time of order and manufacture data as well as user productivity and engagement",
    skills: ["Java", "Python", "React", "C#", "ASP.NET core", "SQL"],
  },
  {
    startYear: "2022",
    endYear: "PRESENT",
    company: "BBP Sales",
    position: "Software Developer",
    summary:
      "Collaborated with a team of developers to build full-stack modules for linking and recording sensor data hosting on ignition.Designed and Implemented a redesigned full stack application of an ERP (Enterprise resource planning) software hosted on ignition. Increased load time of order and manufacture data as well as user productivity and engagement",
    skills: ["Java", "Python", "React", "C#", "ASP.NET core", "SQL"],
  },
  {
    startYear: "2022",
    endYear: "PRESENT",
    company: "BBP Sales",
    position: "Software Developer",
    summary:
      "Collaborated with a team of developers to build full-stack modules for linking and recording sensor data hosting on ignition.Designed and Implemented a redesigned full stack application of an ERP (Enterprise resource planning) software hosted on ignition. Increased load time of order and manufacture data as well as user productivity and engagement",
    skills: ["Java", "Python", "React", "C#", "ASP.NET core", "SQL"],
  },
];
