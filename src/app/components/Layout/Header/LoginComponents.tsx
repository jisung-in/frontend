"use client";
import { Button } from "../../Button/Button";
import React from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/hook/useLogin";

export const LoginComponent = () => {
  const router = useRouter();
  const { isLoggedIn } = useLogin();
  return (
    <div className="w-[100px] sm:w-[50px]">
      {isLoggedIn ? (
        <img
          alt="프로필"
          src={localStorage.getItem("userImage") ?? ""}
          className="rounded-[50%] w-[50px] h-[50px] cursor-pointer"
          onClick={() => router.push("/my")}
        />
      ) : (
        <Button height="md" onClick={() => router.push("/login")}>
          로그인
        </Button>
      )}
    </div>
  );
};
