import { BookMain } from "../../Book/Book";

type ImageProps = { children?: React.ReactNode };
const MyBookCard = ({ children }: ImageProps) => {
  return (
    <div className="w-[inherit]">
      <BookMain>
        <BookMain.BookCover>{children}</BookMain.BookCover>
        <BookMain.BookTitle>책 제목</BookMain.BookTitle>
        <BookMain.StarRating>별점 ★★★★★ 4.5</BookMain.StarRating>
      </BookMain>
    </div>
  );
};

export default MyBookCard;
