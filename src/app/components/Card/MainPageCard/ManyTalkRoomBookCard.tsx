import NoImage from "@/assets/img/no-image.png";
import Image from "next/image";
import { BookMain } from "../../Book/Book";

type dataPrpos = {
  isbn: string;
  title: string;
  publisher: string;
  thumbnail: string;
  authors: string[];
  dateTime: string;
};

const ManyTalkRoomBookCard: React.FC<{ data: dataPrpos }> = ({ data }) => {
  return (
    <div
      className="
    sm:w-[103px]
    md:w-[143px]
    lg:w-[183px]
    xl:w-[223px]
    xl2:w-[263px]
    sm:h-[194px]
    md:h-[232px]
    lg:h-[271px]
    xl:h-[335px]
    xl2:h-[438px]
    "
    >
      <BookMain>
        <BookMain.BookCover>
          <div
            className="relative w-full 
          sm:h-[146px]
          xl2:h-[375px] cursor-pointer"
          >
            <Image
              className="border border-[#F4E4CE] rounded-[10px]"
              src={data.thumbnail ? data.thumbnail : NoImage}
              alt="책 표지"
              fill
            />
          </div>
        </BookMain.BookCover>
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
            {data.title}
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
            {data.publisher}
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
            {data.authors.join(", ")}
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
            {data.dateTime.slice(0, 4)}
          </div>
        </BookMain.Year>
      </BookMain>
    </div>
  );
};

export default ManyTalkRoomBookCard;
