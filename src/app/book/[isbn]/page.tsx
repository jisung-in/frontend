"use client";
import MiniEvaluationCard from "@/app/components/Card/EvaluationCard/MiniEvaluationCard";
import RelatedTalkRoomCard from "@/app/components/Card/MainPageCard/RelatedTalkRoomCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import MainThemeTitle from "@/app/components/MainThemeTitle/MainThemeTitle";
import BestSeller from "@/assets/img/best-seller.svg";
import { useGetBookInformation } from "@/hook/reactQuery/book/useGetBookInformation";
import { useGetBookRelatedTalkRoom } from "@/hook/reactQuery/book/useGetBookRelatedTalkRoom";
import { useGetReview } from "@/hook/reactQuery/book/useGetReview";
import Link from "next/link";
import { useCallback } from "react";
import BookInformation from "../_component/BookInformation";
import RegisterEvaluation from "../_component/registerEvaluation";

type TalkRoom = {
  id: number;
  profileImage: string;
  username: string;
  title: string;
  content: string;
  bookName: string;
  bookAuthors: string;
  bookThumbnail: string;
  likeCount: number;
};
type UserEvaluation = {
  reviewId: number;
  ratingId: number;
  username: string;
  profileImage: string;
  reviewContent: string;
  starRating: number;
  likeCount: number;
};

const page = ({ params }: { params: { isbn: string } }) => {
  const { data: bookDetailData, refetch: refetchBookInformation } =
    useGetBookInformation({
      isbn: params.isbn,
    });
  const totalRatingChange = useCallback(() => {
    refetchBookInformation();
  }, [refetchBookInformation]);

  const { data: relateData } = useGetBookRelatedTalkRoom({
    isbn: params.isbn,
    page: 1,
    size: 6,
  });
  const { data: reviewData } = useGetReview({
    isbn: params.isbn,
    page: 1,
    size: 8,
    order: "recent",
  });
  return (
    <div>
      <div className="mx-[120px]">
        <MainThemeTitle title="책 상세보기">
          <BestSeller />
        </MainThemeTitle>
        {bookDetailData ? (
          <BookInformation
            data={bookDetailData}
            isbn={params.isbn}
            onTotalRatingChange={totalRatingChange}
          />
        ) : (
          <HaveNotData content={"책의 정보가"} />
        )}
      </div>

      <div className="bg-white">
        <div className="max-w-[1680px] mx-[120px]">
          <RegisterEvaluation isbn={params.isbn} />

          <div className="flex flex-row mt-[63px] mb-[28px] items-center">
            <div className="flex flex-row gap-x-[19px] flex-grow text-[30px] font-SpoqaHanSansNeo items-center">
              <div className="font-bold">유저들의 평가</div>
              <div className="font-medium text-[#74747B]">3000+</div>
            </div>
            <Link href={`/evaluation/${params.isbn}?order=like`}>
              <div className="text-[20px] text-[#74747B] font-Pretendard font-regular">
                더보기 {">"}
              </div>
            </Link>
          </div>

          <div className="flex flex-row justify-center">
            {reviewData && reviewData.data.content.length > 0 ? (
              <div className="w-full flex flex-row flex-wrap gap-x-[20px] gap-y-[22px]">
                {reviewData.data.content.map((data: UserEvaluation) => {
                  return <MiniEvaluationCard key={data.reviewId} data={data} />;
                })}
              </div>
            ) : (
              <HaveNotData content={"유저들의 평가가"} />
            )}
          </div>
        </div>
      </div>

      <div className="mx-[120px] max-w-[1680px]">
        <div className="flex flex-row mt-[57px] mb-[27px] items-center">
          <div className="font-SpoqaHanSansNeo font-bold text-[30px] flex flex-row flex-grow">
            연관된 토크방 보기
          </div>
          <Link href={`/talkroom/related/${params.isbn}`}>
            <div className="text-[20px] text-[#74747B] font-Pretendard font-regular flex items-center">
              더보기 {">"}
            </div>
          </Link>
        </div>
        {relateData && relateData.queryResponse.length > 0 ? (
          <div className="flex fex-row flex-wrap gap-x-[19px] gap-y-[30px] mb-[121px]">
            {relateData.queryResponse.map((data: TalkRoom) => {
              return <RelatedTalkRoomCard key={data.id} data={data} />;
            })}
          </div>
        ) : (
          <HaveNotData content={"연관된 토크방이"} />
        )}
      </div>
    </div>
  );
};

export default page;
