"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

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

const data = [
  {
    src: "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg",
  },
  {
    src: "https://img.freepik.com/premium-photo/photo-modern-living-room-sofa-interior-furniture-design-with-wall-frames_763111-170233.jpg",
  },
  {
    src: "https://img.freepik.com/premium-photo/living-room-with-grey-wall-brown-sofa-coffee-table-with-round-coffee-table_900321-4460.jpg",
  },

  {
    src: "https://img.freepik.com/premium-photo/cozy-home-interior-sofa-cushions-floor-lamp_888962-167.jpg",
  },
  {
    src: "https://img.freepik.com/premium-photo/cozy-creative-composition-stylish-living-room-interior-design-with-frame-green-sofa-wooden-furniture-plants-accessories-white-walls-parquet-floor_431307-2090.jpg",
  },
  {
    src: "https://img.freepik.com/premium-photo/living-room-with-couch-picture-plant_1089151-181343.jpg",
  },
  {
    src: "https://img.freepik.com/premium-photo/living-room-with-couch-table-with-plant-it_855221-8101.jpg",
  },
  {
    src: "https://www.bananahome.com.au/cdn/shop/articles/Grey_Living_Room_Ideas.jpg?format=pjpg&v=1674710175&width=1320",
  },
];
