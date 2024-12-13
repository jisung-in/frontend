"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import TalkRoomCardCarousel from "@/app/components/Carousel/TalkRoomCardCarousel";
import { Layout } from "@/app/components/Layout/Layout";
import { ThemeMain } from "@/app/components/Theme/Theme";
import RecentTalkRoomImg from "@/assets/img/recent-make-talk-room.svg";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useLogin } from "@/hook/useLogin";
import { useBreakpoint } from "@/util/useBreakPoint";
import dynamic from "next/dynamic";
import Link from "next/link";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);

interface TalkRoomProps {
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

interface RecentTalkRoomProps {
  data: TalkRoomProps[];
}

const RecentTalkRoom: React.FC<RecentTalkRoomProps> = ({ data }) => {
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };

  const { isCarousel } = useBreakpoint();

  return (
    <Layout
      className="
      sm:my-[26px] 
      md:my-[34px]
      lg:my-[42px]
      xl:my-[48px]
      2xl:my-[56px]
      "
    >
      <div
        className="
        sm:mb-[17px]
        md:mb-[19px]
        lg:mb-[22px]
        xl:mb-[24px]
        2xl:mb-[26px]
        mx-[5%]"
      >
        <ThemeMain>
          <ThemeMain.MainTheme>
            <p
              className="flex grow items-center
              sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 2xl:gap-x-3"
            >
              <span className="sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                최근 생성된 토크방
              </span>
              <span className="sm:size-4 size-5 2xl:size-6">
                <RecentTalkRoomImg />
              </span>
            </p>
          </ThemeMain.MainTheme>
          <ThemeMain.Show>
            <Link href={"/talkroom/?order=recent"}>
              <span className="w-full sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                전체보기 {">"}
              </span>
            </Link>
          </ThemeMain.Show>
        </ThemeMain>
      </div>

      <div className="mx-[5%]">
        {data && data.length > 0 ? (
          isCarousel ? (
            <TalkRoomCardCarousel
              talkRooms={data}
              userId={myDetailData?.userId || -1}
              isBest={true}
              userLikeTalkRoomIds={talkRoomLikeIds?.talkRoomIds || []}
            />
          ) : (
            <div className="flex flex-row 2xl:gap-x-[20px]">
              {data.map((items: TalkRoomProps) => {
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
              })}
              ,
            </div>
          )
        ) : (
          <HaveNotData content={"최근 생성된 토크방이"} />
        )}
      </div>
    </Layout>
  );
};

export default RecentTalkRoom;
