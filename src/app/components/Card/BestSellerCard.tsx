import { faker } from "@faker-js/faker";
import Image from "next/image";
import { BookMain } from "../Book/Book";

interface BestSellerCardProps {
  id: number;
  rank: number;
  title: string;
  image: string;
  publisher: string;
  author: string;
  year: number;
}

const BestSellerCard: React.FC<BestSellerCardProps> = ({
  id,
  rank,
  title,
  image,
  publisher,
  author,
  year,
}) => {
  return (
    <BookMain>
      <BookMain.BookCover>
        <div className="w-[263px] h-[375px]">
          {image && (
            <Image
              className="border border-[#F4E4CE] rounded-[10px]"
              src={faker.image.urlLoremFlickr()}
              alt="책 표지"
              fill
            />
          )}
        </div>
      </BookMain.BookCover>
      {rank && <BookMain.RankBox>{rank}</BookMain.RankBox>}
      <BookMain.BookTitle>
        <div className="font-semibold mt-[12px] text-[#000] text-[21px]">
          {title}
        </div>
      </BookMain.BookTitle>
      <BookMain.Publisher>{publisher}</BookMain.Publisher>
      <BookMain.Author>&nbsp;• {author} •&nbsp;</BookMain.Author>
      <BookMain.Year>{year}</BookMain.Year>
    </BookMain>
  );
};

export default BestSellerCard;
