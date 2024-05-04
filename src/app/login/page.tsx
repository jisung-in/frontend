import LoginButton from "./_component/LoginButton";
import LoginImage from "@/assets/img/login.webp";
import Image from "next/image";

export default async function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-[80dvh] p-2">
      <div className="flex flex-col items-center justify-center bg-white border-4 p-4 rounded-xl w-[700px] h-[450px] gap-6">
        <Image src={LoginImage} width={200} height={200} alt="로그인 이미지" />
        <LoginButton />
      </div>
    </div>
  );
}
