"use client";
import { useInput } from "@/hook/useInput";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { useRouter } from "next/navigation";

export const Header = () => {
  const { value, handleChange, reset } = useInput("");
  const router = useRouter();

  return (
    <div className="flex sticky z-20 top-0 items-center w-full px-[7%] h-[85px] bg-brown-60">
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
        <div className="w-[100px]">
          <Button
            variant="ivory"
            height="md"
            onClick={() =>
              router.push(
                "https://kauth.kakao.com/oauth/authorize?client_id={REST_API_KEY}&redirect_uri={REDIRECT_URI}&response_type=code",
              )
            }
          >
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
};
