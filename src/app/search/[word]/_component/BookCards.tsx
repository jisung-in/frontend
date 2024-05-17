"use client";

import { BookMain } from "@/app/components/Book/Book";
import { useGetKakaoResults } from "@/hook/reactQuery/search/useGetKakaoResults";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import NoImage from "@/assets/img/no-image.png";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";

const BookCards = () => {
  const params = useSearchParams();
  const router = useRouter();
  const { data: bookData, isLoading } = useGetKakaoResults({
    target: params.get("name") ?? "",
  });

  const onBookClicked = (isbn: string) => {
    const splitedIsbn = isbn.split(" ").at(1);
    router.push(`/book/${splitedIsbn}`);
  };

  if (isLoading) return <HaveNotData content="관련 도서가" />;

  return (
    <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] px-[5%]">
      {(bookData as any)?.documents?.map((data: any) => (
        <div className="w-[263px]">
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
    </div>
  );
};

export default BookCards;
