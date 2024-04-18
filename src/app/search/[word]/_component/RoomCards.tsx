"use client";

import RoomCard from "@/app/components/Card/RoomCard/RoomCard";
import { useGetMyStarRate } from "@/hook/reactQuery/my/useGetMyStarRate";

const RoomCards = () => {
  const { data: bookData } = useGetMyStarRate();
  return (
    <>{(bookData as any)?.map((data: any) => <RoomCard key={data.id} />)}</>
  );
};

export default RoomCards;
