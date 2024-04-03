import { BookMain } from "@/app/components/Book/Book";
import { CardHeaderMain } from "@/app/components/CardHeader/CardHeader";
import HeartButton from "@/app/components/HeartButton/HeartButton";
import { useState } from "react";
import { CardMain } from "../../Card";

const PopularTalkRoomCard = () => {
  const [isHeart, setIsHeart] = useState<Boolean>(false);
  const changeisHeart = () => {
    setIsHeart(!isHeart);
  };
  return (
    <div className="w-[405px] h-[532px] bg-[#fff] border border-solid rounded-[20px]">
      <CardMain className="flex flex-col items-center">
        <CardHeaderMain className="pt-[21px] pb-[12px] mb-[25px] bg-[#624E45] rounded-t-[20px] w-auto">
          <CardHeaderMain.Title className="ml-[23px]">
            토크방 제목
          </CardHeaderMain.Title>
          <CardHeaderMain.LikeNumbers>
            <div className="mr-[25px]">
              <HeartButton
                isHeart={isHeart}
                onClick={changeisHeart}
                width={21}
                height={19}
                color="#FFF"
              />
              <div className="h-[22px] font-Pretendard font-normal text-[13px] text-[#fff]">
                999+
              </div>
            </div>
          </CardHeaderMain.LikeNumbers>
        </CardHeaderMain>
        <BookMain className="mb-[26px]">
          <BookMain.BookCover>
            <div className="flex items-center border border-solid border-[#FBF7F0] w-[170px] h-[245px]"></div>
          </BookMain.BookCover>
        </BookMain>
        <CardMain.AttendCondition className="w-[360px] h-[142px] flex flex-col text-[19px] bg-[#FBF7F0] rounded-[8px]">
          <div className="pl-[18px]">
            <CardMain.BookTitle className="my-[16px]">
              책 제목
            </CardMain.BookTitle>
            <div className="flex flex-row">
              <div className="w-[100px] mr-[15px]">참가조건</div>
              <div className="flex flex-row flex-wrap gap-x-2 gap-y-2.5">
                <CardMain.Status color="FFF">읽고 싶은</CardMain.Status>
                <CardMain.Status color="FFF">읽는 중</CardMain.Status>
                <CardMain.Status color="FFF">읽음</CardMain.Status>
                <CardMain.Status color="FFF">잠시 멈춘</CardMain.Status>
                <CardMain.Status color="FFF">중단</CardMain.Status>
              </div>
            </div>
          </div>
        </CardMain.AttendCondition>
      </CardMain>
    </div>
  );
};

export default PopularTalkRoomCard;
