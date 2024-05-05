"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";

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
  const { data: talkRoomPopular } = useGetRooms({
    page: 1,
    size: 10,
    order: "recent",
    search: "",
    sortbydate: "",
  });
  return (
    <div className="grid grid-cols-3 gap-[20px] w-[80%]">
      {talkRoomPopular?.response.queryResponse instanceof Array &&
        talkRoomPopular?.response.queryResponse.map((data: any) => (
          <TalkRoomCard key={data.id} data={data} isBest={false} />
        ))}
    </div>
  );
};

export default StarPage;
