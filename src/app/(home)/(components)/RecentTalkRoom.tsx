"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import SkeletonTalkRoomCard from "@/app/components/SkeletonUi/SkeletonTalkRoomCard";
import TalkRoomCardSwiper from "@/app/components/Swiper/TalkRoomCardSwiper";
import { ThemeMain } from "@/app/components/Theme/Theme";
import RecentTalkRoomImg from "@/assets/img/recent-make-talk-room.svg";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";
import { useBreakpoint } from "@/util/useBreakPoint";
import Link from "next/link";

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

const RecentTalkRoom = () => {
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };

  const { data, isLoading } = useGetRooms({
    size: 4,
    order: "recent",
    search: "",
    sortbydate: "",
  });

  const { isSwiper } = useBreakpoint();

  return (
    <div
      className="
      sm:my-[26px] 
      md:my-[34px]
      lg:my-[42px]
      xl:my-[48px]
      2xl:my-[56px]
      mx-[5%]"
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
              className="flex grow items-center
              sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 2xl:gap-x-3"
            >
              <span>최근 생성된 토크방</span>
              <span className="size-6">
                <RecentTalkRoomImg />
              </span>
            </p>
          </ThemeMain.MainTheme>
          <ThemeMain.Show>
            <Link href={"/talkroom/?order=recent"}>
              <div className="w-full">전체보기 {">"}</div>
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
                page.content.map((items: TalkRoom) => {
                  const isLike =
                    isLoggedIn &&
                    (talkRoomLikeIds?.talkRoomIds || []).includes(items.id);
                  return (
                    <div key={items.id}>
                      <TalkRoomCard
                        data={items}
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
        !isLoading && <HaveNotData content={"최근 생성된 토크방이"} />
      )}
    </div>
  );
};

export default RecentTalkRoom;
