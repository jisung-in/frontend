"use client";

import MyBookCard from "@/app/components/Card/MyInfoCard/MyBookCard";
import { useGetKakaoResults } from "@/hook/reactQuery/search/useGetKakaoResults";
import { useSearchParams } from "next/navigation";

const BookCards = () => {
  const params = useSearchParams();
  const { data: bookData } = useGetKakaoResults({
    target: params.get("name") ?? "",
  });

  console.log(bookData);
  return (
    <>
      {(bookData as any)?.documents?.map((data: any) => (
        <MyBookCard
          key={data.isbn}
          title={data.title}
          image={data.thumbnail}
          starRate={"★★★★"}
        />
      ))}
    </>
  );
};

export default BookCards;
