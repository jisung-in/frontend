"use client";

import { useGetOneRoom } from "@/hook/reactQuery/talkRoom/useGetOneRoom";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";

const TestPage = () => {
  const { data: roomsData } = useGetRooms({
    page: 1,
    size: 10,
    order: "RECOMMENDED",
  });
  const { data: oneRoomData } = useGetOneRoom({ talkRoomId: "123" });

  console.log(roomsData);
  console.log(oneRoomData, "한개의 방 데이터");

  return <div>asdfasdf</div>;
};

export default TestPage;
