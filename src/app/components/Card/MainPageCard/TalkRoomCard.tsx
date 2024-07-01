import BookTitle from "@/assets/img/book-title.svg";
import Like from "@/assets/img/like.svg";
import NoImage from "@/assets/img/no-image.png";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import { useCreateRoomLike } from "@/hook/reactQuery/talkRoom/useCreateRoomLike";
import { useDeleteRoomLike } from "@/hook/reactQuery/talkRoom/useDeleteRoomLike";
import { useGetComments } from "@/hook/reactQuery/talkRoom/useGetComments";
import timeLapse from "@/util/timeLapse";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import IconButton from "../../IconButton/IconButton";
import Modal from "../../Modal/Modal";

type TalkRoomCardProps = {
  data: {
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
    registeredDateTime: string;
    creatorId: number;
  };
  userId: number;
  isBest: boolean;
  isLike: boolean;
};

const TalkRoomCard: React.FC<TalkRoomCardProps> = ({
  data,
  userId,
  isBest,
  isLike: initialIsLike,
}) => {
  const { data: commentsData } = useGetComments(data.id);
  const [count, setCount] = useState<number>(data.likeCount);
  const [isLike, setIsLike] = useState<boolean>(initialIsLike);
  const addTalkRoomLike = useCreateRoomLike();
  const deleteTalkRoomLike = useDeleteRoomLike();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setCount(data.likeCount);
    setIsLike(initialIsLike);
  }, [data.likeCount, initialIsLike]);

  const changeIsLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (userId === -1) {
      setShowModal(!showModal);
    } else if (data.creatorId !== userId) {
      if (isLike) {
        deleteTalkRoomLike.mutate(data.id);
        setCount((prevCount) => prevCount - 1);
      } else {
        addTalkRoomLike.mutate(data.id);
        setCount((prevCount) => prevCount + 1);
      }
      setIsLike(!isLike);
    } else {
      setShowModal(!showModal);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-w-[328px] w-[84vw] max-w-[1280px] max-h-[236px] rounded-[17px] bg-[#fff] border border-[#F4E4CE] font-Pretendard overflow-hidden">
      <Link href={`/talkroom/detail/${data.id}`}>
        <div className="flex justify-center mx-[32px] my-[35px]">
          <div className="flex">
            <div className="relative min-w-[110px] max-w-[110px] min-h-[150px] max-h-[150px]">
              {data.bookThumbnail ? (
                <Image
                  className="border border-[#F4E4CE]"
                  src={data.bookThumbnail}
                  alt="책 표지"
                  fill
                />
              ) : (
                <Image
                  className="border border-[#F4E4CE]"
                  src={data.bookThumbnail ? data.bookThumbnail : NoImage}
                  alt="책 표지"
                  fill
                />
              )}
            </div>

            <div className="flex flex-col ml-[25px] text-black w-[68vw] max-w-[1044px]">
              <div className="flex flex-row items-center">
                <div className="flex flex-row grow font-semibold items-center gap-x-[8px]">
                  {/* 기록, 질문, 평가 테마에 맞게 데이터 추가되면 작성 */}
                  <div className="flex flex-row overflow-hidden line-clamp-1 text-[22px]">
                    {data.title}
                  </div>
                  {isBest && (
                    <div className="text-sm flex items-center bg-transparent leading-tight text-[#F24D4D] border-2 border-[#F24D4D] rounded-[4px] px-[6px]">
                      BEST
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-center mt-1.5 ml-3">
                  <IconButton onClick={changeIsLike}>
                    {isLike ? (
                      <div>
                        <Like width={21} height={19} />
                        <div className="text-[13px] font-Inter font-regular text-[#F24D4D]">
                          {count}
                        </div>
                      </div>
                    ) : (
                      <>
                        <NotLike width={21} height={19} />
                        <div className="text-[13px] font-Inter font-regular text-[#624E45]">
                          {count}
                        </div>
                      </>
                    )}
                  </IconButton>
                </div>
              </div>

              <div className="flex flex-row items-center gap-x-[5px]">
                <BookTitle />
                <div className="text-[19px] font-medium mb-1 overflow-hidden line-clamp-1">
                  {data.bookName}
                </div>
              </div>

              <div className="flex flex-row gap-x-2.5 items-center text-base">
                <div>
                  <Image
                    className="w-[18px] h-[18px] rounded-[50%]"
                    src={
                      data.profileImage !== "image"
                        ? data.profileImage
                        : Profile
                    }
                    alt="프로필"
                    width={18}
                    height={18}
                    priority
                  />
                </div>
                <div className="font-medium text-[#777]">{data.username}</div>
                <div className="">|</div>
                <div className="text-[#7E7E7E]">
                  {timeLapse(data.registeredDateTime)}
                </div>
              </div>

              <div className="relative flex items-center mt-[10px] bg-[#FBF7F0] max-h-[40px] rounded-[8px] px-[20px] py-[17px]">
                <div className="absolute top-[10%] left-[-10px] border-r-[20px] border-r-[#FBF7F0] border-t-[8px] border-t-transparent border-b-[10px] border-b-transparent"></div>
                {commentsData?.queryResponse[0] ? (
                  <div className="flex items-center gap-x-2">
                    <div className="font-medium text-[15px] text-[#777]">
                      {`(${timeLapse(commentsData?.queryResponse[0].registeredDateTime)})`}
                    </div>
                    <div className="font-semibold text-lg">
                      {`"${commentsData?.queryResponse[0].content}"`}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center">
                    아직 작성된 의견이 없습니다.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>

      {userId === -1 ? (
        <Modal
          title="로그인"
          content="로그인을 해야 이용할 수 있는 기능입니다"
          isOpen={showModal}
          onClose={closeModal}
          onConfirm={closeModal}
          buttonTitle="확인"
        />
      ) : (
        <Modal
          title="좋아요 실패"
          content="본인이 작성한 토크방에는 좋아요를 할 수 없습니다"
          isOpen={showModal}
          onClose={closeModal}
          onConfirm={closeModal}
          buttonTitle="확인"
        />
      )}
    </div>
  );
};

export default TalkRoomCard;
