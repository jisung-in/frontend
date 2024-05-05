import IconButton from "@/app/components/IconButton/IconButton";
import BookTitleBihImg from "@/assets/img/book-title-big.svg";
import Like from "@/assets/img/like.svg";
import NotLike from "@/assets/img/not-like.svg";
import TitleThemeBigImg from "@/assets/img/theme-title-big.svg";
import { useGetOneRoom } from "@/hook/reactQuery/talkRoom/useGetOneRoom";
import Image from "next/image";
import { useState } from "react";

interface TalkRoomId {
  talkRoomId: number;
}
const talkroomDetailMain: React.FC<TalkRoomId> = ({ talkRoomId }) => {
  const [count, setCount] = useState<number>(0);
  const { data: talkroomOneData } = useGetOneRoom({ talkRoomId });
  const [isLike, setIsLike] = useState<boolean>(false);
  const changeIsLike = (isLike: boolean) => {
    setIsLike(!isLike);
    setCount(count + 1);
    if (isLike) setCount(count - 1);
  };
  const timeLapse = (createdDateTime: string): string => {
    const createdDate = new Date(createdDateTime);
    const currentDate = new Date();
    const elapsedTimeInMs = currentDate.getTime() - createdDate.getTime();

    // 시간 단위로 변환
    const elapsedTimeInHours = elapsedTimeInMs / (1000 * 60 * 60);

    // 24시간 이상 경과한 경우
    if (elapsedTimeInHours >= 24) {
      const elapsedTimeInDays = Math.floor(elapsedTimeInHours / 24);
      return `${elapsedTimeInDays}일 전`;
    }

    // 1시간 이상 24시간 미만 경과한 경우
    if (elapsedTimeInHours >= 1) {
      return `${Math.floor(elapsedTimeInHours)}시간 전`;
    }

    // 1시간 미만 경과한 경우
    const elapsedTimeInMinutes = Math.floor(elapsedTimeInMs / (1000 * 60));
    return `${elapsedTimeInMinutes}분 전`;
  };

  if (!talkroomOneData) {
    return <div>Loading...</div>;
  }

  console.log(talkroomOneData);

  return (
    <>
      {talkroomOneData && (
        <div className="w-full min-h-[831px] bg-[white] border-2 border-[#F4E4CE] rounded-[12px] flex flex-col font-Pretendard font-medium">
          <div className="mx-[46px] mt-[44px]">
            <div className="flex flex-row">
              <div className="flex grow">
                <div className="flex flex-row">
                  <div className="flex">
                    <div className="image-wrapper">
                      <Image
                        className="min-w-[223px] min-h-[291px] max-w-[223px] max-h-[291px]  border border-solid border-[#F4E4CE] mt-[5px] mr-[40px]"
                        src={
                          talkroomOneData && talkroomOneData.bookThumbnail
                            ? talkroomOneData.bookThumbnail
                            : "/placeholder-image.jpg"
                        }
                        alt={"책표지"}
                        width={223}
                        height={291}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center text-[#000] mt-[20px] text-[30px] mb-4">
                      <div className="mr-[7px]">
                        <TitleThemeBigImg />
                      </div>
                      {talkroomOneData.title}
                    </div>
                    <div className="flex items-center text-[#656565] mb-[20px] text-[28px]">
                      <div className="mr-[7px]">
                        <BookTitleBihImg />
                      </div>
                      {talkroomOneData.bookName}
                    </div>
                    <div className="flex font-regular text-lg text-[#7E7E7E]">
                      생성일: &nbsp;
                      {talkroomOneData.registeredDateTime
                        ? timeLapse(talkroomOneData.registeredDateTime)
                        : "더미데이터"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex flex-col">
                  <div className="flex flex-col items-center">
                    <IconButton onClick={() => changeIsLike(isLike)}>
                      {isLike ? (
                        <Like width={26} height={24} />
                      ) : (
                        <NotLike width={26} height={24} />
                      )}
                    </IconButton>
                    <div className="h-[16px] font-Inter font-regular text-[16px] text-[#656565]">
                      {talkroomOneData.likeCount}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-[27px] font-Pretendard font-medium text-lg text-[#FF6363]">
              <div className="flex flex-col">
                <div className="text-2xl mb-[7px]">참가조건</div>
                <div className="flex flex-row gap-x-3 h-[30px]">
                  {talkroomOneData.readingStatuses.map((status, index) => (
                    <div
                      className="flex justify-center items-center w-auto h-[35px] text-[#656565] bg-[#FBF7F0] border border-[#F4E4CE] border-solid rounded-[4px] px-[9px] py-[7px]"
                      key={index}
                    >
                      {status}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr className="border-2 border-solid border-[#F5EFE5] mt-[48px] mb-[25px]" />

            <div className="min-h-[157px]">
              <div className="font-semibold text-2xl mb-[5px]">
                {talkroomOneData.title}
              </div>
              <div className="font-regular text-[22px] text-[#000]">
                {talkroomOneData.content}
              </div>
            </div>

            <hr className="border-2 border-solid border-[#F5EFE5] mt-[25px] mb-[35px]" />

            <div className="font-semibold text-2xl mb-[18px]">이미지</div>
            <div className="flex gap-x-[23px] mb-[51px]">
              {talkroomOneData.images.length > 0 ? (
                talkroomOneData.images.map((image, index: number) => (
                  <Image
                    key={`image_${index}`}
                    className="w-[160px] h-[160px] border border-solid border-[#FBF7F0] rounded-[4px]"
                    src={image}
                    alt="이미지"
                    fill
                  />
                ))
              ) : (
                <div>이미지가 없습니다.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default talkroomDetailMain;
