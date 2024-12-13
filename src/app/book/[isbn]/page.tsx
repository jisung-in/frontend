"use client";

import MiniEvaluationCard from "@/app/components/Card/EvaluationCard/MiniEvaluationCard";
import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import { Layout } from "@/app/components/Layout/Layout";
import MainThemeTitle from "@/app/components/MainThemeTitle/MainThemeTitle";
import SkeletonBookDetail from "@/app/components/SkeletonUi/SkeletonBookDetail";
import SkeletonEvaluationMini from "@/app/components/SkeletonUi/SkeletonEvaluationMini";
import SkeletonTalkRoomCard from "@/app/components/SkeletonUi/SkeletonTalkRoomCard";
import BestSeller from "@/assets/img/best-seller.svg";
import { useGetBookInformation } from "@/hook/reactQuery/book/useGetBookInformation";
import { useGetBookRelatedTalkRoom } from "@/hook/reactQuery/book/useGetBookRelatedTalkRoom";
import { useGetReview } from "@/hook/reactQuery/book/useGetReview";
import { useGetReviewCount } from "@/hook/reactQuery/book/useGetReviewCount";
import { useGetReviewLike } from "@/hook/reactQuery/book/useGetReviewLike";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useLogin } from "@/hook/useLogin";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback } from "react";
import BookInformation from "../_component/BookInformation";
import RegisterEvaluation from "../_component/registerEvaluation";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);

type TalkRoom = {
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
};
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

const page = ({ params }: { params: { isbn: string } }) => {
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
  const {
    data: bookDetail,
    isLoading: isBookDetail,
    refetch: refetchBookInformation,
  } = useGetBookInformation({
    isbn: params.isbn,
  });
  const { data: reviewCount } = useGetReviewCount(params.isbn);
  const totalRatingChange = useCallback(() => {
    refetchBookInformation();
  }, [refetchBookInformation]);

  const { data: relatedTalkRoom, isLoading: isRelatedTalkRoom } =
    useGetBookRelatedTalkRoom({
      isbn: params.isbn,
      page: 1,
      size: 6,
    });
  const { data: review, isLoading: isReview } = useGetReview({
    isbn: params.isbn,
    size: 8,
    order: "recent",
  });
  return (
    <>
      <Layout>
        <div className="px-[5%]">
          <MainThemeTitle title="책 상세보기">
            <BestSeller />
          </MainThemeTitle>

          {isBookDetail && <SkeletonBookDetail />}
          {bookDetail ? (
            <BookInformation
              data={bookDetail}
              isbn={params.isbn}
              isLogin={isLoggedIn}
              onTotalRatingChange={totalRatingChange}
            />
          ) : (
            !isBookDetail && <HaveNotData content={"책의 정보가"} />
          )}
        </div>
      </Layout>

      <div className="w-full bg-white flex flex-col items-center">
        <Layout className="max-w-[2000px] py-10 px-[5%]">
          <RegisterEvaluation isbn={params.isbn} isLogin={isLoggedIn} />

          <div className="flex flex-row my-7 items-center">
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

          <div className="flex flex-row justify-center">
            {isReview && <SkeletonEvaluationMini />}
            {review && review.pages[0].content.length > 0 ? (
              <div className="w-full flex flex-row flex-wrap gap-5 md:justify-center sm:justify-center">
                {review.pages[0].content.map((data: UserEvaluation) => {
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
        </Layout>
      </div>

      <Layout className="max-w-[2000px] py-10 px-[5%]">
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

        {isRelatedTalkRoom && <SkeletonTalkRoomCard />}
        {relatedTalkRoom && relatedTalkRoom.queryResponse.length > 0 ? (
          <div className="flex fex-row flex-wrap gap-7 mb-7 md:justify-center sm:justify-center">
            {relatedTalkRoom.queryResponse.map((data: TalkRoom) => {
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
      </Layout>
    </>
  );
};

export default page;
