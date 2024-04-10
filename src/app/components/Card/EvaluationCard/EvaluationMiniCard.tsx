import LikeSpeechBubble from "@/assets/img/like-speech-bubble.svg";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import Star from "@/assets/img/star.svg";
import Image from "next/image";
import { useState } from "react";
import IconButton from "../../IconButton/IconButton";
import LikeButton from "../../LikeButton/LikeButton";

interface EvaluationProps {
  content?: string;
}

const EvaluationCard = ({ content }: EvaluationProps) => {
  const [count, setCount] = useState<number>(0);
  const [isLike, setIsLike] = useState<boolean>(false);
  const changeIsLike = (isLike: boolean) => {
    setIsLike(!isLike);
    setCount(count + 1);
    if (isLike) setCount(count - 1);
  };
  return (
    <div className="w-[405px] min-h-[290px] bg-[#FFF] border border-solid rounded-[18px] mb-[30px] font-Pretendard font-medium">
      <div className="mt-[25px] ml-[14px] mr-[12px] w-auto">
        <div className="mb-[14px]">
          <div className="flex ">
            <div className="flex flex-row items-center flex-grow gap-x-[10px]">
              <Image
                src={Profile}
                alt="프로필"
                width={40}
                height={40}
                priority
              />
              <div className="font-medium text-[20px]">이름</div>
            </div>
            <div className="w-[68px] h-[33px] bg-[#FBF7F0] border border-[#624E45] border-solid rounded-[16px] px-[9px] flex items-center font-Intel font-medium text-[18px] text-[#80685D]">
              <Star />
              <div className="ml-[3px]">4.5</div>
            </div>
          </div>
        </div>
        <hr className="w-full border border-[#E4E4E4] mt-[8px] mb-[16px]" />
        <div className="font-regular text-[20px] min-h-[112px]">{content}</div>
        <div className="flex flex-row">
          <div>
            <div className="flex flex-col justify-start">
              <div className="flex flex-row mt-[18px] ml-[7px]">
                <IconButton onClick={() => changeIsLike(isLike)}>
                  {isLike ? (
                    <LikeSpeechBubble width={16} height={15} />
                  ) : (
                    <NotLike width={16} height={15} />
                  )}
                </IconButton>
                <div className="font-Intel font-medium text-[17px] ml-[5px]">
                  {count > 999 ? "999+" : count}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full border border-[#E3E3E3] mt-[5px] mb-[10px]" />
        <div className="flex justify-start mb-[11px]">
          <LikeButton isLike={isLike} onClick={() => changeIsLike(isLike)} />
        </div>
      </div>
    </div>
  );
};

export default EvaluationCard;
