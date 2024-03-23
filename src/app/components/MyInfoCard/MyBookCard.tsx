import { BookMain } from "../Book/Book";

const MyBookCard = () => {
  return (
    <BookMain>
      <BookMain.ImageBox>
        <div className="w-[190px] h-[280px] bg-gray-40"></div>
      </BookMain.ImageBox>
      <BookMain.BookTitle>책 제목</BookMain.BookTitle>
      <BookMain.StarRating>별점 ★★★★★ 4.5</BookMain.StarRating>
    </BookMain>
  );
};

export default MyBookCard;
