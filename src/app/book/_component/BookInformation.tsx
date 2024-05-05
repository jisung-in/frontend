import BigStar from "@/assets/img/big-star.svg";
import EmptyStar from "@/assets/img/empty-star.svg";
import HalfStar from "@/assets/img/half-star.svg";
import PasueOn from "@/assets/img/pasue-on.svg";
import PasueOff from "@/assets/img/pause-off.svg";
import ReadOff from "@/assets/img/read-off.svg";
import ReadOn from "@/assets/img/read-on.svg";
import ReadStopOff from "@/assets/img/read-stop-off.svg";
import ReadStopOn from "@/assets/img/read-stop-on.svg";
import ReadingOff from "@/assets/img/reading-off.svg";
import ReadingOn from "@/assets/img/reading-on.svg";
import WantToReadOff from "@/assets/img/want-to-read-off.svg";
import WantToReadOn from "@/assets/img/want-to-read-on.svg";
import { useCreateBookState } from "@/hook/reactQuery/book/useCreateBookState";
import { useGetBookInformation } from "@/hook/reactQuery/book/useGetBookInformation";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Isbn {
  isbn: string;
}

const BookInformation: React.FC<Isbn> = ({ isbn }) => {
  const [starRate, setStarRate] = useState<number>(0);
  const [myStarRate, setMyStarRate] = useState<number>(0);
  const [status, setStatus] = useState<string>("");
  const [evaluate, setEvaluate] = useState<string>("평가하기");
  const { data: bookDetailData } = useGetBookInformation({ isbn });
  const { mutate } = useCreateBookState(String(isbn));
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  const changeStatus = (statusName: string) => {
    setStatus(statusName === status ? "" : statusName);
    mutate({ isbn: String(isbn), readingStatus: status });
  };

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
  }, [myStarRate, status]);

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
      {bookDetailData && (
        <div className="flex flex-row mt-[22px] mb-[96px] w-[1680px]">
          <div className="flex">
            <Image
              className="min-w-[363px] min-h-[469px] max-w-[363px] max-h-[469px] mr-[37px]"
              src={bookDetailData.thumbnail}
              alt="책표지"
              width={363}
              height={469}
            />
          </div>
          <div className="flex flex-col grow justify-start font-Pretendard font-medium">
            <div className="flex flex-row items-center mt-[30px] gap-x-[220px]">
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
                          {myStarRate
                            ? isMyStarRate(index)
                            : noneMyStarRate(index)}
                        </div>
                      );
                    })}
                </div>
                <div className="text-base text-[#B1B1B1] mt-1.5 mb-[27px]">
                  {evaluate}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-Inter text-[44px]">
                  {bookDetailData.ratingAverage}
                </div>
                <div className="text-base text-[#B1B1B1] mt-1.5 mb-[27px]">
                  평균별점
                </div>
              </div>
            </div>

            <div className="mb-[9px] font-semibold text-[40px]">
              {bookDetailData.title}
            </div>

            <div className="font-Inter flex flex-row gap-x-[29px] text-2xl text-[#656565] mb-[41px]">
              <div>{bookDetailData.publisher}</div>
              <div>{bookDetailData.authors.join(", ")}</div>
              <div>{bookDetailData.dateTime.slice(0, 4)}</div>
            </div>

            <div className="text-xl text-[#656565] w-[680px] overflow-hidden">
              {expanded ? (
                <>
                  {bookDetailData.content}
                  <div className="flex justify-end">
                    <button className="font-semibold" onClick={toggleExpand}>
                      접기
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {bookDetailData.content.length > 200 ? (
                    <>
                      {bookDetailData.content.slice(0, 200)}
                      {"... "}
                      <div className="flex justify-end">
                        <button
                          className="font-semibold"
                          onClick={toggleExpand}
                        >
                          더 보기
                        </button>
                      </div>
                    </>
                  ) : (
                    bookDetailData.content
                  )}
                </>
              )}
            </div>
          </div>

          <div className="w-full flex flex-row gap-x-[26px] justify-end">
            <div
              className="cursor-pointer"
              onClick={() => changeStatus("want")}
            >
              {status === "want" ? <WantToReadOn /> : <WantToReadOff />}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => changeStatus("reading")}
            >
              {status === "reading" ? <ReadingOn /> : <ReadingOff />}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => changeStatus("read")}
            >
              {status === "read" ? <ReadOn /> : <ReadOff />}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => changeStatus("pause")}
            >
              {status === "pause" ? <ReadStopOn /> : <ReadStopOff />}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => changeStatus("stop")}
            >
              {status === "stop" ? <PasueOn /> : <PasueOff />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookInformation;
