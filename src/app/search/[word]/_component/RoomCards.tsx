"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";

type Props = {
  order?: string;
  search?: string;
};

const RoomCards = ({ order = "recommend", search = "" }: Props) => {
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };
  const { data: bookData } = useGetRooms({
    page: 1,
    size: 6,
    order: order,
    search: search,
    sortbydate: "",
  });

  return (
    <>
      {bookData && bookData.pages[0].content.length > 0 ? (
        <div className="grid gap-8 grid-cols-3">
          {bookData.pages[0].content.map((data: any) => {
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
      ) : (
        <HaveNotData content={"관련 게시물이"} />
      )}
    </>
  );
};

export default RoomCards;
