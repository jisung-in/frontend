"use client";

import { Button } from "@/app/components/Button/Button";
import MainSelectionCard from "@/app/components/MainSelectionCard/MainSelectionCard";
import BackButton from "@/app/summary/_component/BackButton";
import TalkRoomIcon from "@/assets/img/talk-icon.svg";
import clsx from "clsx";
import { useState } from "react";

const TalkRoomSelection = () => {
  const [selection, setSelection] = useState("record");

  return (
    <div className="flex flex-col w-full min-h-[800px] bg-white px-[20%] py-10">
      <BackButton />

      <span className="flex items-center gap-4 text-[30px] font-bold py-4 border-b-[1px]">
        토크방 생성
        <TalkRoomIcon />
      </span>
      <div className="flex flex-col gap-8">
        <div
          className={clsx(
            "flex items-center hover:bg-purple-40 duration-500 hover:border-purple-50 cursor-pointer border-2 rounded-xl p-2 gap-4 text-lg text-gray-60",
            selection === "record" &&
              "bg-purple-40 border-purple-50 text-[#000000]",
          )}
          onClick={() => setSelection("record")}
        >
          <MainSelectionCard
            isMain={false}
            type="smallerRecord"
            rounded={true}
          />
          <span>
            독서 기록을 혼자서 할 수 있는 공간으로, 책을 선택한 후 책에 대한
            내용을 스크랩 할 수 있습니다.
          </span>
        </div>
        <div
          className={clsx(
            "flex items-center hover:bg-yellow-40 duration-500 hover:border-yellow-50 cursor-pointer border-2 rounded-xl p-2 gap-4 text-lg text-gray-60",
            selection === "question" &&
              "text-[#000000] bg-yellow-40 border-yellow-50",
          )}
          onClick={() => setSelection("question")}
        >
          <MainSelectionCard
            isMain={false}
            type="smallerQuestion"
            rounded={true}
          />
          <span>
            책에 관련한 질문을 작성할 수 있는 공간으로, 책을 선택 후 책에 대한
            질문을 작성해보세요.
          </span>
        </div>
      </div>

      <div className="flex w-full justify-end pt-8">
        <div className="w-[100px]">
          <Button variant="empty">다음</Button>
        </div>
      </div>
    </div>
  );
};

export default TalkRoomSelection;
