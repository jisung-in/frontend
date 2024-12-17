"use client";

import MainThemeTitle from "@/app/components/MainThemeTitle/MainThemeTitle";
import SkeletonSpeechBubble from "@/app/components/SkeletonUi/SkeletonSpeechBubble";
import SkeletonTalkRoomDetailMain from "@/app/components/SkeletonUi/SkeletonTalkRoomDetailMain";
import PopularTalkRoom from "@/assets/img/popular-talk-room.png";
import { useGetBookState } from "@/hook/reactQuery/book/useGetBookState";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetCommentLike } from "@/hook/reactQuery/talkRoom/useGetCommentLike";
import { useGetComments } from "@/hook/reactQuery/talkRoom/useGetComments";
import { useGetOneRoom } from "@/hook/reactQuery/talkRoom/useGetOneRoom";
import { useLogin } from "@/hook/useLogin";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import ParticipationCondition from "../../_component/ParticipationCondition";
import MySpeechBubble from "../../_component/SpeechBubble/MySpeechBubble";
import SpeechBubble from "../../_component/SpeechBubble/SpeechBubble";
import TalkRoomDetail from "../../_component/TalkRoomDetail";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);

type comments = {
  commentId: number;
  userName: string;
  profileImage: string;
  content: string;
  commentLikeCount: number;
  commentImages: string[];
  registeredDateTime: string;
  creatorId: number;
};

type Book = {
  id: number;
  bookIsbn: string;
  status: string;
};

const Page = ({ params }: { params: { id: number } }) => {
  const { isLoggedIn } = useLogin();
  const [hydrated, setHydrated] = useState(false);
  const { data: talkroomOne, isLoading: isTalkroomOne } = useGetOneRoom({
    talkRoomId: params.id,
  });
  const { data: getBookState } = isLoggedIn ? useGetBookState() : { data: [] };
  const { data: commentLikeIds } = isLoggedIn
    ? useGetCommentLike()
    : { data: { commentIds: [] } };
  const { data: myDetail } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };
  const { data: comments, isLoading: isComments } = useGetComments(params.id);

  useEffect(() => {
    setHydrated(true);
  }, [isLoggedIn]);

  if (!hydrated) {
    return null;
  }

  const isCondition = (): boolean =>
    Array.isArray(getBookState) &&
    getBookState.some(
      (book: Book) =>
        book.bookIsbn === talkroomOne?.bookIsbn &&
        talkroomOne?.readingStatuses.includes(book.status),
    );

  return (
    <>
      <div className="max-w-[1180px] w-full">
        <div className="px-[5%]">
          <MainThemeTitle title="토크해요">
            <Image src={PopularTalkRoom} alt="토크해요" />
          </MainThemeTitle>

          {isTalkroomOne && <SkeletonTalkRoomDetailMain />}
          <TalkRoomDetail data={talkroomOne} userId={myDetail?.userId || -1} />
        </div>
      </div>

      <hr className="border-[6px] border-[#F5EFE5] w-full my-12 sm:hidden block" />

      <div className="max-w-[1180px] w-full">
        <div className="px-[5%]">
          <div className="flex flex-col items-center mb-9 sm:mt-9">
            <ParticipationCondition
              isLoggedIn={isLoggedIn}
              isCondition={isCondition()}
              id={params.id}
            />
          </div>

          <p className="font-Pretendard font-semibold 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-[#818181] mb-[28px]">
            <span>의견 </span>
            <span>
              {comments && comments.totalCount > 999
                ? "999+"
                : comments?.totalCount}
            </span>
          </p>

          {isComments && <SkeletonSpeechBubble />}
          {comments && comments.queryResponse.length > 0
            ? comments.queryResponse.map((data: comments) => {
                const isLike =
                  isLoggedIn &&
                  (commentLikeIds?.commentIds || []).includes(data.commentId);
                return (
                  <div key={data.commentId}>
                    {data.creatorId === myDetail?.userId ? (
                      <MySpeechBubble key={data.commentId} data={data} />
                    ) : (
                      <SpeechBubble
                        key={data.commentId}
                        data={data}
                        userId={myDetail?.userId || -1}
                        isLike={isLike}
                      />
                    )}
                  </div>
                );
              })
            : !isComments && <HaveNotData content={"아직 의견이"} />}
        </div>
      </div>
    </>
  );
};

export default Page;
