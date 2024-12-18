"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import SkeletonTalkRoomCard from "@/app/components/SkeletonUi/SkeletonTalkRoomCard";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";
import useObserver from "@/util/useObserver";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";

interface TalkRoomProps {
  id: number;
  profileImage: string;
  username: string;
  title: string;
  content: string;
  bookName: string;
  bookAuthor: string;
  bookThumbnail: string;
  likeCount: number;
  readingStatuses: string[];
  registeredDateTime: string;
  creatorId: number;
}

interface TalkRoomPageProps {
  params?: {
    result: string;
  };
}

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);

const TalkRoomData = ({ params }: TalkRoomPageProps) => {
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };

  const param = useSearchParams();
  const orderParam = param.get("order");
  const sortByDateParam = param.get("sortbydate");
  const orderStatus: "recent" | "recommend" | "recent-comment" =
    orderParam === "recent" ||
    orderParam === "recommend" ||
    orderParam === "recent-comment"
      ? orderParam
      : "recent";
  const sortByDate: "1m" | "1w" | "1d" | "" =
    sortByDateParam === "1m" ||
    sortByDateParam === "1w" ||
    sortByDateParam === "1d"
      ? sortByDateParam
      : "";

  const search = params ? decodeURIComponent(params.result) : "";

  const {
    data: talkRoom,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useGetRooms({
    size: 12,
    order: orderStatus,
    search: search,
    sortbydate: sortByDate,
  });

  const observerRef = useRef<HTMLDivElement | null>(null);

  useObserver({
    target: observerRef,
    onIntersect: ([entry]) => {
      return entry.isIntersecting && hasNextPage && fetchNextPage();
    },
  });
  return (
    <>
      {isLoading && <SkeletonTalkRoomCard />}
      {talkRoom &&
      talkRoom.pages.length > 0 &&
      talkRoom.pages[0].content.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-center gap-x-[40px] gap-y-[30px] w-full mb-[30px] px-[5%] xl:px-0 2xl:px-0">
          {talkRoom.pages.map(
            (page) =>
              page.content &&
              page.content.length > 0 &&
              page.content.map((data: TalkRoomProps) => {
                const isLike =
                  isLoggedIn &&
                  (talkRoomLikeIds?.talkRoomIds || []).includes(data.id);
                return (
                  <div key={data.id}>
                    <TalkRoomCard
                      data={data}
                      userId={myDetailData?.userId || -1}
                      isBest={orderStatus === "recommend"}
                      isLike={isLike}
                    />
                  </div>
                );
              }),
          )}
        </div>
      ) : (
        !isLoading && <HaveNotData content={"검색된 토크방이"} />
      )}
      {!isLoading && hasNextPage && isFetching && <SkeletonTalkRoomCard />}
      <div className="observer" ref={observerRef} />
    </>
  );
};

export default TalkRoomData;
