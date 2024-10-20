import BigStar from "@/assets/img/big-star.svg";
import EmptyStar from "@/assets/img/empty-star.svg";
import HalfStar from "@/assets/img/half-star.svg";
import { useCreateStarRating } from "@/hook/reactQuery/book/useCreateStarRating";
import { useDeleteStarRating } from "@/hook/reactQuery/book/useDeleteStarRating";
import { useGetStarRating } from "@/hook/reactQuery/book/useGetStarRating";
import { usePatchStarRating } from "@/hook/reactQuery/book/usePatchStarRating";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Modal = dynamic(() => import("@/app/components/Modal/Modal"));

type BookStarRatingCondition = {
  isbn: string;
  isLogin: boolean;
  ratingAverage: number;
  onTotalRatingChange: () => void;
};

const evaluationMap: { [key: number]: string } = {
  0: "평가하기",
  0.5: "최악이에요",
  1.0: "싫어요",
  1.5: "재미없어요",
  2.0: "별로에요",
  2.5: "부족해요",
  3.0: "보통이에요",
  3.5: "볼만해요",
  4.0: "재미있어요",
  4.5: "훌륭해요!",
  5.0: "최고에요!",
};

const BookStarRating = ({
  isbn,
  isLogin,
  ratingAverage,
  onTotalRatingChange,
}: BookStarRatingCondition) => {
  const [starRate, setStarRate] = useState<number>(0);
  const [myStarRate, setMyStarRate] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [evaluate, setEvaluate] = useState<string>("평가하기");
  const { data: getStarRating, refetch: refetchStarRating } =
    useGetStarRating(isbn);
  const createStarRating = useCreateStarRating();
  const deleteStarRating = useDeleteStarRating();

  useEffect(() => {
    getStarRating && setMyStarRate(getStarRating.rating);
  }, [getStarRating]);

  const patchStarRating = usePatchStarRating(getStarRating?.id || 0);

  const mouseMove = (index: number, isLeftSide: boolean) => {
    const rating = index + (isLeftSide ? 0.5 : 1);
    setStarRate(rating);
  };

  const mouseLeave = () => {
    setStarRate(0);
  };

  const clickStarRate = async (index: number, isHalf: boolean) => {
    const starRating = index + (isHalf ? 0.5 : 1);
    if (isLogin) {
      if (myStarRate === starRating) {
        setMyStarRate(0);
        setStarRate(0);
        if (getStarRating?.id) {
          await deleteStarRating.mutateAsync(getStarRating.id);
        }
      } else {
        setMyStarRate(starRating);
        setStarRate(starRating);
        if (getStarRating?.id) {
          await patchStarRating.mutateAsync({
            bookIsbn: isbn,
            rating: starRating,
          });
        } else {
          await createStarRating.mutateAsync({
            bookIsbn: isbn,
            rating: starRating,
          });
        }
      }
      onTotalRatingChange();
      await refetchStarRating();
    } else {
      setShowModal(true);
    }
  };

  useEffect(() => {
    setEvaluate(evaluationMap[myStarRate] || "평가하기");
  }, [myStarRate]);

  const cancelMessage = (index: number) => {
    const starRatingIndex = index + 1;
    return (
      myStarRate > 0 &&
      (myStarRate === starRatingIndex ||
        myStarRate === starRatingIndex - 0.5) &&
      starRate === myStarRate
    );
  };

  const myStarRating = (index: number) => {
    if (myStarRate >= index + 1) {
      return <BigStar />;
    } else if (myStarRate >= index + 0.5) {
      return <HalfStar />;
    } else {
      return <EmptyStar />;
    }
  };

  const noneMyStarRate = (index: number) => {
    if (starRate >= index + 1) {
      return <BigStar />;
    } else if (starRate >= index + 0.5) {
      return <HalfStar />;
    } else {
      return <EmptyStar />;
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          {Array(5)
            .fill(1)
            .map((_, index: number) => (
              <div key={index} className="relative" onMouseLeave={mouseLeave}>
                <div
                  className="absolute left-0 top-0 w-1/2 h-full cursor-pointer"
                  onClick={() => clickStarRate(index, true)}
                  onMouseMove={() => mouseMove(index, true)}
                />
                <div
                  className="absolute right-0 top-0 w-1/2 h-full cursor-pointer"
                  onClick={() => clickStarRate(index, false)}
                  onMouseMove={() => mouseMove(index, false)}
                />
                {cancelMessage(index) && (
                  <>
                    <div className="absolute w-[65px] text-center bottom-full left-1/2 transform -translate-x-1/2 bg-[#624E45] text-white text-sm px-2 py-1 rounded-md">
                      취소하기
                    </div>
                    <div className="absolute w-0 h-0 border-8 border-solid border-[#624E45] border-t-[10px] border-r-transparent border-b-transparent border-l-transparent left-[70%] transform -translate-x-1/2"></div>
                  </>
                )}
                {myStarRate ? myStarRating(index) : noneMyStarRate(index)}
              </div>
            ))}
        </div>
        <div className="text-base text-[#B1B1B1] mt-[15px]">{evaluate}</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-Inter text-[44px]">
          {ratingAverage
            ? ratingAverage.toFixed(1).toString()
            : (0).toFixed(1).toString()}
        </div>
        <div className="text-base text-[#B1B1B1]">평균별점</div>
      </div>
      {!isLogin && (
        <Modal
          title="로그인"
          content="로그인을 해야 이용할 수 있는 기능입니다"
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={() => setShowModal(false)}
          buttonTitle="확인"
        />
      )}
    </>
  );
};

export default BookStarRating;
