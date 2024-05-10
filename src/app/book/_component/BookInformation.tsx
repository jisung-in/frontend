import BigStar from "@/assets/img/big-star.svg";
import EmptyStar from "@/assets/img/empty-star.svg";
import HalfStar from "@/assets/img/half-star.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import BookStatus from "./BookStatus";

type BookInformation = {
  title: string;
  content: string;
  isbn: string;
  publisher: string;
  imageUrl: string;
  thumbnail: string;
  authors: string[];
  ratingAverage: number;
  dateTime: string;
};
type BookInformationProps = {
  data: BookInformation;
  isbn: string;
};

const BookInformation: React.FC<BookInformationProps> = ({ data, isbn }) => {
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
    <div className="flex flex-row mt-[22px] mb-[96px] w-[1680px]">
      <div className="flex">
        <Image
          className="min-w-[363px] min-h-[469px] max-w-[363px] max-h-[469px] mr-[37px]"
          src={data?.thumbnail}
          alt="책표지"
          width={363}
          height={469}
        />
      </div>
      <div className="flex flex-col grow justify-start font-Pretendard font-medium">
        <div className="flex flex-row items-center mt-[30px] gap-x-[70px]">
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
              {data?.ratingAverage
                ? parseFloat(data?.ratingAverage.toFixed(1))
                : (0).toFixed(1).toString()}
            </div>
            <div className="text-base text-[#B1B1B1]">평균별점</div>
          </div>

          <div className="w-full flex flex-row gap-x-[26px] justify-end">
            <BookStatus isbn={isbn} />
          </div>
        </div>
        <hr className="w-full border border-[#F4E4CE] mt-[18px] mb-[32px]" />
        <div className="flex flex-col">
          <div className="mb-[9px] font-semibold text-[40px]">
            {data?.title}
          </div>

          <div className="font-Inter flex flex-row gap-x-[29px] text-2xl text-[#656565] mb-[41px]">
            <div>{data?.publisher}</div>
            <div>{data?.authors.join(", ")}</div>
            <div>{data?.dateTime.slice(0, 4)}</div>
          </div>

          <div className="text-xl text-[#656565] yoverflow-hidden">
            {data?.content.slice(0, 400)} {"... "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInformation;
