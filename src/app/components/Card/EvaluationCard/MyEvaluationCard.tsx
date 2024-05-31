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

  content: string;
  rating: number;
  title: string;
  userImage: string;
  bookImage: string;
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
    <div className="w-[100%] bg-[#FFF] shadow-lg shadow-[#E7E7E7] rounded-[11px] font-Pretendard font-medium">
      <div className="flex flex-col justify-between h-full p-[3%]">
        <div className="flex w-full flex-row items-center justify-between h-[80px]">
          <div className="flex items-center flex-grow gap-3">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src={data.userImage}
                alt="프로필"
                fill
                priority
                className="rounded-[50%]"
              />
            </div>
            <div className="font-medium text-[20px]">{data.userName}</div>
          </div>
          <div className="w-[68px] h-[33px] bg-[#FBF7F0] border border-[#624E45] border-solid rounded-[16px] px-[9px] flex items-center font-Inter font-medium text-[18px] text-[#80685D] gap-x-[3px] justify-center">
            <Star />
            <div className="flex grow justify-center items-center">
              {data.rating}
            </div>
          </div>
        </div>

        <div className="flex gap-8 py-[5%]">
          <Image
            className="w-[150px] h-[200px] sm:w-[80px] sm:h-[130px]"
            width={100}
            height={200}
            src={data.bookImage}
            alt="책 이미지"
          />
          <div className="flex flex-col w-[513px]">
            <div className="flex items-center gap-2">
              <BookTitle />
              <div className="font=semibold text-[22px]">책 제목</div>
            </div>
            <div className="flex items-center text-lg text-[#656565] gap-3">
              <div>저자</div>
              <div>출판사</div>
            </div>
            <div className="font-regular text-lg max-h-[115px] overflow-hidden">
              {data.content}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
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
          <hr className="w-full border border-[#E3E3E3]" />
          <div className="w-[80px]">
            <LikeButton isLike={isLike} onClick={() => changeIsLike(isLike)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEvaluationCard;
