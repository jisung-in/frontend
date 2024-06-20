"use client";
import CreateTalkRoom from "@/assets/img/create-talk-room.svg";
import { useGetBookRank } from "@/hook/reactQuery/book/useGetBookRank";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "./components/Button/Button";
import TalkRoomCard from "./components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "./components/HaveNotData/HaveNotData";
import Pagination from "./components/Pagination/Pagination";
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
  creatorId: number;
};

const page = () => {
  const { isLoggedIn } = useLogin();
  const currentUrl = usePathname();
  const param = useSearchParams();
  const pageParam = param.get("page");
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };

  const { data: recentData, isLoading } = useGetRooms({
    page: Number(pageParam ? pageParam : 1),
    size: 3,
    order: "recent",
    search: "",
    sortbydate: "",
  });
  const { data: bookRankData } = useGetBookRank();
  return (
    <div className="flex flex-col items-center max-w-[1280px]">
      <div
        className="
        xl2:mt-[85px] 
        xl2:mb-[73px]"
      >
        {/* 기록, 질문, 평가 컴포넌트 위치 */}
      </div>

      <div className="flex flex-col">
        <div className="grow mb-[25px] flex justify-end">
          <Link href={"/detail/talkroom/new"}>
            <Button
              className="px-4 w-[167px]"
              variant={"mainPage"}
              weight={"semi"}
            >
              <CreateTalkRoom />
              토크방 생성하기
            </Button>
          </Link>
        </div>
        {recentData && recentData.queryResponse.length > 0 ? (
          <div className="flex flex-col gap-y-[25px]">
            {recentData.queryResponse.map((data: TalkRoom) => {
              const isLike =
                isLoggedIn &&
                (talkRoomLikeIds?.talkRoomIds || []).includes(data.id);
              return (
                <TalkRoomCard
                  key={data.id}
                  data={data}
                  userId={myDetailData?.userId || -1}
                  isBest={false}
                  isLike={isLike}
                />
              );
            })}
          </div>
        ) : (
          <HaveNotData content={"최근 생성된 토크방이"} />
        )}
      </div>

      {isLoading ? (
        <></>
      ) : (
        <Pagination
          totalItems={recentData?.totalCount ?? 0}
          postPage={3}
          link={currentUrl}
        />
      )}
      {/* <div className=":my-[56px] px-[120px] ">
        <ThemeMain.MainTheme>
          <div
            className="flex
              sm:mb-[15px] md:mb-[17px] lg:mb-[19px] xl:mb-[19px] xl2:mb-[21px]"
          >
            <div
              className="
                flex grow items-center
                sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 xl2:gap-x-3 "
            >
              <div>지성인의 베스트 셀러</div>
              <ResizeImage src={BestSeller} alt="베스트 셀러" />
            </div>
          </div>
        </ThemeMain.MainTheme>
        {bookRankData && bookRankData.length > 0 ? (
          <RankSwiper data={bookRankData} />
        ) : (
          <HaveNotData content={"베스트 셀러가"} />
        )}
      </div> */}
    </div>
  );
};
export default page;
