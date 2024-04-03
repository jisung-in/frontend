import Profile from "@/assets/img/profile.png";
import Image from "next/image";
import { useState } from "react";
import { BookMain } from "../../Book/Book";
import { CardFooterMain } from "../../CardFooter/CardFooter";
import { CardHeaderMain } from "../../CardHeader/CardHeader";
import HeartButton from "../../HeartButton/HeartButton";
import { CardMain } from "../Card";

const TalkRoomCard = () => {
  const [isHeart, setIsHeart] = useState<Boolean>(false);
  const changeisHeart = () => {
    setIsHeart(!isHeart);
  };
  return (
    <div className="w-[546px] h-[430px] bg-[#FFF] border border-solid rounded-[18px]">
      <div className="mt-[20px] ml-[27px] w-auto">
        <CardMain>
          <CardHeaderMain>
            <CardHeaderMain.Profile>
              <Image
                src={Profile}
                alt="프로필"
                width={36}
                height={36}
                priority
              />
            </CardHeaderMain.Profile>
            <CardHeaderMain.Name>
              <div className="text-[17px] ml-[8px]">이름</div>
            </CardHeaderMain.Name>
            <CardHeaderMain.HoursAgo>
              <div className="text-[12px] ml-[8px]">23시간 전 (날짜)</div>
            </CardHeaderMain.HoursAgo>
            <CardHeaderMain.LikeNumbers>
              <div className="mr-[25px]">
                <HeartButton
                  isHeart={isHeart}
                  onClick={changeisHeart}
                  width={26}
                  height={24}
                />
                <div className="h-[22px] font-Pretendard font-Regular text-[16px] text-[#656565]">
                  999+
                </div>
              </div>
            </CardHeaderMain.LikeNumbers>
          </CardHeaderMain>

          <BookMain className="mt-[15px] mr-[27px]">
            <BookMain.BookCover>
              <div className="flex items-center border border-solid border-[#F4E4CE] w-[140px] h-[200px]"></div>
            </BookMain.BookCover>
          </BookMain>
          <CardMain.TitleTheme className="mt-[25px] mb-[8px]">
            <div className="text-[20px]">토크방 제목</div>
          </CardMain.TitleTheme>
          <CardMain.BookTitle>
            <div className="mb-[8px]">책 제목</div>
          </CardMain.BookTitle>
          <CardMain.AttendCondition>
            <div className="flex flex-col">
              참가조건
              <div className="flex flex-row flex-wrap gap-x-2.5 gap-y-2.5">
                <CardMain.Status color="FBF7F0">읽고 싶은</CardMain.Status>
                <CardMain.Status color="FBF7F0">읽는 중</CardMain.Status>
                <CardMain.Status color="FBF7F0">읽음</CardMain.Status>
                <CardMain.Status color="FBF7F0">잠시 멈춘</CardMain.Status>
                <CardMain.Status color="FBF7F0">중단</CardMain.Status>
                <CardMain.Status color="FBF7F0">상관 없음</CardMain.Status>
              </div>
            </div>
          </CardMain.AttendCondition>
          <CardFooterMain>
            <CardFooterMain.Line className="border-[#F4E4CE] mt-[18px] mb-[14px] mr-[27px]"></CardFooterMain.Line>
            <CardFooterMain.TalkContent className="mr-[27px] h-[96px]">
              <div className="mt-[9px] mx-[18px]">
                <div className="font-medium text-[20px] text-[#000]">
                  토크내용
                </div>
                <div className="font-regular text-[18px] text-[#6C6C6C]">
                  토크내용 들어갈 곳 토크내용 들어갈 곳 토크내용 들어갈 곳
                  토크내용 들어갈 곳 토크내용 들어갈 곳 토크내용 들어갈 곳
                  토크내용
                </div>
              </div>
            </CardFooterMain.TalkContent>
          </CardFooterMain>
        </CardMain>
      </div>
    </div>
  );
};

export default TalkRoomCard;
