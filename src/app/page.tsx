"use client";
import React, { useEffect, useState } from "react";
import ListUsers from "./ListUsers";

const page = () => {
  const [shimmer, setShimmer] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShimmer(false);
    }, 1000);
  }, []);
  return (
    <div className="relative">
      {shimmer ? (
        <div className="flex m-3 rounded-md flex-col gap-2 bg-gray-200 animate-pulse px-4 py-2 md:py-2">
          <div className="bg-gray-500 h-3 rounded-sm w-2/4" />
          <div className="bg-gray-500 h-4 rounded-lg w-3/4" />
        </div>
      ) : (
        <ListUsers background="bg-gray-300" color="green" />
      )}
    </div>
  );
};

export default page;
