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
        <div
          className="
          min-w-[120px] 
          min-h-[170px]
          w-[55vw]
          h-[50vw]
          max-w-[320px] max-h-[450px]
          "
        >
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
        <div
          className="
          sm:text-[12px]
          md:text-[15px]
          lg:text-[17px]
          xl:text-[19px]
          xl2:text-[21px]
          font-semibold mt-[12px] text-[#000] overflow-hidden line-clamp-1"
        >
          {title}
        </div>
      </BookMain.BookTitle>
      <BookMain.Publisher>
        <div
          className="
          sm:text-[11px]
          md:text-[13px]
          lg:text-[15px]
          xl:text-[17px]
          xl2:text-lg
          overflow-hidden line-clamp-1"
        >
          {publisher}
        </div>
      </BookMain.Publisher>
      <BookMain.Author>
        <div
          className="
          sm:text-[11px]
          md:text-[13px]
          lg:text-[15px]
          xl:text-[17px]
          xl2:text-lg 
          overflow-hidden line-clamp-1"
        >
          {authors.join(", ")}
        </div>
      </BookMain.Author>
      <BookMain.Year>
        <div
          className="          
          sm:text-[11px]
          md:text-[13px]
          lg:text-[15px]
          xl:text-[17px]
          xl2:text-lg
          overflow-hidden line-clamp-1"
        >
          {dateTime.slice(0, 4)}
        </div>
      </BookMain.Year>
    </BookMain>
  );
};

export default BestSellerCard;
