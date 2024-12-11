import DeleteButton from "@/app/components/DeleteButton/DeleteButton";
import MyBubbleArrow from "@/assets/img/my-bubble-arrow.svg";
import NoData from "@/assets/img/no-data.png";
import Profile from "@/assets/img/profile.png";
import { useDeleteComment } from "@/hook/reactQuery/talkRoom/useDeleteComment";
import timeLapse from "@/util/timeLapse";
import { Heart } from "lucide-react";
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
  const [showFailLikeModal, setShowFailLikeModal] = useState<boolean>(false);
  const [deleteShowModal, setDeleteShowModal] = useState<boolean>(false);
  const deleteComment = useDeleteComment();

  useEffect(() => {
    setCount(data.commentLikeCount);
  }, [data.commentLikeCount]);

  const closeModal = () => {
    showFailLikeModal ? setShowFailLikeModal(false) : setDeleteShowModal(false);
  };

  const deleteMyComment = () => {
    deleteComment.mutate(data.commentId, {
      onSuccess: () => {
        window.location.reload();
      },
    });
  };

  return (
    <div className="relative bg-[#F3F3F3] rounded-2xl mb-24 font-Pretendard font-regular border border-[#80685D]">
      <div className="flex flex-col pt-5 pb-3 mx-5">
        <div className="flex items-center mb-4">
          <p className="flex grow items-center">
            <Image
              className="2xl:size-10 xl:size-8 size-6 sm:size-5 rounded-[50%]"
              src={data.profileImage ? data.profileImage : Profile}
              alt="프로필"
              width={40}
              height={40}
              priority
            />
            <span className="font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl ml-[6px]">
              {data.userName}
            </span>
          </p>
          <span className="sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-[#7E7E7E]">
            {timeLapse(data.registeredDateTime)}
          </span>
        </div>

        <span className="sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#000] mb-[34px]">
          {data.content}
        </span>

        <div className="flex flex-wrap gap-3 mb-4">
          {data.commentImages.length > 0 &&
            data.commentImages[0] !== "" &&
            data.commentImages.map((image: string) =>
              image === "" ? (
                <Image
                  key={image}
                  className="size-30 border border-solid border-[#FBF7F0] rounded-[4px]"
                  width={120}
                  height={120}
                  src={NoData}
                  alt="엑박 이미지"
                />
              ) : (
                <Image
                  key={image}
                  className="size-30 border border-solid border-[#FBF7F0] rounded-[4px]"
                  width={120}
                  height={120}
                  src={image}
                  alt="댓글 이미지"
                />
              ),
            )}
        </div>

        <hr className="border-2 border-solid border-[#FFF] mb-2" />

        <div className="flex flex-col">
          <div className="flex grow items-center font-medium text-base sm:text-sm text-[#656565]">
            <div className="mr-3 md:mr-2 sm:mr-1">
              <LikeButton
                isLike={false}
                onClick={() => setShowFailLikeModal(true)}
              />
            </div>
            <p className="flex items-center gap-x-0.5 grow">
              <IconButton onClick={() => setShowFailLikeModal(true)}>
                <Heart className="size-4" stroke="#656565" />
              </IconButton>
              <span className="font-Inter font-medium font-[17px]">
                {count > 999 ? "999+" : count}
              </span>
            </p>
            <DeleteButton onClick={() => setDeleteShowModal(true)} />
          </div>
        </div>
      </div>

      <div className="absolute right-[5%] bottom-[-43.1px] w-[87px] h-[52px]">
        <MyBubbleArrow />
      </div>

      <Modal
        title="좋아요 실패"
        content="본인이 작성한 의견에는 좋아요를 할 수 없습니다"
        isOpen={showFailLikeModal}
        onClose={closeModal}
        onConfirm={closeModal}
        buttonTitle="확인"
      />
      <Modal
        title="의견 삭제"
        content="내 의견을 삭제하시겠습니까?"
        isOpen={deleteShowModal}
        onClose={closeModal}
        onConfirm={deleteMyComment}
        buttonTitle="삭제"
      />
    </div>
  );
};

export default SpeechBubble;
