"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import Pagination from "@/app/components/Pagination/Pagination";
import { ThemeMain } from "@/app/components/Theme/Theme";
import RecentMakeTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import { useGetBookRelatedTalkRoom } from "@/hook/reactQuery/book/useGetBookRelatedTalkRoom";
import { usePathname } from "next/navigation";

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
};

const page = ({ params }: { params: { isbn: string } }) => {
  const currentUrl = usePathname();
  const { data: relateData } = useGetBookRelatedTalkRoom({
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
            <RecentMakeTalkRoom />
          </div>
        </div>
      </ThemeMain.MainTheme>

      {relateData && relateData.response.queryResponse.length > 0 ? (
        <div className="flex fex-row flex-wrap gap-x-[19px] gap-y-[30px] mb-[121px]">
          {relateData.response.queryResponse.map((data: TalkRoom) => {
            const isLike = relateData.userLikeTalkRoomIds.includes(data.id);
            return (
              <TalkRoomCard
                key={data.id}
                data={data}
                isBest={false}
                isLike={isLike}
              />
            );
          })}
        </div>
      ) : (
        <HaveNotData content={"연관된 토크방이"} />
      )}

      <Pagination
        totalItems={relateData?.response.totalCount}
        pageCount={Math.ceil(
          (relateData?.response.totalCount ?? 0) /
            (relateData?.response.size ?? 1),
        )}
        postPage={relateData?.response.size}
        link={currentUrl}
      />
    </div>
  );
};

export default page;
