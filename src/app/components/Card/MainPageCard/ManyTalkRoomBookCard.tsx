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
      w-[29vw]
      min-w-[93px]
      max-w-[263px]
      md:w-[27vw]
      lg:w-[21vw]
      xl:w-[16vw]
      xl2:w-[14vw]
      h-full"
    >
      <BookMain>
        <BookMain.BookCover>
          <div
            className="
            relative
            w-full 
            cursor-pointer 
            aspect-[0.6] 
            min-h-[147px] 
            max-h-[375px] 
            "
          >
            <Image
              className="border border-[#F4E4CE]            
              sm:rounded-[3px]
              md:rounded-[5px]
              lg:rounded-[7px]
              xl:rounded-[9px]
              xl2:rounded-[10px]"
              src={data.thumbnail ? data.thumbnail : NoImage}
              alt="책 표지"
              fill
              sizes="
              (max-width: 360px) 28.6vw, 
              (max-width: 768px) 15vw, 
              (max-width: 1200px) 20vw, 
              13.6vw
              "
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
