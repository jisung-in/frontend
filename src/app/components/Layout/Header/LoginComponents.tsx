"use client";
import { Button } from "../../Button/Button";
import React from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/hook/useLogin";
import { useGetMemberData } from "@/hook/reactQuery/auth/useGetMemberData";
import Image from "next/image";

export const LoginComponent = () => {
  const router = useRouter();
  const { data: userData } = useGetMemberData();
  const { isLoggedIn } = useLogin();

  return (
    <div className="w-[100px] sm:w-[50px]">
      {userData && isLoggedIn ? (
        <Image
          alt="프로필"
          src={userData?.data.userImage ?? "/img/profile.png"}
          className="rounded-[50%] w-[50px] h-[50px] cursor-pointer"
          width={50}
          height={50}
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
