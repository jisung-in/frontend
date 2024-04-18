"use client";

import Arrow from "@/assets/img/arrow.svg";
import BookTitle from "@/assets/img/book-title-evaluation.svg";
import UserEvaluationImg from "@/assets/img/user-evaluation.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { recommend } from "../../../public/data.json";
import { Recommend } from "../../../public/dataType";
import { BookMain } from "../components/Book/Book";
import EvaluationCard from "../components/Card/EvaluationCard/EvaluationCard";
import MainThemeTitle from "../components/MainThemeTitle/MainThemeTitle";

const page = () => {
  const dataRecommend: Recommend[] = recommend;

  const [likeStandard, setLikeStandard] = useState<string>("좋아요 순");
  const standardType: string[] = [
    "좋아요 순",
    "높은 평가 순",
    "낮은 평가 순",
    "작성 순",
  ];

  const changeLikeStandard = (likeStandard: string) => {
    setLikeStandard(likeStandard);
  };

  return (
    <div>
      <div className="ml-[120px]">
        <MainThemeTitle title="유저들의 평가">
          <UserEvaluationImg />
        </MainThemeTitle>
      </div>

      <div className="w-full h-[6px] bg-[#F5EFE5]" />

      <div className="h-[60px] flex items-center justify-end bg-white pr-[114px]">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className="IconButton flex align-center"
              aria-label="Customise options"
            >
              <div className="flex items-center font-Pretendard font-medium text-[#74747B] text-[19px]">
                {likeStandard}
                <div className="ml-2">
                  <Arrow />
                </div>
              </div>
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="bg-white w-[358px] h-[301px] border border-[#BBB] rounded-[9px] absolute right-[-50px]"
              sideOffset={5}
            >
              <div className="flex text-[21px] font-bold relative border-b-[1px] border-[#D5D5D5] justify-center items-center h-[52px]">
                정렬 기준
                <DropdownMenu.Item asChild>
                  <div className="absolute right-[5%] cursor-pointer">X</div>
                </DropdownMenu.Item>
              </div>
              <div className="font-Pretendard font-medium px-[5%] text-[#767676] text-[19px]">
                {standardType.map((likeStandard, index) => (
                  <DropdownMenu.Item
                    key={index}
                    onClick={() => changeLikeStandard(likeStandard)}
                    className={`w-full h-[60px] flex items-center px-[5%] hover:font-semibold hover:text-black cursor-pointer ${
                      likeStandard === "작성 순" ? "" : "border-b-[1px]"
                    }`}
                  >
                    {likeStandard}
                  </DropdownMenu.Item>
                ))}
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>

      <div className="flex items-center justify-center font-Pretendard font-medium mt-[42px] mb-[69px]">
        <div className="flex justify-start w-[910px] h-[288px] ">
          <BookMain.BookCover>
            <div className="border border-[#F4E4CE] w-[214px] h-[288px] mr-[53px]"></div>
          </BookMain.BookCover>
          <BookMain className="mt-[12px]">
            <BookMain.BookTitle>
              <div className="flex flex-row items-center gap-x-4 mb-[11px]">
                <BookTitle />
                <div className="font-semibold text-[40px] text-[#000]">
                  물질의 세계
                </div>
              </div>
            </BookMain.BookTitle>
            <BookMain.Publisher>
              <div className="text-[24px] text-[#656565] mr-[29px]">출판사</div>
            </BookMain.Publisher>
            <BookMain.Author>
              <div className="text-[24px] text-[#656565] mr-[29px]">저자</div>
            </BookMain.Author>
            <BookMain.Year>
              <div className="font-Inter text-[24px] text-[#656565]">2024</div>
            </BookMain.Year>
          </BookMain>
        </div>
      </div>

      <div className="flex flex-col items-center">
        {dataRecommend.map((data) => (
          <EvaluationCard
            key={data.id}
            id={data.id}
            image={data.image}
            title={data.title}
            author={data.author}
            talkTitle={data.talkTitle}
            userName={data.userName}
            comment={data.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
