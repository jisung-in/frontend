"use client";

import { Button } from "@/app/components/Button/Button";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import MainThemeTitle from "@/app/components/MainThemeTitle/MainThemeTitle";
import PopularTalkRoom from "@/assets/img/popular-talk-room.svg";
import { useGetBookState } from "@/hook/reactQuery/book/useGetBookState";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetCommentLike } from "@/hook/reactQuery/talkRoom/useGetCommentLike";
import { useGetComments } from "@/hook/reactQuery/talkRoom/useGetComments";
import { useGetOneRoom } from "@/hook/reactQuery/talkRoom/useGetOneRoom";
import { useLogin } from "@/hook/useLogin";
import Link from "next/link";
import { useEffect, useState } from "react";
import MySpeechBubble from "../../_component/SpeechBubble/MySpeechBubble";
import SpeechBubble from "../../_component/SpeechBubble/SpeechBubble";
import TalkRoomDetailMain from "../../_component/talkroomDetailMain";

type CommentsData = {
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
  const { data: talkroomOneData } = useGetOneRoom({ talkRoomId: params.id });
  const { data: getBookState } = isLoggedIn ? useGetBookState() : { data: [] };
  const { data: commentLikeIds } = isLoggedIn
    ? useGetCommentLike()
    : { data: { commentIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };
  const { data: commentsData } = useGetComments(params.id);

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
        book.bookIsbn === talkroomOneData?.bookIsbn &&
        talkroomOneData?.readingStatuses.includes(book.status)
      );
    });
  };

  return (
    <div>
      <MainThemeTitle title="토크해요">
        <PopularTalkRoom />
      </MainThemeTitle>

      <TalkRoomDetailMain
        data={talkroomOneData}
        userId={myDetailData?.userId || -1}
      />

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
        {commentsData && commentsData.totalCount > 999
          ? "999+"
          : commentsData?.totalCount}
      </div>

      {commentsData && commentsData.queryResponse.length > 0 ? (
        commentsData.queryResponse.map((data: CommentsData) => {
          const isLike =
            isLoggedIn &&
            (commentLikeIds?.commentIds || []).includes(data.commentId);
          return (
            <div key={data.commentId}>
              {data.creatorId === myDetailData?.userId ? (
                <MySpeechBubble key={data.commentId} data={data} />
              ) : (
                <SpeechBubble
                  key={data.commentId}
                  data={data}
                  userId={myDetailData?.userId || -1}
                  isLike={isLike}
                />
              )}
            </div>
          );
        })
      ) : (
        <HaveNotData content={"아직 의견이"} />
      )}
    </div>
  );
};

export default Page;
