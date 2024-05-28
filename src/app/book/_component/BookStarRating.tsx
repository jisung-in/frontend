import BigStar from "@/assets/img/big-star.svg";
import EmptyStar from "@/assets/img/empty-star.svg";
import HalfStar from "@/assets/img/half-star.svg";
import { useCreateStarRating } from "@/hook/reactQuery/book/useCreateStarRating";
import { useDeleteStarRating } from "@/hook/reactQuery/book/useDeleteStarRating";
import { useGetStarRating } from "@/hook/reactQuery/book/useGetStarRating";
import { usePatchStarRating } from "@/hook/reactQuery/book/usePatchStarRating";
import { useEffect, useState } from "react";

type Isbn = {
  isbn: string;
  ratingAverage: number;
  onTotalRatingChange: () => void;
};

const BookStarRating = ({ isbn, ratingAverage, onTotalRatingChange }: Isbn) => {
  const [starRate, setStarRate] = useState<number>(0);
  const [myStarRate, setMyStarRate] = useState<number>(0);
  const [evaluate, setEvaluate] = useState<string>("평가하기");
  const { data: getStarRating, refetch: refetchStarRating } =
    useGetStarRating(isbn);
  const createStarRating = useCreateStarRating();
  const deleteStarRating = useDeleteStarRating();

  useEffect(() => {
    getStarRating && setMyStarRate(getStarRating.rating);
  }, [getStarRating]);

  const patchStarRating = usePatchStarRating(getStarRating?.id || 0);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    const half = e.nativeEvent.offsetX + index < 27.5;
    setStarRate(index + (half ? 0.5 : 1));
  };
  const saveMyStarRate = async () => {
    if (myStarRate === starRate) {
      setMyStarRate(0);
      if (getStarRating?.id) {
        await deleteStarRating.mutateAsync(getStarRating?.id);
        await refetchStarRating(); // 별점 삭제 후 다시 불러오기
        onTotalRatingChange(); // 평균 별점 변경 이벤트 호출
      }
    } else {
      setMyStarRate(starRate);
      if (getStarRating?.id) {
        await patchStarRating.mutateAsync({ bookIsbn: isbn, rating: starRate });
        await refetchStarRating(); // 별점 수정 후 다시 불러오기
        onTotalRatingChange(); // 평균 별점 변경 이벤트 호출
      } else {
        await createStarRating.mutateAsync({
          bookIsbn: isbn,
          rating: starRate,
        });
        await refetchStarRating(); // 별점 생성 후 다시 불러오기
        onTotalRatingChange(); // 평균 별점 변경 이벤트 호출
      }
    }
  };

  useEffect(() => {
    if (myStarRate === 0) {
      setEvaluate("평가하기");
    }
    if (myStarRate === 0.5) {
      setEvaluate("최악이에요");
    }
    if (myStarRate === 1.0) {
      setEvaluate("싫어요");
    }
    if (myStarRate === 1.5) {
      setEvaluate("재미없어요");
    }
    if (myStarRate === 2.0) {
      setEvaluate("별로에요");
    }
    if (myStarRate === 2.5) {
      setEvaluate("부족해요");
    }
    if (myStarRate === 3.0) {
      setEvaluate("보통이에요");
    }
    if (myStarRate === 3.5) {
      setEvaluate("볼만해요");
    }
    if (myStarRate === 4.0) {
      setEvaluate("재미있어요");
    }
    if (myStarRate === 4.5) {
      setEvaluate("훌륭해요!");
    }
    if (myStarRate === 5.0) {
      setEvaluate("최고에요!");
    }
  }, [myStarRate]);

  const handleMouseLeave = () => {
    setStarRate(0);
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
  const isMyStarRate = (index: number) => {
    if (myStarRate >= index + 1) {
      return <BigStar />;
    } else if (myStarRate >= index + 0.5) {
      return <HalfStar />;
    } else {
      return <EmptyStar />;
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row">
          {Array(5)
            .fill(1)
            .map((_, index: number) => {
              const hoverValue = index + 1;
              const showBalloon =
                myStarRate !== 0 &&
                myStarRate === starRate &&
                hoverValue === Math.ceil(myStarRate);
              return (
                <div
                  key={index}
                  className="cursor-pointer relative"
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onClick={saveMyStarRate}
                >
                  {showBalloon && (
                    <>
                      <div className="absolute w-[65px] text-center bottom-full left-1/2 transform -translate-x-1/2 bg-[#624E45] text-white text-sm px-2 py-1 rounded-md">
                        취소하기
                      </div>
                      <div className="absolute w-0 h-0 border-8 border-solid border-[#624E45] border-t-[10px] border-r-transparent border-b-transparent border-l-transparent left-[70%] transform -translate-x-1/2"></div>
                    </>
                  )}
                  {myStarRate ? isMyStarRate(index) : noneMyStarRate(index)}
                </div>
              );
            })}
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
    </>
  );
};

export default BookStarRating;
