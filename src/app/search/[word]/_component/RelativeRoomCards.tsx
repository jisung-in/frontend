"use client";

import TalkRoomCard from "@/app/components/Card/MainPageCard/TalkRoomCard";
import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import { useGetMyDetail } from "@/hook/reactQuery/my/useGetMyDetail";
import { useGetRelativeReooms } from "@/hook/reactQuery/talkRoom/useGetRelativeTalkroom";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import { useLogin } from "@/hook/useLogin";

type Props = {
  name: string;
};

const RelativeRoomCards = ({ name }: Props) => {
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };
  const { data: myDetailData } = isLoggedIn
    ? useGetMyDetail()
    : { data: { userId: -1, userImage: "", userName: "" } };
  const { data: bookData } = useGetRooms({
    search: name,
  });

  return (
    <>
      {bookData && bookData.queryResponse.length > 0 ? (
        <div className="grid gap-8 grid-cols-3">
          {bookData?.queryResponse.map((data: any) => {
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

export default RelativeRoomCards;
function useGetRelativeRooms(arg0: {
  isbn: string;
  page: number;
  size: number;
}): { data: any } {
  throw new Error("Function not implemented.");
}
