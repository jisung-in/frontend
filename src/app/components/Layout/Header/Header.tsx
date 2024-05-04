"use client";
import { useInput } from "@/hook/useInput";
import { Input } from "../../Input/Input";
import { useRouter } from "next/navigation";
import SearchedList from "../../molecules/SearchedList/SearchedList";
import { LoginComponent } from "./LoginComponents";

export const Header = () => {
  const { value, handleChange, reset } = useInput("");
  const router = useRouter();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    reset();
    router.push(`/search/books?name=${value}`);
  };

  return (
    <div className="flex sticky z-20 top-0 items-center w-full px-[5%] h-[85px] bg-brown-60">
      <div
        onClick={() => router.push("/")}
        className="flex font-SpoqaHanSansNeo font-[500] items-center text-white text-4xl flex-1"
      >
        <span className="cursor-pointer">JISUNGIN</span>
      </div>
      <div className="flex gap-[46px] items-center sm:hidden">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="relative w-[414px]">
            <Input
              value={value}
              onChange={handleChange}
              reset={reset}
              placeholder="이곳에 검색해보세요."
            />
            {value.length > 0 && <SearchedList value={value} reset={reset} />}
          </div>
        </form>
        <LoginComponent />
      </div>
    </div>
  );
};
