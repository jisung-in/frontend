import Like from "@/assets/img/like.svg";
import NotLike from "@/assets/img/not-like.svg";
import Profile from "@/assets/img/profile.png";
import Rank1 from "@/assets/img/rank1.svg";
import Rank2 from "@/assets/img/rank2.svg";
import Rank3 from "@/assets/img/rank3.svg";
import { useCreateRoomLike } from "@/hook/reactQuery/talkRoom/useCreateRoomLike";
import { useDeleteRoomLike } from "@/hook/reactQuery/talkRoom/useDeleteRoomLike";
import Image from "next/image";
import { useEffect, useState } from "react";
import HaveNotData from "../../HaveNotData/HaveNotData";
import IconButton from "../../IconButton/IconButton";

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
    readingStatuses: string[];
    registeredDateTime: string;
    creatorId: number;
  };
  rank: number;
  userId: number;
  isLike: boolean;
  isLoading: boolean;
};

const BestSellerTalkRoomCard: React.FC<TalkRoomCardProps> = ({
  rank,
  data,
  userId,
  isLike: initialIsLike,
  isLoading,
}) => {
  const [isLike, setIsLike] = useState<boolean>(
    initialIsLike ? initialIsLike : false,
  );
  const [count, setCount] = useState<number>(data ? data.likeCount : 0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const addTalkRoomLike = useCreateRoomLike();
  const deleteTalkRoomLike = useDeleteRoomLike();
  const changeIsLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (userId === -1) {
      setShowModal(!showModal);
    } else if (data && data.creatorId !== userId) {
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

  useEffect(() => {
    data && setCount(data.likeCount);
    initialIsLike && setIsLike(initialIsLike);
  }, [data?.likeCount, initialIsLike]);

  const closeModal = () => {
    setShowModal(false);
  };

  if (!isLoading && !data) return <HaveNotData content={"토크방이"} />;
  return (
    <>
      {rank === 1 || rank === 2 ? (
        <hr className="w-full border border-[#F4E4CE] my-[20px]" />
      ) : (
        <></>
      )}
      <div className="flex flex-row font-semibold">
        <div className="felx items-center mr-[5px]">
          {rank === 0 && <Rank1 />}
          {rank === 1 && <Rank2 />}
          {rank === 2 && <Rank3 />}
        </div>
        <div className="flex flex-col grow justify-start gap-y-1">
          <div className="flex">{data?.title}</div>
          <div className="flex flex-row gap-x-2 items-center">
            <div>
              <Image
                className="w-[18px] h-[18px] rounded-[50%]"
                src={
                  data && data.profileImage !== "image"
                    ? data?.profileImage
                    : Profile
                }
                alt="프로필"
                width={18}
                height={18}
                priority
              />
            </div>
            <div className="font-medium text-[15px] text-[#777]">
              <>{data?.username}</>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-2 ml-3">
          <IconButton onClick={changeIsLike}>
            {data && isLike ? (
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
    </>
  );
};

export default BestSellerTalkRoomCard;
