import LikeSpeechBubble from "@/assets/img/like-speech-bubble.svg";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import Star from "@/assets/img/star.svg";
import Image from "next/image";
import { useState } from "react";
import { CardFooterMain } from "../../CardFooter/CardFooter";
import { CardHeaderMain } from "../../CardHeader/CardHeader";
import IconButton from "../../IconButton/IconButton";
import LikeButton from "../../LikeButton/LikeButton";
import { CardMain } from "../Card";

interface EvaluationProps {
  id: number;
  image: string;
  starRate: number;
  userName: string;
  comment: string;
  like: number;
}

const EvaluationCard: React.FC<{ data: EvaluationProps }> = ({ data }) => {
  const [count, setCount] = useState<number>(data.like);
  const [isLike, setIsLike] = useState<boolean>(false);
  const changeIsLike = (isLike: boolean) => {
    setIsLike(!isLike);
    setCount(count + 1);
    if (isLike) setCount(count - 1);
  };
  return (
    <div
      key={data.id}
      className="w-[910px] min-h-[320px] bg-[#FFF] rounded-[18px] mb-[30px] shadow-lg shadow-[#E7E7E7]"
    >
      <div className="mt-[20px] ml-[30px] mr-[26px] w-auto">
        <CardMain>
          <CardHeaderMain className="mb-[23px]">
            <CardHeaderMain.Profile>
              <Image
                src={Profile}
                alt="프로필"
                width={40}
                height={40}
                priority
              />
            </CardHeaderMain.Profile>
            <CardHeaderMain.Name>
              <div className="text-[20px] ml-[10px]">{data.userName}</div>
            </CardHeaderMain.Name>
            <CardHeaderMain.StarRating>
              <div className="w-[51px] h-[24px] mx-[8px] my-[4px] flex items-center font-Inter font-medium text-[18px] text-[#80685D] gap-x-[3px] justify-center">
                <Star />
                <div className="flex grow justify-center items-center">
                  {data.starRate}
                </div>
              </div>
            </CardHeaderMain.StarRating>
          </CardHeaderMain>
          <CardMain.Review>
            <div className="min-h-[112px]">{data.comment}</div>
          </CardMain.Review>
          <CardFooterMain className="flex flex-row">
            <CardFooterMain.LikeNumbers>
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
            </CardFooterMain.LikeNumbers>
          </CardFooterMain>
        </CardMain>
        <hr className="w-full border border-[#F4E4CE] mt-[8px] mb-[16px]" />
        <div className="flex justify-start mb-[19px]">
          <LikeButton isLike={isLike} onClick={() => changeIsLike(isLike)} />
        </div>
      </div>
    </div>
  );
};

export default EvaluationCard;
