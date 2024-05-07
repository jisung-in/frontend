"use client";

import Dropdown from "@/app/components/DropDown/DropDown";
import { useGetMyState } from "@/hook/reactQuery/my/useGetMyState";
import { useState } from "react";

const readFilterList: string[] = ["가나다 순", "평균 별점 높은 순"];
const letterOrStarRateList: string[] = [
  "읽고 싶은",
  "읽는 중",
  "읽은",
  "잠시 멈춘",
  "중단",
];

const StatePage = () => {
  const { data: stateData } = useGetMyState();
  const [filter, setFilter] = useState("가나다 순");
  const [letterOrStarRateFilter, setLetterOrStarRateFilter] =
    useState("읽고 싶은");

  return (
    <main className="flex flex-col justify-center items-center w-full">
      <div className="flex w-full justify-between pl-[10%] pr-[10%] pb-[10px]">
        <div className="flex items-center font-bold text-[1.5rem] sm:text-[14px] gap-[10px]">
          <span>{"이름"}님의</span>
          <Dropdown
            items={letterOrStarRateList}
            selectedItem={letterOrStarRateFilter}
            setSelectedItem={setLetterOrStarRateFilter}
          />
          <span>목록</span>
        </div>
        <Dropdown
          items={readFilterList}
          selectedItem={filter}
          setSelectedItem={setFilter}
        />
      </div>
      <div className="grid grid-cols-5 gap-[20px] w-[80%]">
        {/* {(stateData as any)?.map((book: any) => (
          <MyBookCard
            postId={book.postId}
            title={book.title}
            image={book.image}
            starRate={book.starRate}
          />
        ))} */}
      </div>
    </main>
  );
};

export default StatePage;
