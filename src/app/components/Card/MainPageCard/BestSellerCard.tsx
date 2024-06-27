import BookTitle from "@/assets/img/book-title.svg";
import NoImage from "@/assets/img/no-image.png";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import Image from "next/image";
import Link from "next/link";
import { BookMain } from "../../Book/Book";
import HaveNotData from "../../HaveNotData/HaveNotData";
import BestSellerTalkRoomCard from "./BestSellerTalkRoomCard";

type BestSellerCardProps = {
  isbn: string;
  title: string;
  thumbnail: string;
  isLoggedIn: boolean;
  myDetailData: { userId: number; userImage: string; userName: string };
  talkRoomLikeIds: number[];
};

type TalkRoom = {
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

const BestSellerCard: React.FC<BestSellerCardProps> = ({
  isbn,
  title,
  thumbnail,
  isLoggedIn,
  myDetailData,
  talkRoomLikeIds,
}) => {
  const { data: recentData } = useGetRooms({
    page: 1,
    size: 3,
    order: "recent",
    search: "",
    sortbydate: "",
  });
  return (
    <div className="flex flex-row grow font-Pretendard text-[#000]">
      <Link href={`/book/${isbn}`}>
        <BookMain className="w-[180px] flex flex-col mr-[26px]">
          <BookMain.BookCover>
            <div className="relative min-w-[180px] min-h-[250px] max-w-[180px] max-h-[250px]">
              <Image
                className="border border-[#F4E4CE]"
                src={thumbnail ? thumbnail : NoImage}
                alt="책 표지"
                fill
              />
            </div>
          </BookMain.BookCover>
          <BookMain.BookTitle>
            <div className="flex flex-row mt-[7px] items-center gap-x-2.5">
              <div className="w-[15px]">
                <BookTitle />
              </div>
              <div className="text-[19px] font-medium text-[#000] overflow-hidden line-clamp-1">
                {title}
              </div>
            </div>
          </BookMain.BookTitle>
        </BookMain>
      </Link>
      {recentData && recentData.queryResponse.length > 0 ? (
        <div className="flex flex-col w-[370px]">
          {recentData.queryResponse.map((data: TalkRoom, index) => {
            const isLike = isLoggedIn && talkRoomLikeIds.includes(data.id);
            return (
              <BestSellerTalkRoomCard
                rank={index}
                key={data.id}
                data={data}
                userId={myDetailData.userId}
                isLike={isLike}
              />
            );
          })}
        </div>
      ) : (
        <HaveNotData content={"최근 생성된 토크방이"} />
      )}
    </div>
  );
};

export default BestSellerCard;
