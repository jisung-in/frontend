import DeleteButton from "@/app/components/DeleteButton/DeleteButton";
import LikeSpeechBubble from "@/assets/img/like-speech-bubble.svg";
import MyBubbleArrow from "@/assets/img/my-bubble-arrow.svg";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import { useDeleteComment } from "@/hook/reactQuery/talkRoom/useDeleteComment";
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
}

const SpeechBubble = ({ data }: SpeechBubbleProps) => {
  const [count, setCount] = useState<number>(data.commentLikeCount);
  const [isLike, setIsLike] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteShowModal, setDeleteShowModal] = useState<boolean>(false);
  const deleteComment = useDeleteComment();

  useEffect(() => {
    setCount(data.commentLikeCount);
  }, [data.commentLikeCount]);

  const closeModal = () => {
    setShowModal(!showModal);
  };

  const deleteMyComment = () => {
    deleteComment.mutate(data.commentId, {
      onSuccess: () => {
        window.location.reload();
      },
    });
  };

  const closeDeleteShowModal = () => {
    setDeleteShowModal(!deleteShowModal);
  };

  return (
    <div className="relative bg-[#F3F3F3] rounded-[15px] mb-[97px] font-Pretendard font-regular border border-[#80685D]">
      <div className="pt-[20px] pb-[12px] mx-[20px]">
        <div className="flex items-center mb-4">
          <div className="flex grow items-center">
            <Image
              className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-[50%]"
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
            data.commentImages[0] !== "" &&
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
          <hr className="border-2 border-solid border-[#FFF] mb-[9px]" />
          <div className="flex grow items-center font-medium text-[17px] text-[#656565]">
            <div className="mr-[13px]">
              <LikeButton isLike={isLike} onClick={closeModal} />
            </div>
            <div className="flex items-center gap-x-[3px] grow">
              <IconButton onClick={closeModal}>
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
            <DeleteButton onClick={closeDeleteShowModal} />
          </div>
        </div>
      </div>
      <div className="absolute right-[5%] bottom-[-43.1px] w-[87px] h-[52px]">
        <MyBubbleArrow />
      </div>

      <Modal
        title="좋아요 실패"
        content="본인이 작성한 의견에는 좋아요를 할 수 없습니다"
        isOpen={showModal}
        onClose={closeModal}
        onConfirm={closeModal}
        buttonTitle="확인"
      />
      <Modal
        title="의견 삭제"
        content="내 의견을 삭제하시겠습니까?"
        isOpen={deleteShowModal}
        onClose={closeDeleteShowModal}
        onConfirm={deleteMyComment}
        buttonTitle="삭제"
      />
    </div>
  );
};

export default SpeechBubble;
