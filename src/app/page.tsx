"use client";
import BestSeller from "@/assets/img/best-seller.svg";
import ManyTalkRoomBook from "@/assets/img/many-talk-room-book.svg";
import PopularTalkRoom from "@/assets/img/popular-talk-room.svg";
import RecentTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import { useGetBookRank } from "@/hook/reactQuery/book/useGetBookRank";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomBookOrder } from "@/hook/reactQuery/talkRoom/useGetRoomBookOrder";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import ManyTalkRoomBookCard from "./components/Card/MainPageCard/ManyTalkRoomBookCard";
import TalkRoomCard from "./components/Card/MainPageCard/TalkRoomCard";
import SkeletonBestSeller from "./components/Card/SkeletonUiCard/SkeletonBestSeller";
import SkeletonManyTalkRoom from "./components/Card/SkeletonUiCard/SkeletonManyTalkRoom";
import SkeletonTalkRoomCard from "./components/Card/SkeletonUiCard/SkeletonTalkRoomCard";
import ResizeImage from "./components/ResizeImage/ResizeImage";
import RankSwiper from "./components/Swiper/RankSwiper";
import TalkRoomCardSwiper from "./components/Swiper/TalkRoomCardSwiper";
import { ThemeMain } from "./components/Theme/Theme";

const HaveNotData = dynamic(
  () => import("./components/HaveNotData/HaveNotData"),
);

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
type TalkRoomBookOrder = {
  isbn: string;
  title: string;
  publisher: string;
  thumbnail: string;
  authors: string[];
  dateTime: string;
};
const page = () => {
  const [isSwiper, setIsSwiper] = useState(false);
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };

  useEffect(() => {
    const handleResize = () => {
      setIsSwiper(window.innerWidth <= 1800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { data: popularTalkRoom, isLoading: isPopularTalkRoomLoading } =
    useGetRooms({
      size: 4,
      order: "recommend",
      search: "",
      sortbydate: "",
    });
  const { data: recentTalkRoom, isLoading: isRecentTalkRoomLoading } =
    useGetRooms({
      size: 4,
      order: "recent",
      search: "",
      sortbydate: "",
    });
  const { data: bookRank, isLoading: isBookRank } = useGetBookRank();
  const { data: talkRoomManyBookRoom, isLoading: isTalkRoomManyBookRoom } =
    useGetRoomBookOrder({
      page: 1,
      size: 12,
      order: "comment",
    });

  return (
    <div className="bg-[#FFF] w-full">
      <div
        className="
        sm:mt-[25px]
        md:mt-[34px]
        lg:mt-[40px]
        xl:mt-[48px]
        xl2:mt-[56px] 
        sm:px-[16px]
        md:px-[42px]
        lg:px-[68px]
        xl:px-[89px]
        xl2:px-[120px]
        sm:mb-[25px]
        md:mb-[36px]
        lg:mb-[48px]
        xl:mb-[60px]
        xl2:mb-[72px]"
      >
        <div
          className="
          sm:mb-[17px]
          md:mb-[19px]
          lg:mb-[22px]
          xl:mb-[24px]
          xl2:mb-[26px]"
        >
          <ThemeMain>
            <ThemeMain.MainTheme>
              <div
                className="
                flex grow items-center 
                sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 xl2:gap-x-3"
              >
                <div>인기있는 토크방</div>
                <ResizeImage src={PopularTalkRoom} alt="인기있는 토크방" />
              </div>
            </ThemeMain.MainTheme>
            <ThemeMain.Show>
              <Link href={"/talkroom/?order=recommend&sortbydate="}>
                <div className="w-full">전체보기 {">"}</div>
              </Link>
            </ThemeMain.Show>
          </ThemeMain>
        </div>

        {isPopularTalkRoomLoading && <SkeletonTalkRoomCard />}
        {popularTalkRoom &&
        popularTalkRoom.pages.length > 0 &&
        popularTalkRoom.pages[0].content.length > 0 ? (
          isSwiper ? (
            <TalkRoomCardSwiper
              talkRooms={popularTalkRoom.pages[0].content}
              userId={myDetailData?.userId || -1}
              isBest={true}
              userLikeTalkRoomIds={talkRoomLikeIds?.talkRoomIds || []}
            />
          ) : (
            <div className="flex flex-row xl2:gap-x-[20px]">
              {popularTalkRoom.pages.map(
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
                          isBest={true}
                          isLike={isLike}
                        />
                      </div>
                    );
                  }),
              )}
            </div>
          )
        ) : (
          !isPopularTalkRoomLoading && (
            <HaveNotData content={"인기있는 토크방이"} />
          )
        )}
      </div>

      <div className="bg-[#FBF7F0] py-[1px]">
        <div
          className="
            sm:my-[26px] 
            md:my-[34px]
            lg:my-[42px]
            xl:my-[48px]
            xl2:my-[56px]
            sm:px-[16px]
            md:px-[42px]
            lg:px-[68px]
            xl:px-[89px]
            xl2:px-[120px]
            "
        >
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
                <div>베스트 셀러</div>
                <ResizeImage src={BestSeller} alt="베스트 셀러" />
              </div>
            </div>
          </ThemeMain.MainTheme>
          {isBookRank && <SkeletonBestSeller />}
          {bookRank && bookRank.length > 0 ? (
            <RankSwiper data={bookRank} />
          ) : (
            !isBookRank && <HaveNotData content={"베스트 셀러가"} />
          )}
        </div>
      </div>
      <div
        className="
        sm:my-[26px] 
        md:my-[34px]
        lg:my-[42px]
        xl:my-[48px]
        xl2:my-[56px]
        sm:px-[16px]
        md:px-[42px]
        lg:px-[68px]
        xl:px-[89px]
        xl2:px-[120px]"
      >
        <div
          className="
          sm:mb-[17px]
          md:mb-[19px]
          lg:mb-[22px]
          xl:mb-[24px]
          xl2:mb-[26px]"
        >
          <ThemeMain>
            <ThemeMain.MainTheme>
              <div
                className="flex grow items-center
                sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 xl2:gap-x-3"
              >
                <div>최근 생성된 토크방</div>
                <ResizeImage src={RecentTalkRoom} alt="최근 생성된 토크방" />
              </div>
            </ThemeMain.MainTheme>
            <ThemeMain.Show>
              <Link href={"/talkroom/?order=recent"}>
                <div className="w-full">전체보기 {">"}</div>
              </Link>
            </ThemeMain.Show>
          </ThemeMain>
        </div>

        {isRecentTalkRoomLoading && <SkeletonTalkRoomCard />}
        {recentTalkRoom &&
        recentTalkRoom.pages.length > 0 &&
        recentTalkRoom.pages[0].content.length > 0 ? (
          isSwiper ? (
            <TalkRoomCardSwiper
              talkRooms={recentTalkRoom.pages[0].content}
              userId={myDetailData?.userId || -1}
              isBest={true}
              userLikeTalkRoomIds={talkRoomLikeIds?.talkRoomIds || []}
            />
          ) : (
            <div className="flex flex-row xl2:gap-x-[20px]">
              {recentTalkRoom.pages.map(
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
            </div>
          )
        ) : (
          !isRecentTalkRoomLoading && (
            <HaveNotData content={"최근 생성된 토크방이"} />
          )
        )}
      </div>

      <div
        className="bg-[#FBF7F0] pt-[1px] 
        sm:pb-[17px]
        md:pb-[28px]
        lg:pb-[38px]
        xl:pb-[48px]
        xl2:pb-[56px]"
      >
        <div
          className="            
          sm:mt-[26px] 
          md:mt-[34px]
          lg:mt-[42px]
          xl:mt-[48px]
          xl2:mt-[56px]
          sm:px-[16px]
          md:px-[42px]
          lg:px-[68px]
          xl:px-[89px]
          xl2:px-[120px]"
        >
          <ThemeMain>
            <ThemeMain.MainTheme>
              <div
                className="
                flex items-center
                sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 xl2:gap-x-3
                sm:mb-[17px]
                md:mb-[19px]
                lg:mb-[22px]
                xl:mb-[24px]
                xl2:mb-[26px]"
              >
                <div>토크 많은 책</div>
                <ResizeImage src={ManyTalkRoomBook} alt="토크 많은 책" />
              </div>
            </ThemeMain.MainTheme>
          </ThemeMain>

          {isTalkRoomManyBookRoom && <SkeletonManyTalkRoom />}
          {talkRoomManyBookRoom && talkRoomManyBookRoom.length > 0 ? (
            <div
              className="
              grid gap-y-3
              sm:grid-cols-3
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
              xl2:grid-cols-6
            "
            >
              {talkRoomManyBookRoom.map((data: TalkRoomBookOrder) => (
                <Link key={data.isbn} href={`/book/${data.isbn}`}>
                  <ManyTalkRoomBookCard data={data} />
                </Link>
              ))}
            </div>
          ) : (
            !isTalkRoomManyBookRoom && (
              <HaveNotData content={"토크 많은 책이"} />
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default page;
