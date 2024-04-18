"use client";

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const LoginComponent = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const router = useRouter();

  useEffect(() => {
    const handleOAuthKakao = async () => {
      if (!code) return;
      console.log("hi");
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER}/v1/oauth/login/kakao?code=${code}`,
          { withCredentials: true },
        );
        router.push("/");
      } catch (error) {
        console.log(error);
        router.push("/my");
      }
    };

    handleOAuthKakao();
  }, []);

  return <></>;
};

export default LoginComponent;
