import BookTitle from "@/assets/img/book-title.svg";
import Like from "@/assets/img/like.svg";
import NoImage from "@/assets/img/no-image.png";
import NotLike from "@/assets/img/not-like-white.svg";
import Profile from "@/assets/img/profile.png";
import ThemeTitle from "@/assets/img/theme-title.svg";
import { useCreateRoomLike } from "@/hook/reactQuery/talkRoom/useCreateRoomLike";
import { useDeleteRoomLike } from "@/hook/reactQuery/talkRoom/useDeleteRoomLike";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
    readingStatuses?: string[];
    registeredDateTime?: string;
  };
  isBest: boolean;
  isLike: boolean;
};

const TalkRoomCard: React.FC<TalkRoomCardProps> = ({
  data,
  isBest,
  isLike: initialIsLike,
}) => {
  const [count, setCount] = useState<number>(data.likeCount);
  const [isLike, setIsLike] = useState<boolean>(initialIsLike);
  const addTalkRoomLike = useCreateRoomLike(data.id);
  const deleteTalkRoomLike = useDeleteRoomLike(data.id);
  const changeIsLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isLike) {
      deleteTalkRoomLike.mutate();
      setCount((prevCount) => prevCount - 1);
    } else {
      addTalkRoomLike.mutate();
      setCount((prevCount) => prevCount + 1);
    }
    setIsLike(!isLike);
  };
  return (
    <Link href={`/talkroom/detail/${data.id}`}>
      <div
        className="relative 
        sm:w-[291px] 
        sm:h-[235px]
        sm:rounded-[10px]
        md:w-[319px] 
        md:h-[258px]
        md:rounded-[12px]
        lg:w-[348px] 
        lg:h-[282px]
        lg:rounded-[14px]
        xl:w-[376px] 
        xl:h-[306px]
        xl:rounded-[16px]
        xl2:w-[405px] 
        xl2:h-[330px]
        xl2:rounded-[17px]
      bg-[#fff] border border-[#F4E4CE] font-Pretendard overflow-hidden"
      >
        <div
          className="
        sm:top-[-10%]
        sm:h-[100px]
        md:top-[-30%]
        md:h-[200px]
        lg:top-[-30%]
        lg:h-[200px]
        xl:top-[-30%]
        xl:h-[200px]
        xl2:top-[-30%]
        xl2:h-[200px]
        absolute inset-0 transform -skew-y-[10deg] bg-[#80685D] "
        ></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex flex-col m-[26px] w-full">
            <div className="flex flex-row">
              <div className="flex flex-grow">
                <div
                  className="relative 
                  sm:min-w-[70px] 
                  sm:max-w-[70px] 
                  sm:min-h-[100px] 
                  sm:max-h-[100px]
                  md:min-w-[78px] 
                  md:max-w-[78px] 
                  md:min-h-[110px] 
                  md:max-h-[110px]
                  lg:min-w-[85px] 
                  lg:max-w-[85px] 
                  lg:min-h-[120px] 
                  lg:max-h-[120px]
                  xl:min-w-[92px] 
                  xl:max-w-[92px] 
                  xl:min-h-[130px] 
                  xl:max-h-[130px]
                  xl2:min-w-[100px] 
                  xl2:max-w-[100px] 
                  xl2:min-h-[140px] 
                  xl2:max-h-[140px]"
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
                <div className="ml-4 mt-5">
                  <BookTitle />
                </div>
                <div className="mt-4 ml-[9px] flex-grow text-[#656565] text-white">
                  <div className="font-semibold mb-1 text-[#17px] overflow-hidden line-clamp-1">
                    {data.bookName}
                  </div>
                  <div className="text-sm overflow-hidden line-clamp-1">
                    {data.bookAuthor}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <IconButton onClick={changeIsLike}>
                  {isLike ? (
                    <>
                      <Like width={21} height={19} />
                      <div className="h-[22px] font-Inter font-regular text-[#13px] text-[#F24D4D]">
                        {count}
                      </div>
                    </>
                  ) : (
                    <>
                      <NotLike width={21} height={19} />
                      <div className="h-[22px] font-Inter font-regular text-[#13px] text-white">
                        {count}
                      </div>
                    </>
                  )}
                </IconButton>
              </div>
            </div>
            <div className="flex flex-row mt-[17px] font-semibold items-center gap-x-[7px] mb-3.5">
              <ThemeTitle />
              <div className="flex flex-row text-xl overflow-hidden line-clamp-1">
                {data.title}
              </div>
              {isBest ? (
                <div className="flex items-center bg-transparent leading-tight text-sm text-[#F24D4D] border-2 border-[#F24D4D] rounded-[4px] px-[7px]">
                  BEST
                </div>
              ) : (
                <></>
              )}
            </div>

            <div className="font-medium text-base text-[#656565] h-12 overflow-hidden mb-4 line-clamp-2">
              {data.content}
            </div>

            <hr className="w-full border border-[#F4E4CE] mb-3" />

            <div className="flex flex-row gap-x-[9px] items-center">
              <div>
                <Image
                  className="max-w-[26px] max-h-[26px] border rounded-[16px]"
                  src={
                    data.profileImage !== "image" ? data.profileImage : Profile
                  }
                  alt="프로필"
                  width={26}
                  height={26}
                  priority
                />
              </div>
              <div className="font-medium text-[15px]">{data.username}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TalkRoomCard;
