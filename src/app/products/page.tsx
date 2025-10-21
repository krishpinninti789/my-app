import React from "react";
import { getAllProducts } from "../actions/actions";
import ProductCard from "../items/_components/ProductCard";
import ProductsPage from "./_components/ProductsPage";
import { MoveRight } from "lucide-react";

const page = async () => {
  const productsData = await getAllProducts();

  return (
    <div className="flex gap-4 flex-col">
      <div className="flex flex-row space-x-4  bg-blue-600 rounded-md shadow-md text-white items-center">
        <h1 className="text-bold text-2xl p-4">All Products Available</h1>
        <MoveRight />
      </div>
      <ProductsPage productsData={productsData} />;
    </div>
  );
};

export default page;
