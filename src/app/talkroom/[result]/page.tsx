"use client";

import MakeTalkRoom from "@/assets/img/make-talk-room.svg";
import RecentMakeTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useInput } from "@/hook/useInput";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import TalkRoomCard from "../../components/Card/MainPageCard/TalkRoomCard";
import DropDown from "../../components/DropDown/DropDown";
import { Input } from "../../components/Input/Input";
import Pagination from "../../components/Pagination/Pagination";
import { ThemeMain } from "../../components/Theme/Theme";

type TalkRoom = {
  id: number;
  profileImage: string;
  username: string;
  title: string;
  content: string;
  bookName: string;
  bookAuthor: string;
  bookThumbnail: string;
  likeCount: number;
  readingStatuses: string[];
  registeredDateTime: string;
};

const page = () => {
  const { value, handleChange, reset } = useInput("");
  const router = useRouter();
  const params = useSearchParams();
  const orderParam = params.get("order");
  const searchParam: string = params.get("search") || "";
  const orderStatus: "recent" | "recommend" | "recent-comment" =
    orderParam === "recent" ||
    orderParam === "recommend" ||
    orderParam === "recent-comment"
      ? orderParam
      : "recent";
  const [isDate, setIsDate] = useState<string>("날짜별");
  const dateType: string[] = ["~한달 전", "7일전", "하루 전"];

  const changeIsDate = (date: string) => {
    setIsDate(date);
    if (date === "~한달 전") {
      setSortByDate("1m");
      router.push(
        `/talkroom/${searchParam}/${orderParam}?page=1&size=10&order=recommend&search=${searchParam}&sortbydate=1m`,
      );
    } else if (date === "7일전") {
      setSortByDate("1w");
      router.push(
        `/talkroom/${searchParam}/${orderParam}?page=1&size=10&order=recommend&search=${searchParam}&sortbydate=1w`,
      );
    } else if (date === "하루 전") {
      setSortByDate("1d");
      router.push(
        `/talkroom/${searchParam}/${orderParam}?page=1&size=10&order=recommend&search=${searchParam}&sortbydate=1d`,
      );
    }
  };
  const [sortByDate, setSortByDate] = useState<string>("");

  const { data: talkRoomPopular } = useGetRooms({
    page: 1,
    size: 10,
    order: orderStatus,
    search: searchParam,
    sortbydate: sortByDate,
  });
  const changeIsStatus = (status: string) => {
    if (status === "recent") {
      router.push(
        `/talkroom/${searchParam}/${orderParam}/?order=recent&search=${searchParam}`,
      );
      setSortByDate("");
    } else if (status === "recommend") {
      router.push(
        `/talkroom/${searchParam}/${orderParam}/?order=recommend&search=${searchParam}&sortbydate=`,
      );
      setSortByDate("");
      setIsDate("날짜별");
    } else return router.push("/not-found");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[1255px]">
        <ThemeMain.MainTheme>
          <div className="flex mt-[78px] mb-[23px]">
            <div className="flex items-center mb-[23px]">
              <div className="text-[30px] mr-[16px]">토크해요</div>
              <RecentMakeTalkRoom />
            </div>
          </div>
        </ThemeMain.MainTheme>

        <div className="font-SpoqaHanSansNeo font-medium text-[20px] text-[#77777E]">
          "검색" 의 결과
        </div>

        <hr className="border-solid border-[3px] border-[#F5EFE5] mt-3 mb-[19px]" />
        <div className="flex mb-[37px] grow">
          <div className="flex grow">
            {orderStatus === "recommend" && (
              <>
                <div className="flex">
                  <div
                    className="flex items-center justify-center w-[71px] h-[40px] font-Pretendard font-medium text-[17px] text-[#656565] border-[#D9D9D9] border border-solid rounded-[5px] hover:bg-[#FBFBFB] cursor-pointer mr-[11px]"
                    onClick={() => changeIsStatus("recent")}
                  >
                    최신순
                  </div>
                  <div className="flex items-center justify-center w-[71px] h-[40px] font-Pretendard font-medium text-[17px] text-[#FFF] border-[#80685D] border border-solid rounded-[5px] bg-[#80685D] pointer-events-none">
                    인기순
                  </div>
                </div>
                <div className="flex items-center ml-[26px]">
                  <DropDown
                    items={dateType}
                    selectedItem={isDate}
                    setSelectedItem={changeIsDate}
                    className="left-[-35px]"
                  />
                </div>
              </>
            )}
            {orderStatus === "recent" && (
              <div className="flex">
                <div className="flex items-center justify-center w-[71px] h-[40px] font-Pretendard font-medium text-[17px] text-[#FFF] border-[#80685D] border border-solid rounded-[5px] bg-[#80685D] mr-[11px] pointer-events-none">
                  최신순
                </div>
                <div
                  className="flex items-center justify-center w-[71px] h-[40px] font-Pretendard font-medium text-[17px] text-[#656565] border-[#D9D9D9] border border-solid rounded-[5px] hover:bg-[#FBFBFB] cursor-pointer"
                  onClick={() => changeIsStatus("recommend")}
                >
                  인기순
                </div>
              </div>
            )}
          </div>

          <div className="flex h-[40px]">
            <div className="w-[567px] mr-[11px]">
              <Input
                className="font-Pretendard font-[400]"
                variant="empty"
                value={value}
                onChange={handleChange}
                reset={reset}
                placeholder="이곳에 검색해보세요."
              />
            </div>
            <div className="w-[167px]">
              <Button>
                <MakeTalkRoom />
                토크방 생성하기
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-x-[40px] gap-y-[30px] w-[1295px]">
        {talkRoomPopular?.response.queryResponse instanceof Array &&
          talkRoomPopular?.response.queryResponse.map((data: TalkRoom) => (
            <TalkRoomCard key={data.id} data={data} isBest={false} />
          ))}
      </div>
      <Pagination
        totalItems={talkRoomPopular?.response.totalCount}
        pageCount={Math.ceil(
          (talkRoomPopular?.response.totalCount ?? 0) /
            (talkRoomPopular?.response.size ?? 1),
        )}
        postPage={talkRoomPopular?.response.size}
        link={orderStatus + "?"}
      />
    </div>
  );
};

export default page;
