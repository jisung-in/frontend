"use client";

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

interface TalkRoomButtonsProps {
  searchParam: string;
}

interface StatusChange {
  status: "recent" | "recommend";
  date?: "~한달 전" | "7일전" | "하루 전";
  searchParam?: string;
}

const TalkRoomFilter: React.FC<TalkRoomButtonsProps> = ({ searchParam }) => {
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

  const onSearchSubmit = (searchValue: string) => {
    router.push(`/talkroom/${searchValue}/?order=recent&search=${searchValue}`);
  };

  const statusChange = ({ status, date, searchParam }: StatusChange) => {
    router.push(changeUrl({ status, date, searchParam }));
  };

  return (
    <>
      <div className="sm:block hidden w-full mr-2 2xl:mr-3 mb-2">
        <form onSubmit={searchTalkRoom}>
          <Input
            className="font-Pretendard font-[400] md:text-sm sm:text-xs"
            variant="response"
            value={value}
            onChange={handleChange}
            reset={reset}
            placeholder="이곳에 검색해보세요."
          />
        </form>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex">
          {orderStatus === "recommend" && (
            <>
              <p className="flex 2xl:h-10 xl:h-10 lg:h-9 md:h-9 sm:h-8">
                <span
                  className="flex items-center justify-center font-Pretendard font-medium text-[#656565] border-[#D9D9D9] border border-solid rounded-[5px] hover:bg-[#FBFBFB] cursor-pointer mr-3 sm:mr-1 md:mr-2
                  2xl:w-[72px] 2xl:h-10 2xl:text-[17px] 
                  xl:w-[70px] xl:h-10 xl:text-base 
                  lg:w-[68px] lg:h-9 lg:text-[15px] 
                  md:w-[66px] md:h-9 md:text-sm
                  sm:w-14 sm:h-8 sm:text-xs"
                  onClick={() => {
                    setIsDate("날짜별");
                    statusChange({ status: "recent", searchParam });
                  }}
                >
                  최신순
                </span>
                <span
                  className="flex items-center justify-center font-Pretendard font-medium text-[17px] text-[#FFF] border-[#80685D] border border-solid rounded-[5px] bg-[#80685D] pointer-events-none
                  2xl:w-[72px] 2xl:h-10 2xl:text-[17px] 
                  xl:w-[70px] xl:h-10 xl:text-base 
                  lg:w-[68px] lg:h-9 lg:text-[15px] 
                  md:w-[66px] md:h-9 md:text-sm
                  sm:w-14 sm:h-8 sm:text-xs"
                >
                  인기순
                </span>
              </p>

              <p className="flex items-center 2xl:ml-6 xl:ml-5 lg:ml-4 md:ml-3 sm:ml-2 sm:hidden">
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
                  className="left-[-35px] "
                />
              </p>
            </>
          )}
          {orderStatus === "recent" && (
            <p className="flex">
              <span
                className="flex items-center justify-center font-Pretendard font-medium text-[#FFF] border-[#80685D] border border-solid rounded-[5px] bg-[#80685D] mr-3 pointer-events-none sm:mr-1 md:mr-2
                2xl:w-[72px] 2xl:h-10 2xl:text-[17px] 
                xl:w-[70px] xl:h-10 xl:text-base 
                lg:w-[68px] lg:h-9 lg:text-[15px] 
                md:w-[66px] md:h-9 md:text-sm
                sm:w-14 sm:h-8 sm:text-xs"
              >
                최신순
              </span>
              <span
                className="flex items-center justify-center font-Pretendard font-medium text-[#656565] border-[#D9D9D9] border border-solid rounded-[5px] hover:bg-[#FBFBFB] cursor-pointer
                2xl:w-[72px] 2xl:h-10 2xl:text-[17px] 
                xl:w-[70px] xl:h-10 xl:text-base 
                lg:w-[68px] lg:h-9 lg:text-[15px] 
                md:w-[66px] md:h-9 md:text-sm
                sm:w-14 sm:h-8 sm:text-xs"
                onClick={() =>
                  statusChange({ status: "recommend", searchParam })
                }
              >
                인기순
              </span>
            </p>
          )}
        </div>

        <div className="flex 2xl:h-10 2xl:text-[17px] xl:h-10 xl:text-base lg:h-9 lg:text-[15px] md:h-9 md:text-sm sm:h-8 sm:text-xs">
          <div className="sm:hidden lg:w-[330px] xl:w-[440px] 2xl:w-[550px] mr-2 2xl:mr-3">
            <form onSubmit={searchTalkRoom}>
              <Input
                className="font-Pretendard font-[400] 2xl:h-10 xl:h-10 lg:h-9 md:h-9 sm:h-8"
                variant="response"
                value={value}
                onChange={handleChange}
                reset={reset}
                placeholder="이곳에 검색해보세요."
              />
            </form>
          </div>
          <p className="flex flex-row 2xl:w-[190px] xl:w-[180px] lg:w-[170px] md:w-[130px] sm:w-[120px]">
            <Button
              onClick={makeNewTalkRoom}
              className="2xl:h-10 xl:h-10 lg:h-9 md:h-9 sm:h-8"
            >
              <span className="sm:hidden md:hidden block">
                <MakeTalkRoom />
              </span>
              <span>토크방 생성하기</span>
            </Button>
          </p>
        </div>
      </div>

      <p className="flex items-center ml-2 hidden sm:block mt-3">
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
          className="left-[-35px] "
        />
      </p>

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
export default TalkRoomFilter;
