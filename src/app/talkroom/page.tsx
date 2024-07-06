"use client";

import RecentMakeTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import TalkRoomCard from "../components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "../components/HaveNotData/HaveNotData";
import { ThemeMain } from "../components/Theme/Theme";
import TalkRoomSearch from "./_component/talkroomSearch";
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
  const sortByDateParam = param.get("sortbydate");
  const pageParam = param.get("page");
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
  const page: number = Number(pageParam) || 1;
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };
  const {
    data: talkRoomPopular,
    isLoading,
    refetch: refetchTalkRoomData,
  } = useGetRooms({
    page: page,
    size: 12,
    order: orderStatus,
    sortbydate: sortByDate,
  });
  const searchTalkRoom = (searchValue: string) => {
    router.push(
      `/talkroom/${searchValue}/?order=recent&search=${searchValue}&sortbydate=&page=1`,
    );
  };
  useEffect(() => {
    refetchTalkRoomData();
  }, [orderStatus, sortByDate, page]);
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

        <div className="flex mb-[37px] grow">
          <TalkRoomSearch onSearchSubmit={searchTalkRoom} searchParam={""} />
        </div>
      </div>

      {talkRoomPopular && talkRoomPopular.pages[0].content.length > 0 ? (
        <>
          <div className="flex flex-row flex-wrap gap-x-[40px] gap-y-[30px] w-[1295px]">
            {talkRoomPopular.pages[0].content.map((data: TalkRoom) => {
              const isLike =
                isLoggedIn &&
                (talkRoomLikeIds?.talkRoomIds || []).includes(data.id);
              return (
                <TalkRoomCard
                  key={data.id}
                  userId={myDetailData?.userId || -1}
                  data={data}
                  isBest={orderParam === "recommend"}
                  isLike={isLike}
                />
              );
            })}
          </div>
        </>
      ) : (
        <HaveNotData content={"토크방이"} />
      )}
    </div>
  );
};

export default page;
