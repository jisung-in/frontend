"use client";

import MyBookCard from "@/app/components/Card/MyInfoCard/MyBookCard";
import Dropdown from "@/app/components/DropDown/DropDown";
import { useGetMyState } from "@/hook/reactQuery/my/useGetMyState";
import { useRouter } from "next/navigation";
import { useState } from "react";

type LetterOrStarRateListKey =
  | "읽고 싶은"
  | "읽는 중"
  | "읽은"
  | "잠시 멈춘"
  | "중단"
  | "가나다 순";

type readFilterListKey = "가나다 순" | "평균 별점 높은 순";

const readFilterList: Record<readFilterListKey, string> = {
  "가나다 순": "dictionary",
  "평균 별점 높은 순": "rating_avg_desc",
};
const letterOrStarRateList: Record<LetterOrStarRateListKey, string> = {
  "읽고 싶은": "want",
  "읽는 중": "reading",
  읽은: "done",
  "잠시 멈춘": "pause",
  중단: "stop",
  "가나다 순": "none",
};

const StatePage = () => {
  const router = useRouter();
  const [filter, setFilter] = useState<readFilterListKey>("가나다 순");
  const [letterOrStarRateFilter, setLetterOrStarRateFilter] =
    useState<LetterOrStarRateListKey>("읽고 싶은");

  const { data: stateData } = useGetMyState({
    status: letterOrStarRateList[letterOrStarRateFilter],
    order: readFilterList[filter],
  });

  console.log(stateData);

  return (
    <main className="flex flex-col justify-center items-center w-full">
      <div className="flex w-full justify-between pl-[10%] pr-[10%] pb-[10px]">
        <div className="flex items-center font-bold text-[1.5rem] sm:text-[14px] gap-[10px]">
          <span>{"이름"}님의</span>
          <Dropdown
            items={Object.keys(letterOrStarRateList)}
            selectedItem={letterOrStarRateFilter}
            setSelectedItem={setLetterOrStarRateFilter}
          />
          <span>목록</span>
        </div>
        <Dropdown
          items={Object.keys(readFilterList)}
          selectedItem={filter}
          setSelectedItem={setFilter}
        />
      </div>
      <div className="grid grid-cols-5 gap-[20px] w-[80%]">
        {stateData?.data.queryResponse.map((book: any) => (
          <MyBookCard
            key={book.isbn}
            postId={book.postId}
            title={book.bookTitle}
            image={book.bookImage}
            starRate={book.starRate}
            onClick={() => router.push(`/book/${book.isbn}`)}
          />
        ))}
      </div>
    </main>
  );
};

export default StatePage;
