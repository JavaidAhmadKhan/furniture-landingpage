import React from "react";

type CardProps = {
  title: string;
  heading: string;
  description: string;
};

const Card = ({ title, heading, description }: CardProps) => {
  return (
    <div className="text-center">
      <h1 className="text-orangeText  font-rubikMedium text-[18px] px-4 leading-tight ">
        {title}
      </h1>
      <h2 className="text-blackText dark:text-white font-rubikMedium text-[20px] md:text-[46px] px-4">
        {heading}
      </h2>
      <p className="text-grayText dark:text-white text-[14px] md:text-[20px] pt-6 px-4">
        {description}
      </p>
    </div>
  );
};

export default Card;
