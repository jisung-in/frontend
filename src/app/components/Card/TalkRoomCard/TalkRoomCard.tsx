import IconButton from "@/app/components/IconButton/IconButton";
import Like from "@/assets/img/like.svg";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BookMain } from "../../Book/Book";
import { CardFooterMain } from "../../CardFooter/CardFooter";
import { CardHeaderMain } from "../../CardHeader/CardHeader";
import { CardMain } from "../Card";

const TalkRoomCard = () => {
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
    <div className="w-[546px] h-[430px] bg-[#FFF] border border-solid rounded-[18px]">
      <div className="mt-[16px] ml-[27px] w-auto">
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
              <div className="flex flex-col items-center mr-[25px]">
                <IconButton onClick={() => changeIsLike(isLike)}>
                  {isLike ? (
                    <Like width={22} height={19} />
                  ) : (
                    <NotLike width={22} height={19} />
                  )}
                </IconButton>
                <div className="h-[22px] font-Pretendard font-Regular text-[16px] text-[#656565]">
                  999+
                </div>
              </div>
            </CardHeaderMain.LikeNumbers>
          </CardHeaderMain>

          <BookMain className="mt-[11px] mr-[27px]">
            <BookMain.BookCover>
              <div className="flex items-center border border-solid border-[#F4E4CE] w-[140px] h-[200px]"></div>
            </BookMain.BookCover>
          </BookMain>
          <CardMain.TitleTheme className="mt-[20px] mb-[4px]">
            <Link href={"/talkroom/detail"}>
              <div className="text-[20px]">토크방 제목</div>
            </Link>
          </CardMain.TitleTheme>
          <CardMain.BookTitle>책 제목</CardMain.BookTitle>
          <CardMain.AttendCondition>
            <div className="flex flex-col mt-[10px] text-[20px]">
              참가조건
              <div className="flex flex-row mt-[5px] flex-wrap gap-x-2.5 gap-y-2.5">
                {statuses.map((status, index) => (
                  <CardMain.Status
                    key={index}
                    color="FBF7F0"
                    className="px-[8px] py-[4.5px]"
                  >
                    {status}
                  </CardMain.Status>
                ))}
              </div>
            </div>
          </CardMain.AttendCondition>
          <CardFooterMain>
            <CardFooterMain.Line className="border-[#F4E4CE] mt-[18px] mb-[16px] mr-[27px]" />
            <CardFooterMain.TalkContent className="mr-[27px] h-[104px]">
              <Link href={"/talkroom/detail"}>
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
              </Link>
            </CardFooterMain.TalkContent>
          </CardFooterMain>
        </CardMain>
      </div>
    </div>
  );
};

export default TalkRoomCard;
