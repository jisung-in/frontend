import Banner from "./(components)/Banner";
import BestSeller from "./(components)/BestSeller";
import PopularTalkRoom from "./(components)/PopularTalkRoom";
import RecentTalkRoom from "./(components)/RecentTalkRoom";
import TalkRoomManyBookRoom from "./(components)/TalkRoomManyBookRoom";

const revalidateTime = 86400;

const page = async () => {
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/v1/books/best-seller?page=1&size=20`,
    {
      next: {
        // 24시간 마다 갱신하게
        revalidate: revalidateTime,
      },
    },
  ).then((res) => res.json());

  return (
    <div className="bg-[#FFF] w-full">
      <Banner />

      <PopularTalkRoom />

      <BestSeller data={data} />

      <RecentTalkRoom />

      <TalkRoomManyBookRoom />
    </div>
  );
};
export default page;
