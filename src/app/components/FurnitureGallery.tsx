import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import Gallery1 from "../../images/gallery1.png";
import Gallery2 from "../../images/gallery2.png";
import Gallery3 from "../../images/gallery3.png";
import Gallery4 from "../../images/gallery4.png";

// Define types for items
interface Item {
    header: JSX.Element;
    className: string;
    img: string;
}

export function FurnitureGallery() {
    return (
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem] px-6">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    className={item.className}
                    img={item.img}
                />
            ))}
        </BentoGrid>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black" />
);

// Add items array with correct typing
const items: Item[] = [
    {
        header: <Skeleton />,
        className: "md:col-span-1",
        img: Gallery1,
    },
    {
        header: <Skeleton />,
        className: "md:col-span-1",
        img: Gallery2,
    },
    {
        header: <Skeleton />,
        className: "md:col-span-2",
        img: Gallery3,
    },
    {
        header: <Skeleton />,
        className: "md:col-span-2",
        img: Gallery4,
    },
    {
        header: <Skeleton />,
        className: "md:col-span-1",
        img: Gallery3,
    },
    {
        header: <Skeleton />,
        className: "md:col-span-1",
        img: Gallery2,
    },
];
