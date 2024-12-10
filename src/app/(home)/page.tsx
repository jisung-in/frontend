import Banner from "./(components)/Banner";
import BestSeller from "./(components)/BestSeller";
import PopularTalkRoom from "./(components)/PopularTalkRoom";
import RecentTalkRoom from "./(components)/RecentTalkRoom";
import TalkRoomManyBookRoom from "./(components)/TalkRoomManyBookRoom";

const revalidateTime = 86400;

const Home = async () => {
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/v1/books/best-seller?page=1&size=20`,
    {
      next: {
        // 24시간 마다 베스트 셀러 갱신
        revalidate: revalidateTime,
      },
    },
  ).then((res) => res.json());

  return (
    <div className="bg-[#FFF] w-full flex flex-col justify-center items-center">
      <Banner />

      <PopularTalkRoom />

      <div className="bg-[#FBF7F0] py-[1px] w-full flex justify-center">
        <BestSeller data={data} />
      </div>

      <RecentTalkRoom />

      <div className="bg-[#FBF7F0] py-[1px] w-full flex justify-center">
        <TalkRoomManyBookRoom />
      </div>
    </div>
  );
};
export default Home;
