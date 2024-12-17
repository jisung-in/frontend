"use client";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useState } from "react";

type Props = { children: React.ReactNode };

const ReactQueryProvider = ({ children }: Props) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retryOnMount: true,
          refetchOnReconnect: false,
          retry: false,
          // SSR을 위해서 staleTime을 설정
          /* 
            staleTime이 0으로 설정할 경우 서버에서 prefetch이후 
            클라이언트에서 hydrate하는 과정에서 
            한번 더 fetch가 발생하고 이는 잠재적인 불일치를 야기
          */
          staleTime: 60 * 1000,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      <NextUIProvider>{children}</NextUIProvider>
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === "local"}
      />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
