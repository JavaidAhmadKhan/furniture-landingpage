import React from "react";
import InputSearch from "./InputSearch";
import bannerImg from "../../images/banner.jpg";
import stripImg from "../../images/strip.svg";
import Banner from "./Banner";
import Strip from "./Strip";

export default function Hero({ title, description }) {
  return (
    <>
      <div className="text-center pt-16 px-4 md:px-28 ">
        <h1 className="text-blackText dark:text-white font-rubikMedium drop-shadow-md font-bold text-[36px] md:text-[72px] px-4 md:px-64 leading-tight ">
          {title}
        </h1>
        <p className="text-grayText dark:text-white text-[20px] pt-6">
          {description}
        </p>
      </div>
      <InputSearch />
      <Banner bannerImg={bannerImg} />
      <Strip stripImg={stripImg} />
    </>
  );
}
