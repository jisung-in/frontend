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
  const { data: talkRoomPopular } = useGetTalkRoomPopular({
    page: 1,
    size: 10,
    order: "recent",
    search: "",
  });
  return (
    <div className="grid grid-cols-3 gap-[20px] w-[80%]">
      {talkRoomPopular?.queryResponse instanceof Array &&
        talkRoomPopular?.queryResponse.map((data: any) => (
          <TalkRoomCard key={data.id} data={data} isBest={false} />
        ))}
    </div>
  );
};

export default StarPage;
