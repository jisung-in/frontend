"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import { useGetBookRelatedTalkRoom } from "@/hook/reactQuery/book/useGetBookRelatedTalkRoom";
import { useGetReviewLike } from "@/hook/reactQuery/book/useGetReviewLike";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useLogin } from "@/hook/useLogin";
import Link from "next/link";

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
  const { data: reviewLikeIds } = isLoggedIn
    ? useGetReviewLike()
    : { data: { reviewIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };

  const { data: relatedTalkRoom, isLoading: isRelatedTalkRoom } =
    useGetBookRelatedTalkRoom({
      isbn: params.isbn,
      page: 1,
      size: 6,
    });
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

      {relatedTalkRoom && relatedTalkRoom.queryResponse.length > 0 ? (
        <div className="flex fex-row flex-wrap gap-7 mb-7 md:justify-center sm:justify-center">
          {relatedTalkRoom.queryResponse.map((data: TalkRoomProps) => {
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
        !isRelatedTalkRoom && <HaveNotData content={"연관된 토크방이"} />
      )}
    </>
  );
};

export default RelatedTalkRoom;
