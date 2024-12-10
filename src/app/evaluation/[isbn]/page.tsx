"use client";

import EvaluationCard from "@/app/components/Card/EvaluationCard/EvaluationCard";
import { Layout } from "@/app/components/Layout/Layout";
import SkeletonEvaluation from "@/app/components/SkeletonUi/SkeletonEvaluation";
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
    <>
      <Layout className="sm:bg-[white]">
        <div className="px-[5%]">
          <MainThemeTitle title="유저들의 평가">
            <span className="sm:hidden block">
              <UserEvaluationImg />
            </span>
          </MainThemeTitle>
        </div>
      </Layout>

      <hr className="w-full 2xl:h-[6px] xl:h-[5px] lg:h-1 md:h-[3px] sm:h-[2px] bg-[#F5EFE5]" />

      <p className="2xl:py-6 xl:py-5 lg:py-4 md:py-3 w-full flex items-center justify-end bg-[white] pr-[5%] sm:hidden block">
        <DropDown
          items={Object.keys(standardType)}
          selectedItem={likeStandard}
          setSelectedItem={handleChangeStandard}
        />
      </p>

      <Layout>
        <div className="flex items-center justify-center font-Pretendard font-medium my-10">
          <div className="flex justify-start">
            {isBookDetail ? (
              <Skeleton className="sm:w-[124px] sm:h-[168px] md:w-[144px] md:h-[198px] lg:w-[174px] lg:h-[228px] xl:w-[194px] xl:h-[258px] 2xl:w-[214px] 2xl:h-[288px] 2xl:mr-12 xl:mr-10 lg:mr-8 md:mr-6 sm:mr-4" />
            ) : (
              <div className="relative aspect-[0.7] overflow-hidden sm:w-[124px] sm:h-[168px] md:w-[144px] md:h-[198px] lg:w-[174px] lg:h-[228px] xl:w-[194px] xl:h-[258px] 2xl:w-[214px] 2xl:h-[288px] 2xl:mr-12 xl:mr-10 lg:mr-8 md:mr-6 sm:mr-4">
                <Image
                  className="border border-[#F4E4CE]"
                  src={bookDetail ? bookDetail.thumbnail : NoImage}
                  alt="책 표지"
                  fill
                />
              </div>
            )}

            <div className="flex flex-col mt-3">
              <div className="flex flex-row items-center gap-x-4 mb-[11px]">
                <div className="font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#000]">
                  {isBookDetail ? (
                    <Skeleton className="sm:w-[100px] sm:h-[30px] md:w-[150px] md:h-[35px] lg:w-[200px] lg:h-[40px] xl:w-[250px] xl:h-[45px] 2xl:w-[300px] 2xl:h-[50px]" />
                  ) : (
                    bookDetail?.title
                  )}
                </div>
              </div>
              <div className="flex flex-row text-2xl text-[#656565] gap-x-[29px]">
                {isBookDetail ? (
                  <Skeleton className="sm:w-[100px] sm:h-[20px] md:w-[120px] md:h-[25px] lg:w-[140px] lg:h-[30px] xl:w-[170px] xl:h-[35px] 2xl:w-[200px] 2xl:h-[35px]" />
                ) : (
                  <p className="flex gap-3 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    <span>{bookDetail?.publisher}</span>
                    <span>{bookDetail?.authors}</span>
                    <span className="font-Inter">
                      {bookDetail?.dateTime.slice(0, 4)}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="w-full pr-[5%] sm:block hidden mb-10">
          <span className="flex justify-end">
            <DropDown
              items={Object.keys(standardType)}
              selectedItem={likeStandard}
              setSelectedItem={handleChangeStandard}
            />
          </span>
        </p>
      </Layout>

      <div className="flex flex-col justify-center items-center w-full max-w-[910px]">
        {isReview && (
          <div className="w-full px-[5%]">
            <SkeletonEvaluation />
          </div>
        )}
        {review &&
        review.pages.length > 0 &&
        review.pages[0].content.length > 0 ? (
          <div className="w-full px-[5%]">
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
          </div>
        ) : (
          !isReview && <HaveNotData content={"아직 유저평가가"} />
        )}
      </div>
    </>
  );
};

export default Page;
