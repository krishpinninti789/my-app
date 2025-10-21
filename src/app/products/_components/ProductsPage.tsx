"use client";

import { useQuery } from "@tanstack/react-query";
import ProductDetailCard from "./ProductDetailCard";
import { getAllProducts } from "@/app/actions/actions";

export default function ProductsPage({ productsData }: ProductsPageProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["prods"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products");
      const prods = await res.json();
      return prods.products;
    },
    initialData: productsData,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) return <p>Loading....</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {data?.map((product: Product) => (
        <ProductDetailCard key={product.id} product={product} />
      ))}
    </div>
  );
}
