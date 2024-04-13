"use client";
import MyBookCard from "@/app/components/Card/MyInfoCard/MyBookCard";
import { useMyStarRate } from "@/hook/reactQuery/my/useMyStarRate";

const StarPage = () => {
  const { data: starData } = useMyStarRate();
  return (
    <div className="grid grid-cols-6 gap-[20px] w-[90%]">
      {starData?.map((book: any) => (
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

export default StarPage;
