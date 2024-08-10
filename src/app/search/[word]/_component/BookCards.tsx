"use client";

import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import NoImage from "@/assets/img/no-image.png";
import { useCreateBook } from "@/hook/reactQuery/book/useCreateBook";
import { useGetBookInformation } from "@/hook/reactQuery/book/useGetBookInformation";
import {
  BookInfo,
  useGetKakaoResults,
} from "@/hook/reactQuery/search/useGetKakaoResults";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Modal = dynamic(() => import("@/app/components/Modal/Modal"));

const BookCards = () => {
  const [onModal, setOnModal] = useState(false);
  const [toBeUploadedBook, setToBeUploadedBook] = useState<BookInfo>();
  const { mutate } = useCreateBook();
  const params = useSearchParams();
  const router = useRouter();
  const { data: bookData, isLoading } = useGetKakaoResults({
    target: params.get("name")!,
  });

  const onBookClicked = async (data: BookInfo) => {
    const splitedIsbn = data.isbn.split(" ").at(1);
    try {
      if (!splitedIsbn) return;
      const { data } = useGetBookInformation({ isbn: splitedIsbn });
      router.push(`/book/${splitedIsbn}`);
    } catch (error) {
      setToBeUploadedBook(data);
      setOnModal(true);
    }
  };

  const clickedCreating = () => {
    mutate({
      title: toBeUploadedBook?.title!,
      contents: toBeUploadedBook?.contents!,
      isbn: toBeUploadedBook?.isbn.split(" ").at(1)!,
      authors: toBeUploadedBook?.authors!,
      publisher: toBeUploadedBook?.publisher!,
      thumbnail: toBeUploadedBook?.thumbnail!,
      datetime: toBeUploadedBook?.datetime!,
    });

    router.push(`/book/${toBeUploadedBook?.isbn.split(" ").at(1)}`);
  };

  if (isLoading) return <HaveNotData content="관련 도서가" />;

  return (
    <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] px-[5%]">
      {bookData?.documents?.map((data: BookInfo) => (
        <div
          className="w-[263px]"
          key={data.isbn}
          onClick={() => onBookClicked(data)}
        >
          <div className="relative w-full h-[375px] cursor-pointer">
            <Image
              className="border border-[#F4E4CE] rounded-[10px]"
              src={data.thumbnail ?? NoImage}
              alt="책 표지"
              fill
            />
          </div>
          <div className="font-Prentendard font-semibold mt-3 text-[#000] text-[21px] overflow-hidden line-clamp-1">
            {data.title}
          </div>
          <div className="font-Inter font-regular text-lg text-[#656565] overflow-hidden line-clamp-1">
            {data.authors.join(", ")}
          </div>
        </div>
      ))}
      <Modal
        content="존재하지 않는 책이에요! 등록하시겠어요?"
        title="없는 책..."
        onClose={() => setOnModal(false)}
        onConfirm={clickedCreating}
        isOpen={onModal}
      />
    </div>
  );
};

export default BookCards;
