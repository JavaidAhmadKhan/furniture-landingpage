import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<CardProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
}) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="max-w-lg bg-gray-953 overflow-hidden h-full gap-6 flex flex-col justify-between transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 shadow-lg p-4 border rounded-md  bg-gray-200 dark:bg-blackText">
        <div className="">
          <div className="relative h-[20rem] bg-center ">
            <Image
              src={imageUrl}
              alt={name}
              fill={true}
              className="rounded-md"
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="text-left">
            <h1 className="mt-4 dark:text-white text-[20px] font-rubik text-grayText">
              {name}
            </h1>
            <p className="text-grayText dark:text-white  font-rubikMedium text-base truncate">
              {description}
            </p>
          </div>
        </div>
        <p className="text-[18px] dark:text-white text-blackText font-rubikMedium">
          ₹ {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
