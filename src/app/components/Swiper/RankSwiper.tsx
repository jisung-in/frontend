"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BestSellerCard from "../Card/MainPageCard/BestSellerCard";
import SkeletonBestSeller from "../SkeletonUi/SkeletonBestSeller";

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
  const [isInitialRender, setIsInitialRender] = useState(true);

  // 초기에 렌더링 시 이미지가 fill 속성 때문에 화면에 꽉차게 나오는 현상을 막기 위해 사용
  useEffect(() => {
    // 컴포넌트가 처음 렌더링된 후 isInitialRender를 false로 설정
    const timer = setTimeout(() => {
      setIsInitialRender(false);
    }, 0); // 렌더링 완료 후 바로 상태를 업데이트

    return () => clearTimeout(timer); // 타이머 제거
  }, []);

  return (
    <section>
      <ul className="max-w-[1680px] max-h-[513px]">
        <Swiper
          navigation
          pagination={{ type: "custom", clickable: true }}
          autoplay={false}
          loop={false}
          modules={[Navigation, Pagination]}
          breakpoints={{
            280: {
              slidesPerView: 2.7,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            601: {
              slidesPerView: 3.5,
              slidesPerGroup: 3,
              spaceBetween: 10,
            },
            901: {
              slidesPerView: 4,
              slidesPerGroup: 3,
              spaceBetween: 10,
            },
            1201: {
              slidesPerView: 4.5,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1401: {
              slidesPerView: 5,
              slidesPerGroup: 4,
              spaceBetween: 20,
            },
            1601: {
              slidesPerView: 5,
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
          {isInitialRender ? (
            <SkeletonBestSeller />
          ) : (
            data?.map((items, index) => (
              <SwiperSlide key={items.isbn}>
                <Link href={`/book/${items.isbn}`}>
                  <BestSellerCard
                    ranking={items.ranking}
                    thumbnail={items.thumbnail}
                    title={items.title}
                    publisher={items.publisher}
                    authors={items.authors}
                    dateTime={items.dateTime}
                  />
                </Link>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </ul>
    </section>
  );
};

export default RankSwiper;
