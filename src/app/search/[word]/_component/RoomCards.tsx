"use client";

import RoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import { useGetMyStarRate } from "@/hook/reactQuery/my/useGetMyStarRate";

const RoomCards = () => {
  const { data: bookData } = useGetMyStarRate();
  return (
    <>
      {(bookData as any)?.map((data: any) => (
        <RoomCard key={data.id} data={data} isBest={false} />
      ))}
    </>
  );
};

export default RoomCards;
