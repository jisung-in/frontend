"use client";

import { Button } from "@/app/components/Button/Button";
import { useLogin } from "@/hook/useLogin";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

type Props = { children?: React.ReactNode; width?: number; path?: string };
const MyButton = ({ children, width = 100, path = "/" }: Props) => {
  const router = useRouter();
  const { handleLogout } = useLogin();

  const onClick = () => {
    const handleOAuthKakao = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER}/v1/logout`,
          null,
          { withCredentials: true },
        );
        handleLogout();
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    };

    handleOAuthKakao();
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
