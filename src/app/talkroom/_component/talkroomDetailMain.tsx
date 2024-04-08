import { BookMain } from "@/app/components/Book/Book";
import { CardMain } from "@/app/components/Card/Card";
import { CardHeaderMain } from "@/app/components/CardHeader/CardHeader";
import IconButton from "@/app/components/IconButton/IconButton";
import Like from "@/assets/img/like.svg";
import NotLike from "@/assets/img/not-like.svg";
import { useEffect, useState } from "react";
const talkroomDetailMain = () => {
  const [count, setCount] = useState<number>(0);
  const [isLike, setIsLike] = useState<boolean>(false);
  const changeIsLike = (isLike: boolean) => {
    setIsLike(!isLike);
    setCount(count + 1);
    if (isLike) setCount(count - 1);
  };
  const statuses: string[] = [
    "읽고 싶은",
    "읽는 중",
    "읽음",
    "잠시 멈춘",
    "중단",
    "상관없음",
  ];
  const goBack = () => {
    window.history.back();
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const router = require("next/router");

      if (router && router.events) {
        const handleRouteChange = () => {
          // 이벤트 핸들러
        };
        // route 변경 이벤트 리스너 등록
        router.events.on("routeChangeStart", handleRouteChange);

        // cleanup 함수 등록
        return () => {
          router.events.off("routeChangeStart", handleRouteChange);
        };
      }
    }
  }, []);
  return (
    <div className="w-full min-h-[831px] bg-white border-2 border-[#F4E4CE] rounded-[12px] flex flex-col">
      <div className="ml-[46px] mt-[44px] mr-[35px]">
        <div className="flex flex-row">
          <div className="flex grow">
            <CardMain>
              <BookMain>
                <BookMain.BookCover className="mt-[5px] mr-[40px]">
                  <div className="w-[223px] h-[291px] border border-solid border-[#F4E4CE]" />
                </BookMain.BookCover>
              </BookMain>
              책제목
              <CardMain.TitleTheme
                className="mt-[39px] text-[30px] mb-[16px] font-medium"
                bigImg={true}
              >
                토크방 제목
              </CardMain.TitleTheme>
              <CardMain.BookTitle
                className="mb-[26px] text-[28px]"
                bigImg={true}
              >
                책 제목
              </CardMain.BookTitle>
              <CardMain.AttendCondition>
                <div className="flex flex-col">
                  <div className="text-[24px] mb-[7px]">참가조건</div>
                  <div className="flex flex-row gap-x-2 h-[30px]">
                    {statuses.map((status, index) => (
                      <CardMain.Status
                        key={index}
                        color="FBF7F0"
                        height={35}
                        className="px-[10px] py-[7px]"
                      >
                        {status}
                      </CardMain.Status>
                    ))}
                  </div>
                </div>
              </CardMain.AttendCondition>
            </CardMain>
          </div>
          <div className="flex flex-col items-end">
            <CardHeaderMain.LikeNumbers>
              <div className="flex flex-col items-center">
                <IconButton onClick={() => changeIsLike(isLike)}>
                  {isLike ? (
                    <Like width={26} height={24} />
                  ) : (
                    <NotLike width={26} height={24} />
                  )}
                </IconButton>
                <div className="h-[16px] font-Pretendard font-normal text-[13px] text-[#656565]">
                  {count}
                </div>
              </div>
            </CardHeaderMain.LikeNumbers>
            <div className="flex font-Pretendard font-regular text-[18px] text-[#7E7E7E] mt-[225px]">
              생성일: 20시간 전
            </div>
          </div>
        </div>

        <hr className="border-2 border-solid border-[#F5EFE5] mt-[48px] mb-[25px]" />

        <div className="font-Pretendard min-h-[157px]">
          <div className="font-semibold text-[24px] mb-[5px]">토크 주제</div>
          <div className="font-regular text-[22px] text-[#000]">
            토크 주제 들어갈 곳 입니다.
          </div>
        </div>

        <hr className="border-2 border-solid border-[#F5EFE5] mt-[25px] mb-[35px]" />

        <div className="font-Pretendard font-semibold text-[24px] mb-[18px]">
          이미지
        </div>
        <div className="flex gap-x-[23px] mb-[51px]">
          {new Array(3).fill(1).map((index: number) => (
            <div
              key={index}
              className="bg-[#D9D9D9] w-[160px] h-[160px] border border-solid border-[#FBF7F0] rounded-[4px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default talkroomDetailMain;
