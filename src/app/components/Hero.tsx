import React from "react";

export default function Hero({ title, description }) {
  return (
    <div className="text-center pt-16 px-4 md:px-64">
      <h1 className="text-blackText dark:text-white font-rubikMedium drop-shadow-md font-bold text-[36px] md:text-[72px] px-4 md:px-64 ">
        {title}
      </h1>
      <p className="text-grayText dark:text-white text-[20px] pt-6">
        {description}
      </p>
    </div>
  );
}
