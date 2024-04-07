"use client";
import { useInput } from "@/hook/useInput";
import { Input } from "../../Input/Input";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { LoginComponent } from "./LoginComponents";

export const Header = () => {
  const { value, handleChange, reset } = useInput("");
  const router = useRouter();
  const { data: me } = useSession();
  return (
    <div className="flex sticky z-20 top-0 items-center w-full px-[5%] h-[85px] bg-brown-60">
      <div
        onClick={() => router.push("/")}
        className="flex font-SpoqaHanSansNeo font-[500] items-center text-white text-4xl flex-1"
      >
        <span className="cursor-pointer">JISUNGIN</span>
      </div>
      <div className="flex gap-[46px] items-center">
        <div className="w-[414px]">
          <Input
            value={value}
            onChange={handleChange}
            reset={reset}
            placeholder="이곳에 검색해보세요."
          />
        </div>
        <LoginComponent me={me} />
      </div>
    </div>
  );
};
