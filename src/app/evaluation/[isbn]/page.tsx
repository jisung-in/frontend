"use client";

import EvaluationCard from "@/app/components/Card/EvaluationCard/EvaluationCard";
import SkeletonEvaluation from "@/app/components/Card/SkeletonUiCard/SkeletonEvaluation";
import BookTitle from "@/assets/img/book-title-evaluation.svg";
import NoImage from "@/assets/img/no-image.png";
import UserEvaluationImg from "@/assets/img/user-evaluation.svg";
import { useGetBookInformation } from "@/hook/reactQuery/book/useGetBookInformation";
import { useGetReview } from "@/hook/reactQuery/book/useGetReview";
import { useGetReviewLike } from "@/hook/reactQuery/book/useGetReviewLike";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useLogin } from "@/hook/useLogin";
import useObserver from "@/util/useObserver";
import { Skeleton } from "@nextui-org/skeleton";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import DropDown from "../../components/DropDown/DropDown";
import MainThemeTitle from "../../components/MainThemeTitle/MainThemeTitle";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);

type UserEvaluation = {
  reviewId: number;
  ratingId: number;
  creatorId: number;
  username: string;
  profileImage: string;
  reviewContent: string;
  starRating: number;
  likeCount: number;
};

const Page = ({ params }: { params: { isbn: string } }) => {
  const router = useRouter();
  const orderParams = useSearchParams();
  const order = orderParams.get("order") || "like";
  const { isLoggedIn } = useLogin();
  const { data: reviewLikeIds } = isLoggedIn
    ? useGetReviewLike()
    : { data: { reviewIds: [] } };
  const { data: myDetail } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };
  const { data: bookDetail, isLoading: isBookDetail } = useGetBookInformation({
    isbn: params.isbn,
  });

  const [likeStandard, setLikeStandard] = useState<string>("좋아요 순");
  const standardType: Record<string, string> = {
    "좋아요 순": "like",
    "높은 평가 순": "rating_desc",
    "낮은 평가 순": "rating_asc",
    "작성 순": "recent",
  };
  const handleChangeStandard = (selectedStandard: string) => {
    const order = standardType[selectedStandard];
    setLikeStandard(selectedStandard);
    router.push(`/evaluation/${params.isbn}?order=${order}`);
  };

  const {
    data: review,
    isLoading: isReview,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch: refetchReviewData,
  } = useGetReview({
    isbn: params.isbn,
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
    <div>
      <div className="ml-[120px]">
        <MainThemeTitle title="유저들의 평가">
          <UserEvaluationImg />
        </MainThemeTitle>
      </div>

      <div className="w-full h-[6px] bg-[#F5EFE5]" />

      <div className="h-[60px] flex items-center justify-end bg-[white] pr-[114px]">
        <DropDown
          items={Object.keys(standardType)}
          selectedItem={likeStandard}
          setSelectedItem={handleChangeStandard}
        />
      </div>

      <div className="flex items-center justify-center font-Pretendard font-medium mt-[42px] mb-[69px]">
        <div className="flex justify-start h-[288px] ">
          <div>
            {isBookDetail ? (
              <Skeleton className="w-[214px] h-[288px] mr-6" />
            ) : (
              <Image
                className="border border-[#F4E4CE] min-w-[214px] max-w-[214px] min-h-[288px] max-h-[288px] mr-[53px]"
                src={bookDetail ? bookDetail.thumbnail : NoImage}
                alt="책표지"
                width={214}
                height={288}
              />
            )}
          </div>
          <div className="flex flex-col mt-3">
            <div className="flex flex-row items-center gap-x-4 mb-[11px]">
              <BookTitle />
              <div className="font-semibold text-[40px] text-[#000]">
                {isBookDetail ? (
                  <Skeleton className="w-[300px] h-[50px]" />
                ) : (
                  bookDetail?.title
                )}
              </div>
            </div>
            <div className="flex flex-row text-2xl text-[#656565] gap-x-[29px]">
              {isBookDetail ? (
                <Skeleton className="w-[200px] h-[35px]" />
              ) : (
                <>
                  <div>{bookDetail?.publisher}</div>
                  <div>{bookDetail?.authors}</div>
                  <div className="font-Inter">
                    {bookDetail?.dateTime.slice(0, 4)}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        {isReview && <SkeletonEvaluation />}
        {review &&
        review.pages.length > 0 &&
        review.pages[0].content.length > 0 ? (
          <>
            {review.pages.map(
              (page) =>
                page.content &&
                page.content.length > 0 &&
                page.content.map((data: UserEvaluation) => {
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
    </div>
  );
};

export default Page;
