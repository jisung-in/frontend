"use client";

import { Button } from "@/app/components/Button/Button";
import { Input } from "@/app/components/Input/Input";
import BackButton from "@/app/summary/_component/BackButton";
import { BUTTON_INDEX } from "@/constants/buttonIndex";
import { Textarea } from "@/app/components/Textarea/Textarea";
import { useInput } from "@/hook/useInput";
import SearchedList from "./_component/SearchedList";
import { useState } from "react";
import { BookInfo } from "@/hook/reactQuery/search/useGetKakaoResults";
import ConditionButtons from "@/app/components/molecules/ConditionButtons/ConditionButtons";

const NewTalkRoom = () => {
  const [input, setInput] = useState({
    value: "",
    onClose: true,
  });
  const [bookInfo, setBookInfo] = useState<BookInfo>();

  return (
    <div className="flex flex-col w-full p-8">
      <BackButton />
      <span className="text-[30px] font-bold py-4 border-b-[1px]">
        토크방 생성
      </span>

      <span className="text-[25px] font-bold py-4">책 찾기</span>

      <div className="flex relative gap-[10px]">
        <Input
          value={input.value}
          onChange={(e) => setInput({ onClose: true, value: e.target.value })}
          placeholder="이곳에 검색해보세요."
        />
        {input.value.length > 0 && input.onClose && (
          <SearchedList
            value={input.value}
            handleChange={setInput}
            setBookInfo={setBookInfo}
          />
        )}
        <div className="w-[130px]">
          <Button>찾아보기</Button>
        </div>
      </div>

      <span className="text-[25px] font-bold py-4">토크방 조건 작성</span>

      <div className="flex gap-[5%]">
        {bookInfo?.thumbnail ? (
          <img
            src={bookInfo?.thumbnail}
            alt="책 이미지"
            className="w-[200px] "
          />
        ) : (
          <div className="w-[200px] h-[inherit] bg-gray-40">{/* 이미지 */}</div>
        )}

        <div className="flex flex-col">
          <span className="text-[25px] font-bold py-4">책 제목</span>
          <span className="text-[1rem] font-bold text-gray-50">
            저자 출판사 2024
          </span>

          <span className="text-[25px] font-bold py-4">참가 조건</span>
          <div className="flex w-full">
            <ConditionButtons conditions={BUTTON_INDEX} />
          </div>

          <span className="text-[25px] font-bold py-4">종료 조건</span>
          <div className="flex w-full">
            <ConditionButtons conditions={BUTTON_INDEX} />
          </div>
        </div>
      </div>

      <span className="text-[25px] font-bold py-4">토크방 제목</span>
      <Textarea variant="white" />

      <span className="text-[25px] font-bold py-4">토크방 주제 작성</span>
      <Textarea variant="white" />

      <div className="flex w-full justify-end pt-8">
        <div className="w-[120px]">
          <Button>생성하기</Button>
        </div>
      </div>
    </div>
  );
};

export default NewTalkRoom;
