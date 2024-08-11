import dynamic from "next/dynamic";
import { Suspense } from "react";
import MyStarContent from "./_component/MyStarContent";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);

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
