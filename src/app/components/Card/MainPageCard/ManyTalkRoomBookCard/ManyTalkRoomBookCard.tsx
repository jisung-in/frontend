import { BookMain } from "@/app/components/Book/Book";

const ManyTalkRoomBookCard = () => {
  return (
    <BookMain>
      <BookMain.BookCover>
        <div className="w-[320px] h-[460px] border border-solid border-[#F4E4CE] rounded-[10px]" />
      </BookMain.BookCover>
      <BookMain.BookTitle>
        <div className="font-semibold mt-[12px] text-[#000] text-[21px] mb-[29px]">
          책 제목
        </div>
      </BookMain.BookTitle>
    </BookMain>
  );
};

export default ManyTalkRoomBookCard;
