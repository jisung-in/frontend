"use client";

import EvaluationCard from "@/app/components/Card/EvaluationCard/EvaluationCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import BookTitle from "@/assets/img/book-title-evaluation.svg";
import NoImage from "@/assets/img/no-image.png";
import UserEvaluationImg from "@/assets/img/user-evaluation.svg";
import { useGetBookInformation } from "@/hook/reactQuery/book/useGetBookInformation";
import { useGetReview } from "@/hook/reactQuery/book/useGetReview";
import Image from "next/image";
import { useState } from "react";
import DropDown from "../../components/DropDown/DropDown";
import MainThemeTitle from "../../components/MainThemeTitle/MainThemeTitle";

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
  const { data: bookDetailData } = useGetBookInformation({
    isbn: params.isbn,
  });
  const { data: reviewData } = useGetReview({
    isbn: params.isbn,
    page: 1,
    size: 10,
    order: "recent",
  });
  const [likeStandard, setLikeStandard] = useState<string>("좋아요 순");
  const standardType: string[] = [
    "좋아요 순",
    "높은 평가 순",
    "낮은 평가 순",
    "작성 순",
  ];

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
          items={standardType}
          selectedItem={likeStandard}
          setSelectedItem={setLikeStandard}
        />
      </div>

      <div className="flex items-center justify-center font-Pretendard font-medium mt-[42px] mb-[69px]">
        <div className="flex justify-start h-[288px] ">
          <div>
            <Image
              className="border border-[#F4E4CE] min-w-[214px] max-w-[214px] min-h-[288px] max-h-[288px] mr-[53px]"
              src={bookDetailData ? bookDetailData.thumbnail : NoImage}
              alt="책표지"
              width={214}
              height={288}
            />
          </div>
          <div className="flex flex-col mt-3">
            <div className="flex flex-row items-center gap-x-4 mb-[11px]">
              <BookTitle />
              <div className="font-semibold text-[40px] text-[#000]">
                {bookDetailData?.title}
              </div>
            </div>
            <div className="flex flex-row text-2xl text-[#656565] gap-x-[29px]">
              <div>{bookDetailData?.publisher}</div>
              <div>{bookDetailData?.authors}</div>
              <div className="font-Inter">
                {bookDetailData?.dateTime.slice(0, 4)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {reviewData && reviewData.data.content.length > 0 ? (
        <div className="flex flex-col items-center">
          {reviewData.data.content.map((data: UserEvaluation) => (
            <EvaluationCard key={data.reviewId} data={data} />
          ))}
        </div>
      ) : (
        <HaveNotData content={"아직 유저평가가"} />
      )}
    </div>
  );
};

export default page;
