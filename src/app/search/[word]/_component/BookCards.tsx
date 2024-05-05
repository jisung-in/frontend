"use client";

import { BookMain } from "@/app/components/Book/Book";
import { useGetKakaoResults } from "@/hook/reactQuery/search/useGetKakaoResults";
import { useRouter, useSearchParams } from "next/navigation";

const BookCards = () => {
  const params = useSearchParams();
  const router = useRouter();
  const { data: bookData } = useGetKakaoResults({
    target: params.get("name") ?? "",
  });

  const onBookClicked = (isbn: string) => {
    const splitedIsbn = isbn.split(" ").at(1);
    router.push(`/book/${splitedIsbn}`);
  };

  return (
    <>
      {(bookData as any)?.documents?.map((data: any) => (
        <BookMain key={data.isbn}>
          <BookMain.BookCover className="h-[300px]">
            <img
              src={data.thumbnail}
              className="w-full h-[300px] max-w-[260px]"
              alt="bookImage"
              // onClick={() => onBookClicked(data.isbn)}
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
