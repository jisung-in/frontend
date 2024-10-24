import BubbleArrow from "@/assets/img/bubble-arrow.svg";
import LikeSpeechBubble from "@/assets/img/like-speech-bubble.svg";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import { useCreateCommentLike } from "@/hook/reactQuery/talkRoom/useCreateCommentLike";
import { useDeleteCommentLike } from "@/hook/reactQuery/talkRoom/useDeleteCommentLike";
import timeLapse from "@/util/timeLapse";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import IconButton from "../../../components/IconButton/IconButton";
import LikeButton from "../../../components/LikeButton/LikeButton";

const Modal = dynamic(() => import("@/app/components/Modal/Modal"));

interface SpeechBubbleProps {
  data: {
    commentId: number;
    userName: string;
    profileImage: string;
    content: string;
    commentLikeCount: number;
    commentImages: string[];
    registeredDateTime: string;
    creatorId: number;
  };
  userId: number;
  isLike: boolean;
}
const SpeechBubble = ({
  data,
  userId,
  isLike: initialIsLike,
}: SpeechBubbleProps) => {
  const [count, setCount] = useState<number>(data.commentLikeCount);
  const [isLike, setIsLike] = useState<boolean>(initialIsLike);
  const createCommentLike = useCreateCommentLike();
  const deleteCommentLike = useDeleteCommentLike();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setCount(data.commentLikeCount);
    setIsLike(initialIsLike);
  }, [data.commentLikeCount, initialIsLike]);

  const changeIsLike = () => {
    if (userId === -1 || data.creatorId === userId) {
      setShowModal(true);
      return;
    }
    if (isLike) {
      deleteCommentLike.mutate(data.commentId);
      setCount((prevCount) => prevCount - 1);
    } else {
      createCommentLike.mutate(data.commentId);
      setCount((prevCount) => prevCount + 1);
    }
    setIsLike(!isLike);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="relative bg-[#fff] rounded-[15px] mb-[97px] font-Pretendard font-regular border border-[#F4E4CE]">
      <div className="pt-[20px] pb-[12px] mx-[20px]">
        <div className="flex items-center mb-4">
          <div className="flex grow items-center">
            <Image
              className="min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] rounded-[50%]"
              src={data.profileImage ? data.profileImage : Profile}
              alt="프로필"
              width={40}
              height={40}
              priority
            />
            <div>
              <div className="font-medium text-[20px] ml-[6px]">
                {data.userName}
              </div>
            </div>
          </div>
          <div className="text-[#17px] text-[#7E7E7E]">
            {timeLapse(data.registeredDateTime)}
          </div>
        </div>
        <div className="text-[20px] text-[#000] mb-[34px]">{data.content}</div>
        <div className="flex gap-x-[10px] mb-[18px]">
          {data.commentImages.length > 0 &&
            data.commentImages.map((image: string) => (
              <Image
                className="min-w-[120px] max-w-[120px] min-h-[120px] max-h-[120px] border border-solid border-[#FBF7F0] rounded-[4px]"
                width={120}
                height={120}
                src={image}
                alt="댓글 이미지"
              />
            ))}
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
      <div className="absolute left-[5%] bottom-[-48.8px] w-[87px] h-[52px]">
        <BubbleArrow />
      </div>

      {userId === -1 && (
        <Modal
          title="로그인"
          content="로그인을 해야 이용할 수 있는 기능입니다"
          isOpen={showModal}
          onClose={closeModal}
          onConfirm={closeModal}
          buttonTitle="확인"
        />
      )}
    </div>
  );
};

export default SpeechBubble;
