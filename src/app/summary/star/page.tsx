import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import { Suspense } from "react";
import MyStarContent from "./_component/MyStarContent";

const StarPage = () => {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <Suspense fallback={<HaveNotData content="정보가" />}>
        <MyStarContent />
      </Suspense>
    </div>
  );
};

export default StarPage;
