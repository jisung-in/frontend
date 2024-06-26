import NoImage from "@/assets/img/no-image.png";
import Image from "next/image";
import BookStarRating from "./BookStarRating";
import BookStatus from "./BookStatus";

type BookInformation = {
  title: string;
  content: string;
  isbn: string;
  publisher: string;
  imageUrl: string;
  thumbnail: string;
  authors: string[];
  ratingAverage: number;
  dateTime: string;
};
type BookInformationProps = {
  data: BookInformation;
  isbn: string;
  isLogin: boolean;
  onTotalRatingChange: () => void;
};

const BookInformation: React.FC<BookInformationProps> = ({
  data,
  isbn,
  isLogin,
  onTotalRatingChange,
}) => {
  return (
    <div className="flex flex-row mt-[22px] mb-[96px] w-[1680px]">
      <div className="flex">
        <Image
          className="min-w-[363px] min-h-[469px] max-w-[363px] max-h-[469px] mr-[37px]"
          src={data ? data?.thumbnail : NoImage}
          alt="책표지"
          width={363}
          height={469}
        />
      </div>
      <div className="flex flex-col grow justify-start font-Pretendard font-medium">
        <div className="flex flex-row items-center mt-[30px] gap-x-[70px]">
          <BookStarRating
            isbn={isbn}
            isLogin={isLogin}
            ratingAverage={data.ratingAverage}
            onTotalRatingChange={onTotalRatingChange}
          />

          <div className="w-full flex flex-row gap-x-[26px] justify-end">
            <BookStatus isbn={isbn} isLogin={isLogin} />
          </div>
        </div>
        <hr className="w-full border border-[#F4E4CE] mt-[18px] mb-[32px]" />
        <div className="flex flex-col">
          <div className="mb-[9px] font-semibold text-[40px]">
            {data?.title}
          </div>

          <div className="font-Inter flex flex-row gap-x-[29px] text-2xl text-[#656565] mb-[41px]">
            <div>{data?.publisher}</div>
            <div>{data?.authors.join(", ")}</div>
            <div>{data?.dateTime.slice(0, 4)}</div>
          </div>

          <div className="text-xl text-[#656565] yoverflow-hidden">
            {data?.content.slice(0, 400)} {"... "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInformation;
