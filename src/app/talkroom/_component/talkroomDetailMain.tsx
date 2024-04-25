import IconButton from "@/app/components/IconButton/IconButton";
import BookTitleBihImg from "@/assets/img/book-title-big.svg";
import Like from "@/assets/img/like.svg";
import NotLike from "@/assets/img/not-like.svg";
import TitleThemeBigImg from "@/assets/img/theme-title-big.svg";
import { useState } from "react";
const talkroomDetailMain = () => {
  const [count, setCount] = useState<number>(0);
  const statuses: string[] = [
    "읽고 싶은",
    "읽는 중",
    "읽음",
    "잠시 멈춘",
    "중단",
    "상관없음",
  ];
  const [isLike, setIsLike] = useState<boolean>(false);
  const changeIsLike = (isLike: boolean) => {
    setIsLike(!isLike);
    setCount(count + 1);
    if (isLike) setCount(count - 1);
  };
  return (
    <div className="w-full min-h-[831px] bg-[white] border-2 border-[#F4E4CE] rounded-[12px] flex flex-col font-Pretendard font-medium">
      <div className="mx-[46px] mt-[44px]">
        <div className="flex flex-row">
          <div className="flex grow">
            <div className="flex flex-row">
              <div className="w-[223px] h-[291px] border border-solid border-[#F4E4CE] mt-[5px] mr-[40px]" />
              <div className="flex flex-col">
                <div className="flex items-center text-[#000] mt-[20px] text-[30px] mb-4">
                  <div className="mr-[7px]">
                    <TitleThemeBigImg />
                  </div>
                  토크방 제목
                </div>
                <div className="flex items-center text-[#656565] mb-[20px] text-[28px]">
                  <div className="mr-[7px]">
                    <BookTitleBihImg />
                  </div>
                  책 제목
                </div>
                <div className="flex font-regular text-lg text-[#7E7E7E]">
                  생성일: 20시간 전
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex flex-col">
              <div className="flex flex-col items-center">
                <IconButton onClick={() => changeIsLike(isLike)}>
                  {isLike ? (
                    <Like width={26} height={24} />
                  ) : (
                    <NotLike width={26} height={24} />
                  )}
                </IconButton>
                <div className="h-[16px] font-Inter font-regular text-[16px] text-[#656565]">
                  {count}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-[27px] font-Pretendard font-medium text-lg text-[#FF6363]">
          <div className="flex flex-col">
            <div className="text-2xl mb-[7px]">참가조건</div>
            <div className="flex flex-row gap-x-3 h-[30px]">
              {statuses.map((status, index) => (
                <div
                  className="flex justify-center items-center w-auto h-[35px] text-[#656565] bg-[#FBF7F0] border border-[#F4E4CE] border-solid rounded-[4px] px-[9px] py-[7px]"
                  key={index}
                >
                  {status}
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-2 border-solid border-[#F5EFE5] mt-[48px] mb-[25px]" />

        <div className="min-h-[157px]">
          <div className="font-semibold text-2xl mb-[5px]">토크 주제</div>
          <div className="font-regular text-[22px] text-[#000]">
            토크 주제 들어갈 곳 입니다.
          </div>
        </div>

        <hr className="border-2 border-solid border-[#F5EFE5] mt-[25px] mb-[35px]" />

        <div className="font-semibold text-2xl mb-[18px]">이미지</div>
        <div className="flex gap-x-[23px] mb-[51px]">
          {new Array(3).fill(1).map((index: number) => (
            <div
              key={index}
              className="bg-[#D9D9D9] w-[160px] h-[160px] border border-solid border-[#FBF7F0] rounded-[4px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default talkroomDetailMain;
