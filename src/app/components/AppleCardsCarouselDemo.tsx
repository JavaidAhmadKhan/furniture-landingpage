"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

import Slider1 from "../../images/slider1.png";
import Slider2 from "../../images/slider2.png";
import Slider3 from "../../images/slider3.png";
import Slider4 from "../../images/slider4.png";

interface CardData {
  src: string;
}

// Card data array
const data: CardData[] = [
  {
    src: Slider1.src,
  },
  {
    src: Slider2.src,
  },
  {
    src: Slider3.src,
  },
  {
    src: Slider4.src,
  },
  {
    src: Slider2.src,
  },
  {
    src: Slider1.src,
  },
];

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  );
}
