"use client";

import MyBookCard from "@/app/components/Card/MyInfoCard/MyBookCard";
import { useGetMyStarRate } from "@/hook/reactQuery/my/useGetMyStarRate";

const BookCards = () => {
  const { data: bookData } = useGetMyStarRate();
  console.log(bookData);
  return (
    <>
      {bookData?.map((data: any) => (
        <MyBookCard
          key={data.postId}
          title={data.title}
          image={data.image}
          starRate={data.starRate}
        />
      ))}
    </>
  );
};

export default BookCards;
