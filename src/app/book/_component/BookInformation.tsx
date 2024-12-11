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
    <div className="flex flex-row mt-5 mb-24 md:mb-8 sm:mb-8">
      <Image
        className="md:hidden sm:hidden 2xl:w-[360px] 2xl:h-[470px] xl:w-[300px] xl:h-[400px] lg:w-[240px] lg:h-[320px] md:w-[180px] md:h-[240px] sm:w-[120px] sm:h-[160px] mr-10"
        src={data ? data?.thumbnail : NoImage}
        alt="책표지"
        width={360}
        height={470}
      />

      <div className="w-full flex flex-col justify-start font-Pretendard font-medium mt-7 md:mt-0 sm:mt-0">
        <div className="flex md:flex-col items-center sm:flex-col flex-row 2xl:gap-16 xl:gap-16 gap-0">
          <div className="hidden md:flex md:flex-row sm:flex sm:flex-row w-full md:justify-center">
            <Image
              className="2xl:w-[360px] 2xl:h-[470px] xl:w-[300px] xl:h-[400px] lg:w-[240px] lg:h-[320px] md:w-[180px] md:h-[240px] sm:w-[120px] sm:h-[160px] mr-5"
              src={data ? data?.thumbnail : NoImage}
              alt="책표지"
              width={360}
              height={470}
            />

            <div className="flex flex-col mt-5">
              <span className="mb-2 font-semibold 2xl:text-[40px] xl:text-[36px] lg:text-3xl md:text-xl sm:text-base">
                {data?.title}
              </span>

              <p className="font-Inter flex flex-row flex-wrap gap-4 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#656565] mb-10">
                <span>{data?.publisher}</span>
                <span>{data?.authors.join(", ")}</span>
                <span>{data?.dateTime.slice(0, 4)}</span>
              </p>
            </div>
          </div>

          <span className="w-full md:text-center sm:text-start hidden md:block sm:block text-base font-bold my-4">
            줄거리
          </span>
          <span className="md:max-w-[370px] hidden md:block sm:block sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-[#656565] yoverflow-hidden">
            {data?.content.slice(0, 400)} {"... "}
          </span>

          <hr className="w-full border border-[#F4E4CE] my-5 hidden md:block sm:block" />

          <span className="w-full md:text-center sm:text-start hidden md:block sm:block text-base font-bold">
            별점
          </span>
          <BookStarRating
            isbn={isbn}
            isLogin={isLogin}
            ratingAverage={data.ratingAverage}
            onTotalRatingChange={onTotalRatingChange}
          />

          <hr className="w-full border border-[#F4E4CE] my-5 hidden md:block sm:block" />

          <span className="w-full md:text-center sm:text-start hidden md:block sm:block text-base font-bold mb-4">
            독서상태
          </span>
          <div className="w-full flex flex-row 2xl:gap-5 xl:gap-4 gap-3 justify-end sm:justify-start md:justify-center">
            <BookStatus isbn={isbn} isLogin={isLogin} />
          </div>
        </div>

        <hr className="w-full border border-[#F4E4CE] mt-5 mb-8 block md:hidden sm:hidden" />

        <div className="flex flex-col block md:hidden sm:hidden">
          <span className="mb-2 font-semibold 2xl:text-[40px] xl:text-[36px] lg:text-3xl md:text-xl sm:text-base">
            {data?.title}
          </span>

          <p className="font-Inter flex flex-row flex-wrap gap-7 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#656565] mb-[41px]">
            <span>{data?.publisher}</span>
            <span>{data?.authors.join(", ")}</span>
            <span>{data?.dateTime.slice(0, 4)}</span>
          </p>

          <span className="sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-[#656565] yoverflow-hidden">
            {data?.content.slice(0, 400)} {"... "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookInformation;
