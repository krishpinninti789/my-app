import React, { ReactNode } from "react";
import QueryProvider from "../providers/tanstack/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <QueryProvider>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryProvider>
    </div>
  );
};

export default layout;
