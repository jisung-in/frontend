import BookTitleRelate from "@/assets/img/book-title-relate.svg";
import Like from "@/assets/img/like.svg";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import ThemeTitle from "@/assets/img/theme-title-middle.svg";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import { useState } from "react";
import IconButton from "../../IconButton/IconButton";

interface TalkRoomCardProps {
  data: {
    id: number;
    title: string;
    image: string;
    author: string;
    talkTitle?: string;
    userName?: string;
    comment?: string;
  };
}

const TalkRoomCard: React.FC<TalkRoomCardProps> = ({ data }) => {
  const [count, setCount] = useState<number>(0);
  const [isLike, setIsLike] = useState<boolean>(false);

  const changeIsLike = (isLike: boolean) => {
    setIsLike(!isLike);
    setCount((prevCount) => (isLike ? prevCount - 1 : prevCount + 1));
  };

  return (
    <div className="relative w-[547px] h-[426px] rounded-[17px] bg-[#fff] border rounded-[17px] border-[#F4E4CE] font-Pretendard overflow-hidden">
      <div className="absolute inset-0 transform -skew-y-[10deg] h-[200px] bg-[#FBF7F0] top-[-15%]"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex flex-col mx-8 mt-[31px] mb-3">
          <div className="flex flex-row">
            <div className="relative w-[135px] h-[188px]">
              <Image
                className="border border-[#F4E4CE]"
                src={faker.image.urlLoremFlickr()}
                alt="책 표지"
                fill
              />
            </div>
            <div className="ml-5 mt-5">
              <BookTitleRelate />
            </div>
            <div className="pt-4 ml-3 flex-grow text-[#656565]">
              <div className="text-[19px] font-semibold mb-1 overflow-hidden line-clamp-1">
                {data.title}
              </div>
              <div className="text-base">{data.author}</div>
            </div>
            <div className="flex flex-col items-center">
              <IconButton onClick={() => changeIsLike(isLike)}>
                {isLike ? (
                  <Like width={29} height={22} />
                ) : (
                  <NotLike width={29} height={22} />
                )}
              </IconButton>
              <div className="h-[22px] font-Inter font-regular text-[13px] text-[#656565]">
                {count}
              </div>
            </div>
          </div>
          <div className="flex flex-row my-3 font-semibold items-center gap-x-[7px]">
            <ThemeTitle />
            <div className="flex flex-row overflow-hidden line-clamp-1 text-[22px]">
              {data.talkTitle}
            </div>
            <div className="flex items-center bg-transparent leading-tight text-[15px] text-[#F24D4D] border-2 border-[#F24D4D] rounded-[4px] px-[11px] py-0.5">
              BEST
            </div>
          </div>

          <div className="font-medium text-lg text-[#656565] overflow-hidden min-h-20 mb-3 line-clamp-3">
            {data.comment}
          </div>

          <hr className="w-full border border-[#F4E4CE]" />

          <div className="flex flex-row gap-x-2.5 items-center mt-3">
            <div>
              <Image
                src={Profile}
                alt="프로필"
                width={26}
                height={26}
                priority
              />
            </div>
            <div className="font-medium text-base">{data.userName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkRoomCard;