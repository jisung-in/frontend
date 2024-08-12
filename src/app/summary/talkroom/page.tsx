import dynamic from "next/dynamic";
import { Suspense } from "react";
import MyTalkRoom from "./_component/MyTalkRoom";
import TabProvider from "./_component/TabProvider";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);

const StarPage = () => {
  return (
    <TabProvider>
      <Suspense fallback={<HaveNotData content="정보가" />}>
        <MyTalkRoom />
      </Suspense>
    </TabProvider>
  );
};

export default StarPage;
