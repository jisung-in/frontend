import MakeTalkRoom from "@/assets/img/make-talk-room.svg";
import { useInput } from "@/hook/useInput";
import { useLogin } from "@/hook/useLogin";
import changeUrl from "@/util/changeUrl";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import DropDown from "../../components/DropDown/DropDown";
import { Input } from "../../components/Input/Input";

const Modal = dynamic(() => import("@/app/components/Modal/Modal"));

type TalkRoomButtonsProps = {
  onSearchSubmit: (searchValue: string) => void;
  searchParam: string;
};

type StatusChange = {
  status: "recent" | "recommend";
  date?: "~한달 전" | "7일전" | "하루 전";
  searchParam?: string;
};

const TalkRoomSearch: React.FC<TalkRoomButtonsProps> = ({
  onSearchSubmit,
  searchParam,
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const orderParam = params.get("order");
  const { value, handleChange, reset } = useInput("");
  const [isDate, setIsDate] = useState<
    "~한달 전" | "7일전" | "하루 전" | "날짜별"
  >("날짜별");
  const dateType: string[] = ["~한달 전", "7일전", "하루 전"];
  const orderStatus: "recent" | "recommend" | "recent-comment" =
    orderParam === "recent" ||
    orderParam === "recommend" ||
    orderParam === "recent-comment"
      ? orderParam
      : "recent";

  const { isLoggedIn } = useLogin();
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);

  const closeModal = () => {
    showLoginModal ? setShowLoginModal(false) : setShowSearchModal(false);
  };

  const makeNewTalkRoom = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      router.push("/detail/talkroom/new");
    }
  };

  const searchTalkRoom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    value.trim().length > 0
      ? onSearchSubmit(value.trim())
      : setShowSearchModal(true);
  };

  const statusChange = ({ status, date, searchParam }: StatusChange) => {
    router.push(changeUrl({ status, date, searchParam }));
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
                  statusChange({ status: "recent", searchParam });
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
                setSelectedItem={(date: "~한달 전" | "7일전" | "하루 전") => {
                  setIsDate(date);
                  statusChange({
                    status: "recommend",
                    date,
                    searchParam,
                  });
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
              onClick={() => statusChange({ status: "recommend", searchParam })}
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
          <Button onClick={makeNewTalkRoom}>
            <MakeTalkRoom />
            토크방 생성하기
          </Button>
        </div>
      </div>

      <Modal
        title="로그인"
        content="로그인을 해야 이용할 수 있는 기능입니다"
        isOpen={showLoginModal}
        onClose={closeModal}
        onConfirm={closeModal}
        buttonTitle="확인"
      />

      <Modal
        title="검색어 확인"
        content="검색어를 한 자 이상 입력해주세요!"
        isOpen={showSearchModal}
        onClose={closeModal}
        onConfirm={closeModal}
        buttonTitle="확인"
      />
    </>
  );
};

export default TalkRoomSearch;
