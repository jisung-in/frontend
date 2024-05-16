import BigStar from "@/assets/img/big-star.svg";
import EmptyStar from "@/assets/img/empty-star.svg";
import HalfStar from "@/assets/img/half-star.svg";
import { useEffect, useState } from "react";

const BookStarRating = () => {
  const [starRate, setStarRate] = useState<number>(0);
  const [myStarRate, setMyStarRate] = useState<number>(0);
  const [evaluate, setEvaluate] = useState<string>("평가하기");

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    const half = e.nativeEvent.offsetX + index < 27.5;
    setStarRate(index + (half ? 0.5 : 1));
  };
  const saveMyStarRate = () => {
    if (myStarRate === starRate) {
      return setMyStarRate(0);
    }
    return setMyStarRate(starRate);
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
    </>
  );
};

export default BookStarRating;
