import BookTitleRelate from "@/assets/img/book-title-relate.svg";
import Like from "@/assets/img/like.svg";
import NoImage from "@/assets/img/no-image.png";
import NotLike from "@/assets/img/not-like-white.svg";
import Profile from "@/assets/img/profile.png";
import ThemeTitle from "@/assets/img/theme-title-middle.svg";
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
    bookAuthors: string;
    bookThumbnail: string;
    likeCount: number;
  };
  isLike: boolean;
};

const RelatedTalkRoomCard: React.FC<TalkRoomCardProps> = ({
  data,
  isLike: initialIsLike,
}) => {
  const [count, setCount] = useState<number>(data.likeCount);
  const [isLike, setIsLike] = useState<boolean>(initialIsLike);
  const addTalkRoomLike = useCreateRoomLike();
  const deleteTalkRoomLike = useDeleteRoomLike();

  const changeIsLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isLike) {
      deleteTalkRoomLike.mutate(data.id);
      setCount((prevCount) => prevCount - 1);
    } else {
      addTalkRoomLike.mutate(data.id);
      setCount((prevCount) => prevCount + 1);
    }
    setIsLike(!isLike);
  };

  return (
    <Link href={`/talkroom/detail/${data.id}`}>
      <div className="relative w-[547px] h-[426px] rounded-[17px] bg-[#fff] border rounded-[17px] border-[#F4E4CE] font-Pretendard overflow-hidden">
        <div className="absolute inset-0 transform -skew-y-[10deg] h-[200px] bg-[#80685D] top-[-15%]"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex flex-col mx-8 mt-[31px] mb-3 w-full">
            <div className="flex flex-row">
              <div className="relative min-w-[135px] min-h-[188px] max-w-[135px] max-h-[188px]">
                <Image
                  className="border border-[#F4E4CE]"
                  src={data ? data.bookThumbnail : NoImage}
                  alt="책 표지"
                  fill
                />
              </div>
              <div className="ml-5 mt-5">
                <BookTitleRelate />
              </div>
              <div className="pt-4 ml-3 flex-grow text-[#656565] text-white">
                <div className="text-[19px] font-semibold mb-1 overflow-hidden line-clamp-1">
                  {data.bookName}
                </div>
                <div className="text-base">{data.bookAuthors}</div>
              </div>
              <div className="flex flex-col items-center">
                <IconButton onClick={changeIsLike}>
                  {isLike ? (
                    <Like width={29} height={22} />
                  ) : (
                    <NotLike width={29} height={22} />
                  )}
                </IconButton>
                <div className="h-[22px] font-Inter font-regular text-[13px] text-white">
                  {count}
                </div>
              </div>
            </div>
            <div className="flex flex-row my-3 font-semibold items-center gap-x-[7px]">
              <ThemeTitle />
              <div className="flex flex-row overflow-hidden line-clamp-1 text-[22px]">
                {data.title}
              </div>
              <div className="flex items-center bg-transparent leading-tight text-[15px] text-[#F24D4D] border-2 border-[#F24D4D] rounded-[4px] px-[11px] py-0.5">
                BEST
              </div>
            </div>

            <div className="font-medium text-lg text-[#656565] overflow-hidden min-h-20 mb-3 line-clamp-3">
              {data.content}
            </div>

            <hr className="w-full border border-[#F4E4CE]" />

            <div className="flex flex-row gap-x-2.5 items-center mt-3">
              <div>
                <Image
                  className="max-w-[26px] max-h-[26px] border rounded-[18px]"
                  src={
                    data.profileImage !== "image" ? data.profileImage : Profile
                  }
                  alt="프로필"
                  width={26}
                  height={26}
                  priority
                />
              </div>
              <div className="font-medium text-base">{data.username}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RelatedTalkRoomCard;
