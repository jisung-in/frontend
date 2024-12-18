"use client";

import MiniEvaluationCard from "@/app/components/Card/EvaluationCard/MiniEvaluationCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import { useGetReview } from "@/hook/reactQuery/book/useGetReview";
import { useGetReviewCount } from "@/hook/reactQuery/book/useGetReviewCount";
import { useGetReviewLike } from "@/hook/reactQuery/book/useGetReviewLike";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useLogin } from "@/hook/useLogin";
import Link from "next/link";

interface UserEvaluationProps {
  reviewId: number;
  ratingId: number;
  creatorId: number;
  username: string;
  profileImage: string;
  reviewContent: string;
  starRating: number;
  likeCount: number;
}

const UserEvaluation = ({ params }: { params: { isbn: string } }) => {
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

  const { data: review, isLoading: isReview } = useGetReview({
    isbn: params.isbn,
    size: 8,
    order: "recent",
  });
  const { data: reviewCount } = useGetReviewCount(params.isbn);

  return (
    <>
      <div className="flex flex-row mt-16 my-7 items-center">
        <p className="flex flex-row 2xl:gap-5 xl:gap-4 lg:gap-4 gap-2 grow 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-SpoqaHanSansNeo items-center">
          <span className="font-bold">유저들의 평가</span>
          <span className="font-medium text-[#74747B]">{reviewCount}</span>
        </p>
        <Link href={`/evaluation/${params.isbn}?order=like`}>
          <div className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-[#74747B] font-Pretendard font-regular">
            더보기 {">"}
          </div>
        </Link>
      </div>

      <div className="flex flex-row justify-center mb-7">
        {review && review.pages[0].content.length > 0 ? (
          <div className="w-full flex flex-row flex-wrap gap-5 md:justify-center sm:justify-center">
            {review.pages[0].content.map((data: UserEvaluationProps) => {
              const isLike =
                isLoggedIn &&
                (reviewLikeIds?.reviewIds || []).includes(data.reviewId);
              return (
                <div key={data.reviewId} className="sm:w-full">
                  <MiniEvaluationCard
                    data={data}
                    userId={myDetailData?.userId || -1}
                    isLike={isLike}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          !isReview && <HaveNotData content={"유저들의 평가가"} />
        )}
      </div>
    </>
  );
};

export default UserEvaluation;
