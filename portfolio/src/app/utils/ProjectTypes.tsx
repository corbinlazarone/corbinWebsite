import alienInvasionImage from "@/app/images/alien_invasion_screenshot.png";
import iosAppScreenshot from "@/app/images/ios.png";
import myfriends from "@/app/images/myfriends.png";
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
        image: myfriends,
        title: "MyFriendsAPI",
        summary: "A fullstack web application that displays my friends and their pictures from a PosgresSQL database.",
        link: "https://my-friends-kappa.vercel.app/",
        alt: "myfriends_screenshot",
        skills: ["Java", "Spring Boot", "PosgresSQL", "Docker", "Render", "Vercel", "Next.js"]
    },
    {
        image: iosAppScreenshot,
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