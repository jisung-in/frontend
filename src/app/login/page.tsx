"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const onClick = async () => {
    await signIn("kakao", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <button className="border-2 p-2" onClick={onClick}>
      카카오 로그인
    </button>
  );
}
