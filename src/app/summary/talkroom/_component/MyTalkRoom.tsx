"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import Tab from "./Tab";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useContext } from "react";
import { TabContext } from "./TabProvider";

const MyTalkRoom = () => {
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
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-[20px] w-[80%]">
        {talkRoomPopular?.response.queryResponse instanceof Array &&
          talkRoomPopular?.response.queryResponse.map((data: any) => (
            <TalkRoomCard key={data.id} data={data} isBest={false} />
          ))}
      </div>
    </div>
  );
};

export default MyTalkRoom;