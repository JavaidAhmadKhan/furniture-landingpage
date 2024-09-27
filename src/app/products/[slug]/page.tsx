import PopupButton from "@/app/components/PopupButton";
import { products } from "@/lib/data";
import { Metadata } from "next";
import Image from "next/image";

export const revalidate = 0;

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const post = products.find((product) => product.id === slug);

  if (!post) {
    return { title: "Product Not Found", description: "" };
  }

  return {
    title: post.name,
  };
}

export async function generateStaticParams() {
  return products.map(({ id }) => ({
    slug: id,
  }));
}

export default function Page({ params }: Props) {
  const product = products.find((item) => item.id === params.slug);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="px-4 py-12 max-w-7xl mx-auto min-h-screen">
      <div className="flex justify-between mb-6 lg:mb-12">
        <h2 className="text-3xl lg:text-4xl items-start uppercase">
          {product.name}
        </h2>
        <div>
          <PopupButton />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-4">
        <div className="flex items-center justify-center">
          <Image
            className="rounded-lg shadow-xl border-4 border-gray-200 p-2  "
            width={600}
            height={600}
            alt={product.name}
            src={product.imageUrl.src}
          />
        </div>
        <div className="bg-[#E9E4DB] p-6 w-full">
          <label className="font-bold">💰 PRICE:</label>
          <p className="text-gray-800 text-2xl lg:text-3xl pt-4 py-6 text-center border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
            ${product.price}
          </p>
          <button className="bg-orange-900 hover:bg-orange-950 text-white px-4 py-2 rounded-md flex lg:hidden w-full items-center justify-center my-12">
            Contact the Seller!
          </button>
        </div>
      </div>
      <div className="pt-6">
        <label className="font-bold pb-2 border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
          📝 DESCRIPTION:
        </label>
        <p className="text-gray-600 text-lg my-4 pt-4 pb-6 ">
          {product.description}
        </p>
      </div>
    </div>
    // <div className="px-12 py-12 max-w-[100rem] mx-auto min-h-screen">
    //   <div className="flex justify-between mb-6 lg:mb-12">
    //     <h2 className="text-3xl lg:text-4xl items-start uppercase">
    //       {product.name}
    //     </h2>
    //   </div>

    //   <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-4">
    //     <div className="flex items-center justify-center">
    //       <Image
    //         className="rounded-lg shadow-xl border-4 border-gray-200 p-2"
    //         width={600}
    //         height={600}
    //         alt={product.name}
    //         src={product.imageUrl}
    //       />
    //     </div>
    //     <div className="bg-[#E9E4DB] p-6 w-full">
    //       <label className="font-bold">💰 PRICE:</label>
    //       <p className="text-gray-800 dark:text-white text-2xl lg:text-3xl pt-4 py-6 text-center border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
    //         ₹ {product.price}
    //       </p>
    //     </div>
    //   </div>
    //   <div className="pt-6">
    //     <label className="font-bold pb-2 border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
    //       📝 DESCRIPTION:
    //     </label>
    //     <p className="text-gray-600 dark:text-white text-lg my-4 pt-4 pb-6 ">
    //       {product.description}
    //     </p>
    //   </div>
    // </div>
  );
}
