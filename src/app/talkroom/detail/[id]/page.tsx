"use client";

import { Button } from "@/app/components/Button/Button";
import MainThemeTitle from "@/app/components/MainThemeTitle/MainThemeTitle";
import SkeletonSpeechBubble from "@/app/components/SkeletonUI/SkeletonSpeechBubble";
import SkeletonTalkRoomDetailMain from "@/app/components/SkeletonUI/SkeletonTalkRoomDetailMain";
import PopularTalkRoom from "@/assets/img/popular-talk-room.svg";
import { useGetBookState } from "@/hook/reactQuery/book/useGetBookState";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetCommentLike } from "@/hook/reactQuery/talkRoom/useGetCommentLike";
import { useGetComments } from "@/hook/reactQuery/talkRoom/useGetComments";
import { useGetOneRoom } from "@/hook/reactQuery/talkRoom/useGetOneRoom";
import { useLogin } from "@/hook/useLogin";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import MySpeechBubble from "../../_component/SpeechBubble/MySpeechBubble";
import SpeechBubble from "../../_component/SpeechBubble/SpeechBubble";
import TalkRoomDetailMain from "../../_component/talkroomDetailMain";

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

  const isCondition = (): boolean => {
    if (!Array.isArray(getBookState)) {
      return false;
    }
    return getBookState.some((book: Book) => {
      return (
        book.bookIsbn === talkroomOne?.bookIsbn &&
        talkroomOne?.readingStatuses.includes(book.status)
      );
    });
  };

  return (
    <div>
      <MainThemeTitle title="토크해요">
        <PopularTalkRoom />
      </MainThemeTitle>

      {isTalkroomOne && <SkeletonTalkRoomDetailMain />}
      <TalkRoomDetailMain data={talkroomOne} userId={myDetail?.userId || -1} />

      <hr className="border-[6px] border-[#F5EFE5] mt-[47px] mb-[42px]" />

      <div className="flex flex-col items-center mt-[37px] mb-[31px]">
        {isLoggedIn && isCondition() ? (
          <>
            <div className="font-SpoqaHanSansNeo font-bold text-[#80685D] text-[30px] mb-[43px]">
              참가 조건에 부합하여 의견 작성이 가능합니다
            </div>
            <Button
              width="register"
              height="xl2"
              className="font-Pretendard font-semibold text-[28px]"
            >
              <Link className="w-full" href={`/talkroom/comment/${params.id}`}>
                등록하기
              </Link>
            </Button>
          </>
        ) : (
          <>
            <div className="font-SpoqaHanSansNeo font-bold text-[#656565] text-[30px] mb-[43px]">
              참가 조건에 부합하지 않습니다
            </div>
            <Button
              width="register"
              height="xl2"
              variant={"notCondition"}
              className="font-Pretendard font-semibold text-[28px] text-[#828282] pointer-events-none"
            >
              등록하기
            </Button>
          </>
        )}
      </div>

      <div className="font-Pretendard font-semibold text-[21px] text-[#818181] mb-[28px]">
        의견{" "}
        {comments && comments.totalCount > 999 ? "999+" : comments?.totalCount}
      </div>

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
  );
};

export default Page;
