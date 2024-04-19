"use client";

import Arrow from "@/assets/img/arrow.svg";
import BookTitle from "@/assets/img/book-title-evaluation.svg";
import UserEvaluationImg from "@/assets/img/user-evaluation.svg";
import { useEvaluationUser } from "@/hook/reactQuery/evaluation/useEvaluationUser";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { BookMain } from "../components/Book/Book";
import EvaluationCard from "../components/Card/EvaluationCard/EvaluationCard";
import MainThemeTitle from "../components/MainThemeTitle/MainThemeTitle";
import DropDown from "../components/DropDown/DropDown";

const page = () => {
  const { data: evaluationUser } = useEvaluationUser();

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
        <DropDown
          items={standardType}
          selectedItem={likeStandard}
          setSelectedItem={setLikeStandard}
        />
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
        {evaluationUser?.map((data: any) => (
          <EvaluationCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default page;
