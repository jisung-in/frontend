import Image from "next/image";
import { BookMain } from "../../Book/Book";

type ImageProps = {
  postId?: number;
  title?: string;
  image?: string;
  starRate?: number;
  onClick?: () => void;
};

const MyBookCard = ({ title, image, starRate, onClick }: ImageProps) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <BookMain>
        <BookMain.BookCover className="">
          <Image
            src={image ?? ""}
            width={200}
            height={300}
            className="min-w-[100px] min-h-[200px] sm:h-[130px]"
            alt="bookImage"
          />
        </BookMain.BookCover>
        <BookMain.BookTitle>{title}</BookMain.BookTitle>
        <BookMain.StarRating starsCnt={starRate ?? 5} />
      </BookMain>
    </div>
  );
};

export default MyBookCard;
