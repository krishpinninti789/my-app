"use client";

import React from "react";

const ProductDetailCard = ({ product }: { product: Product }) => {
  const mainImage = product.images?.[0] || product.thumbnail;

  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="h-56 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={mainImage}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col justify-between h-[360px]">
        {/* Title & Brand */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 truncate">{product.brand}</p>
          <p className="text-sm text-gray-400 capitalize">{product.category}</p>
        </div>

        {/* Price, Discount & Availability */}
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-green-600">
              ${product.price.toFixed(2)}
            </span>
            {product.discountPercentage > 0 && (
              <span className="ml-2 text-sm line-through text-gray-400">
                $
                {(
                  product.price /
                  (1 - product.discountPercentage / 100)
                ).toFixed(2)}
              </span>
            )}
          </div>
          <span
            className={`text-sm px-2 py-1 rounded-full ${
              product.availabilityStatus === "In Stock"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {product.availabilityStatus}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-1">
          <span className="text-yellow-500 mr-2">{`⭐ ${product.rating.toFixed(
            1
          )}`}</span>
          <span className="text-gray-500 text-sm">{`(${product.reviews.length} reviews)`}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {product.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {product.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Optional: SKU & Stock */}
        <div className="flex justify-between items-center mt-2 text-gray-500 text-xs">
          <span>SKU: {product.sku}</span>
          <span>Stock: {product.stock}</span>
        </div>

        {/* Footer: Shipping & Warranty */}
        <div className="flex justify-between items-center mt-2 text-gray-400 text-xs">
          <span>{product.shippingInformation}</span>
          <span>{product.warrantyInformation}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
