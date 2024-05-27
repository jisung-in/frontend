import Link from "next/link";
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
    isbn: string;
    title: string;
    publisher: string;
    thumbnail: string;
    authors: string[];
    dateTime: string;
  }[];
}

const RankSwiper: React.FC<BookSliderProps> = ({ data }) => {
  return (
    <section>
      <ul className="max-w-[1680px] max-h-[513px]">
        <Swiper
          navigation
          pagination={{ type: "custom", clickable: true }}
          autoplay={true}
          loop={false}
          modules={[Navigation, Pagination]}
          breakpoints={{
            319: {
              slidesPerView: 2.7,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            601: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 10,
            },
            1001: {
              slidesPerView: 3.2,
              slidesPerGroup: 3,
              spaceBetween: 15,
            },
            1201: {
              slidesPerView: 3.5,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1401: {
              slidesPerView: 4.2,
              slidesPerGroup: 4,
              spaceBetween: 20,
            },
            1601: {
              slidesPerView: 4.5,
              slidesPerGroup: 4,
              spaceBetween: 20,
            },
            1801: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 20,
            },
          }}
        >
          {data?.map((data) => (
            <SwiperSlide key={data.isbn}>
              <Link href={`/book/${data.isbn}`}>
                <BestSellerCard
                  ranking={data.ranking}
                  thumbnail={data.thumbnail}
                  title={data.title}
                  publisher={data.publisher}
                  authors={data.authors}
                  dateTime={data.dateTime}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  );
};

export default RankSwiper;
