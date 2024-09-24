"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

import Slider1 from "../../images/slider1.png";
import Slider2 from "../../images/slider2.png";
import Slider3 from "../../images/slider3.png";
import Slider4 from "../../images/slider4.png";
import { StaticImageData } from "next/image";

interface CardData {
  src: string | StaticImageData;
}

// Card data array
const data: CardData[] = [
  {
    src: Slider1,
  },
  {
    src: Slider2,
  },
  {
    src: Slider3,
  },
  {
    src: Slider4,
  },
  {
    src: Slider2,
  },
  {
    src: Slider1,
  },
];

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  );
}
