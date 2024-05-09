import MakeTalkRoom from "@/assets/img/make-talk-room.svg";
import { useInput } from "@/hook/useInput";
import changeIsDate from "@/util/searchTalkRoomDate";
import changeIsStatus from "@/util/searchTalkRoomStatus";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import DropDown from "../../components/DropDown/DropDown";
import { Input } from "../../components/Input/Input";

type TalkRoomButtonsProps = {
  onSearchSubmit: (searchValue: string) => void;
  searchParam: string;
};

const TalkRoomButtons: React.FC<TalkRoomButtonsProps> = ({
  onSearchSubmit,
  searchParam,
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const orderParam = params.get("order");
  const sortByDateParam = params.get("sortbydate");
  const { value, handleChange, reset } = useInput("");
  const [isDate, setIsDate] = useState<string>("날짜별");
  const dateType: string[] = ["~한달 전", "7일전", "하루 전"];
  const orderStatus: "recent" | "recommend" | "recent-comment" =
    orderParam === "recent" ||
    orderParam === "recommend" ||
    orderParam === "recent-comment"
      ? orderParam
      : "recent";

  const searchTalkRoom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchSubmit(value);
  };
  return (
    <>
      <div className="flex grow">
        {orderStatus === "recommend" && (
          <>
            <div className="flex">
              <div
                className="flex items-center justify-center w-[71px] h-[40px] font-Pretendard font-medium text-[17px] text-[#656565] border-[#D9D9D9] border border-solid rounded-[5px] hover:bg-[#FBFBFB] cursor-pointer mr-[11px]"
                onClick={() => {
                  setIsDate("날짜별");
                  router.push(changeIsStatus("recent", searchParam));
                }}
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
                setSelectedItem={(date) => {
                  setIsDate(date);
                  router.push(changeIsDate(date, searchParam));
                }}
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
              onClick={() =>
                router.push(changeIsStatus("recommend", searchParam))
              }
            >
              인기순
            </div>
          </div>
        )}
      </div>
      <div className="flex h-[40px]">
        <div className="w-[567px] mr-[11px]">
          <form onSubmit={searchTalkRoom}>
            <Input
              className="font-Pretendard font-[400]"
              variant="empty"
              value={value}
              onChange={handleChange}
              reset={reset}
              placeholder="이곳에 검색해보세요."
            />
          </form>
        </div>
        <div className="w-[167px]">
          <Button>
            <MakeTalkRoom />
            토크방 생성하기
          </Button>
        </div>
      </div>
    </>
  );
};

export default TalkRoomButtons;
