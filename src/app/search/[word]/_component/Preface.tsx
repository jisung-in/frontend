"use client";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";
import { TabContext } from "./TabProvider";

const index: { [key: string]: string } = { talkRoom: "토크방", book: "도서" };

const Preface = () => {
  const params = useSearchParams();
  const { tab } = useContext(TabContext);
  const word = params.get("name");
  return (
    <div className="flex flex-col gap-[20px]">
      <span className="text-[30px] font-bold">검색 결과</span>
      <span className="text-[20px] text-gray-50">
        {word}의 {index[tab]} 정보입니다.
      </span>
    </div>
  );
};

export default Preface;
