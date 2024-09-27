"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I've always been hesitant about buying furniture online, but this website exceeded my expectations. The selection is incredible, offering a wide range of styles to suit any taste. The detailed product descriptions and high-resolution images provided a clear picture of what to expect. I took the plunge and ordered a sofa, and I'm thrilled with the result. The quality is superb, and it's even more beautiful in person. I'm grateful for the excellent customer service throughout the process. This website has won my trust, and I'll be recommending it to all my friends!",
    name: "Charles Dickens",
  },
  {
    quote:
      "I recently purchased furniture from this website, and I couldn't be happier with my experience. The quality of the furniture is outstanding, and it arrived exactly as described. The customer service was top-notch, with prompt and helpful responses to all my inquiries. I highly recommend this website for anyone looking to buy furniture for their home.",
    name: "Johny Assloy",
  },
  {
    quote:
      "Shopping for furniture has never been easier! I stumbled upon this website and decided to give it a try. From browsing the extensive catalog to placing my order, the process was smooth and seamless. The website's intuitive interface made it simple to find the perfect pieces for my home. The furniture arrived on time, well-packaged, and in excellent condition. I'm thrilled with my purchase and will definitely be a returning customer.",
    name: "Sarah H",
  },
  {
    quote:
      "I've always been hesitant about buying furniture online, but this website exceeded my expectations. The selection is incredible, offering a wide range of styles to suit any taste. The detailed product descriptions and high-resolution images provided a clear picture of what to expect. I took the plunge and ordered a sofa, and I'm thrilled with the result. The quality is superb, and it's even more beautiful in person. I'm grateful for the excellent customer service throughout the process. This website has won my trust, and I'll be recommending it to all my friends!",
    name: "Jane Austen",
  },
  {
    quote:
      "I recently purchased furniture from this website, and I couldn't be happier with my experience. The quality of the furniture is outstanding, and it arrived exactly as described. The customer service was top-notch, with prompt and helpful responses to all my inquiries. I highly recommend this website for anyone looking to buy furniture for their home.",
    name: "Jack Assloy",
  },
  {
    quote:
      "Shopping for furniture has never been easier! I stumbled upon this website and decided to give it a try. From browsing the extensive catalog to placing my order, the process was smooth and seamless. The website's intuitive interface made it simple to find the perfect pieces for my home. The furniture arrived on time, well-packaged, and in excellent condition. I'm thrilled with my purchase and will definitely be a returning customer.",
    name: "Sarah Hustan",
  },
];
