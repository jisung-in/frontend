"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useLogin } from "@/hook/useLogin";
import { useContext } from "react";
import Tab from "./Tab";
import { TabContext } from "./TabProvider";
import { useGetMyTalkRooms } from "@/hook/reactQuery/my/useGetMyTalkRooms";

const MyTalkRoom = () => {
  const { data: talkRoomLikeIdsData } = useGetRoomLike();
  const { data: myDetailData } = useGetMyDetail();
  const { tab } = useContext(TabContext);
  const { data: talkRoomPopularData } = useGetMyTalkRooms(tab);

  const talkRoomLikeIds = talkRoomLikeIdsData?.talkRoomIds || [];
  const userId = myDetailData?.userId || -1;

  const renderTalkRooms = () => {
    if (talkRoomPopularData?.data.queryResponse) {
      return (
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-[20px] w-[80%]">
          {talkRoomPopularData.data.queryResponse.map((data: any) => (
            <TalkRoomCard
              key={data.id}
              userId={userId}
              data={data}
              isBest={false}
              isLike={talkRoomLikeIds.includes(data.id)}
            />
          ))}
        </div>
      );
    } else {
      return <HaveNotData content="나의 토크방이" />;
    }
  };

  return (
    <div className="flex flex-col w-full gap-[20px] items-center">
      <Tab />
      {renderTalkRooms()}
    </div>
  );
};

export default MyTalkRoom;
