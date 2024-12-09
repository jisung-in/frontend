"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import SkeletonTalkRoomCard from "@/app/components/SkeletonUi/SkeletonTalkRoomCard";
import TalkRoomCardSwiper from "@/app/components/Swiper/TalkRoomCardSwiper";
import { ThemeMain } from "@/app/components/Theme/Theme";
import PopularTalkRoomImg from "@/assets/img/popular-talk-room.svg";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";
import { useBreakpoint } from "@/util/useBreakPoint";
import Link from "next/link";

interface TalkRoom {
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
}

const PopularTalkRoom = () => {
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };

  const { data, isLoading } = useGetRooms({
    size: 4,
    order: "recommend",
    search: "",
    sortbydate: "",
  });

  const { isSwiper } = useBreakpoint();

  return (
    <div
      className="
        sm:mt-[25px]
        md:mt-[34px]
        lg:mt-[40px]
        xl:mt-[48px]
        2xl:mt-[56px] 
        mx-[5%]
        sm:mb-[25px]
        md:mb-[36px]
        lg:mb-[48px]
        xl:mb-[60px]
        2xl:mb-[72px]"
    >
      <div
        className="
          sm:mb-[17px]
          md:mb-[19px]
          lg:mb-[22px]
          xl:mb-[24px]
          2xl:mb-[26px]"
      >
        <ThemeMain>
          <ThemeMain.MainTheme>
            <p
              className="
                flex grow items-center 
                sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 2xl:gap-x-3"
            >
              <span>인기있는 토크방</span>
              <span className="size-6">
                <PopularTalkRoomImg />
              </span>
            </p>
          </ThemeMain.MainTheme>
          <ThemeMain.Show>
            <Link href={"/talkroom/?order=recommend"}>
              <span className="w-full">전체보기 {">"}</span>
            </Link>
          </ThemeMain.Show>
        </ThemeMain>
      </div>

      {isLoading && <SkeletonTalkRoomCard />}
      {data && data.pages.length > 0 && data.pages[0].content.length > 0 ? (
        isSwiper ? (
          <TalkRoomCardSwiper
            talkRooms={data.pages[0].content}
            userId={myDetailData?.userId || -1}
            isBest={true}
            userLikeTalkRoomIds={talkRoomLikeIds?.talkRoomIds || []}
          />
        ) : (
          <div className="flex flex-row 2xl:gap-x-[20px]">
            {data.pages.map(
              (page) =>
                page.content &&
                page.content.length > 0 &&
                page.content.map((itmes: TalkRoom) => {
                  const isLike =
                    isLoggedIn &&
                    (talkRoomLikeIds?.talkRoomIds || []).includes(itmes.id);
                  return (
                    <div key={itmes.id}>
                      <TalkRoomCard
                        data={itmes}
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
        !isLoading && <HaveNotData content={"인기있는 토크방이"} />
      )}
    </div>
  );
};

export default PopularTalkRoom;
