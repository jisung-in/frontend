"use client";

import { BookMain } from "@/app/components/Book/Book";
import { Button } from "@/app/components/Button/Button";
import { CardMain } from "@/app/components/Card/Card";
import { CardHeaderMain } from "@/app/components/CardHeader/CardHeader";
import HeartButton from "@/app/components/HeartButton/HeartButton";
import { Input } from "@/app/components/Input/Input";
import Pagination from "@/app/components/Pagination/Pagination";
import { ThemeMain } from "@/app/components/Theme/Theme";
import MakeTalkRoom from "@/assets/img/make-talk-room.svg";
import Profile from "@/assets/img/profile.png";
import RecentMakeTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import { useInput } from "@/hook/useInput";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import StatusButton from "../_component/StatusBurtton";

const page = () => {
  const pathName = usePathname();
  const [isStatus, setIsStatus] = useState<boolean>(false);
  const [isHeart, setIsHeart] = useState<Boolean>(false);
  const { value, handleChange, reset } = useInput("");

  const changeIsStatus = () => {
    setIsStatus(!isStatus);
  };
  const changeisHeart = () => {
    setIsHeart(!isHeart);
  };

  return (
    <div>
      <ThemeMain.MainTheme>
        <div className="flex mt-[78px] mb-[23px]">
          <div className="flex items-center mb-[23px]">
            <div className="text-[30px] mr-[16px]">토크해요</div>
            <RecentMakeTalkRoom />
          </div>
        </div>
      </ThemeMain.MainTheme>

      <div className="flex items-center h-[40px] mb-[17px]">
        <div className="flex grow font-SpoqaHanSansNeo font-medium text-[#77777E] text-[20px]">
          "검색"의 결과
        </div>
        <div className="w-[404px] mr-[9px]">
          <Input
            className="font-Pretendard font-[400]"
            variant="empty"
            value={value}
            onChange={handleChange}
            reset={reset}
            placeholder="이곳에 검색해보세요."
          />
        </div>
      </div>

      <hr className="border-solid border-[3px] border-[#F5EFE5] mb-[19px]" />

      <div className="flex mb-[37px] grow">
        <div className="flex grow">
          <StatusButton isStatus={isStatus} onClick={changeIsStatus} />
        </div>
        <div className="flex h-[40px]">
          <div className="w-[167px]">
            <Button>
              <MakeTalkRoom />
              토크방 생성하기
            </Button>
          </div>
        </div>
      </div>

      <div className="w-[910px] h-[325px] bg-[#FFF] border border-solid rounded-[18px]">
        <div className="mt-[24px] ml-[26px] w-auto">
          <CardMain>
            <CardHeaderMain>
              <CardHeaderMain.Profile>
                <Image
                  src={Profile}
                  alt="프로필"
                  width={46}
                  height={46}
                  priority
                />
              </CardHeaderMain.Profile>
              <CardHeaderMain.Name>
                <div className="text-[19px] ml-[8px]">이름</div>
              </CardHeaderMain.Name>
              <CardHeaderMain.HoursAgo>
                <div className="text-[15px] ml-[8px]">23시간 전 (날짜)</div>
              </CardHeaderMain.HoursAgo>
              <CardHeaderMain.LikeNumbers>
                <div className="mr-[27px]">
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

            <BookMain>
              <BookMain.BookCover>
                <div className="w-[140px] h-[200px] mt-[14px] mb-[12px] mr-[26px] bg-[#000]"></div>
              </BookMain.BookCover>
            </BookMain>
            <CardMain.TitleTheme>
              <div className="text-[20px] mt-[14px] mb-[8px]">토크방 제목</div>
            </CardMain.TitleTheme>
            <CardMain.BookTitle>
              <div className="mb-[8px]">책 제목</div>
            </CardMain.BookTitle>
            <CardMain.AttendCondition>
              참가조건
              <div className="flex flex-row ml-[15px]">
                <CardMain.Status>읽고 싶은</CardMain.Status>
                <CardMain.Status>읽는 중</CardMain.Status>
                <CardMain.Status>읽음</CardMain.Status>
                <CardMain.Status>잠시 멈춘</CardMain.Status>
                <CardMain.Status>중단</CardMain.Status>
              </div>
            </CardMain.AttendCondition>
            <CardMain.Opinion>
              <div className="w-[653px] h-[90px] mt-[10px] text-[#656565]">
                토론내용 토론내용 토론내용 토론내용 토론내용 토론내용 토론내용
                토론내용 토론내용 토론내용 토론내용 토론내용 토론내용 토론내용
                토론내용 토론내용 토론내용 토론내용 토론내용 토론내용
              </div>
            </CardMain.Opinion>
          </CardMain>
        </div>
      </div>
      <Pagination
        totalItems={120}
        pageCount={12}
        postPage={10}
        link={pathName + "?"}
      />
    </div>
  );
};

export default page;
