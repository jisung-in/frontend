"use client";

import { Button } from "@/app/components/Button/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

type Props = { children?: React.ReactNode; width?: number; path?: string };
const MyButton = ({ children, width = 100, path = "/" }: Props) => {
  const router = useRouter();

  const onClick = () => {
    const handleOAuthKakao = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER}/v1/oauth/logout/kakao`,
          { withCredentials: true },
        );
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    };

    handleOAuthKakao();

    console.log("clicked");
  };

  return (
    <div className={`flex items-center w-[${width}px]`}>
      <Button onClick={onClick} variant="gray" height="sm">
        {children}
      </Button>
    </div>
  );
};

export default MyButton;
