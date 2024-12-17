"use client";

import MainThemeTitle from "@/app/components/MainThemeTitle/MainThemeTitle";
import SkeletonTalkRoomCard from "@/app/components/SkeletonUi/SkeletonTalkRoomCard";
import TalkRoomFilter from "@/app/talkroom/_component/TalkRoomFilter";
import RecentMakeTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";
import useObserver from "@/util/useObserver";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import TalkRoomCard from "../../components/Card/MainPageCard/TalkRoomCard";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);

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

type TalkRoomPageProps = {
  params?: {
    result: string;
  };
};

const page = ({ params }: TalkRoomPageProps) => {
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };

  const router = useRouter();
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

  const searchTalkRoom = (searchValue: string) => {
    router.push(`/talkroom/${searchValue}/?order=recent&search=${searchValue}`);
  };

  const observerRef = useRef<HTMLDivElement | null>(null);

  useObserver({
    target: observerRef,
    onIntersect: ([entry]) => {
      return entry.isIntersecting && hasNextPage && fetchNextPage();
    },
  });

  return (
    <div className="flex flex-col items-center w-full max-w-[1300px] min-h-screen">
      <div className="w-full max-w-[1225px] px-[5%] 2xl:px-0">
        <MainThemeTitle title="토크해요">
          <RecentMakeTalkRoom />
        </MainThemeTitle>

        {search && (
          <p>
            <span className="font-SpoqaHanSansNeo font-medium 2xl:text-[17px] xl:text-base lg:text-[15px] md:text-sm sm:text-xs text-[#77777E]">
              "{search}" 의 결과
            </span>
            <hr className="border-solid 2xl:border-[3px] xl:border-[3px] lg:border-[2px] md:border-[2px] sm:border-1 border-[#F5EFE5] mt-3 2xl:mb-[19px] xl:mb-[17px] lg:mb-[15px] md:mb-[13px] sm:mb-3" />
          </p>
        )}

        <div className="w-full mb-[37px]">
          <TalkRoomFilter
            onSearchSubmit={searchTalkRoom}
            searchParam={search}
          />
        </div>
      </div>

      {isLoading && <SkeletonTalkRoomCard />}
      {talkRoom &&
      talkRoom.pages.length > 0 &&
      talkRoom.pages[0].content.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-center gap-x-[40px] gap-y-[30px] w-full mb-[30px] px-[5%] xl:px-0 2xl:px-0">
          {talkRoom.pages.map(
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
      {!isLoading && isFetching && <SkeletonTalkRoomCard />}
      <div className="observer" ref={observerRef} />
    </div>
  );
};

export default page;
