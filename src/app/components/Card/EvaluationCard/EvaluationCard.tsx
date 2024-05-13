import LikeSpeechBubble from "@/assets/img/like-speech-bubble.svg";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import Star from "@/assets/img/star.svg";
import Image from "next/image";
import { useState } from "react";
import IconButton from "../../IconButton/IconButton";
import LikeButton from "../../LikeButton/LikeButton";

type EvaluationProps = {
  id: number;
  image: string;
  starRate: number;
  userName: string;
  comment: string;
  like: number;
};

const EvaluationCard: React.FC<{ data: EvaluationProps }> = ({ data }) => {
  const [count, setCount] = useState<number>(data.like);
  const [isLike, setIsLike] = useState<boolean>(false);
  const changeIsLike = (isLike: boolean) => {
    setIsLike(!isLike);
    setCount(count + 1);
    if (isLike) setCount(count - 1);
  };
  return (
    <div className="w-[910px] min-h-[320px] bg-[#FFF] rounded-[18px] mb-[30px] shadow-lg shadow-[#E7E7E7] font-Pretendard font-medium">
      <div className="mt-[20px] ml-[30px] mr-[26px] w-auto">
        <div className="flex flex-row mb-[23px]">
          <div className="flex flex-row items-center flex-grow gap-x-[10px]">
            <Image src={Profile} alt="프로필" width={40} height={40} priority />
            <div className="font-medium text-[20px]">{data.userName}</div>
          </div>
          <div className="w-[68px] h-[33px] bg-[#FBF7F0] border border-[#624E45] border-solid rounded-[16px] px-[9px] flex items-center font-Inter font-medium text-[18px] text-[#80685D] gap-x-[3px] justify-center">
            <Star />
            <div className="flex grow justify-center items-center">
              {data.starRate}
            </div>
          </div>
        </div>
        <div className="font-regular text-[20px] min-h-[112px]">
          {data.comment}
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col justify-start">
            <div className="flex flex-row mt-[18px]">
              <IconButton onClick={() => changeIsLike(isLike)}>
                {isLike ? (
                  <LikeSpeechBubble width={18} height={17} />
                ) : (
                  <NotLike width={18} height={17} />
                )}
              </IconButton>
              <div className="ml-[5px]">{count > 999 ? "999+" : count}</div>
            </div>
          </div>
        </div>
        <hr className="w-full border border-[#F4E4CE] mt-[8px] mb-[16px]" />
        <div className="flex justify-start mb-[19px]">
          <LikeButton isLike={isLike} onClick={() => changeIsLike(isLike)} />
        </div>
      </div>
    </div>
  );
};

export default EvaluationCard;
