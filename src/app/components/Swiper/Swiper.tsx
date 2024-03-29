"use client";

import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BookMain } from "../Book/Book";

interface Slide {
  id: number;
  rank?: number;
  title: string;
  image: string;
  publisher: string;
  author: string;
  year: number;
}

interface BookSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<BookSliderProps> = ({ data }) => {
  return (
    <section className="w-[1688px] h-[523px]">
      <ul className="h-full w-full">
        <Swiper
          navigation
          pagination={{ type: "custom", clickable: true }}
          autoplay={true}
          loop={false}
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={5}
        >
          {data.map(({ id, rank, image, title, publisher, author, year }) => (
            <SwiperSlide key={id}>
              <BookMain>
                <BookMain.BookCover>
                  <div className="w-[320px] h-[460px] bg-black rounded-[10px]">
                    {image}
                  </div>
                </BookMain.BookCover>
                {rank ? <BookMain.RankBox>{rank}</BookMain.RankBox> : <></>}
                <BookMain.BookTitle>
                  <div className="font-SemiBold mt-[12px] text-[#000] text-[21px]">
                    {title}
                  </div>
                </BookMain.BookTitle>
                <BookMain.Publisher>{publisher}</BookMain.Publisher>
                <BookMain.Author>&nbsp;• {author} •&nbsp;</BookMain.Author>
                <BookMain.Year>{year}</BookMain.Year>
              </BookMain>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  );
};

export default DemoSlider;
