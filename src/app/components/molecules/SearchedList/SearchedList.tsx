"use client";

import { useGetKakaoResults } from "@/hook/reactQuery/search/useGetKakaoResults";
import { Button } from "../../Button/Button";
import { useRouter } from "next/navigation";

type Props = {
  value: string;
  reset: () => void;
  searches: any;
  setSearches: any;
  removeSearch: any;
};

const SearchedList = ({
  value,
  reset,
  setSearches,
  searches,
  removeSearch,
}: Props) => {
  const { data: kakaoResult } = useGetKakaoResults({ target: value });
  const router = useRouter();

  const onListClicked = (book: any) => {
    if (!book.isbn) return;
    router.push(
      `/search/book?name=${book.title ?? book}&isbn=${book.isbn.split(" ").at(1)}`,
    );
    setSearches(book.title ?? book);
    reset();
  };

  const onRecentListClicked = (serach: string) => {
    router.push(`/search/book?name=${serach}}`);
  };

  const onRemoveClicked = (content: string) => {
    removeSearch(content);
  };

  return (
    <div className="absolute flex flex-col w-full shadow-md bg-[#F5F5F7] rounded-md p-4 gap-[10px]">
      <span className="font-bold">최근 검색어</span>
      <ul>
        {searches.map((item: string, index: number) => (
          <li
            key={index}
            className="flex gap-2 cursor-pointer"
            onClick={() => onRecentListClicked(item)}
          >
            {item}{" "}
            <span
              className="cursor-pointer"
              onClick={() => onRemoveClicked(item)}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>

      <span className="font-bold">연관 검색어</span>
      <ul className="flex flex-col gap-[5px]">
        {kakaoResult?.documents?.map((book) => (
          <li
            key={book.isbn}
            onClick={() => onListClicked(book)}
            className="cursor-pointer"
          >
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchedList;
