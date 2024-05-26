"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";

const RoomCards = () => {
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: bookData, isLoading } = useGetRooms({
    page: 1,
    size: 6,
    order: "recommend",
    search: "",
    sortbydate: "",
  });

  if (isLoading) {
    return <HaveNotData content="관련 게시물이" />;
  }

  return (
    <>
      {bookData && bookData.length > 0 ? (
        <div className="grid gap-8 grid-cols-3">
          {bookData?.queryResponse.map((data: any) => {
            const isLike =
              isLoggedIn && talkRoomLikeIds?.talkRoomIds.includes(data.id);
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
        <HaveNotData content={"관련 게시물이"} />
      )}
    </>
  );
};

export default RoomCards;
