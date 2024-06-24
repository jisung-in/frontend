import BookTitle from "@/assets/img/book-title.svg";
import NoImage from "@/assets/img/no-image.png";
import Rank1 from "@/assets/img/rank1.svg";
import Rank2 from "@/assets/img/rank2.svg";
import Rank3 from "@/assets/img/rank3.svg";
import Image from "next/image";
import Link from "next/link";
import { BookMain } from "../../Book/Book";

type BestSellerCardProps = {
  isbn: string;
  title: string;
  thumbnail: string;
};
const BestSellerCard: React.FC<BestSellerCardProps> = ({
  isbn,
  title,
  thumbnail,
}) => {
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
      <div className="flex flex-col font-semibold">
        <div className="flex flex-row items-center">
          <Rank1 />
          읽기 전 참고할 내용
        </div>
        <div className="flex flex-row items-center">
          <Rank2 />
          읽기 전 참고할 내용
        </div>{" "}
        <div className="flex flex-row items-center">
          <Rank3 />
          읽기 전 참고할 내용
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
