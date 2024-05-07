"use client";

import RecentMakeTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import TalkRoomCard from "../../components/Card/MainPageCard/TalkRoomCard";
import Pagination from "../../components/Pagination/Pagination";
import { ThemeMain } from "../../components/Theme/Theme";
import TalkRoomButtons from ".././_component/talkroomButtons";

type TalkRoom = {
  id: number;
  profileImage: string;
  username: string;
  title: string;
  content: string;
  bookName: string;
  bookAuthor: string;
  bookThumbnail: string;
  likeCount: number;
  readingStatuses: string[];
  registeredDateTime: string;
};

const page = ({ params }: { params: { result: string } }) => {
  const router = useRouter();
  const param = useSearchParams();
  const currentUrl = usePathname();
  const orderParam = param.get("order");
  const sortByDateParam = param.get("sortbydate");
  const searchParam: string = param.get("search") || "";
  const orderStatus: "recent" | "recommend" | "recent-comment" =
    orderParam === "recent" ||
    orderParam === "recommend" ||
    orderParam === "recent-comment"
      ? orderParam
      : "recent";
  const sortByDate: "1m" | "1w" | "1d" | "" =
    sortByDateParam === "1m" ||
    sortByDateParam === "1w" ||
    sortByDateParam === "1d"
      ? sortByDateParam
      : "";
  const search = decodeURIComponent(params.result);
  const { data: talkRoomPopular } = useGetRooms({
    page: 1,
    size: 12,
    order: orderStatus,
    search: search,
    sortbydate: sortByDate,
  });

  const searchTalkRoom = (searchValue: string) => {
    router.push(
      `/talkroom/${searchValue}/?order=recent&search=${searchValue}&sortbydate=&page=1`,
    );
  };
  return (
    <div className="flex flex-col items-center">
      <div className="w-[1255px]">
        <ThemeMain.MainTheme>
          <div className="flex mt-[78px] mb-[23px]">
            <div className="flex items-center mb-[23px]">
              <div className="text-[30px] mr-[16px]">토크해요</div>
              <RecentMakeTalkRoom />
            </div>
          </div>
        </ThemeMain.MainTheme>

        <div className="font-SpoqaHanSansNeo font-medium text-[20px] text-[#77777E]">
          "{search}" 의 결과
        </div>

        <hr className="border-solid border-[3px] border-[#F5EFE5] mt-3 mb-[19px]" />
        <div className="flex mb-[37px] grow">
          <div className="flex grow">
            <TalkRoomButtons
              onSearchSubmit={searchTalkRoom}
              searchParam={search}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-x-[40px] gap-y-[30px] w-[1295px]">
        {talkRoomPopular?.response.queryResponse instanceof Array &&
          talkRoomPopular?.response.queryResponse.map((data: TalkRoom) => (
            <TalkRoomCard key={data.id} data={data} isBest={false} />
          ))}
      </div>
      <Pagination
        totalItems={talkRoomPopular?.response.totalCount}
        pageCount={Math.ceil(
          (talkRoomPopular?.response.totalCount ?? 0) /
            (talkRoomPopular?.response.size ?? 1),
        )}
        postPage={talkRoomPopular?.response.size}
        link={
          sortByDate
            ? currentUrl +
              `?order=${orderParam}&search=${searchParam}&sortByDate=${sortByDate}`
            : currentUrl + `?order=${orderParam}&search=${searchParam}`
        }
      />
    </div>
  );
};

export default page;
