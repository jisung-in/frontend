"use client";

import ManyTalkRoomBookCard from "@/app/components/Card/MainPageCard/ManyTalkRoomBookCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import SkeletonManyTalkRoom from "@/app/components/SkeletonUi/SkeletonManyTalkRoom";
import { ThemeMain } from "@/app/components/Theme/Theme";
import ManyTalkRoomBookImg from "@/assets/img/many-talk-room-book.svg";
import { useGetRoomBookOrder } from "@/hook/reactQuery/talkRoom/useGetRoomBookOrder";
import Link from "next/link";

interface TalkRoomBookOrder {
  isbn: string;
  title: string;
  publisher: string;
  thumbnail: string;
  authors: string[];
  dateTime: string;
}

const TalkRoomManyBookRoom = () => {
  const { data, isLoading } = useGetRoomBookOrder({
    page: 1,
    size: 12,
    order: "comment",
  });

  return (
    <div
      className="bg-[#FBF7F0] pt-[1px] 
    sm:pb-[17px]
    md:pb-[28px]
    lg:pb-[38px]
    xl:pb-[48px]
    2xl:pb-[56px]"
    >
      <div
        className="            
      sm:mt-[26px] 
      md:mt-[34px]
      lg:mt-[42px]
      xl:mt-[48px]
      2xl:mt-[56px]
      mx-[5%]"
      >
        <ThemeMain>
          <ThemeMain.MainTheme>
            <p
              className="
            flex items-center
            sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 2xl:gap-x-3
            sm:mb-[17px]
            md:mb-[19px]
            lg:mb-[22px]
            xl:mb-[24px]
            2xl:mb-[26px]"
            >
              <span className="sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                토크 많은 책
              </span>
              <span className="sm:size-4 size-5 2xl:size-6">
                <ManyTalkRoomBookImg />
              </span>
            </p>
          </ThemeMain.MainTheme>
        </ThemeMain>

        {isLoading && <SkeletonManyTalkRoom />}
        {data && data.length > 0 ? (
          <div
            className="
          grid gap-y-3
          sm:grid-cols-3
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
        "
          >
            {data.map((items: TalkRoomBookOrder) => (
              <Link key={items.isbn} href={`/book/${items.isbn}`}>
                <ManyTalkRoomBookCard data={items} />
              </Link>
            ))}
          </div>
        ) : (
          !isLoading && <HaveNotData content={"토크 많은 책이"} />
        )}
      </div>
    </div>
  );
};

export default TalkRoomManyBookRoom;
