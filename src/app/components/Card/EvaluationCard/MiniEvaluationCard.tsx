import Profile from "@/assets/img/profile.png";
import { useCreateReviewLike } from "@/hook/reactQuery/book/useCreateReviewLike";
import { useDeleteReview } from "@/hook/reactQuery/book/useDeleteReview";
import { useDeleteReviewLike } from "@/hook/reactQuery/book/useDeleteReviewLike";
import { Heart } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import DeleteButton from "../../DeleteButton/DeleteButton";
import IconButton from "../../IconButton/IconButton";
import LikeButton from "../../LikeButton/LikeButton";

const Modal = dynamic(() => import("../../Modal/Modal"));

type MiniEvaluationProps = {
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

const MiniEvaluationCard: React.FC<MiniEvaluationProps> = ({
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
    if (userId === -1 || data.creatorId === userId) {
      setShowModal(true);
      return;
    }
    if (isLike) {
      deleteReviewLike.mutate(data.reviewId);
      setCount((prevCount) => prevCount - 1);
    } else {
      createReviewLike.mutate(data.reviewId);
      setCount((prevCount) => prevCount + 1);
    }
    setIsLike(!isLike);
  };

  const closeModal = () => setShowModal(false);

  const deleteMyReview = () => {
    deleteReview.mutate(data.reviewId, {
      onSuccess: () => {
        window.location.reload();
      },
    });
  };

  const isDeleteShowModal = () => setDeleteShowModal(!deleteShowModal);

  return (
    <div className="w-full h-full 2xl:w-[425px] 2xl:h-[320px] xl:w-[385px] xl:h-[320px] lg:w-[340px] md:w-[340px] sm:min-w-[288px] bg-[#FFF] rounded-[18px] border border-[#F4E4CE] font-Pretendard font-medium">
      <div className="m-6 w-auto sm:m-4">
        <div className="flex flex-row mb-[23px]">
          <p className="flex flex-row items-center flex-grow gap-x-1 lg:gap-x-1.5 xl:gap-x-2 2xl:gap-x-2.5">
            <Image
              className="rounded-[50%] sm:size-5 md:size-6 lg:size-7 xl:size-8 2xl:size-10"
              src={data ? data.profileImage : Profile}
              alt="프로필"
              width={40}
              height={40}
              priority
            />
            <span className="font-bold sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              {data.username}
            </span>
          </p>
          {data.starRating && (
            <p className="2xl:w-24 2xl:h-10 bg-[#FBF7F0] border border-[#624E45] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl border-solid rounded-[24px] px-[9px] flex items-center font-Inter font-medium text-[#80685D] sm:gap-x-[1px] md:gap-x-[1px] lg:gap-x-[2px] xl:gap-x-[2px] 2xl:gap-x-[3px] justify-center">
              <span>★</span>
              <span>{data.starRating.toFixed(1)}</span>
            </p>
          )}
        </div>

        <p className="font-regular sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl min-h-[112px] sm:min-h-0 sm:max-h-[112px] overflow-hidden line-clamp-5">
          {data.reviewContent}
        </p>

        <div className="flex flex-col justify-start sm:hidden block">
          <p className="flex flex-row mt-7 2xl:mt-[18px]">
            <IconButton onClick={changeIsLike}>
              {isLike ? (
                <Heart className="size-4" fill="#80685D" stroke="#80685D" />
              ) : (
                <Heart className="size-4" stroke="#656565" />
              )}
            </IconButton>
            <span className="ml-[5px]">{count > 999 ? "999+" : count}</span>
          </p>
        </div>

        <hr className="w-full border border-[#F4E4CE] mt-2 mb-4 sm:mt-4" />

        <div className="flex flex-row">
          <div className="flex flex-row items-center grow justify-start">
            <LikeButton isLike={isLike} onClick={changeIsLike} />
            <div className="flex flex-col justify-start hidden sm:block ml-2">
              <p className="flex flex-row">
                <IconButton onClick={changeIsLike}>
                  {isLike ? (
                    <Heart className="size-4" fill="#80685D" stroke="#80685D" />
                  ) : (
                    <Heart className="size-4" stroke="#656565" />
                  )}
                </IconButton>
                <span className="text-sm ml-[5px]">
                  {count > 999 ? "999+" : count}
                </span>
              </p>
            </div>
          </div>

          <div>
            {data.creatorId === userId && (
              <DeleteButton onClick={isDeleteShowModal} />
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
        onClose={isDeleteShowModal}
        onConfirm={deleteMyReview}
        buttonTitle="삭제"
      />
    </div>
  );
};

export default MiniEvaluationCard;
