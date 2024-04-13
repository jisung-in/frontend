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
import { useState } from "react";

const BookInformation = () => {
  const [starRate, setStarRate] = useState<number>(0);
  const [myStarRate, setMyStarRate] = useState<number>(0);
  const [previousRate, setPreviousRate] = useState<number>(0);
  const [status, setStatus] = useState<string>("");

  const changeStatus = (statusName: string) => {
    setStatus(statusName === status ? "" : statusName);
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    const half = e.nativeEvent.offsetX + index < 27.5;
    setStarRate(index + (half ? 0.5 : 1));
    setMyStarRate(index + (half ? 0.5 : 1));
  };

  const saveMyStarRate = () => {
    setMyStarRate(starRate);
    setPreviousRate(starRate);
  };

  const handleMouseLeave = () => {
    setStarRate(0);
    setMyStarRate(previousRate);
  };

  const calculateStarImage = (index: number) => {
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
      <div className="min-w-[363px] min-h-[469px] mr-[37px] bg-[#D9D9D9]" />

      <div className="flex flex-col flex-grow justify-start font-Pretendard font-medium">
        <div className="flex flex-row items-center mt-[30px] gap-x-[220px]">
          <div className="flex flex-col">
            <div className="flex flex-row">
              {new Array(5).fill(1).map((_, index: number) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onClick={saveMyStarRate}
                >
                  {calculateStarImage(index)}
                </div>
              ))}
            </div>
            <div className="text-[16px] text-[#B1B1B1] mt-[6px] mb-[27px]">
              평가해요
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-Inter text-[44px]">4.2</div>
            <div className="text-[16px] text-[#B1B1B1] mt-[6px] mb-[27px]">
              평균별점
            </div>
          </div>
        </div>

        <div className="mb-[9px] font-semibold text-[40px]">책 제목</div>

        <div className="font-Inter flex flex-row gap-x-[29px] text-[24px] text-[#656565] mb-[41px]">
          <div>출판사</div>
          <div>저자</div>
          <div>2024</div>
        </div>

        <div className="text-[20px] text-[#656565] w-[680px]">
          책 줄거리 책 줄거리 책 줄거리 책 줄거리 책 줄거리 책 줄거리 책 줄거리
          책 줄거리 책 줄거리 책 줄거리
        </div>
      </div>

      <div className="w-full flex flex-row gap-x-[26px] justify-end">
        <div
          className="cursor-pointer"
          onClick={() => changeStatus("wantToRead")}
        >
          {status === "wantToRead" ? <WantToReadOn /> : <WantToReadOff />}
        </div>
        <div className="cursor-pointer" onClick={() => changeStatus("reading")}>
          {status === "reading" ? <ReadingOn /> : <ReadingOff />}
        </div>
        <div className="cursor-pointer" onClick={() => changeStatus("read")}>
          {status === "read" ? <ReadOn /> : <ReadOff />}
        </div>
        <div className="cursor-pointer" onClick={() => changeStatus("pause")}>
          {status === "pause" ? <PasueOn /> : <PasueOff />}
        </div>
        <div
          className="cursor-pointer"
          onClick={() => changeStatus("readStop")}
        >
          {status === "readStop" ? <ReadStopOn /> : <ReadStopOff />}
        </div>
      </div>
    </div>
  );
};

export default BookInformation;
