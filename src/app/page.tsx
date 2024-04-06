"use client";

import BestSeller from "@/assets/img/best-seller.svg";
import ManyTalkRoomBook from "@/assets/img/many-talk-room-book.svg";
import PopularTalkRoom from "@/assets/img/popular-talk-room.svg";
import RecentMakeTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import RecentOpinionTalkRoom from "@/assets/img/recent-opinion-talk-room.svg";
import RegisteRecentBook from "@/assets/img/register-recent-book.svg";
import Link from "next/link";
import ManyTalkRoomBookCard from "./components/Card/MainPageCard/ManyTalkRoomBookCard/ManyTalkRoomBookCard";
import PopularTalkRoomCard from "./components/Card/MainPageCard/PopularTalkRoomCard/PopularTalkRoomCard";
import TalkRoomCard from "./components/Card/MainPageCard/TalkRoomCard/TalkRoomCard";
import Swiper from "./components/Swiper/Swiper";
import { ThemeMain } from "./components/Theme/Theme";

const page = () => {
  // swiper 임시 데이터
  const data = [
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
      <div className="mt-[55px] ml-[120px]">
        <ThemeMain.MainTheme>
          <div className="flex mb-[13px]">
            <div className="flex grow items-center">
              <div className="mr-[10px]">최근 의견달린 토크방</div>
              <RecentOpinionTalkRoom />
            </div>
            <ThemeMain.Show>전체보기 {">"}</ThemeMain.Show>
          </div>
        </ThemeMain.MainTheme>
        <div className="flex flex-row flex-wrap gap-x-5 gap-y-5">
          {new Array(3).fill(1).map((index: number) => (
            <TalkRoomCard key={index} />
          ))}
        </div>
      </div>

      <div className="mt-[55px] ml-[120px]">
        <ThemeMain.MainTheme>
          <div className="flex mb-[13px]">
            <div className="flex grow items-center">
              <div className="mr-[10px]">최근 생성된 토크방</div>
              <RecentMakeTalkRoom />
            </div>
            <Link href={"/talkroom"}>
              <ThemeMain.Show>전체보기 {">"}</ThemeMain.Show>
            </Link>
          </div>
        </ThemeMain.MainTheme>

        <div className="flex flex-row flex-wrap gap-x-5 gap-y-5">
          {new Array(3).fill(1).map((index: number) => (
            <TalkRoomCard key={index} />
          ))}
        </div>
      </div>

      <div className="mt-[55px] ml-[120px]">
        <ThemeMain.MainTheme>
          <div className="flex mb-[13px]">
            <div className="flex grow items-center">
              <div className="mr-[10px]">베스트 셀러</div>
              <BestSeller />
            </div>
          </div>
        </ThemeMain.MainTheme>
        <Swiper data={BestSellerData} />
      </div>

      <div className="bg-[#FBF7F0] mt-[36px] pt-[36px] pb-[65px]">
        <div className="mt-[23px] ml-[120px]">
          <ThemeMain.MainTheme>
            <div className="flex mb-[20px]">
              <div className="flex grow items-center">
                <div className="mr-[10px]">인기있는 토크방</div>
                <PopularTalkRoom />
              </div>
              <Link href={"/talkroom"}>
                <ThemeMain.Show>전체보기 {">"}</ThemeMain.Show>
              </Link>
            </div>
          </ThemeMain.MainTheme>
          <div className="flex flex-row flex-wrap gap-x-[18px] gap-y-[18px]">
            {new Array(4).fill(1).map((index: number) => (
              <PopularTalkRoomCard key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[22px] ml-[120px]">
        <ThemeMain.MainTheme>
          <div className="flex mb-[13px]">
            <div className="flex grow items-center">
              <div className="mr-[10px]">최근 등록된 책</div>
              <RegisteRecentBook />
            </div>
          </div>
        </ThemeMain.MainTheme>
        <Swiper data={RecentlyRegisterData} />
      </div>

      <div className="bg-[#FBF7F0] mt-[73px] pb-[91px]">
        <div className="pt-[77px] ml-[120px]">
          <ThemeMain.MainTheme>
            <div className="flex mb-[20px]">
              <div className="flex grow items-center">
                <div className="mr-[10px]">토크 많은 책</div>
                <ManyTalkRoomBook />
              </div>
              <ThemeMain.Show>더보기 {">"}</ThemeMain.Show>
            </div>
          </ThemeMain.MainTheme>
          <div className="flex flew-row flex-wrap gap-x-[17px] gap-y-[29px]">
            {new Array(10).fill(1).map((index: number) => (
              <ManyTalkRoomBookCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
