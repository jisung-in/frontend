import BookTitle from "@/assets/img/book-title.svg";
import Like from "@/assets/img/like.svg";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import ThemeTitle from "@/assets/img/theme-title.svg";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import { useState } from "react";
import IconButton from "../../IconButton/IconButton";

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
    <div className="relative w-[320px] mb-[20px] h-[430px] rounded-[17px] bg-[#fff] border border-[#F4E4CE] font-Pretendard overflow-hidden">
      <div className="absolute inset-0 transform -skew-y-[17deg] h-[250px] bg-[#FFF5E7] top-[55%]"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex flex-col mt-[21px] mx-[26px]">
          <div className="flex flex-row">
            <div className="mt-1">
              <BookTitle />
            </div>
            <div className="ml-3 flex-grow text-[#656565]">
              <div className="font-semibold overflow-hidden line-clamp-1">
                {title}
              </div>
              <div className="text-sm">{author}</div>
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
          <div className="flex justify-center mt-7">
            <div className="relative w-[125px] h-[170px]">
              {image && (
                <Image
                  className="border border-[#F4E4CE]"
                  src={faker.image.urlLoremFlickr()}
                  alt="책 표지"
                  fill
                />
              )}
            </div>
          </div>
          <div className="flex flex-row mt-3 font-semibold items-center gap-x-[7px] mb-3">
            <ThemeTitle />
            <div className="flex flex-row text-[20px] overflow-hidden line-clamp-1">
              {talkTitle}
            </div>
          </div>

          <div className="font-medium text-base text-[#656565] max-h-12 overflow-hidden mb-4 line-clamp-2">
            {comment}
          </div>

          <hr className="w-full border border-[#F4E4CE] mb-3" />

          <div className="flex flex-row gap-x-2 mb-3 items-center">
            <div>
              <Image
                src={Profile}
                alt="프로필"
                width={20}
                height={20}
                priority
              />
            </div>
            <div className="font-medium text-[15px]">{userName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
