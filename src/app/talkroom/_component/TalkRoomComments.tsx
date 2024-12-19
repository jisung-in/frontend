"use client";
import SkeletonSpeechBubble from "@/app/components/SkeletonUi/SkeletonSpeechBubble";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetCommentLike } from "@/hook/reactQuery/talkRoom/useGetCommentLike";
import { useGetComments } from "@/hook/reactQuery/talkRoom/useGetComments";
import { useLogin } from "@/hook/useLogin";
import dynamic from "next/dynamic";
import MySpeechBubble from "./SpeechBubble/MySpeechBubble";
import SpeechBubble from "./SpeechBubble/SpeechBubble";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);

interface CommentsProps {
  commentId: number;
  userName: string;
  profileImage: string;
  content: string;
  commentLikeCount: number;
  commentImages: string[];
  registeredDateTime: string;
  creatorId: number;
}

interface IdProps {
  id: number;
}

const TalkRoomComments = ({ id }: IdProps) => {
  const { isLoggedIn } = useLogin();
  const { data: commentLikeIds } = isLoggedIn
    ? useGetCommentLike()
    : { data: { commentIds: [] } };
  const { data: myDetail } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };
  const { data: comments, isLoading: isComments } = useGetComments(id);

  return (
    <>
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
        ? comments.queryResponse.map((data: CommentsProps) => {
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
    </>
  );
};

export default TalkRoomComments;
