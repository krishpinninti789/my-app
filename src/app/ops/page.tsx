"use client";
import React, { useEffect, useRef, useState } from "react";

const page = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Enter a value" />
    </>
  );
};

export default page;
