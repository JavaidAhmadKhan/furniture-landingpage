import Hero from "./components/Hero";
import Card from "./components/Card";
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCardsDemo";
import GalleryTabs from "./components/GalleryTabs";
import { products } from "@/lib/data";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <>
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
        <main className="min-h-screen max-w-[100rem] mx-auto">
          <div className="px-12 pt-12 pb-20">
            {products && products.length > 0 ? (
              <div className="grid  grid-cols-1 sm:grid-cols-2 sm:grid md:grid-cols-3 lg:grid-cols-4 gap-10">
                {products.map((product, idx) => (
                  <ProductCard
                    key={`${product.name}-${idx}`}
                    {...product}
                    imageUrl={product.imageUrl.src}
                  />
                ))}
              </div>
            ) : (
              <p className="text-xl text-gray-800">
                All our products are gone...
              </p>
            )}
          </div>
        </main>
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
    </>
  );
}
