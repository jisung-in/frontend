import { BookMain } from "@/app/components/Book/Book";
import { CardHeaderMain } from "@/app/components/CardHeader/CardHeader";
import HeartButton from "@/app/components/HeartButton/HeartButton";
import Profile from "@/assets/img/profile.png";
import Image from "next/image";
import { useState } from "react";
import { CardMain } from "../../Card";

const TalkRoomCard = () => {
  const [isHeart, setIsHeart] = useState<Boolean>(false);
  const changeisHeart = () => {
    setIsHeart(!isHeart);
  };
  return (
    <div className="w-[547px] h-[230px] bg-[#FFF] border border-solid rounded-[17px] mr-[20px]">
      <div className="mt-[22px] ml-[26px] w-auto">
        <CardMain>
          <CardHeaderMain>
            <CardHeaderMain.Profile>
              <Image
                src={Profile}
                alt="프로필"
                width={24}
                height={24}
                priority
              />
            </CardHeaderMain.Profile>
            <CardHeaderMain.Name>
              <div className="text-[17px] ml-[6px]">이름</div>
            </CardHeaderMain.Name>
            <CardHeaderMain.LikeNumbers>
              <div className="flex flex-col items-center mr-[26px]">
                <HeartButton
                  isHeart={isHeart}
                  onClick={changeisHeart}
                  width={21}
                  height={19}
                />
                <div className="h-[16px] font-Pretendard font-normal text-[13px] text-[#656565]">
                  999+
                </div>
              </div>
            </CardHeaderMain.LikeNumbers>
          </CardHeaderMain>
          <BookMain>
            <BookMain.BookCover className="mt-[5px] mr-[20px]">
              <div className="w-[95px] h-[135px] border border-solid border-[#F4E4CE]" />
            </BookMain.BookCover>
          </BookMain>
          <CardMain.TitleTheme className="mt-[4px]">
            토크방 제목
          </CardMain.TitleTheme>
          <CardMain.BookTitle className="mb-[6px]">책 제목</CardMain.BookTitle>
          <CardMain.AttendCondition>
            <div className="mb-[4px]">참가조건</div>
          </CardMain.AttendCondition>
          <CardMain.Status>읽고 싶은</CardMain.Status>
          <CardMain.Status>읽는 중</CardMain.Status>
          <CardMain.Status>읽음</CardMain.Status>
          <CardMain.Status>잠시 멈춘</CardMain.Status>
          <CardMain.Status>중단</CardMain.Status>
        </CardMain>
      </div>
    </div>
  );
};

export default TalkRoomCard;
