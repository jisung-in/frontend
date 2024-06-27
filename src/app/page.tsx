"use client";
import BestSeller from "@/assets/img/best-seller.svg";
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
import ResizeImage from "./components/ResizeImage/ResizeImage";
import BestSellerSwiper from "./components/Swiper/BestSellerSwiper";
import { ThemeMain } from "./components/Theme/Theme";

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
      <div className="mt-[85px] mb-[73px]">
        {/* 기록, 질문, 평가 컴포넌트 위치 */}
      </div>

      <div className="flex flex-col">
        <div className="grow mb-[25px] flex justify-end">
          <Link href={"/detail/talkroom/new"}>
            <Button className="w-[167px]" variant={"mainPage"} weight={"semi"}>
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

      <div className="mb-[160px]">
        <ThemeMain.MainTheme>
          <div className="flex mb-[21px]">
            <div className="flex grow items-center gap-x-3 ">
              <div>지성인의 베스트 셀러</div>
              <ResizeImage src={BestSeller} alt="베스트 셀러" />
            </div>
          </div>
        </ThemeMain.MainTheme>
        {bookRankData && bookRankData.length > 0 ? (
          <BestSellerSwiper
            data={bookRankData}
            isLoggedIn={isLoggedIn}
            talkRoomLikeIds={talkRoomLikeIds?.talkRoomIds || []}
            myDetailData={
              myDetailData || { userId: -1, userImage: "", userName: "" }
            }
          />
        ) : (
          <HaveNotData content={"베스트 셀러가"} />
        )}
      </div>
    </div>
  );
};
export default page;
