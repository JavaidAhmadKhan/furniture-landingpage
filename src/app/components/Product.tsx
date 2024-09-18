import React from "react";
import ProductCard from "./ProductCard";
// import { products } from "../../../utils/data";

const Product = ({ title, heading, description }) => {
  return (
    <div className="text-center">
      <h1 className="text-orangeText  font-rubikMedium text-[18px] px-4 ">
        {title}
      </h1>
      <h2 className="text-blackText dark:text-white font-rubikMedium  text-[46px] px-4">
        {heading}
      </h2>
      <p className="text-grayText dark:text-white text-[20px] pt-6 px-4">
        {description}
      </p>
      <ProductCard />
    </div>
  );
};

export default Product;
