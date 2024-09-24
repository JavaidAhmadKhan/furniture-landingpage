import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import ImgGallery1 from "../../images/gallery1.png";
import ImgGallery2 from "../../images/gallery2.png";
import ImgGallery3 from "../../images/gallery3.png";
import ImgGallery4 from "../../images/gallery4.png";
import ImgGallery5 from "../../images/gallery5.png";
import ImgGallery6 from "../../images/gallery6.png";

interface GalleryItem {
  title: string;
  description: string;
  className: string;
  img: string;
}

const Skeleton: React.FC = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Skeleton />
  </div>
);

const items: GalleryItem[] = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    className: "md:col-span-1",
    img: ImgGallery1.src,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    className: "md:col-span-1",
    img: ImgGallery2.src,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    className: "md:col-span-2",
    img: ImgGallery3.src,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    className: "md:col-span-2",
    img: ImgGallery4.src,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    className: "md:col-span-1",
    img: ImgGallery5.src,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    className: "md:col-span-1",
    img: ImgGallery6.src,
  },
];

export function FurnitureGallery(): JSX.Element {
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          className={item.className}
          header={
            <Image
              src={item.img}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-full object-cover rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
            />
          }
        />
      ))}
    </BentoGrid>
  );
}
