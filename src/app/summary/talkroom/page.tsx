"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";

const StarPage = () => {
  const { data: talkRoomPopular } = useGetRooms({
    page: 1,
    size: 10,
    order: "recent",
    search: "",
    sortbydate: "",
  });
  return (
    <div className="flex flex-col w-full gap-[20px] items-center">
      <TabProvider>
        <Tab />
      </TabProvider>
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-[20px] w-[80%]">
        {talkRoomPopular?.queryResponse instanceof Array &&
          talkRoomPopular?.queryResponse.map((data: any) => (
            <TalkRoomCard key={data.id} data={data} isBest={false} />
          ))}
      </div>
    </div>
  );
};

export default StarPage;
