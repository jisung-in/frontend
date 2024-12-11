"use client";

import { Button } from "@/app/components/Button/Button";
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
    <>
      <div className="max-w-[1180px] w-full">
        <div className="px-[5%]">
          <MainThemeTitle title="토크해요">
            <Image src={PopularTalkRoom} alt="토크해요" />
          </MainThemeTitle>
        </div>

        <div className="px-[5%]">
          <SkeletonTalkRoomDetailMain />
          {isTalkroomOne && <SkeletonTalkRoomDetailMain />}
          <TalkRoomDetailMain
            data={talkroomOne}
            userId={myDetail?.userId || -1}
          />
        </div>
      </div>

      <hr className="border-[6px] border-[#F5EFE5] w-full my-12 sm:hidden block" />

      <div className="max-w-[1180px] w-full">
        <div className="px-[5%]">
          <div className="flex flex-col items-center mb-9 sm:mt-9">
            {isLoggedIn && isCondition() ? (
              <>
                <h3 className="text-center font-SpoqaHanSansNeo font-bold text-[#80685D] 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base 2xl:mb-10 xl:mb-8 lg:mb-6 mb-4">
                  참가 조건에 부합하여 의견 작성이 가능합니다
                </h3>
                <Button className="2xl:w-[350px] 2xl:h-[70px] xl:w-[300px] xl:h-[65px] lg:w-[250px] lg:h-[60px] md:w-[200px] md:h-[50px] sm:h-10 font-Pretendard font-semibold 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">
                  <Link
                    className="w-full"
                    href={`/talkroom/comment/${params.id}`}
                  >
                    등록하기
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <h3 className="font-SpoqaHanSansNeo font-bold text-[#656565] 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm 2xl:mb-10 xl:mb-8 lg:mb-6 mb-4">
                  참가 조건에 부합하지 않습니다
                </h3>
                <Button
                  variant={"notCondition"}
                  className="2xl:w-[350px] 2xl:h-[70px] xl:w-[300px] xl:h-[65px] lg:w-[250px] lg:h-[60px] md:w-[200px] md:h-[50px] sm:h-10 font-Pretendard font-semibold 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg"
                >
                  등록하기
                </Button>
              </>
            )}
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
