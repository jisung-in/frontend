import BookTitle from "@/assets/img/book-title.svg";
import Like from "@/assets/img/like.svg";
import NoImage from "@/assets/img/no-image.png";
import NotLike from "@/assets/img/not-like-white.svg";
import Profile from "@/assets/img/profile.png";
import ThemeTitle from "@/assets/img/theme-title.svg";
import { useCreateRoomLike } from "@/hook/reactQuery/talkRoom/useCreateRoomLike";
import { useDeleteRoomLike } from "@/hook/reactQuery/talkRoom/useDeleteRoomLike";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import IconButton from "../../IconButton/IconButton";

const Modal = dynamic(() => import("../../Modal/Modal"));

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
    registeredDateTime?: string;
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
    <div
      className="relative 
        sm:w-[288px] 
        md:w-[317px] 
        lg:w-[346px] 
        xl:w-[375px] 
        xl2:w-[405px] 
        sm:h-[235px]
        md:h-[258px]
        lg:h-[282px]
        xl:h-[306px]
        xl2:h-[330px]
        sm:rounded-[10px]
        md:rounded-[12px]
        lg:rounded-[14px]
        xl:rounded-[16px]
        xl2:rounded-[17px]
        bg-[#fff] border border-[#F4E4CE] font-Pretendard overflow-hidden"
    >
      <Link href={`/talkroom/detail/${data.id}`}>
        <div
          className="
        sm:top-[-10%]
        md:top-[-15%]
        lg:top-[-20%]
        xl:top-[-25%]
        xl2:top-[-30%]
        sm:h-[100px]
        md:h-[120px]
        lg:h-[147px]
        xl:h-[174px]
        xl2:h-[200px]
        absolute inset-0 transform -skew-y-[10deg] bg-[#80685D] "
        ></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            className="flex flex-col 
            sm:m-[15px]
            md:m-[17px]
            lg:m-[20px]
            xl:m-[23px]
            xl2:m-[26px]
            w-full"
          >
            <div
              className="flex flex-row
              sm:mb-[8px]
              md:mb-[8px]
              lg:mb-[8px]
              xl:mb-[8px]
              xl2:mb-[8px]"
            >
              <div className="flex flex-grow">
                <div
                  className="relative 
                  sm:min-w-[70px]
                  sm:max-w-[70px]
                  md:min-w-[77px]
                  md:max-w-[77px]
                  lg:min-w-[85px]
                  lg:max-w-[85px]
                  xl:min-w-[95px]
                  xl:max-w-[95px]
                  xl2:min-w-[100px]
                  xl2:max-w-[100px]
                  sm:min-h-[100px] 
                  sm:max-h-[100px] 
                  md:min-h-[110px] 
                  md:max-h-[110px] 
                  lg:min-h-[120px] 
                  lg:max-h-[120px] 
                  xl:min-h-[130px] 
                  xl:max-h-[130px] 
                  xl2:min-h-[140px]
                  xl2:max-h-[140px]
                  "
                >
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
                <div
                  className="
                  sm:ml-2                   
                  md:ml-2.5                   
                  lg:ml-3.5                   
                  xl:ml-4                   
                  xl2:ml-4                   
                  sm:mt-2
                  md:mt-2.5 
                  lg:mt-3.5 
                  xl:mt-4 
                  xl2:mt-4 "
                >
                  <BookTitle />
                </div>
                <div
                  className="
                  sm:mt-2
                  md:mt-2 
                  lg:mt-3 
                  xl:mt-3 
                  xl2:mt-4 
                  sm:ml-[6px]
                  md:ml-[7px]
                  lg:ml-[8px]
                  xl:ml-[9px]
                  xl2:ml-[9px]
                  flex-grow text-[#656565] text-white"
                >
                  <div
                    className="
                    sm:text-[13px]
                    md:text-sm
                    lg:text-[15px]
                    xl:text-base
                    xl2:text-[17px]
                    font-semibold mb-1 overflow-hidden line-clamp-1"
                  >
                    {data.bookName}
                  </div>
                  <div
                    className="
                    sm:text-[10px]
                    md:text-[11px] 
                    lg:text-xs
                    xl:text-[13px] 
                    xl2:text-sm 
                    overflow-hidden line-clamp-1"
                  >
                    {data.bookAuthor}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <IconButton onClick={changeIsLike}>
                  {isLike ? (
                    <div>
                      <Like width={21} height={19} />
                      <div
                        className="text-[13px] 
                        font-Inter font-regular text-[#F24D4D]"
                      >
                        {count}
                      </div>
                    </div>
                  ) : (
                    <>
                      <NotLike width={21} height={19} />
                      <div
                        className="text-[13px] 
                        font-Inter font-regular text-white"
                      >
                        {count}
                      </div>
                    </>
                  )}
                </IconButton>
              </div>
            </div>

            <div
              className="
              sm:mb-0.5
              md:mb-0.5
              lg:mb-1.5
              xl:mb-2
              xl2:mb-3.5
              flex flex-row font-semibold items-center gap-x-[7px] "
            >
              <ThemeTitle />
              <div
                className="
                sm:text-[15px]
                md:text-base
                lg:text-[17px]
                xl:text-lg
                xl2:text-xl
                flex flex-row overflow-hidden line-clamp-1"
              >
                {data.title}
              </div>
              {isBest && (
                <div
                  className="
                  sm:text-[10px]
                  md:text-[11px]
                  lg:text-xs
                  xl:text-[13px]
                  xl2:text-sm
                  flex items-center bg-transparent leading-tight text-[#F24D4D] border-2 border-[#F24D4D] rounded-[4px] px-[6px]"
                >
                  BEST
                </div>
              )}
            </div>

            <div
              className="
              sm:mb-1.5
              md:mb-2.5 
              lg:mb-3
              xl:mb-3.5 
              xl2:mb-4 
              sm:h-10
              md:h-10
              lg:h-11
              xl:h-12
              xl2:h-12
              sm:text-[13px]
              md:text-sm
              lg:text-[15px]
              xl:text-base
              xl2:text-base
              font-medium text-[#656565] overflow-hidden line-clamp-2"
            >
              {data.content}
            </div>

            <hr
              className="
              sm:mb-2.5
              md:mb-3
              lg:mb-3
              xl:mb-3
              xl2:mb-3
              w-full border border-[#F4E4CE]"
            />

            <div className="flex flex-row gap-x-[9px] items-center">
              <div>
                <Image
                  className="
                  sm:w-[18px] 
                  md:w-[20px] 
                  lg:w-[22px] 
                  xl:w-[24px] 
                  xl2:w-[26px] 
                  sm:h-[18px] 
                  md:h-[20px] 
                  lg:h-[22px] 
                  xl:h-[24px] 
                  xl2:h-[26px]
                  sm:border rounded-[12px]
                  md:border rounded-[13px]
                  lg:border rounded-[14px]
                  xl:border rounded-[15px]
                  xl2:border rounded-[16px]"
                  src={
                    data.profileImage !== "image" ? data.profileImage : Profile
                  }
                  alt="프로필"
                  width={26}
                  height={26}
                  priority
                />
              </div>
              <div
                className="
               sm:text-[12px]
               md:text-[13px]
               lg:text-[14px]
               xl:text-[15px]
               xl2:text-[15px]
              font-medium"
              >
                {data.username}
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
