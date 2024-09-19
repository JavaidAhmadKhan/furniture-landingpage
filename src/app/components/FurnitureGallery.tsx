import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Gallery1 from "../../images/gallery1.png";
import Gallery2 from "../../images/gallery2.png";
import Gallery3 from "../../images/gallery3.png";
import Gallery4 from "../../images/gallery4.png";
import Image from "next/image";

type GalleryItem = {
  className: string;
  img: string;
};

export function FurnitureGallery() {
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem] px-6">
      {items.map((item, i) => (
        <BentoGridItem key={i} className={item.className}>
          <Image
            src={item.img}
            alt={`Gallery item ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </BentoGridItem>
      ))}
    </BentoGrid>
  );
}

// const Skeleton: React.FC = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black" />
// );

const items: GalleryItem[] = [
  {
    className: "md:col-span-1",
    img: Gallery1,
  },
  {
    className: "md:col-span-1",
    img: Gallery2,
  },
  {
    className: "md:col-span-2",
    img: Gallery3,
  },
  {
    className: "md:col-span-2",
    img: Gallery4,
  },
  {
    className: "md:col-span-1",
    img: Gallery3,
  },
  {
    className: "md:col-span-1",
    img: Gallery2,
  },
];
