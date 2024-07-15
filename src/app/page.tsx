"use client";
import BestSeller from "@/assets/img/best-seller.svg";
import CreateTalkRoom from "@/assets/img/create-talk-room.svg";
import { useGetBookRank } from "@/hook/reactQuery/book/useGetBookRank";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";
import useObserver from "@/util/useObserver";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "./components/Button/Button";
import TalkRoomCard from "./components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "./components/HaveNotData/HaveNotData";
import MainSelectionCard from "./components/MainSelectionCard/MainSelectionCard";
import ResizeImage from "./components/ResizeImage/ResizeImage";
import SkeletonTalkRoomCard from "./components/SkeletonUI/SkeletonTalkRoomCard";
import BestSellerSwiper from "./components/Swiper/BestSellerSwiper";

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
  const [isAllLoading, setIsAllLoading] = useState(true);
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };

  const {
    data: talkRoomData,
    isLoading: isTalkRoomLoading,
    isFetching: isFetchingForRoom,
    fetchNextPage,
    hasNextPage,
  } = useGetRooms({
    size: 3,
    order: "recent",
    search: "",
    sortbydate: "",
  });

  const { data: bookRankData, isLoading: isBookRankLoading } = useGetBookRank();

  const observerRef = useRef<HTMLDivElement | null>(null);

  useObserver({
    target: observerRef,
    onIntersect: ([entry]) => {
      return entry.isIntersecting && hasNextPage && fetchNextPage();
    },
  });

  useEffect(() => {
    if (!isTalkRoomLoading && !isBookRankLoading) {
      setIsAllLoading(false);
    } else {
      setIsAllLoading(true);
    }
  }, [isTalkRoomLoading, isBookRankLoading]);

  return (
    <div className="flex flex-col items-center max-w-[1280px]">
      <div className="mt-[85px] mb-[38px] flex flex-row gap-x-[21px]">
        <Link href={"/talkroom/record?order=recent"}>
          <div className="w-[413px] h-[270px]">
            <MainSelectionCard
              isMain={true}
              type="record"
              rounded={true}
              isLoading={isAllLoading}
            />
          </div>
        </Link>
        <Link href={"/talkroom/question"}>
          <div className="w-[413px] h-[270px]">
            <MainSelectionCard
              isMain={true}
              type="question"
              rounded={true}
              isLoading={isAllLoading}
            />
          </div>
        </Link>
        <Link href={"/talkroom/evaluation"}>
          <div className="w-[413px] h-[270px]">
            <MainSelectionCard
              isMain={true}
              type="evaluation"
              rounded={true}
              isLoading={isAllLoading}
            />
          </div>
        </Link>
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
      <BestSellerSwiper
        data={bookRankData}
        isLoggedIn={isLoggedIn}
        talkRoomLikeIds={talkRoomLikeIds?.talkRoomIds || []}
        myDetailData={
          myDetailData || { userId: -1, userImage: "", userName: "" }
        }
        isLoading={isBookRankLoading}
      />

      <div className="flex flex-col mt-[47px] mb-[138px] min-w-[328px] w-[84vw] max-w-[1280px]">
        <div className="grow mb-[25px] flex items-center">
          <div className="font-SpoqaHanSansNeo font-bold text-2xl flex grow">
            토크방 보기
          </div>
          <Link href={"/detail/talkroom"}>
            <Button className="w-[167px]" variant={"mainPage"} weight={"semi"}>
              <div className="flex items-center gap-x-2 px-4">
                <CreateTalkRoom />
                토크방 생성하기
              </div>
            </Button>
          </Link>
        </div>

        {isTalkRoomLoading && <SkeletonTalkRoomCard />}
        {talkRoomData &&
        talkRoomData.pages.length > 0 &&
        talkRoomData.pages[0].content.length > 0 ? (
          <div className="flex flex-col gap-y-[25px]">
            {talkRoomData.pages.map(
              (page) =>
                page.content &&
                page.content.length > 0 &&
                page.content.map((data: TalkRoom) => {
                  const isLike =
                    isLoggedIn &&
                    (talkRoomLikeIds?.talkRoomIds || []).includes(data.id);
                  return (
                    <div key={data.id}>
                      <TalkRoomCard
                        data={data}
                        userId={myDetailData?.userId || -1}
                        isBest={false}
                        isLike={isLike}
                      />
                    </div>
                  );
                }),
            )}
            {isFetchingForRoom && <SkeletonTalkRoomCard />}
            <div className="observer" ref={observerRef} />
          </div>
        ) : (
          !isTalkRoomLoading && <HaveNotData content={"토크방이"} />
        )}
      </div>
    </div>
  );
};
export default page;
