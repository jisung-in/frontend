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
      <div className="mt-[51px] px-[5%] mb-[78px]">
        <div className="mb-7">
          <ThemeMain>
            <ThemeMain.MainTheme>
              <div className="flex gap-x-3 grow items-center">
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
          <div className="flex flex-row flex-wrap gap-x-[21px] gap-y-[21px]">
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
        <div className="sm:my-[26px] md:my-[33px] lg:my-[40px] xl:my-[48px] xl2:my-[55px] px-[5%]">
          <ThemeMain.MainTheme>
            <div className="flex sm:mb-[15px] md:mb-[17px] lg:mb-[19px] xl:mb-[19px] xl2:mb-[21px]">
              <div className="flex sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 xl2:gap-x-3 grow items-center">
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
      <div className="mt-[51px] px-[5%]">
        <div className=" mb-7">
          <ThemeMain>
            <ThemeMain.MainTheme>
              <div className="flex gap-x-3 grow items-center">
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
          <div className="flex flex-row flex-wrap gap-x-[18px] gap-y-[18px]">
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
      <div className="bg-[#FBF7F0] mt-[81px] pt-[1px] pb-[64px]">
        <div className="pt-[77px] px-[5%]">
          <ThemeMain>
            <ThemeMain.MainTheme>
              <div className="flex gap-x-3 mb-7 items-center">
                <div>토크 많은 책</div>
                <ResizeImage src={ManyTalkRoomBook} alt="토크 많은 책" />
              </div>
            </ThemeMain.MainTheme>
          </ThemeMain>
          {talkRoomManyBookData && talkRoomManyBookData.length > 0 ? (
            <div className="flex flew-row flex-wrap gap-x-[19px] gap-y-[27px]">
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
