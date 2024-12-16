import BookTitleBigImg from "@/assets/img/book-title-big.png";
import NoImage from "@/assets/img/no-image.png";
import Image from "next/image";

interface BookDetailProps {
  data: {
    authors: string[];
    content: string;
    dateTime: string;
    imageUrl: string;
    isbn: string;
    publisher: string;
    ratingAverage: number;
    thumbnail: string;
    title: string;
  };
}

const BookDetail: React.FC<BookDetailProps> = ({ data }) => {
  return (
    <div className="flex justify-start">
      <div className="relative aspect-[0.7] overflow-hidden sm:w-[124px] sm:h-[168px] md:w-[144px] md:h-[198px] lg:w-[174px] lg:h-[228px] xl:w-[194px] xl:h-[258px] 2xl:w-[214px] 2xl:h-[288px] 2xl:mr-12 xl:mr-10 lg:mr-8 md:mr-6 sm:mr-4">
        <Image
          className="border border-[#F4E4CE]"
          src={data ? data.thumbnail : NoImage}
          alt="책 표지"
          fill
        />
      </div>

      <div className="flex flex-col mt-3">
        <h2 className="flex flex-row items-center mb-[11px] gap-x-2 font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#000]">
          <Image
            src={BookTitleBigImg}
            alt="책 제목"
            className="2xl:size-10 xl:size-8 lg:size-6 md:size-5 sm:hidden"
          />
          {data?.title}
        </h2>
        <h3 className="flex gap-3 sm:flex-col text-[#656565] sm:gap-0.5 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          <span>{data?.publisher}</span>
          <span>{data?.authors}</span>
          <span className="font-Inter">{data?.dateTime.slice(0, 4)}</span>
        </h3>
      </div>
    </div>
  );
};

export default BookDetail;
