"use client";

import { Button } from "@/app/components/Button/Button";
import {
  BookInfo,
  useGetKakaoResults,
} from "@/hook/reactQuery/search/useGetKakaoResults";
import { useRouter } from "next/navigation";
type Props = {
  value: string;
  handleChange: any;
  setBookInfo: any;
};

const SearchedList = ({ value, handleChange, setBookInfo }: Props) => {
  const { data: kakaoResult } = useGetKakaoResults({ target: value });
  const router = useRouter();

  const onListClicked = (book: BookInfo) => {
    handleChange((prev: any) => ({ onClose: false, value: book.title }));
    setBookInfo(book);
  };

  return (
    <div className="absolute flex flex-col w-full shadow-md top-[50px] bg-[#F5F5F7] rounded-md p-4 gap-[10px]">
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
          <li key={book.isbn} onClick={() => onListClicked(book)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchedList;
