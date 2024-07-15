"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import MainSelectionCard from "@/app/components/MainSelectionCard/MainSelectionCard";
import SkeletonTalkRoomCard from "@/app/components/SkeletonUI/SkeletonTalkRoomCard";
import BackButton from "@/app/summary/_component/BackButton";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";
import useObserver from "@/util/useObserver";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import TalkRoomSearch from ".././_component/talkroomSearch";
type TalkRoom = {
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
};

const page = () => {
  const router = useRouter();
  const param = useSearchParams();
  const currentUrl = usePathname();
  const orderParam = param.get("order");
  const orderStatus: "recent" | "recommend" | "recent-comment" =
    orderParam === "recent" ||
    orderParam === "recommend" ||
    orderParam === "recent-comment"
      ? orderParam
      : "recent";
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };

  const {
    data: talkRoomData,
    isLoading,
    isFetching: isFetchingForRoom,
    refetch: refetchTalkRoomData,
    fetchNextPage,
    hasNextPage,
  } = useGetRooms({
    size: 7,
    order: orderStatus,
  });

  const observerRef = useRef<HTMLDivElement | null>(null);

  useObserver({
    target: observerRef,
    onIntersect: ([entry]) => {
      return entry.isIntersecting && hasNextPage && fetchNextPage();
    },
  });

  useEffect(() => {
    refetchTalkRoomData();
  }, [orderStatus]);

  const searchTalkRoom = (searchValue: string) => {
    router.push(
      `${currentUrl}/${searchValue}?order=${orderParam}&search=${searchValue}`,
    );
  };
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[1280px] w-[84vw]">
        <div className="mt-[59px]">
          <BackButton />
        </div>

        <div className="w-[168px] h-[80px] mt-[85px]">
          <Link href={"/talkroom/record?order=recent"}>
            <MainSelectionCard
              isMain={false}
              type="middleRecord"
              rounded={false}
            />
          </Link>
        </div>

        <div className="flex mt-[35px] mb-[25px] items-center">
          <TalkRoomSearch
            onSearchSubmit={searchTalkRoom}
            currentUrl={currentUrl}
            searchParam={""}
          />
        </div>
      </div>

      {talkRoomData &&
      talkRoomData.pages.length > 0 &&
      talkRoomData.pages[0].content.length > 0 ? (
        <div className="flex flex-col gap-y-[25px] mb-[117px]">
          {talkRoomData.pages.map(
            (page) =>
              page.content &&
              page.content.length > 0 &&
              page.content.map((data: TalkRoom) => {
                const isLike =
                  isLoggedIn &&
                  (talkRoomLikeIds?.talkRoomIds || []).includes(data.id);
                return (
                  <div key={data.id}>
                    <TalkRoomCard
                      userId={myDetailData?.userId || -1}
                      data={data}
                      isBest={orderParam === "recommend"}
                      isLike={isLike}
                    />
                  </div>
                );
              }),
          )}
          {isFetchingForRoom && <SkeletonTalkRoomCard />}
          <div className="observer" ref={observerRef} />
        </div>
      ) : (
        !isLoading && <HaveNotData content={"토크방이"} />
      )}
    </div>
  );
};

export default page;
