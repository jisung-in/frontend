"use client";
import MyBookCard from "@/app/components/Card/MyInfoCard/MyBookCard";
import {
  MyStarRateRequest,
  useGetMyStarRate,
} from "@/hook/reactQuery/my/useGetMyStarRate";

const StarPage = () => {
  const { data: starData } = useGetMyStarRate();

  console.log(starData);

  return (
    <div className="grid grid-cols-6 gap-[20px] w-[90%]">
      {(starData as any)?.map((book: MyStarRateRequest) => (
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
