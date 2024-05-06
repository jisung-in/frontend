"use client";

import MyEvaluationCard from "@/app/components/Card/EvaluationCard/MyEvaluationCard";
import { useGetMyReview } from "@/hook/reactQuery/my/useGetMyReview";

const ReviewPage = () => {
  const { data: evaluationUser } = useGetMyReview();

  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-2 gap-[20px] w-[100%]">
        {/* {evaluationUser?.map((data: any) => (
          <MyEvaluationCard key={data.id} data={data} />
        ))} */}
      </div>
    </div>
  );
};

export default ReviewPage;
