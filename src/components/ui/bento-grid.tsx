import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  img: string;
  alt?: string;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  img,
  alt = "Image",
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-gray-100 border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <Image
          className="w-full h-[290px] object-cover rounded-md"
          src={img}
          alt={alt}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};
