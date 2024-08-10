"use client";

import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import RecentMakeTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";
import useObserver from "@/util/useObserver";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import TalkRoomCard from "../../components/Card/MainPageCard/TalkRoomCard";
import { ThemeMain } from "../../components/Theme/Theme";
import TalkRoomSearch from "../_component/talkroomSearch";

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

const page = ({ params }: { params: { result: string } }) => {
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
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };
  const search = decodeURIComponent(params.result);

  const {
    data: popularTalkRoom,
    isLoading,
    isFetching,
    refetch: refetchTalkRoomData,
    hasNextPage,
    fetchNextPage,
  } = useGetRooms({
    size: 12,
    order: orderStatus,
    search: search,
    sortbydate: sortByDate,
  });

  const searchTalkRoom = (searchValue: string) => {
    router.push(
      `/talkroom/${searchValue}/?order=recent&search=${searchValue}&sortbydate=`,
    );
  };

  const observerRef = useRef<HTMLDivElement | null>(null);

  useObserver({
    target: observerRef,
    onIntersect: ([entry]) => {
      return entry.isIntersecting && hasNextPage && fetchNextPage();
    },
  });

  useEffect(() => {
    refetchTalkRoomData();
  }, [orderStatus, sortByDate]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-[1255px]">
        <ThemeMain.MainTheme>
          <div className="flex mt-[78px] mb-[23px]">
            <div className="flex items-center mb-[23px]">
              <div className="text-[30px] mr-[16px]">토크해요</div>
              <div className="w-[30px] h-[30px]">
                <RecentMakeTalkRoom />
              </div>
            </div>
          </div>
        </ThemeMain.MainTheme>

        <div className="font-SpoqaHanSansNeo font-medium text-[20px] text-[#77777E]">
          "{search}" 의 결과
        </div>

        <hr className="border-solid border-[3px] border-[#F5EFE5] mt-3 mb-[19px]" />
        <div className="flex mb-[37px] grow">
          <div className="flex grow">
            <TalkRoomSearch
              onSearchSubmit={searchTalkRoom}
              searchParam={search}
            />
          </div>
        </div>
      </div>

      {isLoading && <>Loading...</>}
      {popularTalkRoom &&
      popularTalkRoom.pages.length > 0 &&
      popularTalkRoom.pages[0].content.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-center gap-x-[40px] gap-y-[30px] w-[1295px]">
          {popularTalkRoom.pages.map(
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
                      isBest={true}
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
      {isFetching && <>Loading...</>}
      <div className="observer" ref={observerRef} />
    </div>
  );
};

export default page;
