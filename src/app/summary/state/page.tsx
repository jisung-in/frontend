"use client";

import MyBookCard from "@/app/components/Card/MyInfoCard/MyBookCard";
import { useMyStarRate } from "@/hook/reactQuery/my/useMyStarRate";

const StatePage = () => {
  const { data: stateData } = useMyStarRate();
  return (
    <div className="grid grid-cols-5 gap-[20px] w-[80%]">
      {stateData?.map((book: any) => (
        <MyBookCard
          postId={book.postId}
          title={book.title}
          image={book.image}
          starRate={book.starRate}
        />
      ))}
    </div>
  );
};

export default StatePage;
