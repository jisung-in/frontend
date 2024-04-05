"use client";

import { BookMain } from "@/app/components/Book/Book";
import { CardMain } from "@/app/components/Card/Card";
import { CardFooterMain } from "@/app/components/CardFooter/CardFooter";
import IconButton from "@/app/components/IconButton/IconButton";
import { ThemeMain } from "@/app/components/Theme/Theme";
import BackButton from "@/app/summary/_component/BackButton";
import LikeBlack from "@/assets/img/like-black.svg";
import NotLike from "@/assets/img/not-like.svg";
import OutRoom from "@/assets/img/out-room.svg";
import PopularTalkRoom from "@/assets/img/popular-talk-room.svg";
import WriteOpinion from "@/assets/img/write-opinion.svg";
import { useState } from "react";

const Page = () => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const changeIsLike = (isLike: boolean) => {
    setIsLike(!isLike);
  };
  const statuses: string[] = [
    "읽고 싶은",
    "읽는 중",
    "읽음",
    "잠시 멈춘",
    "중단",
  ];
  return (
    <div className="mt-[50px]">
      <BackButton />
      <ThemeMain.MainTheme>
        <div className="flex mt-[18px] mb-[23px]">
          <div className="flex items-center mb-[23px]">
            <div className="text-[30px] mr-[16px]">토크해요</div>
            <PopularTalkRoom />
          </div>
        </div>
      </ThemeMain.MainTheme>

      <div className="w-full h-[975px] bg-white border-2 border-[#F4E4CE] rounded-[12px] flex flex-col">
        <div className="ml-[46px] mt-[44px] mr-[35px]">
          <div className="flex flex-row">
            <div className="flex grow">
              <CardMain>
                <BookMain>
                  <BookMain.BookCover className="mt-[5px] mr-[40px]">
                    <div className="w-[223px] h-[291px] border border-solid border-[#F4E4CE]" />
                  </BookMain.BookCover>
                </BookMain>
                책제목
                <CardMain.TitleTheme
                  className="mt-[39px] text-[30px] mb-[16px] font-medium"
                  bigImg={true}
                >
                  토크방 제목
                </CardMain.TitleTheme>
                <CardMain.BookTitle
                  className="mb-[26px] text-[28px]"
                  bigImg={true}
                >
                  책 제목
                </CardMain.BookTitle>
                <CardMain.AttendCondition>
                  <div className="flex flex-col">
                    <div className="text-[24px] mb-[7px]">참가조건</div>
                    <div className="flex flex-row gap-x-2 h-[30px]">
                      {statuses.map((status, index) => (
                        <CardMain.Status
                          key={index}
                          color="FBF7F0"
                          height={35}
                          className="px-[10px] py-[7px]"
                        >
                          {status}
                        </CardMain.Status>
                      ))}
                    </div>
                  </div>
                </CardMain.AttendCondition>
              </CardMain>
            </div>
            <div className="flex font-Pretendard font-regular text-[18px] text-[#7E7E7E] mt-[-13px]">
              생성일: 20시간 전
            </div>
          </div>

          <CardFooterMain>
            <CardFooterMain.Line className="border-[#F5EFE5] border-[2px] mt-[48px] mb-[23px]" />
            <CardFooterMain.TalkContent className="h-[157px]" color={"FFF"}>
              <div className="">
                <div className="font-semibold text-[24px] mb-[5px]">
                  토크 주제
                </div>
                <div className="font-regular text-[22px] text-[#000]">
                  토크 주제 들어갈 곳 입니다
                </div>
              </div>
            </CardFooterMain.TalkContent>
          </CardFooterMain>

          <hr className="border-[2px] border-solid border-[#F5EFE5] mb-[35px]" />

          <div className="font-Pretendard font-semibold text-[24px] mb-[18px]">
            이미지
          </div>
          <div className="flex gap-x-[23px] mb-[38px]">
            {new Array(3).fill(1).map((index: number) => (
              <div
                key={index}
                className="bg-[#D9D9D9] w-[160px] h-[160px] border border-solid border-[#FBF7F0] rounded-[4px]"
              />
            ))}
          </div>

          <div className="flex flex-row gap-x-[15px] font-Pretendard font-regular text-[18px] text-[#818181] mb-[20px]">
            <div className="flex flex-row">
              <div className="mr-[6px]">좋아요</div>
              <div>999+</div>
            </div>
            <div className="flex flex-row">
              <div className="mr-[6px]">의견</div>
              <div>999+</div>
            </div>
          </div>
        </div>

        <hr className="border-solid border-[#F5EFE5]" />

        <div className="flex flex-row font-Pretendard font-semibold text-[19px]">
          <div className="border-r-[1px] border-[#F4E4CE] flex grow justify-center items-center py-[18px]">
            <IconButton
              onClick={() => changeIsLike(isLike)}
              className="mr-[5px]"
            >
              {isLike ? (
                <LikeBlack width={19} height={18} />
              ) : (
                <NotLike width={19} height={18} />
              )}
            </IconButton>
            좋아요
          </div>
          <div className="border-r-[1px] border-[#F4E4CE] flex grow justify-center items-center py-[18px]">
            <WriteOpinion className="mr-[5px]" />
            의견쓰기
          </div>
          <div className="flex grow justify-center items-center py-[18px]">
            <OutRoom className="mr-[5px]" />
            나가기
          </div>
        </div>
      </div>

      <hr className="border-[6px] border-[#F5EFE5] mt-[47px] mb-[42px]" />
    </div>
  );
};

export default Page;
