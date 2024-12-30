import BookTitle from "@/assets/img/book-title.svg";
import NoImage from "@/assets/img/no-image.png";
import Profile from "@/assets/img/profile.png";
import ThemeTitle from "@/assets/img/theme-title.svg";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  isBest?: boolean;
  isLike: boolean;
};

const TalkRoomCard: React.FC<TalkRoomCardProps> = ({
  data,
  isBest,
  isLike,
}) => {
  return (
    <div
      className="relative 
        sm:w-[288px] 
        md:w-[317px] 
        lg:w-[346px] 
        xl:w-[375px] 
        2xl:w-[405px] 
        sm:h-[235px]
        md:h-[258px]
        lg:h-[282px]
        xl:h-[306px]
        2xl:h-[330px]
        sm:rounded-[10px]
        md:rounded-[12px]
        lg:rounded-[14px]
        xl:rounded-[16px]
        2xl:rounded-[17px]
        bg-[#fff] border border-[#F4E4CE] font-Pretendard overflow-hidden"
    >
      <Link href={`/talkroom/detail/${data.id}`}>
        <div
          className="
          sm:top-[-10%]
          md:top-[-15%]
          lg:top-[-20%]
          xl:top-[-25%]
          2xl:top-[-30%]
          sm:h-[100px]
          md:h-[120px]
          lg:h-[147px]
          xl:h-[174px]
          2xl:h-[200px]
          absolute inset-0 transform -skew-y-[10deg] bg-[#80685D]"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            className="flex flex-col
            sm:m-[15px]
            md:m-[17px]
            lg:m-[20px]
            xl:m-[23px]
            2xl:m-[26px]
            w-full"
          >
            <div className="flex mb-2">
              <p
                className="relative
                  sm:min-w-[70px]
                  sm:max-w-[70px]
                  md:min-w-[77px]
                  md:max-w-[77px]
                  lg:min-w-[85px]
                  lg:max-w-[85px]
                  xl:min-w-[95px]
                  xl:max-w-[95px]
                  2xl:min-w-[100px]
                  2xl:max-w-[100px]
                  sm:min-h-[100px] 
                  sm:max-h-[100px] 
                  md:min-h-[110px] 
                  md:max-h-[110px] 
                  lg:min-h-[120px] 
                  lg:max-h-[120px] 
                  xl:min-h-[130px] 
                  xl:max-h-[130px] 
                  2xl:min-h-[140px]
                  2xl:max-h-[140px]
                  "
              >
                <Image
                  className="border border-[#F4E4CE]"
                  src={data.bookThumbnail ? data.bookThumbnail : NoImage}
                  alt="책 표지"
                  fill
                />
              </p>

              <p
                className="
                  sm:ml-2                   
                  md:ml-2.5                   
                  lg:ml-3.5                   
                  xl:ml-4                   
                  2xl:ml-4                   
                  sm:mt-2
                  md:mt-2.5 
                  lg:mt-3.5 
                  xl:mt-4 
                  2xl:mt-4"
              >
                <BookTitle />
              </p>

              <p
                className="
                  sm:mt-2
                  md:mt-2 
                  lg:mt-3 
                  xl:mt-3 
                  2xl:mt-4 
                  sm:ml-[6px]
                  md:ml-[7px]
                  lg:ml-[8px]
                  xl:ml-[9px]
                  2xl:ml-[9px]
                  flex-grow text-[#656565] text-white"
              >
                <span
                  className="
                    sm:text-[13px]
                    md:text-sm
                    lg:text-[15px]
                    xl:text-base
                    2xl:text-[17px]
                    font-semibold mb-1 overflow-hidden line-clamp-1"
                >
                  {data.bookName}
                </span>
                <span
                  className="
                    sm:text-[10px]
                    md:text-[11px] 
                    lg:text-xs
                    xl:text-[13px] 
                    2xl:text-sm 
                    overflow-hidden line-clamp-1"
                >
                  {data.bookAuthor}
                </span>
              </p>

              {isLike ? (
                <p className="flex flex-col items-center">
                  <Heart
                    className="2xl:size-7 xl:size-7 lg:size-6 md:size-5 sm:size-4"
                    fill="red"
                    stroke="red"
                  />
                  <span className="text-sm sm:text-xs font-Inter font-regular text-[#F24D4D]">
                    {data.likeCount}
                  </span>
                </p>
              ) : (
                <p className="flex flex-col items-center">
                  <Heart
                    className="2xl:size-7 xl:size-7 lg:size-6 md:size-5 sm:size-4"
                    stroke="white"
                  />
                  <span className="text-sm sm:text-xs font-Inter font-regular text-white">
                    {data.likeCount}
                  </span>
                </p>
              )}
            </div>

            <p
              className="
              mb-0.5
              lg:mb-1.5
              xl:mb-2
              2xl:mb-3.5
              flex flex-row font-semibold items-center gap-x-2"
            >
              <ThemeTitle />
              <span
                className="
                sm:text-[15px]
                md:text-base
                lg:text-[17px]
                xl:text-lg
                2xl:text-xl
                flex flex-row overflow-hidden line-clamp-1"
              >
                {data.title}
              </span>
              {isBest && (
                <span
                  className="
                  sm:text-[10px]
                  md:text-[11px]
                  lg:text-xs
                  xl:text-[13px]
                  2xl:text-sm
                  flex items-center bg-transparent leading-tight text-[#F24D4D] border-2 border-[#F24D4D] rounded-[4px] px-[6px]"
                >
                  BEST
                </span>
              )}
            </p>

            <span
              className="
              sm:mb-1.5
              md:mb-2.5 
              lg:mb-3
              xl:mb-3.5 
              2xl:mb-4 
              h-10
              lg:h-11
              xl:h-12
              2xl:h-12
              sm:text-[13px]
              md:text-sm
              lg:text-[15px]
              xl:text-base
              2xl:text-base
              font-medium text-[#656565] overflow-hidden line-clamp-2"
            >
              {data.content}
            </span>

            <hr
              className="
              sm:mb-2.5
              md:mb-3
              lg:mb-3
              xl:mb-3
              2xl:mb-3
              w-full border border-[#F4E4CE]"
            />

            <div className="flex flex-row gap-x-[9px] items-center">
              <p>
                <Image
                  className="
                  sm:w-[18px] 
                  md:w-[20px] 
                  lg:w-[22px] 
                  xl:w-[24px] 
                  2xl:w-[26px] 
                  sm:h-[18px] 
                  md:h-[20px] 
                  lg:h-[22px] 
                  xl:h-[24px] 
                  2xl:h-[26px]
                  sm:border rounded-[12px]
                  md:border rounded-[13px]
                  lg:border rounded-[14px]
                  xl:border rounded-[15px]
                  2xl:border rounded-[16px]"
                  src={
                    data.profileImage !== "image" ? data.profileImage : Profile
                  }
                  alt="프로필"
                  width={26}
                  height={26}
                  priority
                />
              </p>
              <span
                className="
               sm:text-[12px]
               md:text-[13px]
               lg:text-[14px]
               xl:text-[15px]
               2xl:text-[15px]
              font-medium"
              >
                {data.username}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TalkRoomCard;
