"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useLogin } from "@/hook/useLogin";
import { TalkRoomQueryOptions } from "@/services/talk-room/TalkRoomQueries";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Link from "next/link";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);

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
  registeredDateTime?: string;
  creatorId: number;
}

const RelatedTalkRoom = ({ params }: { params: { isbn: string } }) => {
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };

  const { data } = useQuery(
    TalkRoomQueryOptions.getRelatedTalkRooms({
      isbn: params.isbn,
      page: 1,
      size: 8,
    }),
  );

  return (
    <>
      <div className="flex flex-row my-7 items-center">
        <span className="font-bold flex flex-row 2xl:gap-5 xl:gap-4 lg:gap-4 gap-2 grow 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-SpoqaHanSansNeo items-center">
          연관된 토크방 보기
        </span>
        <Link href={`/talkroom/related/${params.isbn}`}>
          <span className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-[#74747B] font-Pretendard font-regular">
            더보기 {">"}
          </span>
        </Link>
      </div>

      {data && data.data.queryResponse.length > 0 ? (
        <div className="flex fex-row flex-wrap gap-7 mb-7 md:justify-center sm:justify-center">
          {data.data.queryResponse.map((data: TalkRoomProps) => {
            const isLike =
              isLoggedIn &&
              (talkRoomLikeIds?.talkRoomIds || []).includes(data.id);
            return (
              <TalkRoomCard
                key={data.id}
                data={data}
                userId={myDetailData?.userId || -1}
                isLike={isLike}
              />
            );
          })}
        </div>
      ) : (
        !data && <HaveNotData content={"연관된 토크방이"} />
      )}
    </>
  );
};

export default RelatedTalkRoom;
