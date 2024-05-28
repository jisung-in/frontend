"use client";
import MyBookCard from "@/app/components/Card/MyInfoCard/MyBookCard";
import Dropdown from "@/app/components/DropDown/DropDown";
import { useGetMyStar } from "@/hook/reactQuery/my/useGetMyStars";
import { useState } from "react";

const filterList: string[] = [
  "5 점",
  "4.5 점",
  "3.5 점",
  "3.0 점",
  "2.5 점",
  "2.0 점",
  "1.5 점",
  "1.0 점",
];

const StarPage = () => {
  const [starFilter, setStartFilter] = useState("별점 순");
  const { data: starData } = useGetMyStar({ order: starFilter.split(" ")[0] });
  console.log(starFilter.split(" ")[0]);

  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex w-full justify-end pr-[10%] pb-[10px]">
        <Dropdown
          items={filterList}
          selectedItem={starFilter}
          setSelectedItem={setStartFilter}
        />
      </div>
      <div className="grid grid-cols-6 gap-[20px] w-[90%]">
        {/* {(starData as any)?.map((book: MyStarRateRequest) => (
          <MyBookCard
            postId={book.postId}
            title={book.title}
            image={book.image}
            starRate={book.starRate}
          />
        ))} */}
      </div>
    </div>
  );
};

export default StarPage;
