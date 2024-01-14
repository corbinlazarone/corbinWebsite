import toDueImage from "@/app/images/todue-net-screenshot.png";
import { StaticImageData } from "next/image";

export interface Projects {
    image: StaticImageData;
    title: string;
    summary: string;
    link: string;
    alt: string;
    skills: string[];
}

export interface ProjectsListProps {
    project: Projects[];
}

export const ProjectData: Projects[] = [
    {
        image: toDueImage,
        title: "To Due",
        summary: "A web app that reads course work syllabus and post the due dates of assignments to Google Calendar.",
        link: "https://www.todue.net/",
        alt: "To Due website screenshot",
        skills: ["Next.js", "google-auth"]
    },
    {
        image: toDueImage,
        title: "To Due",
        summary: "A web app that reads course work syllabus and post the due dates of assignments to Google Calendar.",
        link: "https://www.todue.net/",
        alt: "To Due website screenshot",
        skills: ["Next.js", "google-auth"]
    },
    {
        image: toDueImage,
        title: "To Due",
        summary: "A web app that reads course work syllabus and post the due dates of assignments to Google Calendar.",
        link: "https://www.todue.net/",
        alt: "To Due website screenshot",
        skills: ["Next.js", "google-auth"]
    },
    {
        image: toDueImage,
        title: "To Due",
        summary: "A web app that reads course work syllabus and post the due dates of assignments to Google Calendar.",
        link: "https://www.todue.net/",
        alt: "To Due website screenshot",
        skills: ["Next.js", "google-auth"]
    },
]