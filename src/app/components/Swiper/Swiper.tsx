import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BestSellerCard from "../Card/MainPageCard/BestSellerCard";

interface BookSliderProps {
  data: {
    ranking: number;
    isbn: number;
    title: string;
    publisher: string;
    thumbnail: string;
    authors: string[];
    dateTime: number[];
  }[];
  slidesPerView: number;
}

const SwiperSlider: React.FC<BookSliderProps> = ({ data, slidesPerView }) => {
  return (
    <section className="w-[1680px] h-[523px]">
      <ul className="h-full w-full">
        <Swiper
          navigation
          pagination={{ type: "custom", clickable: true }}
          autoplay={true}
          loop={false}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={slidesPerView}
        >
          {data?.map((data) => (
            <SwiperSlide key={data.isbn} className="cursor-pointer">
              <BestSellerCard
                ranking={data.ranking}
                thumbnail={data.thumbnail}
                title={data.title}
                publisher={data.publisher}
                authors={data.authors}
                dateTime={data.dateTime}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  );
};

export default SwiperSlider;
