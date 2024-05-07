"use client";

import BestSeller from "@/assets/img/best-seller.svg";
import ManyTalkRoomBook from "@/assets/img/many-talk-room-book.svg";
import PopularTalkRoom from "@/assets/img/popular-talk-room.svg";
import { useGetBookRank } from "@/hook/reactQuery/book/useGetBookRank";
import { useGetRoomBookOrder } from "@/hook/reactQuery/talkRoom/useGetRoomBookOrder";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import Link from "next/link";
import ManyTalkRoomBookCard from "./components/Card/MainPageCard/ManyTalkRoomBookCard";
import TalkRoomCard from "./components/Card/MainPageCard/TalkRoomCard";
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
    <div className="bg-[#FFF]">
      <div className="mt-[51px] ml-[115px] mb-[78px]">
        <div className="mb-7">
          <ThemeMain>
            <ThemeMain.MainTheme>
              <div className="flex gap-x-3 grow items-center">
                <div>인기있는 토크방</div>
                <PopularTalkRoom />
              </div>
            </ThemeMain.MainTheme>
            <ThemeMain.Show>
              <Link href={"/talkroom/?order=recommend&sortbydate=&page=1"}>
                전체보기 {">"}
              </Link>
            </ThemeMain.Show>
          </ThemeMain>
        </div>
        <div className="flex flex-row flex-wrap gap-x-[21px] gap-y-[21px]">
          {popularData?.response.queryResponse instanceof Array &&
            popularData?.response.queryResponse.map((data: TalkRoom) => (
              <TalkRoomCard key={data.id} data={data} isBest={true} />
            ))}
        </div>
      </div>
      <div className="bg-[#FBF7F0] pt-[1px]">
        <div className="mt-[55px] ml-[120px]">
          <ThemeMain.MainTheme>
            <div className="flex mb-7">
              <div className="flex gap-x-3 grow items-center">
                <div>베스트 셀러</div>
                <BestSeller />
              </div>
            </div>
          </ThemeMain.MainTheme>
          {bookRankData instanceof Array && (
            <Swiper data={bookRankData} slidesPerView={6} />
          )}
        </div>
      </div>
      <div className="mt-[51px] ml-[120px]">
        <ThemeMain>
          <ThemeMain.MainTheme>
            <div className="flex gap-x-3 grow items-center mb-7">
              <div>최근 생성된 토크방</div>
              <PopularTalkRoom />
            </div>
          </ThemeMain.MainTheme>
          <ThemeMain.Show>
            <Link href={"/talkroom/?order=recent&page=1"}>전체보기 {">"}</Link>
          </ThemeMain.Show>
        </ThemeMain>
        <div className="flex flex-row flex-wrap gap-x-[18px] gap-y-[18px]">
          {recentData?.response.queryResponse instanceof Array &&
            recentData?.response.queryResponse.map((data: TalkRoom) => (
              <TalkRoomCard key={data.id} data={data} isBest={false} />
            ))}
        </div>
      </div>
      <div className="bg-[#FBF7F0] mt-[81px] pt-[1px] pb-[64px]">
        <div className="pt-[77px] ml-[120px]">
          <ThemeMain>
            <ThemeMain.MainTheme>
              <div className="flex gap-x-3 mb-7 items-center">
                <div>토크 많은 책</div>
                <ManyTalkRoomBook />
              </div>
            </ThemeMain.MainTheme>
          </ThemeMain>
          <div className="flex flew-row flex-wrap gap-x-[19px] gap-y-[27px]">
            {talkRoomManyBookData instanceof Array &&
              talkRoomManyBookData?.map((data: TalkRoomBookOrder) => (
                <Link key={data.isbn} href={`/book/${data.isbn}`}>
                  <ManyTalkRoomBookCard data={data} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
