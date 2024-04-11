"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();
  return (
    <Link
      href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${encodeURIComponent("http://localhost:3000/oauth2/token")}`}
    >
      <button className="border-2 p-2">카카오 로그인</button>
    </Link>
  );
};

export default Button;
