"use client";

import RecentMakeTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import TalkRoomCard from "../components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "../components/HaveNotData/HaveNotData";
import Pagination from "../components/Pagination/Pagination";
import { ThemeMain } from "../components/Theme/Theme";
import TalkRoomSearch from "./_component/talkroomSearch";
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

const page = () => {
  const router = useRouter();
  const param = useSearchParams();
  const currentUrl = usePathname();
  const orderParam = param.get("order");
  const sortByDateParam = param.get("sortbydate");
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
  const { data: talkRoomPopular } = useGetRooms({
    page: 1,
    size: 12,
    order: orderStatus,
    search: "",
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
              <div className="w-[30px] h-[30px]">
                <RecentMakeTalkRoom />
              </div>
            </div>
          </div>
        </ThemeMain.MainTheme>

        <div className="flex mb-[37px] grow">
          <TalkRoomSearch onSearchSubmit={searchTalkRoom} searchParam={""} />
        </div>
      </div>

      {talkRoomPopular && talkRoomPopular.response.queryResponse.length > 0 ? (
        <div className="flex flex-row flex-wrap gap-x-[40px] gap-y-[30px] w-[1295px]">
          {talkRoomPopular.response.queryResponse.map((data: TalkRoom) => {
            const isLike = talkRoomPopular.userLikeTalkRoomIds.includes(
              data.id,
            );
            return (
              <TalkRoomCard
                key={data.id}
                data={data}
                isBest={orderParam === "recommend"}
                isLike={isLike}
              />
            );
          })}
        </div>
      ) : (
        <HaveNotData content={"토크방이"} />
      )}
      <Pagination
        totalItems={talkRoomPopular?.response.totalCount}
        pageCount={Math.ceil(
          (talkRoomPopular?.response.totalCount ?? 0) /
            (talkRoomPopular?.response.size ?? 1),
        )}
        postPage={talkRoomPopular?.response.size}
        link={
          sortByDate
            ? currentUrl + `?order=${orderParam}&sortByDate=${sortByDate}`
            : currentUrl + `?order=${orderParam}`
        }
      />
    </div>
  );
};

export default page;
