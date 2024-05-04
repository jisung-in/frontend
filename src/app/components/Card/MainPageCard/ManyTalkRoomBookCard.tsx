import { faker } from "@faker-js/faker";
import Image from "next/image";

interface dataPrpos {
  isbn: number;
  title: string;
  publisher: string;
  thumbnail: string;
  authors: string[];
  dateTime: number[];
}

const ManyTalkRoomBookCard: React.FC<{ data: dataPrpos }> = ({ data }) => {
  return (
    <div className="w-[223px]">
      <div className="relative w-full h-[323px] cursor-pointer">
        {data.thumbnail ? (
          <Image
            className="border border-[#F4E4CE] rounded-[10px]"
            src={data.thumbnail}
            alt="책 표지"
            fill
          />
        ) : (
          <Image
            className="border border-[#F4E4CE] rounded-[10px]"
            src={faker.image.urlLoremFlickr()}
            alt="책 표지"
            fill
          />
        )}
      </div>
      <div className="font-Prentendard font-semibold mt-3 text-[#000] text-[21px] overflow-hidden line-clamp-1">
        {data.title}
      </div>
      <div className="font-Inter font-regular text-lg text-[#656565] overflow-hidden line-clamp-1">
        {data.authors.join(", ")}
      </div>
    </div>
  );
};

export default ManyTalkRoomBookCard;
