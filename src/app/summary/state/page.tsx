"use client";

import MyBookCard from "@/app/components/Card/MyInfoCard/MyBookCard";
import Dropdown from "@/app/components/DropDown/DropDown";
import { useGetMyStarRate } from "@/hook/reactQuery/my/useGetMyStarRate";
import { useState } from "react";

const filterList: string[] = ["가나다 순", "평균 별점 높은 순"];

const StatePage = () => {
  const { data: stateData } = useGetMyStarRate();
  const [filter, setFilter] = useState("가나다 순");

  return (
    <main className="flex flex-col justify-center items-center w-full">
      <div className="flex w-full justify-between pl-[10%] pr-[10%] pb-[10px]">
        <div className="flex items-center font-bold text-[1.5rem] gap-[10px]">
          <span>{"이름"}님의</span>
          <Dropdown
            items={filterList}
            selectedItem={filter}
            setSelectedItem={setFilter}
          />
          <span>목록</span>
        </div>
        <Dropdown
          items={filterList}
          selectedItem={filter}
          setSelectedItem={setFilter}
        />
      </div>
      <div className="grid grid-cols-5 gap-[20px] w-[80%]">
        {(stateData as any)?.map((book: any) => (
          <MyBookCard
            postId={book.postId}
            title={book.title}
            image={book.image}
            starRate={book.starRate}
          />
        ))}
      </div>
    </main>
  );
};

export default StatePage;
