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
import HaveNotData from "./components/HaveNotData/HaveNotData";
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
        {popularData &&
        Array.isArray(popularData.response.queryResponse) &&
        popularData.response.queryResponse.length > 0 ? (
          <div className="flex flex-row flex-wrap gap-x-[21px] gap-y-[21px]">
            {popularData.response.queryResponse.map((data: TalkRoom) => (
              <TalkRoomCard key={data.id} data={data} isBest={true} />
            ))}
          </div>
        ) : (
          <HaveNotData content={"인기있는 토크방이"} />
        )}
      </div>
      <div className="bg-[#FBF7F0] py-[1px]">
        <div className="my-[55px] ml-[120px]">
          <ThemeMain.MainTheme>
            <div className="flex mb-7">
              <div className="flex gap-x-3 grow items-center">
                <div>베스트 셀러</div>
                <BestSeller />
              </div>
            </div>
          </ThemeMain.MainTheme>
          {bookRankData &&
          Array.isArray(bookRankData) &&
          bookRankData.length > 0 ? (
            <Swiper data={bookRankData} slidesPerView={5} />
          ) : (
            <HaveNotData content={"베스트 셀러가"} />
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
        {recentData &&
        Array.isArray(recentData.response.queryResponse) &&
        recentData.response.queryResponse.length > 0 ? (
          <div className="flex flex-row flex-wrap gap-x-[18px] gap-y-[18px]">
            {recentData.response.queryResponse.map((data: TalkRoom) => (
              <TalkRoomCard key={data.id} data={data} isBest={false} />
            ))}
          </div>
        ) : (
          <HaveNotData content={"최근 생성된 토크방이"} />
        )}
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
          {talkRoomManyBookData &&
          Array.isArray(talkRoomManyBookData) &&
          talkRoomManyBookData.length > 0 ? (
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
