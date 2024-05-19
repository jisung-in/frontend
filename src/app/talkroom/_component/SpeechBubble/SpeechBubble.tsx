import LikeSpeechBubble from "@/assets/img/like-speech-bubble.svg";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import { useCreateCommentLike } from "@/hook/reactQuery/talkRoom/useCreateCommentLike";
import { useDeleteCommentLike } from "@/hook/reactQuery/talkRoom/useDeleteCommentLike";
import timeLapse from "@/util/timeLapse";
import Image from "next/image";
import { useState } from "react";
import IconButton from "../../../components/IconButton/IconButton";
import LikeButton from "../../../components/LikeButton/LikeButton";

interface SpeechBubbleProps {
  data: {
    commentId: number;
    userName: string;
    content: string;
    commentLikeCount: number;
    createTime: string;
  };
  isLike: boolean;
}

const SpeechBubble = ({ data, isLike: initailIsLike }: SpeechBubbleProps) => {
  const [count, setCount] = useState<number>(data.commentLikeCount);
  const [isLike, setIsLike] = useState<boolean>(initailIsLike);
  const createCommentLike = useCreateCommentLike(data.commentId);
  const deleteCommentLike = useDeleteCommentLike(data.commentId);

  const changeIsLike = () => {
    if (isLike) {
      deleteCommentLike.mutate();
      setCount((prevCount) => prevCount - 1);
    } else {
      createCommentLike.mutate();
      setCount((prevCount) => prevCount + 1);
    }
    setIsLike(!isLike);
  };
  return (
    <div className="relative bg-[white] rounded-[15px] mb-[97px] font-Pretendard font-regular border border-[#F4E4CE]">
      <div className="pt-[20px] pb-[12px] mx-[20px]">
        <div className="flex items-center mb-4">
          <div className="flex grow items-center">
            <Image src={Profile} alt="프로필" width={40} height={40} priority />
            <div>
              <div className="font-medium text-[20px] ml-[6px]">
                {data.userName}
              </div>
            </div>
          </div>
          <div className="text-[#17px] text-[#7E7E7E]">
            {timeLapse(data.createTime)}
          </div>
        </div>
        <div className="text-[20px] text-[#000]">{data.content}</div>
        <div className="flex gap-x-[10px] mb-[18px]">
          {/* {new Array(3).fill(1).map((index: number) => (
            <div
              key={"img" + index}
              className="bg-[#D9D9D9] w-[120px] h-[120px] border border-solid border-[#FBF7F0] rounded-[4px]"
            />
          ))} */}
        </div>
        <div className="flex flex-col">
          <hr className="border-2 border-solid border-[#FBF7F0] mb-[9px]" />
          <div className="flex grow items-center font-medium text-[17px] text-[#656565]">
            <div className="mr-[13px]">
              <LikeButton isLike={isLike} onClick={changeIsLike} />
            </div>
            <div className="flex items-center gap-x-[3px]">
              <IconButton onClick={changeIsLike}>
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
      <div className="skew-x-[-30deg] absolute bottom-[-65px] left-[6%] border-solid border-transparent border-[70px] border-[#F4E4CE] border-t-[white] border-l-0 border-b-0 border-r-[80px]" />
    </div>
  );
};

export default SpeechBubble;
