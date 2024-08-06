import alienInvasionImage from "@/app/images/alien_invasion_screenshot.png";
import IOSapp from "@/app/images/ios.png";
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
        image: IOSapp,
        title: "Personal Social Media Directory",
        summary: "IOS App that puts all of my most used apps in one place.",
        link: "https://github.com/corbinlazarone/corbinDirectory",
        alt: "corbin_screenshot",
        skills: ["Swift", "Xcode", "UIKit"]
    },
    {
        image: alienInvasionImage,
        title: "Alien Invasion",
        summary: "A replica to the classic arcade game Space Invaders.",
        link: "https://github.com/corbinlazarone/Alien-Invasion ",
        alt: "alien invasion screenshot",
        skills: ["Python", "Pygame", "OOP"]
    },
]