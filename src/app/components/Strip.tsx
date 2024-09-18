import Image from "next/image";
import React from "react";

export default function Strip({ stripImg }) {
  return (
    <div className="mx-4 md:mx-28 mb-[43px] md:mb-[76px]">
      <Image
        className="w-full h-auto object-cover object-center"
        src={stripImg}
        alt="companies"
        width={1084}
        height={100}
      />
    </div>
  );
}
