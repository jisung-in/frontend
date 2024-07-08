import CreateTalkRoom from "@/assets/img/create-talk-room.svg";
import { useInput } from "@/hook/useInput";
import changeIsStatus from "@/util/searchTalkRoomStatus";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

type TalkRoomButtonsProps = {
  onSearchSubmit: (searchValue: string) => void;
  currentUrl: string;
  searchParam: string;
};

const TalkRoomSearch: React.FC<TalkRoomButtonsProps> = ({
  onSearchSubmit,
  currentUrl,
  searchParam,
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const orderParam = params.get("order");
  const { value, handleChange, reset } = useInput("");
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
                className="flex items-center justify-center w-[71px] h-[40px] font-Pretendard font-regular text-[17px] text-[#656565] border-[#D9D9D9] border border-solid rounded-[5px] hover:bg-[#FBFBFB] cursor-pointer mr-[11px]"
                onClick={() => {
                  router.push(
                    changeIsStatus("recent", currentUrl, searchParam),
                  );
                }}
              >
                최신순
              </div>
              <div className="flex items-center justify-center w-[71px] h-[40px] font-Pretendard font-bold text-[17px] text-[#80685D] border-[#80685D] border border-solid rounded-[5px] bg-[#fff] pointer-events-none">
                인기순
              </div>
            </div>
          </>
        )}
        {orderStatus === "recent" && (
          <div className="flex">
            <div className="flex items-center justify-center w-[71px] h-[40px] font-Pretendard font-bold text-[17px] text-[#80685D] border-[#80685D] border border-solid rounded-[5px] bg-[#fff] mr-[11px] pointer-events-none">
              최신순
            </div>
            <div
              className="flex items-center justify-center w-[71px] h-[40px] font-Pretendard font-regular text-[17px] text-[#656565] border-[#D9D9D9] border border-solid rounded-[5px] hover:bg-[#FBFBFB] cursor-pointer"
              onClick={() =>
                router.push(
                  changeIsStatus("recommend", currentUrl, searchParam),
                )
              }
            >
              인기순
            </div>
          </div>
        )}
      </div>
      <div className="flex h-[40px] items-center">
        <div className="w-[567px] mr-2.5">
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
        <Link href={"/detail/talkroom"}>
          <Button className="w-[167px]" variant={"mainPage"} weight={"semi"}>
            <div className="flex items-center gap-x-2 px-4">
              <CreateTalkRoom />
              토크방 생성하기
            </div>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default TalkRoomSearch;
