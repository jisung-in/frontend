"use client";
import MyBookCard from "@/app/components/Card/MyInfoCard/MyBookCard";
import { useGetMyStarRate } from "@/hook/reactQuery/my/useGetMyStarRate";

const PopularBook = () => {
  const { data: stateData } = useGetMyStarRate();

  return (
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
  );
};

export default PopularBook;
