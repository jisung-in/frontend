import { BookMain } from "@/app/components/Book/Book";
import Image from "next/image";

interface dataPrpos {
  id: number;
  image: string;
  title: string;
  author: string;
}

const ManyTalkRoomBookCard: React.FC<{ data: dataPrpos }> = ({ data }) => {
  return (
    <BookMain>
      <BookMain.BookCover>
        <div className="relative w-[223px] h-[323px] ">
          {data.image && (
            <Image
              className="border border-[#F4E4CE] rounded-[10px]"
              src={data.image}
              alt="책 표지"
              fill
            />
          )}
        </div>
      </BookMain.BookCover>
      <BookMain.BookTitle>
        <div className="font-semibold mt-3 text-[#000] text-[21px]">
          {data.title}
        </div>
      </BookMain.BookTitle>
      <BookMain.Author>
        <div className="font-Inter font-regular text-lg">{data.author}</div>
      </BookMain.Author>
    </BookMain>
  );
};

export default ManyTalkRoomBookCard;
