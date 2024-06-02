import { Suspense } from "react";
import ReviewContent from "./_component/ReviewContent";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";

const ReviewPage = () => {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <Suspense fallback={<HaveNotData content="정보가" />}>
        <ReviewContent />
      </Suspense>
    </div>
  );
};

export default ReviewPage;
