"use client";
import MyBookCard from "@/app/components/Card/MyInfoCard/MyBookCard";
import { useGetMyStarRate } from "@/hook/reactQuery/my/useGetMyStarRate";

const StarPage = () => {
  const { data: starData } = useGetMyStarRate();
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
