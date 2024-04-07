import { CardMain } from "@/app/components/Card/Card";
import LikeSpeechBubble from "@/assets/img/like-speech-bubble.svg";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import Image from "next/image";
import { useState } from "react";
import { CardFooterMain } from "../../../components/CardFooter/CardFooter";
import { CardHeaderMain } from "../../../components/CardHeader/CardHeader";
import IconButton from "../../../components/IconButton/IconButton";
import LikeButton from "../../../components/LikeButton/LikeButton";
import { TalkCommentHeaderMain } from "../../../components/TalkCommentHeader/TalkCommentHeader";

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
    <div className="relative bg-white rounded-[15px] mb-[97px]">
      <div className="pt-[20px] pb-[12px] ml-[22px]">
        <TalkCommentHeaderMain>
          <TalkCommentHeaderMain.Numbering>
            1(넘버링)
          </TalkCommentHeaderMain.Numbering>
          <TalkCommentHeaderMain.TimesAgo>
            <div className="mr-[22px]">20시간 전</div>
          </TalkCommentHeaderMain.TimesAgo>
        </TalkCommentHeaderMain>
        <CardHeaderMain className="mb-[16px]">
          <CardHeaderMain.Profile>
            <Image src={Profile} alt="프로필" width={40} height={40} priority />
          </CardHeaderMain.Profile>
          <CardHeaderMain.Name>
            <div className="text-[20px] ml-[6px]">이름</div>
          </CardHeaderMain.Name>
        </CardHeaderMain>
        <CardMain.Opinion>{content}</CardMain.Opinion>
        <div className="flex gap-x-[10px] mb-[18px]">
          {new Array(3).fill(1).map((index: number) => (
            <div
              key={index}
              className="bg-[#D9D9D9] w-[120px] h-[120px] border border-solid border-[#FBF7F0] rounded-[4px]"
            />
          ))}
        </div>
        <CardFooterMain className="flex flex-row">
          <CardFooterMain.Line className="border-2 border-[#FBF7F0] mb-[9px] mr-[22px]" />
          <CardFooterMain.LikeNumbers>
            <div className="flex grow items-center">
              <IconButton onClick={() => changeIsLike(isLike)}>
                {isLike ? (
                  <LikeSpeechBubble width={16} height={15} />
                ) : (
                  <NotLike width={16} height={15} />
                )}
              </IconButton>
              <div className="ml-[5px]  basis-[40px]">
                {count > 999 ? "999+" : count}
              </div>
              <div className="ml-[11px]">
                <LikeButton
                  isLike={isLike}
                  onClick={() => changeIsLike(isLike)}
                />
              </div>
            </div>
          </CardFooterMain.LikeNumbers>
        </CardFooterMain>
      </div>
      <div className="skew-x-[-30deg] absolute bottom-[-65px] left-[6%] border-solid border-transparent border-[70px] border-t-white border-l-0 border-b-0 border-r-[80px]" />
    </div>
  );
};

export default SpeechBubble;
