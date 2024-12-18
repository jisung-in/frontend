import MainThemeTitle from "@/app/components/MainThemeTitle/MainThemeTitle";
import TalkRoomFilter from "@/app/talkroom/_component/TalkRoomFilter";
import RecentMakeTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import TalkRoomData from "./TalkRoomData";

interface TalkRoomPageProps {
  params?: {
    result: string;
  };
}

const page = async ({ params }: TalkRoomPageProps) => {
  const search = params ? decodeURIComponent(params.result) : "";

  // SSR + react-query
  // const queries = [
  //   TalkRoomQueryOptions.getRecentTalkRooms({
  //     size: 12,
  //     order: "recent",
  //     search: "",
  //   }),
  //   TalkRoomQueryOptions.getRecommendTalkRooms({
  //     size: 12,
  //     order: "recommend",
  //     search: "",
  //   }),
  //   TalkRoomQueryOptions.getRecommendFilterTalkRooms({
  //     size: 12,
  //     order: "recent",
  //     search: "",
  //     sortbydate: "",
  //   }),
  // ];

  // const dehydratedState = await getDehydratedQueries(queries);

  return (
    <div className="flex flex-col items-center w-full max-w-[1300px] min-h-screen">
      <div className="w-full max-w-[1225px] px-[5%] 2xl:px-0">
        <MainThemeTitle title="토크해요" url="/talkroom" query="recent">
          <RecentMakeTalkRoom />
        </MainThemeTitle>

        {search && (
          <>
            <span className="font-SpoqaHanSansNeo font-medium 2xl:text-[17px] xl:text-base lg:text-[15px] md:text-sm sm:text-xs text-[#77777E]">
              "{search}" 의 결과
            </span>
            <hr className="border-solid 2xl:border-[3px] xl:border-[3px] lg:border-[2px] md:border-[2px] sm:border-1 border-[#F5EFE5] mt-3 2xl:mb-[19px] xl:mb-[17px] lg:mb-[15px] md:mb-[13px] sm:mb-3" />
          </>
        )}

        <div className="w-full mb-[37px]">
          <TalkRoomFilter searchParam={search} />
        </div>
      </div>

      <TalkRoomData params={params} />
    </div>
  );
};

export default page;
