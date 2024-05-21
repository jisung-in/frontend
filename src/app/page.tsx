"use client";

import BestSeller from "@/assets/img/best-seller.svg";
import ManyTalkRoomBook from "@/assets/img/many-talk-room-book.svg";
import PopularTalkRoom from "@/assets/img/popular-talk-room.svg";
import RecentTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import { useGetBookRank } from "@/hook/reactQuery/book/useGetBookRank";
import { useGetRoomBookOrder } from "@/hook/reactQuery/talkRoom/useGetRoomBookOrder";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import Link from "next/link";
import ManyTalkRoomBookCard from "./components/Card/MainPageCard/ManyTalkRoomBookCard";
import TalkRoomCard from "./components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "./components/HaveNotData/HaveNotData";
import ResizeImage from "./components/ResizeImage/ResizeImage";
import Swiper from "./components/Swiper/Swiper";
import { ThemeMain } from "./components/Theme/Theme";

type TalkRoom = {
  id: number;
  profileImage: string;
  username: string;
  title: string;
  content: string;
  bookName: string;
  bookAuthor: string;
  bookThumbnail: string;
  likeCount: number;
  readingStatuses: string[];
  registeredDateTime: string;
};

type TalkRoomBookOrder = {
  isbn: string;
  title: string;
  publisher: string;
  thumbnail: string;
  authors: string[];
  dateTime: string;
};

const page = () => {
  const { data: popularData } = useGetRooms({
    page: 1,
    size: 4,
    order: "recommend",
    search: "",
    sortbydate: "",
  });
  const { data: recentData } = useGetRooms({
    page: 1,
    size: 4,
    order: "recent",
    search: "",
    sortbydate: "",
  });
  const { data: bookRankData } = useGetBookRank();
  const { data: talkRoomManyBookData } = useGetRoomBookOrder({
    page: 1,
    size: 12,
    order: "comment",
  });
  return (
    <div className="bg-[#FFF] w-full">
      <div
        className="
        sm:mt-[25px]
        md:mt-[34px]
        lg:mt-[40px]
        xl:mt-[48px]
        xl2:mt-[56px] 
        sm:px-[16px]
        md:px-[42px]
        lg:px-[68px]
        xl:px-[89px]
        xl2:px-[120px]
        sm:mb-[25px]
        md:mb-[36px]
        lg:mb-[48px]
        xl:mb-[60px]
        xl2:mb-[72px]"
      >
        <div
          className="
          sm:mb-[17px]
          md:mb-[19px]
          lg:mb-[22px]
          xl:mb-[24px]
          xl2:mb-[26px]"
        >
          <ThemeMain>
            <ThemeMain.MainTheme>
              <div
                className="
                flex grow items-center 
                sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 xl2:gap-x-3"
              >
                <div>인기있는 토크방</div>
                <ResizeImage src={PopularTalkRoom} alt="인기있는 토크방" />
              </div>
            </ThemeMain.MainTheme>
            <ThemeMain.Show>
              <Link href={"/talkroom/?order=recommend&sortbydate=&page=1"}>
                <div className="w-full">전체보기 {">"}</div>
              </Link>
            </ThemeMain.Show>
          </ThemeMain>
        </div>
        {popularData && popularData.response.queryResponse.length > 0 ? (
          <div className="flex flex-row xl2:gap-x-[20px]">
            {popularData.response.queryResponse.map((data: TalkRoom) => {
              const isLike = popularData.userLikeTalkRoomIds.includes(data.id);
              return (
                <TalkRoomCard
                  key={data.id}
                  data={data}
                  isBest={true}
                  isLike={isLike}
                />
              );
            })}
          </div>
        ) : (
          <HaveNotData content={"인기있는 토크방이"} />
        )}
      </div>
      <div className="bg-[#FBF7F0] py-[1px]">
        <div
          className="
            sm:my-[26px] 
            md:my-[34px]
            lg:my-[42px]
            xl:my-[48px]
            xl2:my-[56px]
            sm:px-[16px]
            md:px-[42px]
            lg:px-[68px]
            xl:px-[89px]
            xl2:px-[120px]
            "
        >
          <ThemeMain.MainTheme>
            <div
              className="flex
              sm:mb-[15px] md:mb-[17px] lg:mb-[19px] xl:mb-[19px] xl2:mb-[21px]"
            >
              <div
                className="
                flex grow items-center
                sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 xl2:gap-x-3 "
              >
                <div>베스트 셀러</div>
                <ResizeImage src={BestSeller} alt="베스트 셀러" />
              </div>
            </div>
          </ThemeMain.MainTheme>
          {bookRankData && bookRankData.length > 0 ? (
            <Swiper data={bookRankData} />
          ) : (
            <HaveNotData content={"베스트 셀러가"} />
          )}
        </div>
      </div>
      <div
        className="
        sm:my-[26px] 
        md:my-[34px]
        lg:my-[42px]
        xl:my-[48px]
        xl2:my-[56px]
        sm:px-[16px]
        md:px-[42px]
        lg:px-[68px]
        xl:px-[89px]
        xl2:px-[120px]"
      >
        <div
          className="
          sm:mb-[17px]
          md:mb-[19px]
          lg:mb-[22px]
          xl:mb-[24px]
          xl2:mb-[26px]"
        >
          <ThemeMain>
            <ThemeMain.MainTheme>
              <div
                className="flex grow items-center
                sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 xl2:gap-x-3"
              >
                <div>최근 생성된 토크방</div>
                <ResizeImage src={RecentTalkRoom} alt="최근 생성된 토크방" />
              </div>
            </ThemeMain.MainTheme>
            <ThemeMain.Show>
              <Link href={"/talkroom/?order=recent&page=1"}>
                <div className="w-full">전체보기 {">"}</div>
              </Link>
            </ThemeMain.Show>
          </ThemeMain>
        </div>
        {recentData && recentData.response.queryResponse.length > 0 ? (
          <div className="flex flex-row xl2:gap-x-[20px]">
            {recentData.response.queryResponse.map((data: TalkRoom) => {
              const isLike = recentData.userLikeTalkRoomIds.includes(data.id);
              return (
                <TalkRoomCard
                  key={data.id}
                  data={data}
                  isBest={true}
                  isLike={isLike}
                />
              );
            })}
          </div>
        ) : (
          <HaveNotData content={"최근 생성된 토크방이"} />
        )}
      </div>
      <div
        className="bg-[#FBF7F0] pt-[1px] 
        sm:pb-[17px]
        md:pb-[28px]
        lg:pb-[38px]
        xl:pb-[48px]
        xl2:pb-[56px]"
      >
        <div
          className="            
          sm:mt-[26px] 
          md:mt-[34px]
          lg:mt-[42px]
          xl:mt-[48px]
          xl2:mt-[56px]
          sm:px-[16px]
          md:px-[42px]
          lg:px-[68px]
          xl:px-[89px]
          xl2:px-[120px]"
        >
          <ThemeMain>
            <ThemeMain.MainTheme>
              <div
                className="
                flex items-center
                sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 xl2:gap-x-3
                sm:mb-[17px]
                md:mb-[19px]
                lg:mb-[22px]
                xl:mb-[24px]
                xl2:mb-[26px]"
              >
                <div>토크 많은 책</div>
                <ResizeImage src={ManyTalkRoomBook} alt="토크 많은 책" />
              </div>
            </ThemeMain.MainTheme>
          </ThemeMain>
          {talkRoomManyBookData && talkRoomManyBookData.length > 0 ? (
            <div
              className="flex flew-row flex-wrap 
              sm:gap-x-[9px] sm:gap-y-[10px]
              md:gap-x-[12px] md:gap-y-[15px]
              lg:gap-x-[14px] lg:gap-y-[20px]
              xl:gap-x-[17px] xl:gap-y-[24px]
              xl2:gap-x-[19px] xl2:gap-y-[27px]
            "
            >
              {talkRoomManyBookData.map((data: TalkRoomBookOrder) => (
                <Link key={data.isbn} href={`/book/${data.isbn}`}>
                  <ManyTalkRoomBookCard data={data} />
                </Link>
              ))}
            </div>
          ) : (
            <HaveNotData content={"토크 많은 책이"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
