"use client";

import MyEvaluationCard from "@/app/components/Card/EvaluationCard/MyEvaluationCard";
import { useEvaluationUser } from "@/hook/reactQuery/evaluation/useEvaluationUser";

const ReviewPage = () => {
  const { data: evaluationUser } = useEvaluationUser();
  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-2 gap-[20px] w-[100%]">
        {evaluationUser?.map((data: any) => (
          <MyEvaluationCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
