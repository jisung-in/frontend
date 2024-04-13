"use client";

import BestSeller from "@/assets/img/best-seller.svg";
import ManyTalkRoomBook from "@/assets/img/many-talk-room-book.svg";
import PopularTalkRoom from "@/assets/img/popular-talk-room.svg";
import RecommendTalkRoom from "@/assets/img/recommend-talk-room.svg";
import Link from "next/link";
import MainCard from "./components/Card/MainCard";
import ManyTalkRoomBookCard from "./components/Card/MainPageCard/ManyTalkRoomBookCard/ManyTalkRoomBookCard";
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
  interface Recommend {
    id: number;
    image: string;
    title: string;
    author: string;
    talkTitle: string;
    userName: string;
    comment: string;
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
    {
      id: 7,
      rank: 7,
      image: "",
      title: "책 제목7",
      publisher: "출판사7",
      author: "저자7",
      year: 2024,
    },
    {
      id: 8,
      rank: 8,
      image: "",
      title: "책 제목8",
      publisher: "출판사8",
      author: "저자8",
      year: 2024,
    },
  ];
  const dataRecommend: Recommend[] = [
    {
      id: 1,
      image: "",
      title: "책 제목1",
      author: "저자1",
      talkTitle: "토크해요",
      userName: "응애",
      comment:
        "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
    },
    {
      id: 2,
      image: "",
      title: "책 제목2",
      author: "저자2",
      talkTitle: "토크해요",
      userName: "응애",
      comment:
        "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
    },
    {
      id: 3,
      image: "",
      title: "책 제목3",
      author: "저자3",
      talkTitle: "토크해요",
      userName: "응애",
      comment:
        "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
    },
    {
      id: 4,
      image: "",
      title: "책 제목4",
      author: "저자4",
      talkTitle: "토크해요",
      userName: "응애",
      comment:
        "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
    },
    {
      id: 5,
      image: "",
      title: "책 제목5",
      author: "저자5",
      talkTitle: "토크해요",
      userName: "응애",
      comment:
        "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
    },
    {
      id: 6,
      image: "",
      title: "책 제목6",
      author: "저자6",
      talkTitle: "토크해요",
      userName: "응애",
      comment:
        "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
    },
    {
      id: 7,
      image: "",
      title: "책 제목7",
      author: "저자7",
      talkTitle: "토크해요",
      userName: "응애",
      comment:
        "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
    },
    {
      id: 8,
      image: "",
      title: "책 제목8",
      author: "저자8",
      talkTitle: "토크해요",
      userName: "응애",
      comment:
        "토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요 토크 해요",
    },
  ];

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

        <Swiper data={dataRecommend} slidesPerView={5} />
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
          {new Array(4).fill(1).map((index: number) => (
            <MainCard key={index} />
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
