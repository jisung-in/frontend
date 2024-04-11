"use client";
import { Button } from "../../Button/Button";
import React from "react";
import { useRouter } from "next/navigation";

export const LoginComponent = () => {
  const router = useRouter();
  return (
    <div className="w-[100px]">
      {/* {me?.user ? (
        <img
          alt="프로필"
          src={me?.user?.image!}
          className="rounded-[50%] w-[50px] h-[50px]"
          onClick={() => router.push("/my")}
        />
      ) : ( */}
      <Button variant="ivory" height="md" onClick={() => router.push("/login")}>
        로그인
      </Button>
      {/* )} */}
    </div>
  );
};
