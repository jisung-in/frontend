import dynamic from "next/dynamic";
import { Suspense } from "react";
import MyStateContent from "./_component/MyStateContent";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);

const StatePage = () => {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <Suspense fallback={<HaveNotData content="정보가" />}>
        <MyStateContent />
      </Suspense>
    </main>
  );
};

export default StatePage;
