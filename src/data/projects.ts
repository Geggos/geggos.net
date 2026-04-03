import i_Pixelmon from "../assets/gallery-banners/pixelmon.webp"
import h_projects from "../assets/headers/projects.png"

export interface Project {
    name: string;
    date: Date;
    description: string;
    tags: Array<{ label: string; icon?: string }>;
    image: ImageMetadata;
    imageAlt: string;
    imageClass?: string;
    url?: string;
}

export const archiveProjects: Project[] = [{
    name: "Pixelmon / Cobblemon",
    date: new Date("June 2025"),
    description: "Relive our original Pixelmon adventure, or summertime in Sao Marlo, with this archive of all images made for both Minecraft playthroughs.",
    tags: [
        { label: "Sep 2024", icon: "fa6-solid:calendar" },
        { label: "Jun 2025", icon: "fa6-solid:calendar" },
        { label: "Minecraft" }
    ],
    image: i_Pixelmon,
    imageAlt: "Pixelmon and Cobblemon gallery banner",
    url: "/archive/pixelmon",
}].sort((a, b) => b.date.getTime() - a.date.getTime());

import wip from "../assets/wip.png"
export const projects: Project[] = [{
    name: "Nothing here yet!",
    date: new Date("March 2026"),
    description: "soon...",
    tags: [
        { label: "Soon", icon: "fa6-solid:calendar" },
    ],
    image: wip,
    imageAlt: "idk",
    imageClass: "object-center",
}].sort((a, b) => b.date.getTime() - a.date.getTime());
