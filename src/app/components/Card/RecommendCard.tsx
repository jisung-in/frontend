import Like from "@/assets/img/like.svg";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import ThemeTitle from "@/assets/img/theme-title.svg";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import { useState } from "react";
import IconButton from "../IconButton/IconButton";

interface RecommendCardProps {
  id: number;
  title: string;
  image: string;
  author: string;
  talkTitle: string;
  userName: string;
  comment: string;
}

const RecommendCard: React.FC<RecommendCardProps> = ({
  id,
  title,
  image,
  author,
  talkTitle,
  userName,
  comment,
}) => {
  const [count, setCount] = useState<number>(0);
  const [isLike, setIsLike] = useState<boolean>(false);

  const changeIsLike = (isLike: boolean) => {
    setIsLike(!isLike);
    setCount((prevCount) => (isLike ? prevCount - 1 : prevCount + 1));
  };

  return (
    <div
      key={id}
      className="relative w-[405px] h-[330px] rounded-[17px] shadow-lg shadow-[#E7E7E7] font-Pretendard overflow-hidden"
    >
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
            <div className="mt-4 ml-4 flex-grow">
              <div className="font-semibold mb-1">{title}</div>
              <div className="text-sm text-[#656565]">{author}</div>
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
            <div className="flex flex-row">{talkTitle}</div>
            <div className="flex items-center bg-transparent leading-tight text-sm text-[#F24D4D] border-2 border-[#F24D4D] rounded-[4px] px-[7px]">
              BEST
            </div>
          </div>

          <div className="font-medium text-base text-[#656565] max-h-10 mb-4">
            {comment}
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
            <div className="font-medium text-base">{userName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
