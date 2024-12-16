import { getDehydratedQueries } from "@/lib/react-query.utils";
import { TalkRoomQueryOptions } from "@/services/talk-room/TalkRoomQueries";
import { HydrationBoundary } from "@tanstack/react-query";
import Banner from "./(components)/Banner";
import BestSeller from "./(components)/BestSeller";
import PopularTalkRoom from "./(components)/PopularTalkRoom";
import RecentTalkRoom from "./(components)/RecentTalkRoom";
import TalkRoomManyBookRoom from "./(components)/TalkRoomManyBookRoom";

const bestSellerDataRevalidateTime = 86400;
const manyTalkRoomDataRevalidateTime = 1800;

const Home = async () => {
  const { data: bestSellerData } = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/v1/books/best-seller?page=1&size=20`,
    {
      next: {
        // 24시간 마다 베스트 셀러 갱신
        revalidate: bestSellerDataRevalidateTime,
      },
    },
  ).then((res) => res.json());
  const { data: manyTalkRoomData } = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/v1/books?page=1&size=12&order=comment`,
    {
      next: {
        // 30분 마다 베스트 셀러 갱신
        revalidate: manyTalkRoomDataRevalidateTime,
      },
    },
  ).then((res) => res.json());

  const queries = [
    TalkRoomQueryOptions.getRecentTalkRooms({
      size: 4,
      order: "recent",
      search: "",
    }),
    TalkRoomQueryOptions.getRecommendTalkRooms({
      size: 4,
      order: "recommend",
      search: "",
    }),
  ];

  const dehydratedState = await getDehydratedQueries(queries);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="bg-[#FFF] w-full flex flex-col justify-center items-center">
        <Banner />

        <PopularTalkRoom />

        <div className="bg-[#FBF7F0] py-[1px] w-full flex justify-center">
          <BestSeller data={bestSellerData} />
        </div>

        <RecentTalkRoom />

        <div className="bg-[#FBF7F0] py-[1px] w-full flex justify-center">
          <TalkRoomManyBookRoom data={manyTalkRoomData.queryResponse} />
        </div>
      </div>
    </HydrationBoundary>
  );
};
export default Home;
