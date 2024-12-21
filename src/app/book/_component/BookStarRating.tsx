import EmptyStar from "@/assets/img/empty-star.svg";
import FullStar from "@/assets/img/full-star.svg";
import HalfStar from "@/assets/img/half-star.svg";
import { useCreateStarRating } from "@/hook/reactQuery/book/useCreateStarRating";
import { useDeleteStarRating } from "@/hook/reactQuery/book/useDeleteStarRating";
import { useGetStarRating } from "@/hook/reactQuery/book/useGetStarRating";
import { usePatchStarRating } from "@/hook/reactQuery/book/usePatchStarRating";
import { useLogin } from "@/hook/useLogin";
import { useQueryClient } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import CancelStarRateMessage from "./CancelStarRateMessage";

const Modal = dynamic(() => import("@/app/components/Modal/Modal"));

type BookStarRatingCondition = {
  isbn: string;
  ratingAverage: number;
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

const BookStarRating = ({ isbn, ratingAverage }: BookStarRatingCondition) => {
  const { isLoggedIn } = useLogin();
  const [starRate, setStarRate] = useState<number>(0);
  const [myStarRate, setMyStarRate] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [evaluate, setEvaluate] = useState<string>("평가하기");
  const { data: getStarRating, refetch: refetchStarRating } =
    useGetStarRating(isbn);
  const createStarRating = useCreateStarRating();
  const deleteStarRating = useDeleteStarRating();
  const query = useQueryClient();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    getStarRating && setMyStarRate(getStarRating.rating);
  }, [getStarRating]);

  const patchStarRating = usePatchStarRating(getStarRating?.id || 0);

  const mouseMove = useCallback(
    debounce((index: number, isLeftSide: boolean) => {
      const rating = index + (isLeftSide ? 0.5 : 1);
      setStarRate(rating);
    }, 30), // 0.03초 디바운스 설정
    [],
  );

  const mouseLeave = () => {
    setStarRate(0);
  };

  const clickStarRate = useCallback(
    debounce(async (index: number, isHalf: boolean) => {
      const starRating = index + (isHalf ? 0.5 : 1);
      if (isLoggedIn) {
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
        await refetchStarRating();
        query.invalidateQueries({
          queryKey: ["book-information", { isbn }],
        });
      } else {
        setShowModal(true);
      }
    }, 300), // 0.3초 디바운스 설정
    [
      isLoggedIn,
      myStarRate,
      getStarRating,
      createStarRating,
      deleteStarRating,
      patchStarRating,
      refetchStarRating,
      isbn,
    ],
  );

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
      return <FullStar />;
    } else if (myStarRate >= index + 0.5) {
      return <HalfStar />;
    } else {
      return <EmptyStar />;
    }
  };

  const noneMyStarRate = (index: number) => {
    if (starRate >= index + 1) {
      return <FullStar />;
    } else if (starRate >= index + 0.5) {
      return <HalfStar />;
    } else {
      return <EmptyStar />;
    }
  };

  return (
    <>
      {isClient ? (
        <>
          <div className="flex flex-row items-cemter md:flex-col-reverse sm:flex-col-reverse md:gap-5 sm:gap-5 gap-10">
            <div className="flex flex-col">
              <div className="flex">
                {Array(5)
                  .fill(1)
                  .map((_, index: number) => (
                    <div
                      key={index}
                      className="relative"
                      onMouseLeave={mouseLeave}
                    >
                      <div
                        className="absolute left-0 top-0 w-1/2 h-full cursor-pointer z-10"
                        onClick={() => clickStarRate(index, true)}
                        onMouseMove={() => mouseMove(index, true)}
                      />
                      <div
                        className="absolute right-0 top-0 w-1/2 h-full cursor-pointer z-10"
                        onClick={() => clickStarRate(index, false)}
                        onMouseMove={() => mouseMove(index, false)}
                      />
                      {cancelMessage(index) && <CancelStarRateMessage />}
                      {myStarRate ? myStarRating(index) : noneMyStarRate(index)}
                    </div>
                  ))}
              </div>
              <span className="2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs text-[#B1B1B1] mt-4 xl:mt-[18px] 2xl:mt-[19px] sm:text-center md:text-center">
                {evaluate}
              </span>
            </div>

            <p className="flex flex-col items-center">
              <span className="font-Inter 2xl:text-[44px] xl:text-[40px] lg:text-[36px] md:text-[32px] sm:text-[28px]">
                {ratingAverage
                  ? ratingAverage.toFixed(1).toString()
                  : (0).toFixed(1).toString()}
              </span>
              <span className="2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs text-[#B1B1B1]">
                평균별점
              </span>
            </p>
          </div>
          {!isLoggedIn && (
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
      ) : (
        <>별점 불러오는 중...</>
      )}
    </>
  );
};

export default BookStarRating;
