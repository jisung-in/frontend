"use client";

import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import MainSelectionCard from "@/app/components/MainSelectionCard/MainSelectionCard";
import DeferredComponent from "@/app/components/SkeletonUI/DeferredComponent ";
import SkeletonTalkRoomCard from "@/app/components/SkeletonUI/SkeletonTalkRoomCard";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { lazy, Suspense, useCallback, useEffect, useRef } from "react";
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
  const TalkRoomCard = lazy(
    () => import("@/app/components/Card/MainPageCard/TalkRoomCard"),
  );

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
    isLoading: getRoomLoading,
    refetch: refetchTalkRoomData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetRooms({
    size: 7,
    order: orderStatus,
  });

  const observer = useRef<IntersectionObserver | null>(null);
  const lastReviewElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        },
        { rootMargin: "0px 0px -400px 0px" },
      );
      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage],
  );

  const searchTalkRoom = (searchValue: string) => {
    router.push(
      `${currentUrl}/${searchValue}/?order=${orderParam}&search=${searchValue}`,
    );
  };
  useEffect(() => {
    refetchTalkRoomData();
  }, [orderStatus]);
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[1280px] w-[84vw]">
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
            (page, pageIndex) =>
              page.content &&
              page.content.length > 0 &&
              page.content.map((data: TalkRoom, index: number) => {
                const isLike =
                  isLoggedIn &&
                  (talkRoomLikeIds?.talkRoomIds || []).includes(data.id);
                const isLastElement =
                  pageIndex === talkRoomData.pages.length - 1 &&
                  index === page.content.length - 1;
                return (
                  <div
                    key={data.id}
                    ref={isLastElement ? lastReviewElementRef : null}
                  >
                    <Suspense
                      fallback={
                        <DeferredComponent>
                          <SkeletonTalkRoomCard />
                        </DeferredComponent>
                      }
                    >
                      <TalkRoomCard
                        userId={myDetailData?.userId || -1}
                        data={data}
                        isBest={orderParam === "recommend"}
                        isLike={isLike}
                      />
                    </Suspense>
                  </div>
                );
              }),
          )}
        </div>
      ) : (
        !getRoomLoading && <HaveNotData content={"토크방이"} />
      )}
    </div>
  );
};

export default page;
