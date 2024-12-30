import BubbleArrow from "@/assets/img/bubble-arrow.svg";
import NoData from "@/assets/img/no-data.png";
import Profile from "@/assets/img/profile.png";
import { useCreateCommentLike } from "@/hook/reactQuery/talkRoom/useCreateCommentLike";
import { useDeleteCommentLike } from "@/hook/reactQuery/talkRoom/useDeleteCommentLike";
import timeLapse from "@/util/timeLapse";
import debounce from "lodash.debounce";
import { Heart } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
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

  const changeIsLike = useCallback(
    debounce(() => {
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
    }, 300), // 0.3초 디바운스 설정
    [userId, isLike, deleteCommentLike, createCommentLike],
  );

  const closeModal = () => setShowModal(false);

  return (
    <div className="relative bg-[#fff] rounded-2xl mb-24 font-Pretendard font-regular border border-[#F4E4CE]">
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

        <hr className="border-2 border-solid border-[#FBF7F0] mb-2" />

        <div className="flex grow items-center font-medium text-base sm:text-sm text-[#656565]">
          <div className="mr-3 md:mr-2 sm:mr-1">
            <LikeButton isLike={isLike} onClick={changeIsLike} />
          </div>
          <p className="flex items-center gap-x-0.5">
            <IconButton onClick={changeIsLike}>
              {isLike ? (
                <Heart className="size-4" fill="#80685D" stroke="#80685D" />
              ) : (
                <Heart className="size-4" stroke="#656565" />
              )}
            </IconButton>
            <span className="font-Inter font-medium font-[17px]">
              {count > 999 ? "999+" : count}
            </span>
          </p>
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
