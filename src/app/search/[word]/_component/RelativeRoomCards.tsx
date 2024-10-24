"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import SkeletonTalkRoomCard from "@/app/components/SkeletonUi/SkeletonTalkRoomCard";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";
import dynamic from "next/dynamic";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);

type Props = {
  name: string;
};

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

const RelativeRoomCards = ({ name }: Props) => {
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };
  const { data: bookData, isLoading: isBookDataLoading } = useGetRooms({
    search: name,
  });

  return (
    <>
      {isBookDataLoading && <SkeletonTalkRoomCard />}
      {bookData &&
      bookData.pages.length > 0 &&
      bookData.pages[0].content.length > 0 ? (
        <div className="flex flex-row xl2:gap-x-[20px]">
          {bookData.pages.map(
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
        !isBookDataLoading && <HaveNotData content={"관련 게시물이"} />
      )}
    </>
  );
};

export default RelativeRoomCards;
