import rdImage from "@/app/images/rd_screenshot.png";
import alienInvasionImage from "@/app/images/alien_invasion_screenshot.png";
import { StaticImageData } from "next/image";

export interface Projects {
    image: StaticImageData
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
        image: rdImage,
        title: "Random Debate",
        summary: "An open source website that puts random people in random group chats to discuss random topics.",
        link: "https://www.randomdebate.com/",
        alt: "rd screenshot",
        skills: ["Next.js", "google-auth", "Firebase", "Java", "TypeScript", "Spring boot", "Firebase Cloud Store"]
    },
    {
        image: alienInvasionImage,
        title: "Alien Invasion",
        summary: "A replica to the classic arcade game Space Invaders.",
        link: "https://github.com/corbinlazarone/Alien-Invasion ",
        alt: "alien invasion screenshot",
        skills: ["Python", "Pygame", "OOP"]
    }
]