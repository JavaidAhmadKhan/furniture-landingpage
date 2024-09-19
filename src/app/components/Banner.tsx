import Image from "next/image";
import React from "react";

type BannerPorps = {
  bannerImg: string;
};
export default function Banner({ bannerImg }: BannerPorps) {
  return (
    <div className="mt-[43px] md:mt-[76px] mb-[43px] md:mb-[76px] p-6">
      <Image
        className="w-full h-[200px] md:h-full object-cover object-center"
        src={bannerImg}
        alt="banner"
        width={1084}
        height={650}
      />
    </div>
  );
}
