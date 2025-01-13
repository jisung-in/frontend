import Banner from "./(components)/Banner";
import BestSeller from "./(components)/BestSeller";
import PopularTalkRoom from "./(components)/PopularTalkRoom";
import RecentTalkRoom from "./(components)/RecentTalkRoom";
import TalkRoomManyBookRoom from "./(components)/TalkRoomManyBookRoom";

const popularTalkRoomDataRevalidateTime = 60 * 60 * 24; // 30분
const bestSellerDataRevalidateTime = 60 * 60 * 24; // 24시간
const recentTalkRoomDataRevalidateTime = 60 * 30; // 5분
const manyTalkRoomDataRevalidateTime = 60 * 30; // 30분

const Home = async () => {
  let popularTalkRoomData;
  let bestSellerData;
  let recentTalkRoomData;
  let manyTalkRoomData;

  // ISR : 인기있는 토크방
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/v1/talk-rooms?page=1&size=4&order=recommend&search=&day=`,
      {
        next: {
          revalidate: popularTalkRoomDataRevalidateTime, // 30분 마다 인기있는 토크방 갱신
        },
      },
    );

    if (!res.ok) {
      throw new Error(
        "인기있는 토크방 데이터를 가져오는 데 문제가 발생했습니다.",
      );
    }
    popularTalkRoomData = await res.json();
  } catch (error) {
    console.error(error);
  }

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

  // ISR : 최근 토크방
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/v1/talk-rooms?page=1&size=4&order=recent&search=&day=`,
      {
        next: {
          revalidate: recentTalkRoomDataRevalidateTime, // 5분 마다 최근 토크방 갱신
        },
      },
    );

    if (!res.ok) {
      throw new Error("최신 토크방 데이터를 가져오는 데 문제가 발생했습니다.");
    }
    recentTalkRoomData = await res.json();
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

  return (
    <div className="bg-[#FFF] w-full flex flex-col justify-center items-center">
      <Banner />

      <PopularTalkRoom data={popularTalkRoomData.data.content} />

      <div className="bg-[#FBF7F0] py-[1px] w-full flex justify-center">
        <BestSeller data={bestSellerData.data} />
      </div>

      <RecentTalkRoom data={recentTalkRoomData.data.content} />

      <div className="bg-[#FBF7F0] py-[1px] w-full flex justify-center">
        <TalkRoomManyBookRoom data={manyTalkRoomData.data.queryResponse} />
      </div>
    </div>
  );
};
export default Home;
