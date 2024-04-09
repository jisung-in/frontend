import { BookMain } from "@/app/components/Book/Book";
import { CardHeaderMain } from "@/app/components/CardHeader/CardHeader";
import IconButton from "@/app/components/IconButton/IconButton";
import Like from "@/assets/img/like.svg";
import NotLikeWhite from "@/assets/img/not-like-white.svg";
import { useState } from "react";
import { CardMain } from "../../Card";

const PopularTalkRoomCard = () => {
  const [count, setCount] = useState<number>(0);
  const [isLike, setIsLike] = useState<boolean>(false);
  const changeIsLike = (isLike: boolean) => {
    setIsLike(!isLike);
    setCount(count + 1);
    if (isLike) setCount(count - 1);
  };
  const statuses: string[] = [
    "읽고 싶은",
    "읽는 중",
    "읽음",
    "잠시 멈춘",
    "중단",
    "상관없음",
  ];
  return (
    <div className="w-[405px] h-[532px] bg-[#fff] border border-solid rounded-[20px]">
      <CardMain className="flex flex-col items-center">
        <CardHeaderMain className="pt-[21px] pb-[12px] mb-[25px] bg-[#624E45] rounded-t-[20px] w-auto">
          <CardHeaderMain.Title className="ml-[23px]">
            토크방 제목
          </CardHeaderMain.Title>
          <CardHeaderMain.LikeNumbers>
            <div className="flex flex-col items-center mr-[25px]">
              <IconButton onClick={() => changeIsLike(isLike)}>
                {isLike ? (
                  <Like width={22} height={19} />
                ) : (
                  <NotLikeWhite width={22} height={19} />
                )}
              </IconButton>
              <div className="h-[22px] font-Pretendard font-normal text-[13px] text-[#fff]">
                {count}
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
                {statuses.map((status, index) => (
                  <CardMain.Status
                    key={index}
                    color="FFF"
                    className="px-[8px] py-[4.5px]"
                  >
                    {status}
                  </CardMain.Status>
                ))}
              </div>
            </div>
          </div>
        </CardMain.AttendCondition>
      </CardMain>
    </div>
  );
};

export default PopularTalkRoomCard;
