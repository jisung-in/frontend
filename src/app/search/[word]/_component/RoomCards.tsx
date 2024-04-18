"use client";

import RoomCard from "@/app/components/Card/RoomCard/RoomCard";
import { useGetMyStarRate } from "@/hook/reactQuery/my/useGetMyStarRate";

const RoomCards = () => {
  const { data: bookData } = useGetMyStarRate();
  return <>{bookData?.map((data: any) => <RoomCard />)}</>;
};

export default RoomCards;
