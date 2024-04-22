"use client";

import { useGetKakaoResults } from "@/hook/reactQuery/search/useGetKakaoResults";
import { Button } from "../../Button/Button";
import { useRouter } from "next/navigation";

type Props = {
  value: string;
  reset: () => void;
};

const SearchedList = ({ value, reset }: Props) => {
  const { data: kakaoResult } = useGetKakaoResults({ target: value });
  const router = useRouter();

  const onListClicked = (title: string) => {
    router.push(`/search/book?name=${title}`);
    reset();
  };

  return (
    <div className="absolute flex flex-col w-full bg-[#F5F5F7] rounded-md p-4 gap-[10px]">
      <span className="font-bold">인기 검색어</span>
      <div className="flex w-full gap-[3%]">
        <div className="max-w-[70px]">
          <Button variant="ivory" height="sm">
            키워드
          </Button>
        </div>
        <div className="max-w-[70px]">
          <Button variant="ivory" height="sm">
            키워드
          </Button>
        </div>
        <div className="max-w-[70px]">
          <Button variant="ivory" height="sm">
            키워드
          </Button>
        </div>
      </div>
      <span className="font-bold">최근 검색어</span>

      <span className="font-bold">연관 검색어</span>
      <ul className="flex flex-col gap-[5px]">
        {kakaoResult?.documents?.map((book) => (
          <li key={book.isbn} onClick={() => onListClicked(book.title)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchedList;
