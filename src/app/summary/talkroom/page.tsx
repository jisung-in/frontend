"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import { useGetTalkRoomPopular } from "@/hook/reactQuery/main/useGetTalkRoomPopular";

const StarPage = () => {
  const { data: talkRoomPopular } = useGetTalkRoomPopular();
  return (
    <div className="grid grid-cols-3 gap-[20px] w-[80%]">
      {talkRoomPopular?.map((data: any) => (
        <TalkRoomCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default StarPage;
