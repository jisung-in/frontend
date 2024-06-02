import TabProvider from "./_component/TabProvider";
import MyTalkRoom from "./_component/MyTalkRoom";
import { Suspense } from "react";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";

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
