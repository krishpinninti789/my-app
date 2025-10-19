"use client";

import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const Page = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <TooltipProvider disableHoverableContent>
      <div className="justify-center flex items-center h-screen">
        <Tooltip open={open} onOpenChange={() => {}}>
          <TooltipTrigger asChild>
            <button
              onClick={() => setOpen(false)}
              className="bg-blue-500 p-3 rounded-md cursor-pointer text-white"
            >
              Add user
            </button>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            align="end"
            sideOffset={5}
            className="bg-gray-800"
          >
            <p>
              You can add
              <br /> users here
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default Page;
