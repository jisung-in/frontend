import Image from "next/image";
import { BookMain } from "../../Book/Book";

type ImageProps = {
  postId?: number;
  title?: string;
  image?: string;
  starRate?: string;
};

const MyBookCard = ({ title, image, starRate }: ImageProps) => {
  return (
    <div>
      <BookMain>
        <BookMain.BookCover className="h-[300px]">
          <img src={image} className="w-full h-[300px]" alt="bookImage" />
        </BookMain.BookCover>
        <BookMain.BookTitle>{title}</BookMain.BookTitle>
        <BookMain.StarRating>별점 {starRate}</BookMain.StarRating>
      </BookMain>
    </div>
  );
};

export default MyBookCard;
