"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";

const RoomCards = () => {
  const { data: bookData, isLoading } = useGetRooms({
    page: 1,
    size: 6,
    order: "recommend",
    search: "",
    sortbydate: "",
  });

  if (isLoading) {
    return <HaveNotData content="관련 게시물이" />;
  }

  return (
    <div className="grid gap-8 grid-cols-3">
      {bookData?.response.queryResponse?.map((data: any) => {
        const isLike = bookData.userLikeTalkRoomIds.includes(data.id);
        return (
          <TalkRoomCard
            key={data.id}
            data={data}
            isBest={false}
            isLike={isLike}
          />
        );
      })}
    </div>
  );
};

export default RoomCards;
