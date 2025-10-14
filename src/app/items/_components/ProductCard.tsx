import React from "react";
import { useRouter } from "next/navigation";
import useToggle from "@/app/hooks/useToggle";

interface ProductProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
}

const ProductCard = ({ id, image, name, description, price }: ProductProps) => {
  const router = useRouter();
  const [toggle, toggleFunction] = useToggle(true);

  const handleNavigate = () => {
    router.push(`items/${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4 flex items-center justify-between gap-2">
        <span className="text-lg font-bold text-green-500">${price}</span>
        <button
          onClick={handleNavigate}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          View
        </button>
        <button
          onClick={toggleFunction}
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
            toggle
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 text-black cursor-not-allowed"
          }`}
        >
          {toggle ? "Add to Cart" : "Added to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
