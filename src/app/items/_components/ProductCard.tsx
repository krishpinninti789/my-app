import React from "react";

interface ProductProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
}
import { useRouter } from "next/navigation";

const ProductCard = ({ id, image, name, description, price }: ProductProps) => {
  const navigate = () => {
    router.push(`items/${id}`);
  };
  const router = useRouter();
  return (
    <div
      key={id}
      className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-bold text-green-500">${price}</span>
        <button
          onClick={navigate}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
