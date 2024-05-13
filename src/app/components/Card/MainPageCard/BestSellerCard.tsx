import NoImage from "@/assets/img/no-image.png";
import Image from "next/image";
import { BookMain } from "../../Book/Book";

type BestSellerCardProps = {
  ranking: number;
  title: string;
  publisher: string;
  thumbnail: string;
  authors: string[];
  dateTime: string;
};
const BestSellerCard: React.FC<BestSellerCardProps> = ({
  ranking,
  title,
  publisher,
  thumbnail,
  authors,
  dateTime,
}) => {
  return (
    <BookMain>
      <BookMain.BookCover>
        <div className="w-[320px] h-[450px]">
          <Image
            className="border border-[#F4E4CE] rounded-[10px]"
            src={thumbnail ? thumbnail : NoImage}
            alt="책 표지"
            fill
          />
        </div>
      </BookMain.BookCover>
      {ranking && <BookMain.RankBox>{ranking}</BookMain.RankBox>}
      <BookMain.BookTitle>
        <div className="font-semibold mt-[12px] text-[#000] text-[21px] overflow-hidden line-clamp-1">
          {title}
        </div>
      </BookMain.BookTitle>
      <BookMain.Publisher>
        <div className="text-lg overflow-hidden line-clamp-1">{publisher}</div>
      </BookMain.Publisher>
      <BookMain.Author>
        <div className="text-lg overflow-hidden line-clamp-1">
          {authors.join(", ")}
        </div>
      </BookMain.Author>
      <BookMain.Year>
        <div className="text-lg overflow-hidden line-clamp-1">
          {dateTime.slice(0, 4)}
        </div>
      </BookMain.Year>
    </BookMain>
  );
};

export default BestSellerCard;
