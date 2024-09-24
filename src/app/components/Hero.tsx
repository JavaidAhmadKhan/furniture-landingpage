import React from "react";
import InputSearch from "./InputSearch";
// import bannerImg from "../../images/banner.jpg";
import stripImg from "../../images/strip.svg";
// import Banner from "./Banner";
import Strip from "./Strip";
import { AppleCardsCarouselDemo } from "./AppleCardsCarouselDemo";

type HeroProps = {
  title: string;
  description: string;
};
export default function Hero({ title, description }: HeroProps) {
  return (
    <>
      <div className="text-center pt-16 px-4 md:px-28 ">
        <h1 className="text-blackText dark:text-white font-rubikMedium drop-shadow-md font-bold text-[24px] md:text-[72px] px-4 sm:px-8 md:px-34 lg:px-64 2xl:px-[450px] leading-tight ">
          {title}
        </h1>
        <p className="text-grayText dark:text-white text-[20px] pt-6">
          {description}
        </p>
      </div>
      <InputSearch />
      <AppleCardsCarouselDemo />
      <Strip stripImg={stripImg} />
    </>
  );
}
