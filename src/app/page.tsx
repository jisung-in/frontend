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
import { lazy, Suspense, useEffect, useState } from "react";
import { Button } from "./components/Button/Button";
import TalkRoomCard from "./components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "./components/HaveNotData/HaveNotData";
import MainSelectionCard from "./components/MainSelectionCard/MainSelectionCard";
import Pagination from "./components/Pagination/Pagination";
import ResizeImage from "./components/ResizeImage/ResizeImage";
import DeferredComponent from "./components/SkeletonUI/DeferredComponent ";
import SkeletonLoadingSwiper from "./components/SkeletonUI/SkeletonLoadingSwiper";

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
  const BestSellerSwiper = lazy(
    () => import("./components/Swiper/BestSellerSwiper"),
  );

  const { isLoggedIn } = useLogin();
  const currentUrl = usePathname();
  const param = useSearchParams();
  const pageParam = param.get("page");
  const [isAllLoading, setIsAllLoading] = useState(true);
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };

  const { data: recentData, isLoading: getRoomLoading } = useGetRooms({
    page: Number(pageParam ? pageParam : 1),
    size: 3,
    order: "recent",
    search: "",
    sortbydate: "",
  });
  const { data: bookRankData, isLoading: getBookRankLoading } =
    useGetBookRank();

  useEffect(() => {
    if (!getRoomLoading && !getBookRankLoading) {
      setIsAllLoading(false);
    } else {
      setIsAllLoading(true);
    }
  }, [getRoomLoading, getBookRankLoading]);

  return (
    <div className="flex flex-col items-center max-w-[1280px]">
      <div className="mt-[85px] mb-[38px] flex flex-row gap-x-[21px]">
        <div className="w-[413px] h-[270px]">
          <MainSelectionCard
            isMain={true}
            type="record"
            rounded={true}
            isLoading={isAllLoading}
          />
        </div>
        <div className="w-[413px] h-[270px]">
          <MainSelectionCard
            isMain={true}
            type="question"
            rounded={true}
            isLoading={isAllLoading}
          />
        </div>
        <div className="w-[413px] h-[270px]">
          <MainSelectionCard
            isMain={true}
            type="evaluation"
            rounded={true}
            isLoading={isAllLoading}
          />
        </div>
      </div>

      <div className="max-w-[1280px]">
        <div className="flex mb-[30px] w-[84vw]">
          <div className="flex items-center gap-x-3">
            <div className="font-SpoqaHanSansNeo font-bold text-2xl">
              지성인의 베스트 셀러
            </div>
            <ResizeImage src={BestSeller} alt="베스트 셀러" />
          </div>
        </div>
      </div>
      <Suspense
        fallback={
          <DeferredComponent>
            <SkeletonLoadingSwiper />
          </DeferredComponent>
        }
      >
        <BestSellerSwiper
          data={bookRankData}
          isLoggedIn={isLoggedIn}
          talkRoomLikeIds={talkRoomLikeIds?.talkRoomIds || []}
          myDetailData={
            myDetailData || { userId: -1, userImage: "", userName: "" }
          }
          isLoading={getBookRankLoading}
        />
      </Suspense>

      <div className="flex flex-col mt-[47px]">
        <div className="grow mb-[25px] flex items-center">
          <div className="font-SpoqaHanSansNeo font-bold text-2xl flex grow">
            토크방 보기
          </div>
          <Link href={"/detail/talkroom/new"}>
            <Button className="w-[167px]" variant={"mainPage"} weight={"semi"}>
              <div className="flex items-center gap-x-2 px-4">
                <CreateTalkRoom />
                토크방 생성하기
              </div>
            </Button>
          </Link>
        </div>
        {recentData && recentData.queryResponse.length > 0 ? (
          <div className="flex flex-col gap-y-[25px]">
            {recentData?.queryResponse.map((data: TalkRoom) => {
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
                  isLoading={getRoomLoading}
                />
              );
            })}
          </div>
        ) : (
          <HaveNotData content={"최근 생성된 토크방이"} />
        )}
      </div>

      {getRoomLoading ? (
        <></>
      ) : (
        <Pagination
          totalItems={recentData?.totalCount ?? 0}
          postPage={3}
          link={currentUrl}
        />
      )}
    </div>
  );
};
export default page;
