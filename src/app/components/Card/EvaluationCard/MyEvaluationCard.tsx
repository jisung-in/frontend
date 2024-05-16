import BookTitle from "@/assets/img/book-title.svg";
import LikeSpeechBubble from "@/assets/img/like-speech-bubble.svg";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import Star from "@/assets/img/star.svg";
import Image from "next/image";
import { useState } from "react";
import IconButton from "../../IconButton/IconButton";
import LikeButton from "../../LikeButton/LikeButton";

type MiniEvaluationProps = {
  id: number;
  image: string;
  starRate: number;
  userName: string;
  comment: string;
  like: number;
};

const MyEvaluationCard: React.FC<{ data: MiniEvaluationProps }> = ({
  data,
}) => {
  const [count, setCount] = useState<number>(data.like);
  const [isLike, setIsLike] = useState<boolean>(false);
  const changeIsLike = (isLike: boolean) => {
    setIsLike(!isLike);
    setCount(count + 1);
    if (isLike) setCount(count - 1);
  };
  return (
    <div className="w-[830px] h-[430px] bg-[#FFF] shadow-lg shadow-[#E7E7E7] mb-[30px] rounded-[11px] font-Pretendard font-medium">
      <div className="mt-[30px] mx-[43px] w-auto">
        <div className="flex flex-row mb-[19px]">
          <div className="flex flex-row items-center flex-grow gap-x-3">
            <Image src={Profile} alt="프로필" width={48} height={48} priority />
            <div className="font-medium text-[20px]">{data.userName}</div>
          </div>
          <div className="w-[68px] h-[33px] bg-[#FBF7F0] border border-[#624E45] border-solid rounded-[16px] px-[9px] flex items-center font-Inter font-medium text-[18px] text-[#80685D] gap-x-[3px] justify-center">
            <Star />
            <div className="flex grow justify-center items-center">
              {data.starRate}
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-x-8">
          <div className="bg-[#000] w-[150px] h-[200px]" />
          <div className="flex flex-col w-[513px]">
            <div className="flex flex-row items-center mt-1 gap-x-2">
              <BookTitle />
              <div className="font=semibold text-[22px]">책 제목</div>
            </div>
            <div className="flex flex-row items-center text-lg text-[#656565] gap-x-3 my-1">
              <div>저자</div>
              <div>출판사</div>
            </div>
            <div className="font-regular text-lg min-h-[112px] max-h-[115px]">
              {data.comment}
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col justify-start mt-10">
            <div className="flex flex-row gap-x-[5px]">
              <IconButton onClick={() => changeIsLike(isLike)}>
                {isLike ? (
                  <LikeSpeechBubble width={16} height={15} />
                ) : (
                  <NotLike width={16} height={15} />
                )}
              </IconButton>
              <div className="font-Inter font-mediumtext-[17px]">
                {count > 999 ? "999+" : count}
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full border border-[#E3E3E3] mt-1.5 mb-[10px]" />

        <div className="flex justify-start mb-3">
          <LikeButton isLike={isLike} onClick={() => changeIsLike(isLike)} />
        </div>
      </div>
    </div>
  );
};

export default MyEvaluationCard;
