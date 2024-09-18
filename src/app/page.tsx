import Hero from "./components/Hero";
import Product from "./components/Product";

export default function Home() {
  return (
    <div className="mb-16">
      <Hero
        title="Transform Your Space, Elevate Your Style."
        description=" Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
      />
      <Product
        title="Check Our Product"
        heading="Crafted with excellent material"
        description=" Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
      />
    </div>
  );
}
