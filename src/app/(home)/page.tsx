import { getDehydratedQueries } from "@/lib/react-query.utils";
import { TalkRoomQueryOptions } from "@/services/talk-room/TalkRoomQueries";
import { HydrationBoundary } from "@tanstack/react-query";
import Banner from "./(components)/Banner";
import BestSeller from "./(components)/BestSeller";
import PopularTalkRoom from "./(components)/PopularTalkRoom";
import RecentTalkRoom from "./(components)/RecentTalkRoom";
import TalkRoomManyBookRoom from "./(components)/TalkRoomManyBookRoom";

const bestSellerDataRevalidateTime = 60 * 60 * 24; // 24시간
const manyTalkRoomDataRevalidateTime = 60 * 30; // 30분

const Home = async () => {
  let bestSellerData;
  let manyTalkRoomData;

  // ISR : 베스트 셀러 데이터
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/v1/books/best-seller?page=1&size=20`,
      {
        next: {
          revalidate: bestSellerDataRevalidateTime, // 24시간 마다 베스트 셀러 갱신
        },
      },
    );

    if (!res.ok) {
      throw new Error("베스트 셀러 데이터를 가져오는 데 문제가 발생했습니다.");
    }

    bestSellerData = await res.json();
  } catch (error) {
    console.error(error);
  }

  // ISR : 토크 많은 책 데이터
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/v1/books?page=1&size=12&order=comment`,
      {
        next: {
          revalidate: manyTalkRoomDataRevalidateTime, // 30분 마다 토크 많은 책 갱신
        },
      },
    );

    if (!res.ok) {
      throw new Error("토크 많은 책 데이터를 가져오는 데 문제가 발생했습니다.");
    }
    manyTalkRoomData = await res.json();
  } catch (error) {
    console.error(error);
  }

  // SSR + react-query
  const queries = [
    TalkRoomQueryOptions.getTalkRooms({
      page: 1,
      size: 4,
      order: "recent",
      search: "",
      sortbydate: "",
    }),
    TalkRoomQueryOptions.getTalkRooms({
      page: 1,
      size: 4,
      order: "recommend",
      search: "",
      sortbydate: "",
    }),
  ];

  const dehydratedState = await getDehydratedQueries(queries);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="bg-[#FFF] w-full flex flex-col justify-center items-center">
        <Banner />

        <PopularTalkRoom />

        <div className="bg-[#FBF7F0] py-[1px] w-full flex justify-center">
          <BestSeller data={bestSellerData.data} />
        </div>

        <RecentTalkRoom />

        <div className="bg-[#FBF7F0] py-[1px] w-full flex justify-center">
          <TalkRoomManyBookRoom data={manyTalkRoomData.data.queryResponse} />
        </div>
      </div>
    </HydrationBoundary>
  );
};
export default Home;
