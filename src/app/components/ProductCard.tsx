import React from "react";
import { products } from "../../../utils/data.js";
import Image from "next/image.js";
import { Button } from "@/components/ui/button";
export default function ProductCard() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 mt-[80px]">
        {products &&
          products.map((product, id) => (
            <div className="border rounded-md p-8 bg-gray-200" key={id}>
              <Image
                className="w-full h-auto aspect-square object-cover rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
                src={product.img}
                alt={product.name}
                width={300}
                height={271}
              />
              <Button className="mt-6 p-7 dark:text-white text-lg font-rubikMedium w-full">
                Enquire Now
              </Button>
              <div className="text-left">
                <h1 className="mt-4 text-[20px] font-rubik text-grayText">
                  {product.name}
                </h1>
                <p className="text-[18px] text-blackText font-rubikMedium">
                  ₹ {product.price}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
