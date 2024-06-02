import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import { Suspense } from "react";
import MyStateContent from "./_component/MyStateContent";

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
