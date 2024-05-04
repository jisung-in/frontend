"use client";

import { Button } from "@/app/components/Button/Button";
import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import ConditionButtons from "@/app/components/molecules/ConditionButtons/ConditionButtons";
import { useGetTalkRoomPopular } from "@/hook/reactQuery/main/useGetTalkRoomPopular";

const buttonIndex = [
  {
    content: "생성한",
    actived: false,
  },
  {
    content: "답변한",
    actived: false,
  },
  {
    content: "좋아요",
    actived: false,
  },
];

const StarPage = () => {
  const { data: talkRoomPopular } = useGetTalkRoomPopular();
  return (
    <main className="flex flex-col items-center w-full gap-[20px]">
      <div className="flex w-full gap-[10px] pl-[5%]">
        <ConditionButtons conditions={buttonIndex} />
      </div>
      <div className="grid grid-cols-3 gap-[20px] w-[90%]">
        {talkRoomPopular?.map((data: any) => (
          <TalkRoomCard key={data.id} data={data} />
        ))}
      </div>
    </main>
  );
};

export default StarPage;
