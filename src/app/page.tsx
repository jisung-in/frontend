"use client";

import BestSeller from "@/assets/img/best-seller.svg";
import ManyTalkRoomBook from "@/assets/img/many-talk-room-book.svg";
import PopularTalkRoom from "@/assets/img/popular-talk-room.svg";
import RecommendTalkRoom from "@/assets/img/recommend-talk-room.svg";
import Link from "next/link";
import MainCard from "./components/Card/MainCard";
import ManyTalkRoomBookCard from "./components/Card/MainPageCard/ManyTalkRoomBookCard/ManyTalkRoomBookCard";
import PopularTalkRoomCard from "./components/Card/MainPageCard/PopularTalkRoomCard/PopularTalkRoomCard";
import TalkRoomCard from "./components/Card/MainPageCard/TalkRoomCard/TalkRoomCard";
import Swiper from "./components/Swiper/Swiper";
import { ThemeMain } from "./components/Theme/Theme";

const page = () => {
  // swiper 임시 데이터
  interface Book {
    id: number;
    rank: number;
    image: string;
    title: string;
    publisher: string;
    author: string;
    year: number;
  }

  const data: Book[] = [
    {
      id: 1,
      rank: 1,
      image: "",
      title: "책 제목1",
      publisher: "출판사1",
      author: "저자1",
      year: 2024,
    },
    {
      id: 2,
      rank: 2,
      image: "",
      title: "책 제목2",
      publisher: "출판사2",
      author: "저자2",
      year: 2024,
    },
    {
      id: 3,
      rank: 3,
      image: "",
      title: "책 제목3",
      publisher: "출판사2",
      author: "저자3",
      year: 2024,
    },
    {
      id: 4,
      rank: 4,
      image: "",
      title: "책 제목4",
      publisher: "출판사4",
      author: "저자4",
      year: 2024,
    },
    {
      id: 5,
      rank: 5,
      image: "",
      title: "책 제목5",
      publisher: "출판사5",
      author: "저자5",
      year: 2024,
    },
    {
      id: 6,
      rank: 6,
      image: "",
      title: "책 제목6",
      publisher: "출판사6",
      author: "저자6",
      year: 2024,
    },
  ];

  const BestSellerData = data.map((item) => {
    return {
      id: item.id,
      rank: item.rank,
      image: item.image,
      title: item.title,
      publisher: item.publisher,
      author: item.author,
      year: item.year,
    };
  });
  const RecentlyRegisterData = data.map((item) => {
    return {
      id: item.id,
      image: item.image,
      title: item.title,
      publisher: item.publisher,
      author: item.author,
      year: item.year,
    };
  });

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
          {new Array(4).fill(1).map((index: number) => (
            <MainCard key={index} />
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

        <div className="flex flex-row flex-wrap gap-x-5 gap-y-5">
          {new Array(5).fill(1).map((index: number) => (
            <TalkRoomCard key={index} />
          ))}
        </div>
      </div>

      <div className="bg-[#FBF7F0] mt-[81px] pt-[1px] pb-[69px]">
        <div className="mt-[55px] ml-[120px]">
          <ThemeMain.MainTheme>
            <div className="flex mb-7">
              <div className="flex gap-x-3 grow items-center">
                <div>베스트 셀러</div>
                <BestSeller />
              </div>
            </div>
          </ThemeMain.MainTheme>
          <Swiper data={BestSellerData} />
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
          {new Array(4).fill(1).map((index: number) => (
            <PopularTalkRoomCard key={index} />
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
