"use client";

import MyEvaluationCard from "@/app/components/Card/EvaluationCard/MyEvaluationCard";
import Dropdown from "@/app/components/DropDown/DropDown";
import { useGetMyReview } from "@/hook/reactQuery/my/useGetMyReview";
import { useState } from "react";

const filterList: { [key: string]: string | "" } = {
  "나의 별점 높은 순": "rating_asc",
  "나의 별점 낮은 순": "rating_desc",
  "평균 별점 높은 순": "rating_avg_asc",
  "평균 별점 낮은 순": "rating_avg_desc",
};

const ReviewPage = () => {
  const [starFilter, setStartFilter] = useState("나의 별점 높은 순");
  const { data: evaluationUser } = useGetMyReview({
    order: filterList[starFilter],
  });

  console.log(evaluationUser?.reviewContents);

  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex w-full justify-end pr-[10%] pb-[10px]">
        <Dropdown
          items={Object.keys(filterList)}
          selectedItem={starFilter}
          setSelectedItem={setStartFilter}
        />
      </div>
      <div className="grid grid-cols-2 gap-[20px] w-[90%]">
        {evaluationUser?.reviewContents.queryResponse?.map((data: any) => (
          <MyEvaluationCard key={data.reviewId} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
