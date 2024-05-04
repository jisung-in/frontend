"use client";

import { BookMain } from "@/app/components/Book/Book";
import { useGetKakaoResults } from "@/hook/reactQuery/search/useGetKakaoResults";
import { useSearchParams } from "next/navigation";

const BookCards = () => {
  const params = useSearchParams();
  const { data: bookData } = useGetKakaoResults({
    target: params.get("name") ?? "",
  });

  return (
    <>
      {(bookData as any)?.documents?.map((data: any) => (
        <BookMain key={data.isbn}>
          <BookMain.BookCover className="h-[300px]">
            <img
              src={data.thumbnail}
              className="w-full h-[300px] max-w-[260px]"
              alt="bookImage"
            />
          </BookMain.BookCover>
          <BookMain.BookTitle>{data.title}</BookMain.BookTitle>
          <BookMain.Publisher>{data.publisher}</BookMain.Publisher>
          <BookMain.Author>{data.authors.join(", ")}</BookMain.Author>
          <BookMain.Year>{data.datetime.slice(0, 4)}</BookMain.Year>
        </BookMain>
      ))}
    </>
  );
};

export default BookCards;
