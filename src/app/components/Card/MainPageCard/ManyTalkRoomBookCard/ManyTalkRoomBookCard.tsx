import { BookMain } from "@/app/components/Book/Book";

const ManyTalkRoomBookCard = () => {
  return (
    <BookMain>
      <BookMain.BookCover>
        <div className="w-[223px] h-[323px] border border-solid border-[#F4E4CE] rounded-[10px]" />
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
