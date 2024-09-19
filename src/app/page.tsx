import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Card from "./components/Card";
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCardsDemo";
import GalleryTabs from "./components/GalleryTabs";

export default function Home() {
  return (
    <div className="mb-16">
      <Hero
        title="Transform Your Space, Elevate Your Style."
        description=" Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
      />
      <Card
        title="Check Our Product"
        heading="Crafted with excellent material"
        description=" Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
      />
      <ProductCard />
      <div className="mt-[66px]">
        <Card
          title="Testimonial Section"
          heading="What Our Customer Say"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </div>
      <InfiniteMovingCardsDemo />
      <div className="mt-[66px]">
        <Card
          title="Check Our Collectionn"
          heading="Our Furniture Gallery"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </div>
      <GalleryTabs />
    </div>
  );
}
