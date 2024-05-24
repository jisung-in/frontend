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
          relative
          min-w-[120px]
          min-h-[170px]
          w-full
          pt-[141.67%] /* 120 / 170 = 0.70588 = 70.588% */
          max-w-[320px]
          max-h-[450px]
          overflow-hidden"
        >
          <Image
            className="border border-[#F4E4CE] 
            sm:rounded-[5px]
            md:rounded-[6px]
            lg:rounded-[8px]
            xl:rounded-[9px]
            xl2:rounded-[10px]
            "
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
          sm:mt-[8px]
          md:mt-[9px]
          lg:mt-[10px]
          xl:mt-[11px]
          xl2:mt-[12px]
          font-semibold text-[#000] overflow-hidden line-clamp-1"
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
