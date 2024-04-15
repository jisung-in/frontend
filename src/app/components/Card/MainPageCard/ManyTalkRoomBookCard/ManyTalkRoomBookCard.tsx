import { BookMain } from "@/app/components/Book/Book";
import { faker } from "@faker-js/faker";
import Image from "next/image";

const ManyTalkRoomBookCard = () => {
  return (
    <BookMain>
      <BookMain.BookCover>
        <div className="relative w-[223px] h-[323px] ">
          <Image
            className="border border-[#F4E4CE] rounded-[10px]"
            src={faker.image.urlLoremFlickr()}
            alt="책 표지"
            fill
          />
        </div>
      </BookMain.BookCover>
      <BookMain.BookTitle>
        <div className="font-semibold mt-3 text-[#000] text-[21px]">
          책 제목
        </div>
      </BookMain.BookTitle>
      <BookMain.Author>
        <div className="font-Inter font-regular text-lg">저자</div>
      </BookMain.Author>
    </BookMain>
  );
};

export default ManyTalkRoomBookCard;
