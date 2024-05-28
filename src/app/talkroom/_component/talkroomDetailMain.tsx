import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import IconButton from "@/app/components/IconButton/IconButton";
import BookTitleBigImg from "@/assets/img/book-title-big.svg";
import Like from "@/assets/img/like.svg";
import NoImage from "@/assets/img/no-image.png";
import NotLike from "@/assets/img/not-like.svg";
import TitleThemeBigImg from "@/assets/img/theme-title-big.svg";
import { useCreateRoomLike } from "@/hook/reactQuery/talkRoom/useCreateRoomLike";
import { useDeleteRoomLike } from "@/hook/reactQuery/talkRoom/useDeleteRoomLike";
import { useGetOneRoom } from "@/hook/reactQuery/talkRoom/useGetOneRoom";
import { useGetRoomLike } from "@/hook/reactQuery/talkRoom/useGetRoomLike";
import { useLogin } from "@/hook/useLogin";
import timeLapse from "@/util/timeLapse";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TalkRoomId {
  talkRoomId: number;
}
const talkroomDetailMain: React.FC<TalkRoomId> = ({ talkRoomId }) => {
  const { isLoggedIn } = useLogin();
  const { data: talkRoomLikeIds } = isLoggedIn
    ? useGetRoomLike()
    : { data: { talkRoomIds: [] } };

  const { data: talkroomOneData } = useGetOneRoom({ talkRoomId });
  const [isLike, setIsLike] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const addTalkRoomLike = useCreateRoomLike();
  const deleteTalkRoomLike = useDeleteRoomLike();
  useEffect(() => {
    if (talkroomOneData) {
      setCount(talkroomOneData.likeCount);
      setIsLike(
        isLoggedIn &&
          (talkRoomLikeIds?.talkRoomIds || []).includes(talkroomOneData?.id),
      );
    }
  }, [talkroomOneData]);

  const changeIsLike = () => {
    if (isLike) {
      deleteTalkRoomLike.mutate(talkRoomId);
      setCount((prevCount) => prevCount - 1);
    } else {
      addTalkRoomLike.mutate(talkRoomId);
      setCount((prevCount) => prevCount + 1);
    }
    setIsLike(!isLike);
  };

  if (!talkroomOneData) {
    return <HaveNotData content={"책의 정보가"} />;
  }
  return (
    <>
      {talkroomOneData && (
        <div className="w-full min-h-[1194px] bg-[white] border-2 border-[#F4E4CE] rounded-[12px] flex flex-col font-Pretendard font-medium">
          <div className="mx-[46px] mt-[44px]">
            <div className="flex flex-col">
              <div className="flex flex-col items-end">
                <div className="flex flex-col">
                  <div className="flex flex-col items-center">
                    <IconButton onClick={changeIsLike}>
                      {isLike ? (
                        <>
                          <Like width={26} height={24} />
                          <div className="h-[16px] font-Inter font-regular text-[16px] text-[#F24D4D]">
                            {count}
                          </div>
                        </>
                      ) : (
                        <>
                          <NotLike width={26} height={24} />
                          <div className="h-[16px] font-Inter font-regular text-[16px] text-[#656565]">
                            {count}
                          </div>
                        </>
                      )}
                    </IconButton>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center text-[#000] mt-[6px] text-[30px] mb-4">
                  <div className="mr-[7px]">
                    <TitleThemeBigImg />
                  </div>
                  {talkroomOneData.title}
                </div>
                <div className="flex font-regular text-lg text-[#7E7E7E]">
                  생성일: &nbsp;
                  {timeLapse(talkroomOneData.registeredDateTime)}
                </div>
                <Image
                  className="min-w-[260px] min-h-[339px] max-w-[260px] max-h-[339px]  border border-solid border-[#F4E4CE] my-[27px]"
                  src={
                    talkroomOneData && talkroomOneData.bookThumbnail
                      ? talkroomOneData.bookThumbnail
                      : NoImage
                  }
                  alt={"책표지"}
                  width={223}
                  height={291}
                />

                <div className="flex items-center text-[#656565] mb-[20px] text-[28px]">
                  <div className="mr-[7px]">
                    <BookTitleBigImg />
                  </div>
                  {talkroomOneData.bookName}
                </div>
              </div>
              <div className="flex flex-col items-center mt-[19px] font-Pretendard font-medium text-lg text-[#FF6363]">
                <div className="text-2xl mb-[7px]">참가조건</div>
                <div className="flex flex-row gap-x-3 h-[30px]">
                  {talkroomOneData.readingStatuses.map(
                    (status: string, index: number) => (
                      <div
                        className="flex justify-center items-center w-auto h-[35px] text-[#656565] bg-[#FBF7F0] border border-[#F4E4CE] border-solid rounded-[4px] px-[9px] py-[7px]"
                        key={index}
                      >
                        {status}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            <hr className="border border-solid border-[#F5EFE5] mt-[34px] mb-[25px]" />

            <div className="min-h-[120px]">
              <div className="font-semibold text-2xl mb-[5px]">
                {talkroomOneData.title}
              </div>
              <div className="font-regular text-[22px] text-[#000]">
                {talkroomOneData.content}
              </div>
            </div>

            <hr className="border border-solid border-[#F5EFE5] mt-[25px] mb-[35px]" />

            <div className="font-semibold text-2xl mb-[18px]">이미지</div>
            {talkroomOneData.images.length > 0 ? (
              <div className="flex gap-x-[23px] mb-[51px]">
                {talkroomOneData.images.map((image: string, index: number) => (
                  <Image
                    key={`image_${index}`}
                    className="w-[160px] h-[160px] border border-solid border-[#FBF7F0] rounded-[4px]"
                    src={image}
                    alt="이미지"
                    fill
                  />
                ))}
              </div>
            ) : (
              <HaveNotData content="이미지가" />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default talkroomDetailMain;
