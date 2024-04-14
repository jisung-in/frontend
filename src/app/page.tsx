"use client";

import BestSeller from "@/assets/img/best-seller.svg";
import ManyTalkRoomBook from "@/assets/img/many-talk-room-book.svg";
import PopularTalkRoom from "@/assets/img/popular-talk-room.svg";
import RecommendTalkRoom from "@/assets/img/recommend-talk-room.svg";
import Link from "next/link";
import { books, recommend, talkRoom } from "../../public/data.json";
import { Book, Recommend, TalkRoom } from "../../public/dataType";
import MainCard from "./components/Card/MainCard";
import ManyTalkRoomBookCard from "./components/Card/MainPageCard/ManyTalkRoomBookCard/ManyTalkRoomBookCard";
import Swiper from "./components/Swiper/Swiper";
import { ThemeMain } from "./components/Theme/Theme";

const page = () => {
  const data: Book[] = books;
  const dataRecommend: Recommend[] = recommend;
  const dataTalkRoom: TalkRoom[] = talkRoom;

  return (
    <div className="bg-[#FFF]">
      <div className="mt-[51px] ml-[115px]">
        <div className="mb-7">
          <ThemeMain>
            <ThemeMain.MainTheme>
              <div className="flex gap-x-3 grow items-center">
                <div>인기있는 토크방</div>
                <PopularTalkRoom />
              </div>
            </ThemeMain.MainTheme>
            <ThemeMain.Show>
              <Link href={"/talkroom"}>전체보기 {">"}</Link>
            </ThemeMain.Show>
          </ThemeMain>
        </div>
        <div className="flex flex-row flex-wrap gap-x-[21px] gap-y-[21px]">
          {dataTalkRoom.map((talkRoomData) => (
            <MainCard data={talkRoomData} />
          ))}
        </div>
      </div>

      <div className="mt-[51px] ml-[120px]">
        <ThemeMain.MainTheme>
          <div className="flex mb-7">
            <div className="flex  gap-x-3 grow items-center">
              <div>추천 토크방</div>
              <RecommendTalkRoom />
            </div>
          </div>
        </ThemeMain.MainTheme>

        <Swiper data={dataRecommend} slidesPerView={5} />
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
          <Swiper data={data} slidesPerView={6} />
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
        </ThemeMain>
        <div className="flex flex-row flex-wrap gap-x-[18px] gap-y-[18px]">
          {dataTalkRoom.map((talkRoomData) => (
            <MainCard data={talkRoomData} />
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
            {new Array(14).fill(1).map((index: number) => (
              <ManyTalkRoomBookCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
