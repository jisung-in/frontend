"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";
import { useContext } from "react";
import Tab from "./Tab";
import { TabContext } from "./TabProvider";

const MyTalkRoom = () => {
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { tab } = useContext(TabContext);
  const { data: talkRoomPopular } = useGetRooms({
    page: 1,
    size: 10,
    order: "recent",
    search: tab,
    sortbydate: "",
  });

  return (
    <div className="flex flex-col w-full gap-[20px] items-center">
      <Tab />
      {talkRoomPopular && talkRoomPopular.queryResponse.length > 0 ? (
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-[20px] w-[80%]">
          {talkRoomPopular?.queryResponse.map((data: any) => {
            const isLike =
              isLoggedIn &&
              (talkRoomLikeIds?.talkRoomIds || []).includes(data.id);
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
      ) : (
        <HaveNotData content={"나의 토크방이"} />
      )}
    </div>
  );
};

export default MyTalkRoom;
