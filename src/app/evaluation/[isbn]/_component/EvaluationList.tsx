"use client";

import EvaluationCard from "@/app/components/Card/EvaluationCard/EvaluationCard";
import SkeletonEvaluation from "@/app/components/SkeletonUi/SkeletonEvaluation";
import { useGetReview } from "@/hook/reactQuery/book/useGetReview";
import { useGetReviewLike } from "@/hook/reactQuery/book/useGetReviewLike";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useLogin } from "@/hook/useLogin";
import useObserver from "@/util/useObserver";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);

interface EvaluationDataProps {
  reviewId: number;
  ratingId: number;
  creatorId: number;
  username: string;
  profileImage: string;
  reviewContent: string;
  starRating: number;
  likeCount: number;
}

interface EvaluationListProps {
  isbn: string;
}

const EvaluationList: React.FC<EvaluationListProps> = ({ isbn }) => {
  const { isLoggedIn } = useLogin();
  const { data: reviewLikeIds } = isLoggedIn
    ? useGetReviewLike()
    : { data: { reviewIds: [] } };
  const { data: myDetail } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };

  const orderParams = useSearchParams();
  const order = orderParams.get("order") || "like";

  const {
    data: review,
    isLoading: isReview,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch: refetchReviewData,
  } = useGetReview({
    isbn,
    size: 10,
    order: order,
  });

  const observerRef = useRef<HTMLDivElement | null>(null);

  useObserver({
    target: observerRef,
    rootMargin: "0px 0px -100px 0px",
    onIntersect: ([entry]) => {
      return entry.isIntersecting && hasNextPage && fetchNextPage();
    },
  });

  useEffect(() => {
    refetchReviewData();
  }, [order]);

  return (
    <div className="w-full px-[5%]">
      {isReview && <SkeletonEvaluation />}
      {review &&
      review.pages.length > 0 &&
      review.pages[0].content.length > 0 ? (
        <>
          {review.pages.map(
            (page) =>
              page.content &&
              page.content.length > 0 &&
              page.content.map((data: EvaluationDataProps) => {
                const isLike =
                  isLoggedIn &&
                  (reviewLikeIds?.reviewIds || []).includes(data.reviewId);
                return (
                  <div key={data.reviewId}>
                    <EvaluationCard
                      data={data}
                      userId={myDetail?.userId || -1}
                      isLike={isLike}
                    />
                  </div>
                );
              }),
          )}
          {isFetching && <SkeletonEvaluation />}
          <div className="observer" ref={observerRef} />
        </>
      ) : (
        !isReview && <HaveNotData content={"아직 유저평가가"} />
      )}
    </div>
  );
};

export default EvaluationList;
