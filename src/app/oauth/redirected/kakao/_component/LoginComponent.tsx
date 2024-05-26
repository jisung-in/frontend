"use client";

import axiosInstance from "@/app/api/requestApi";
import { useLogin } from "@/hook/useLogin";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const LoginComponent = () => {
  const router = useRouter();
  const isLoggedin = useSelector((state: RootState) => state.loggedin.state);
  const { handleLogin } = useLogin();
  useEffect(() => {
    const handleOAuthKakao = async () => {
      try {
        const memeberData = await axiosInstance
          .get(`${process.env.NEXT_PUBLIC_SERVER}/v1/users/me`, {
            withCredentials: true,
          })
          .then((res) => res.data);
        console.log(isLoggedin);
        handleLogin("temp_token"); // 추후 토큰 방식으로 변경 되었을 때...
        localStorage.setItem("userName", memeberData.userName);
        localStorage.setItem("userImage", memeberData.userImage);
        router.replace("/");
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
