"use client";

import RoomCard from "@/app/components/Card/RoomCard/RoomCard";
import { useMyStarRate } from "@/hook/reactQuery/my/useMyStarRate";

const RoomCards = () => {
  const { data: bookData } = useMyStarRate();
  return <>{bookData?.map((data: any) => <RoomCard />)}</>;
};

export default RoomCards;
