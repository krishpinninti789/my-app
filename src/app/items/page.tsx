"use client";
import useFetch from "../hooks/useFetch";
import ProductCard from "./_components/ProductCard";

interface ProductProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
}

const Page = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-xl text-red-500">
        Something went wrong!
      </div>
    );

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.products?.map((product: ProductProps) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Page;
