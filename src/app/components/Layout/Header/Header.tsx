"use client";
import { useInput } from "@/hook/useInput";
import { Input } from "../../Input/Input";
import { useRouter } from "next/navigation";
import SearchedList from "../../molecules/SearchedList/SearchedList";
import { LoginComponent } from "./LoginComponents";
import useRecentSearches from "@/hook/useRecentSearches";

export const Header = () => {
  const { value, handleChange, reset } = useInput("");
  const router = useRouter();
  const { searches, addSearch, removeSearch } = useRecentSearches();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    addSearch(value);
    reset();
    router.push(`/search/books?name=${value}`);
  };

  return (
    <div className="flex sticky z-20 top-0 items-center w-full px-[5%] bg-white h-[75px] opacity-[0.95] border-b-2">
      <div
        onClick={() => router.push("/")}
        className="flex font-SpoqaHanSansNeo font-[500] items-center text-white text-3xl flex-1"
      >
        <span className="cursor-pointer text-brown-60">JISUNGIN</span>
      </div>
      <div className="flex gap-[46px] items-center sm:hidden">
        <form onSubmit={onSubmit}>
          <div className="relative w-[414px]">
            <Input
              variant="main"
              value={value}
              onChange={handleChange}
              reset={reset}
              placeholder="이곳에 검색해보세요."
            />
            {value.length > 0 && (
              <SearchedList
                value={value}
                reset={reset}
                searches={searches}
                setSearches={addSearch}
                removeSearch={removeSearch}
              />
            )}
          </div>
        </form>
        <LoginComponent />
      </div>
    </div>
  );
};
