import Crown from "@/assets/img/crown.svg";
import LikeSpeechBubble from "@/assets/img/like-speech-bubble.svg";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import Image from "next/image";
import { useState } from "react";
import IconButton from "../../../components/IconButton/IconButton";
import LikeButton from "../../../components/LikeButton/LikeButton";

interface SpeechBubbleProps {
  content?: string;
}

const SpeechBubble = ({ content }: SpeechBubbleProps) => {
  const [count, setCount] = useState<number>(0);
  const [isLike, setIsLike] = useState<boolean>(false);
  const changeIsLike = (isLike: boolean) => {
    setIsLike(!isLike);
    setCount(count + 1);
    if (isLike) setCount(count - 1);
  };
  return (
    <div className="relative bg-[white] rounded-[15px] mb-[97px] font-Pretendard font-regular">
      <div className="pt-[20px] pb-[12px] mx-[20px]">
        <div className="ml-2">
          <Crown />
        </div>
        <div className="flex items-center mb-4">
          <div className="flex grow items-center">
            <Image src={Profile} alt="프로필" width={40} height={40} priority />
            <div>
              <div className="flex flex-row items-center gap-x-[23px]">
                <div className="font-medium text-[20px] ml-[6px]">이름</div>
                <div className="flex items-center font-medium bg-transparent leading-none text-lg text-[#F24D4D] border-2 border-[#F24D4D] rounded-[4px] px-[6px]">
                  BEST
                </div>
              </div>
            </div>
          </div>
          <div className="text-[#17px] text-[#7E7E7E]">20시간 전</div>
        </div>
        <div className="text-[20px] text-[#000]">{content}</div>
        <div className="flex gap-x-[10px] mb-[18px]">
          {new Array(3).fill(1).map((index: number) => (
            <div
              key={index}
              className="bg-[#D9D9D9] w-[120px] h-[120px] border border-solid border-[#FBF7F0] rounded-[4px]"
            />
          ))}
        </div>
        <div className="flex flex-col">
          <hr className="border-2 border-solid border-[#FBF7F0] mb-[9px]" />
          <div className="flex grow items-center font-medium text-[17px] text-[#656565]">
            <div className="mr-[13px]">
              <LikeButton
                isLike={isLike}
                onClick={() => changeIsLike(isLike)}
              />
            </div>
            <div className="flex items-center gap-x-[3px]">
              <IconButton onClick={() => changeIsLike(isLike)}>
                {isLike ? (
                  <LikeSpeechBubble width={16} height={15} />
                ) : (
                  <NotLike width={16} height={15} />
                )}
              </IconButton>
              <div className="font-Inter font-medium font-[17px]">
                {count > 999 ? "999+" : count}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skew-x-[-30deg] absolute bottom-[-65px] left-[6%] border-solid border-transparent border-[70px] border-t-[white] border-l-0 border-b-0 border-r-[80px]" />
    </div>
  );
};

export default SpeechBubble;
