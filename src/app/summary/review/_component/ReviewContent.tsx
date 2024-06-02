"use client";

import MyEvaluationCard from "@/app/components/Card/EvaluationCard/MyEvaluationCard";
import Dropdown from "@/app/components/DropDown/DropDown";
import Pagination from "@/app/components/Pagination/Pagination";
import { useGetMyReview } from "@/hook/reactQuery/my/useGetMyReview";
import { useGetPageParams } from "@/hook/useGetPageParams";
import { useState } from "react";

const filterList: { [key: string]: string | "" } = {
  "나의 별점 높은 순": "rating_asc",
  "나의 별점 낮은 순": "rating_desc",
  "평균 별점 높은 순": "rating_avg_asc",
  "평균 별점 낮은 순": "rating_avg_desc",
};

const ReviewContent = () => {
  const [starFilter, setStartFilter] = useState("나의 별점 높은 순");
  const { currentUrl, page } = useGetPageParams();
  const { data: evaluationUser } = useGetMyReview({
    order: filterList[starFilter],
    page: page,
  });

  return (
    <>
      <div className="flex w-full justify-end pr-[10%] pb-[10px]">
        <Dropdown
          items={Object.keys(filterList)}
          selectedItem={starFilter}
          setSelectedItem={setStartFilter}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-[20px] w-[90%]">
        {evaluationUser?.reviewContents.queryResponse?.map((data: any) => (
          <MyEvaluationCard key={data.reviewId} data={data} />
        ))}
      </div>

      <Pagination
        totalItems={evaluationUser?.reviewContents.totalCount}
        postPage={6}
        link={currentUrl}
      />
    </>
  );
};

export default ReviewContent;
