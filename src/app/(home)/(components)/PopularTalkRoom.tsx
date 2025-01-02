"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import TalkRoomCardCarousel from "@/app/components/Carousel/TalkRoomCardCarousel";
import { Layout } from "@/app/components/Layout/Layout";
import { ThemeMain } from "@/app/components/Theme/Theme";
import PopularTalkRoomImg from "@/assets/img/popular-talk-room.svg";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useBreakpoint } from "@/hook/useBreakPoint";
import { useLogin } from "@/hook/useLogin";
import { TalkRoomQueryOptions } from "@/services/talk-room/TalkRoomQueries";
import { useQuery } from "@tanstack/react-query";
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

const PopularTalkRoom = () => {
  const { data } = useQuery(
    TalkRoomQueryOptions.getTalkRooms({
      page: 1,
      size: 4,
      order: "recommend",
      search: "",
      sortbydate: "",
    }),
  );

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
        sm:my-[25px]
        md:my-[34px]
        lg:my-[40px]
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
              className="
                flex grow items-center 
                sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 2xl:gap-x-3"
            >
              <span className="sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                인기있는 토크방
              </span>
              <span className="sm:size-4 size-5 2xl:size-6">
                <PopularTalkRoomImg />
              </span>
            </p>
          </ThemeMain.MainTheme>
          <ThemeMain.Show>
            <Link href={"/talkroom/?order=recommend"}>
              <span className="w-full sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                전체보기 {">"}
              </span>
            </Link>
          </ThemeMain.Show>
        </ThemeMain>
      </div>

      <div className="mx-[5%]">
        {data && data.data.content.length > 0 ? (
          isCarousel ? (
            <TalkRoomCardCarousel
              talkRooms={data.data.content}
              userId={myDetailData?.userId || -1}
              isBest={true}
              userLikeTalkRoomIds={talkRoomLikeIds?.talkRoomIds || []}
            />
          ) : (
            <div className="flex flex-row 2xl:gap-x-[20px]">
              {data.data.content.map((itmes: TalkRoomProps) => {
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
              })}
              ,
            </div>
          )
        ) : (
          <HaveNotData content={"인기있는 토크방이"} />
        )}
      </div>
    </Layout>
  );
};

export default PopularTalkRoom;
