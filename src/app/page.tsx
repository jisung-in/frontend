// "use client";

import BestSeller from "@/assets/img/best-seller.svg";
import ManyTalkRoomBook from "@/assets/img/many-talk-room-book.svg";
import PopularTalkRoomIcon from "@/assets/img/popular-talk-room.svg";
import { usePrefetchBookRank } from "@/hook/reactQuery/book/useGetBookRank";
import { usePrefetchRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import Link from "next/link";
import { ThemeMain } from "./components/Theme/Theme";
import PopularTalkRoom from "./components/molecules/MainCard/PopularTalkRoom";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import BestSellerCard from "./components/molecules/MainCard/BestSellerCard";
import RecentTalkRoom from "./components/molecules/MainCard/RecentTalkRoom";
import ManyTalkRoom from "./components/molecules/MainCard/ManyTalkRoom";

export type TalkRoom = {
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

export type TalkRoomBookOrder = {
  isbn: string;
  title: string;
  publisher: string;
  thumbnail: string;
  authors: string[];
  dateTime: string;
};

const page = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["talk-room", "first"],
    queryFn: usePrefetchRooms,
  });
  await queryClient.prefetchQuery({
    queryKey: ["book", "rank"],
    queryFn: usePrefetchBookRank,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="bg-[#FFF]">
      <div className="mt-[51px] ml-[115px] mb-[78px]">
        <div className="mb-7">
          <ThemeMain>
            <ThemeMain.MainTheme>
              <div className="flex gap-x-3 grow items-center">
                <div>인기있는 토크방</div>
                <PopularTalkRoomIcon />
              </div>
            </ThemeMain.MainTheme>
            <ThemeMain.Show>
              <Link href={"/talkroom/?order=recommend&sortbydate=&page=1"}>
                전체보기 {">"}
              </Link>
            </ThemeMain.Show>
          </ThemeMain>
        </div>
        {popularData && popularData.response.queryResponse.length > 0 ? (
          <div className="flex flex-row flex-wrap gap-x-[21px] gap-y-[21px]">
            {popularData.response.queryResponse.map((data: TalkRoom) => {
              const isLike = popularData.userLikeTalkRoomIds.includes(data.id);
              return (
                <TalkRoomCard
                  key={data.id}
                  data={data}
                  isBest={true}
                  isLike={isLike}
                />
              );
            })}
          </div>
        ) : (
          <HaveNotData content={"인기있는 토크방이"} />
        )}
      </div>
      <div className="bg-[#FBF7F0] py-[1px]">
        <div className="my-[55px] ml-[120px]">
          <ThemeMain.MainTheme>
            <div className="flex mb-7">
              <div className="flex gap-x-3 grow items-center">
                <div>베스트 셀러</div>
                <BestSeller />
              </div>
            </div>
          </ThemeMain.MainTheme>

          <HydrationBoundary state={dehydratedState}>
            <BestSellerCard />
          </HydrationBoundary>
        </div>
      </div>
      <div className="mt-[51px] ml-[120px]">
        <ThemeMain>
          <ThemeMain.MainTheme>
            <div className="flex gap-x-3 grow items-center mb-7">
              <div>최근 생성된 토크방</div>
              <PopularTalkRoomIcon />
            </div>
          </ThemeMain.MainTheme>
          <ThemeMain.Show>
            <Link href={"/talkroom/?order=recent&page=1"}>전체보기 {">"}</Link>
          </ThemeMain.Show>
        </ThemeMain>
        {recentData && recentData.response.queryResponse.length > 0 ? (
          <div className="flex flex-row flex-wrap gap-x-[18px] gap-y-[18px]">
            {recentData.response.queryResponse.map((data: TalkRoom) => {
              const isLike = recentData.userLikeTalkRoomIds.includes(data.id);
              return (
                <TalkRoomCard
                  key={data.id}
                  data={data}
                  isBest={true}
                  isLike={isLike}
                />
              );
            })}
          </div>
        ) : (
          <HaveNotData content={"최근 생성된 토크방이"} />
        )}
      </div>
      <div className="bg-[#FBF7F0] mt-[81px] pt-[1px] pb-[64px]">
        <div className="pt-[77px] ml-[120px]">
          <ThemeMain>
            <ThemeMain.MainTheme>
              <div className="flex gap-x-3 mb-7 items-center">
                <div>토크 많은 책</div>
                <ManyTalkRoomBook />
              </div>
            </ThemeMain.MainTheme>
          </ThemeMain>
          <ManyTalkRoom />
        </div>
      </div>
    </div>
  );
};

export default page;
