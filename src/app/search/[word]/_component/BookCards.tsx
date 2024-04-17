"use client";

import MyBookCard from "@/app/components/Card/MyInfoCard/MyBookCard";
import { useMyStarRate } from "@/hook/reactQuery/my/useMyStarRate";

const BookCards = () => {
  const { data: bookData } = useMyStarRate();
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
