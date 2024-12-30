"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import MainThemeTitle from "@/app/components/MainThemeTitle/MainThemeTitle";
import Pagination from "@/app/components/Pagination/Pagination";
import SkeletonTalkRoomCard from "@/app/components/SkeletonUi/SkeletonTalkRoomCard";
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
    <div className="flex flex-col items-center w-full max-w-[1300px] min-h-screen">
      <div className="w-full max-w-[1225px] px-[5%] 2xl:px-0">
        <MainThemeTitle
          title="연관된 토크방"
          url={`/talkroom/related/${params.isbn}`}
        >
          <RecentMakeTalkRoom />
        </MainThemeTitle>
      </div>

      {isLoading && <SkeletonTalkRoomCard />}
      {relateData && relateData.queryResponse.length > 0 ? (
        <>
          <div className="flex fex-row flex-wrap justify-center gap-x-[40px] gap-y-[30px] w-full mb-[30px] px-[5%] xl:px-0 2xl:px-0">
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
          {!isLoading && (
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
