import type { ImageMetadata } from "astro";
import galleryComics from "../assets/gallery-banners/banner_3.png";
import galleryMisc from "../assets/gallery-banners/geggobanner.png";
import galleryChristmas from "../assets/gallery-banners/hohoohohoh.png";

export interface Gallery {
    href?: string;
    image: ImageMetadata;
    label: string;
    alt: string;
    classes?: string;
}

export const galleries: Gallery[] = [
    {
        href: "/gallery/comics",
        image: galleryComics,
        label: "Comics",
        alt: "Geggos sitting in the grass with a friend on a sunny day",
        classes: "object-right",
    },
    {
        image: galleryMisc,
        label: "Misc",
        alt: "A banner of Geggos and his friends",
        classes: "object-top",
    },
    {
        href: "/gallery/christmas",
        image: galleryChristmas,
        label: "Christmas",
        alt: "Geggos dragging a santa sleigh with two friends in it",
        classes: "object-right",
    },
];
