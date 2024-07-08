"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import MainSelectionCard from "@/app/components/MainSelectionCard/MainSelectionCard";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
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
  const pageParam = param.get("page");
  const orderStatus: "recent" | "recommend" | "recent-comment" =
    orderParam === "recent" ||
    orderParam === "recommend" ||
    orderParam === "recent-comment"
      ? orderParam
      : "recent";
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
  });
  const searchTalkRoom = (searchValue: string) => {
    router.push(
      `${currentUrl}/${searchValue}/?order=${orderParam}&search=${searchValue}`,
    );
  };
  useEffect(() => {
    refetchTalkRoomData();
  }, [orderStatus, page]);
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[1280px] w-[84vw]">
        <div className="w-[168px] h-[80px] mt-[85px]">
          <Link href={"/talkroom/record?order=recent&search="}>
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

      {talkRoomPopular && talkRoomPopular.pages[0].content.length > 0 ? (
        <div className="flex flex-row items-center justify-center flex-wrap gap-x-[40px] gap-y-[30px] w-[1295px]">
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
      ) : (
        <HaveNotData content={"토크방이"} />
      )}
    </div>
  );
};

export default page;
