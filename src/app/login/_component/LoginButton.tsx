"use client";

import Link from "next/link";
import KakaoLogin from "@/assets/img/kakao-login.png";
import Image from "next/image";

const Button = () => {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_SERVER}/v1/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/oauth/redirected/kakao`}
    >
      <Image src={KakaoLogin} width={250} height={150} alt="카카오 버튼" />
    </Link>
  );
};

export default Button;
