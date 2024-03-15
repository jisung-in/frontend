"use client";
import { useInput } from "@/hook/useInput";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";

export const Header = () => {
  const { value, handleChange, reset } = useInput("");

  return (
    <div className="flex fixed top-0 items-center w-full px-[28px] h-[85px] bg-brown-60">
      <div className="flex font-GmarketSans font-[500] items-center text-white text-4xl flex-1">
        JISUNGIN
      </div>
      <div className="w-[414px]">
        <Input
          value={value}
          onChange={handleChange}
          reset={reset}
          placeholder="이곳에 검색해보세요."
        />
      </div>
      <div className="flex">
        <div className="w-[100px]">
          <Button variant="none">로그인</Button>
        </div>
        <div className="w-[100px]">
          <Button variant="none">회원가입</Button>
        </div>
      </div>
    </div>
  );
};
