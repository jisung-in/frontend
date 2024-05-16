import NoImage from "@/assets/img/no-image.png";
import Image from "next/image";

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
    <div className="w-[263px]">
      <div className="relative w-full h-[375px] cursor-pointer">
        <Image
          className="border border-[#F4E4CE] rounded-[10px]"
          src={data.thumbnail ? data.thumbnail : NoImage}
          alt="책 표지"
          fill
        />
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
