import LikeSpeechBubble from "@/assets/img/like-speech-bubble.svg";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import Star from "@/assets/img/star.svg";
import { useCreateReviewLike } from "@/hook/reactQuery/book/useCreateReviewLike";
import { useDeleteReview } from "@/hook/reactQuery/book/useDeleteReview";
import { useDeleteReviewLike } from "@/hook/reactQuery/book/useDeleteReviewLike";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import DeleteButton from "../../DeleteButton/DeleteButton";
import IconButton from "../../IconButton/IconButton";
import LikeButton from "../../LikeButton/LikeButton";

const Modal = dynamic(() => import("@/app/components/Modal/Modal"));

type UserEvaluation = {
  data: {
    reviewId: number;
    ratingId: number;
    creatorId: number;
    username: string;
    profileImage: string;
    reviewContent: string;
    starRating: number;
    likeCount: number;
  };
  userId: number;
  isLike: boolean;
};

const EvaluationCard: React.FC<UserEvaluation> = ({
  data,
  userId,
  isLike: initialIsLike,
}) => {
  const [count, setCount] = useState<number>(data.likeCount);
  const [isLike, setIsLike] = useState<boolean>(initialIsLike);
  const createReviewLike = useCreateReviewLike();
  const deleteReviewLike = useDeleteReviewLike();
  const deleteReview = useDeleteReview();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteShowModal, setDeleteShowModal] = useState<boolean>(false);

  useEffect(() => {
    setCount(data.likeCount);
    setIsLike(initialIsLike);
  }, [data.likeCount, initialIsLike]);

  const changeIsLike = () => {
    if (userId === -1) {
      setShowModal(!showModal);
    } else if (data.creatorId !== userId) {
      if (isLike) {
        deleteReviewLike.mutate(data.reviewId);
        setCount((prevCount) => prevCount - 1);
      } else {
        createReviewLike.mutate(data.reviewId);
        setCount((prevCount) => prevCount + 1);
      }
      setIsLike(!isLike);
    } else {
      setShowModal(!showModal);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const deleteMyReview = () => {
    deleteReview.mutate(data.reviewId, {
      onSuccess: () => {
        window.location.reload();
      },
    });
  };

  const closeDeleteShowModal = () => {
    setDeleteShowModal(!deleteShowModal);
  };

  return (
    <div className="w-[910px] min-h-[320px] bg-[#FFF] rounded-[18px] mb-[30px] border border-[#F4E4CE] font-Pretendard font-medium">
      <div className="mt-[20px] ml-[30px] mr-[26px] w-auto">
        <div className="flex flex-row mb-[23px]">
          <div className="flex flex-row items-center flex-grow gap-x-[10px]">
            <Image
              className="rounded-[50%]"
              src={data ? data.profileImage : Profile}
              alt="프로필"
              width={40}
              height={40}
              priority
            />
            <div className="font-medium text-[20px]">{data.username}</div>
          </div>
          {data.starRating ? (
            <div className="w-[68px] h-[33px] bg-[#FBF7F0] border border-[#624E45] border-solid rounded-[16px] px-[9px] flex items-center font-Inter font-medium text-[18px] text-[#80685D] gap-x-[3px] justify-center">
              <Star />
              <div className="flex grow justify-center items-center">
                {data.starRating.toFixed(1)}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="font-regular text-[20px] min-h-[112px]">
          {data.reviewContent}
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col justify-start">
            <div className="flex flex-row mt-[18px]">
              <IconButton onClick={changeIsLike}>
                {isLike ? (
                  <LikeSpeechBubble width={18} height={17} />
                ) : (
                  <NotLike width={18} height={17} />
                )}
              </IconButton>
              <div className="ml-[5px]">{count > 999 ? "999+" : count}</div>
            </div>
          </div>
        </div>

        <hr className="w-full border border-[#F4E4CE] mt-[8px] mb-[16px]" />

        <div className="flex">
          <div className="flex grow justify-start mb-[19px]">
            <LikeButton isLike={isLike} onClick={changeIsLike} />
          </div>
          <div>
            {data.creatorId === userId && (
              <DeleteButton onClick={closeDeleteShowModal} />
            )}
          </div>
        </div>
      </div>

      {userId === -1 ? (
        <Modal
          title="로그인"
          content="로그인을 해야 이용할 수 있는 기능입니다"
          isOpen={showModal}
          onClose={closeModal}
          onConfirm={closeModal}
          buttonTitle="확인"
        />
      ) : (
        <Modal
          title="좋아요 실패"
          content="본인이 작성한 평가에는 좋아요를 할 수 없습니다"
          isOpen={showModal}
          onClose={closeModal}
          onConfirm={closeModal}
          buttonTitle="확인"
        />
      )}
      <Modal
        title="한줄평 삭제"
        content="한줄평을 삭제하시겠습니까?"
        isOpen={deleteShowModal}
        onClose={closeDeleteShowModal}
        onConfirm={deleteMyReview}
        buttonTitle="삭제"
      />
    </div>
  );
};

export default EvaluationCard;
