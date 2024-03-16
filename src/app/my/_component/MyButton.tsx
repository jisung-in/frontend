"use client";

import { Button } from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";
import React from "react";

type Props = { children?: React.ReactNode; width?: number; path?: string };
const MyButton = ({ children, width = 100, path = "/" }: Props) => {
  const router = useRouter();

  return (
    <div className={`flex items-center w-[${width}px]`}>
      <Button onClick={() => router.push(path)} variant="gray" height="sm">
        {children}
      </Button>
    </div>
  );
};

export default MyButton;
