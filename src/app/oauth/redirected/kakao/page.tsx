"use client";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const OAuthTokenPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("code");
  const router = useRouter();

  useEffect(() => {
    if (!token) return;

    const handleOAuthKakao = async (code: string) => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER}/v1/oauth/login/kakao?code=${code}`,
          { withCredentials: true }, // CORS 정책에 따른 쿠키 교환 허용
        );
        console.log(response);
        const cookies = response.headers["Set-Cookie"]; // 응답 헤더에서 'set-cookie' 값을 추출
        console.log(cookies, "받아온 쿠키");
        router.push("/");
      } catch (error) {
        console.log(error);
        router.push("/my");
      }
    };

    handleOAuthKakao(token);
  }, []);

  return <></>;
};

export default OAuthTokenPage;
