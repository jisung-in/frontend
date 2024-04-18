"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();
  return (
    <Link href={`${process.env.NEXT_PUBLIC_SERVER}/v1/oauth/kakao`}>
      <button className="border-2 p-2">카카오 로그인</button>
    </Link>
  );
};

export default Button;
