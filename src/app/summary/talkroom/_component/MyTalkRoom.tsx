"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";
import { useContext } from "react";
import Tab from "./Tab";
import { TabContext } from "./TabProvider";
import { useGetMyTalkRooms } from "@/hook/reactQuery/my/useGetMyTalkRooms";

const MyTalkRoom = () => {
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };
  const { tab } = useContext(TabContext);
  const { data: talkRoomPopular } = useGetMyTalkRooms("liked");

  console.log(talkRoomPopular?.data.queryResponse, tab);

  return (
    <div className="flex flex-col w-full gap-[20px] items-center">
      <Tab />
      {talkRoomPopular?.data.queryResponse ? (
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-[20px] w-[80%]">
          {talkRoomPopular?.data?.queryResponse?.map((data: any) => (
            <TalkRoomCard
              key={data.id}
              userId={myDetailData?.userId || -1}
              data={data}
              isBest={false}
              isLike={true}
            />
          ))}
        </div>
      ) : (
        <HaveNotData content={"나의 토크방이"} />
      )}
    </div>
  );
};

export default MyTalkRoom;
