import BookTitle from "@/assets/img/book-title.svg";
import Like from "@/assets/img/like.svg";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import ThemeTitle from "@/assets/img/theme-title.svg";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import { useState } from "react";
import IconButton from "../IconButton/IconButton";

const MainCard = () => {
  const [count, setCount] = useState<number>(0);
  const [isLike, setIsLike] = useState<boolean>(false);

  const changeIsLike = (isLike: boolean) => {
    setIsLike(!isLike);
    setCount((prevCount) => (isLike ? prevCount - 1 : prevCount + 1));
  };

  return (
    <div className="relative w-[405px] h-[330px] rounded-[17px] shadow-lg shadow-[#E7E7E7] font-Pretendard overflow-hidden">
      <div className="absolute inset-0 transform -skew-y-[10deg] h-[200px] bg-[#FBF7F0] top-[-30%]"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex flex-col m-[26px]">
          <div className="flex flex-row">
            <div className="relative w-[100px] h-[140px]">
              <Image
                className="border border-[#F4E4CE]"
                src={faker.image.urlLoremFlickr()}
                alt="책 표지"
                fill
              />
            </div>
            <div className="ml-4 mt-5">
              <BookTitle />
            </div>
            <div className="mt-4 ml-[9px] flex-grow text-[#656565]">
              <div className="font-semibold mb-1 overflow-hidden line-clamp-1">
                책 제목
              </div>
              <div className="text-sm">저자</div>
            </div>
            <div className="flex flex-col items-center">
              <IconButton onClick={() => changeIsLike(isLike)}>
                {isLike ? (
                  <Like width={21} height={19} />
                ) : (
                  <NotLike width={21} height={19} />
                )}
              </IconButton>
              <div className="h-[22px] font-Inter font-regular text-base text-[#656565]">
                {count}
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-[17px] font-semibold items-center gap-x-[7px] mb-3.5">
            <ThemeTitle />
            <div className="flex flex-row overflow-hidden line-clamp-1">
              토크방 제목
            </div>
            <div className="flex items-center bg-transparent leading-tight text-sm text-[#F24D4D] border-2 border-[#F24D4D] rounded-[4px] px-[7px]">
              BEST
            </div>
          </div>

          <div className="font-medium text-base text-[#656565] max-h-12 overflow-hidden mb-4 line-clamp-2">
            토크 내용 토크 내용 토크 내용 토크 내용 토크 내용 토크 내용 토크
            내용 토크 내용 토크 내용 토크 내용 토크 내용 토크 내용
          </div>

          <hr className="w-full border border-[#F4E4CE] mb-3" />

          <div className="flex flex-row gap-x-[9px] items-center">
            <div>
              <Image
                src={Profile}
                alt="프로필"
                width={20}
                height={20}
                priority
              />
            </div>
            <div className="font-medium text-base">이름</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
