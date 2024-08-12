"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import Pagination from "@/app/components/Pagination/Pagination";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetMyTalkRooms } from "@/hook/reactQuery/my/useGetMyTalkRooms";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetPageParams } from "@/hook/useGetPageParams";
import dynamic from "next/dynamic";
import { useContext } from "react";
import Tab from "./Tab";
import { TabContext } from "./TabProvider";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);

const MyTalkRoom = () => {
  const { tab } = useContext(TabContext);
  const { currentUrl, page } = useGetPageParams();
  const { data: talkRoomLikeIdsData } = useGetRoomLike();
  const { data: myDetailData } = useGetMyDetail();
  const { data: talkRoomPopularData } = useGetMyTalkRooms({
    order: tab,
    page: page,
  });

  const talkRoomLikeIds = talkRoomLikeIdsData?.talkRoomIds || [];
  const userId = myDetailData?.userId || -1;

  const renderTalkRooms = () => {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-[20px] w-[80%]">
        {talkRoomPopularData?.data.queryResponse.map((data: any) => (
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
  };

  return (
    <div className="flex flex-col w-full gap-[20px] items-center">
      <Tab />
      {renderTalkRooms()}
      {talkRoomPopularData?.data.queryResponse.length ? (
        <Pagination
          totalItems={talkRoomPopularData?.data.totalCount ?? 0}
          postPage={12}
          link={currentUrl + `?order=${tab}`}
        />
      ) : (
        <HaveNotData content={"토크방이"} />
      )}
    </div>
  );
};

export default MyTalkRoom;
