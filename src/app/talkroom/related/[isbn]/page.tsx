"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import Pagination from "@/app/components/Pagination/Pagination";
import SkeletonTalkRoomCard from "@/app/components/SkeletonUi/SkeletonTalkRoomCard";
import { ThemeMain } from "@/app/components/Theme/Theme";
import RecentMakeTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import { useGetBookRelatedTalkRoom } from "@/hook/reactQuery/book/useGetBookRelatedTalkRoom";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useLogin } from "@/hook/useLogin";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
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
  readingStatuses?: string[];
  registeredDateTime?: string;
  creatorId: number;
};

const page = ({ params }: { params: { isbn: string } }) => {
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };
  const currentUrl = usePathname();
  const { data: relateData, isLoading } = useGetBookRelatedTalkRoom({
    isbn: params?.isbn,
    page: 1,
    size: 12,
  });

  return (
    <div className="flex flex-col">
      <ThemeMain.MainTheme>
        <div className="flex mt-[78px] mb-[23px]">
          <div className="flex items-center mb-[23px]">
            <div className="text-[30px] mr-[16px]">연관된 토크방</div>
            <div className="w-[30px] h-[30px]">
              <RecentMakeTalkRoom />
            </div>
          </div>
        </div>
      </ThemeMain.MainTheme>

      {isLoading && <SkeletonTalkRoomCard />}
      {relateData && relateData.queryResponse.length > 0 ? (
        <>
          <div className="flex fex-row flex-wrap gap-x-[19px] gap-y-[30px] mb-[121px]">
            {relateData.queryResponse.map((data: TalkRoom) => {
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
          {isLoading ? (
            <></>
          ) : (
            <Pagination
              totalItems={relateData?.totalCount ?? 0}
              postPage={relateData?.size ?? 12}
              link={currentUrl}
            />
          )}
        </>
      ) : (
        !isLoading && <HaveNotData content={"연관된 토크방이"} />
      )}
    </div>
  );
};

export default page;
