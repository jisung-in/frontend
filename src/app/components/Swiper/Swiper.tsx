import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BestSellerCard from "../Card/BestSellerCard";
import RecommendCard from "../Card/RecommendCard";

interface BookSliderProps {
  data: {
    id: number;
    rank?: number;
    title: string;
    image: string;
    publisher?: string;
    author: string;
    year?: number;
    talkTitle?: string;
    userName?: string;
    comment?: string;
  }[];
  slidesPerView: number;
}

const DemoSlider: React.FC<BookSliderProps> = ({ data, slidesPerView }) => {
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
          {data.map(
            ({
              id,
              rank,
              image,
              title,
              publisher,
              author,
              year,
              talkTitle,
              userName,
              comment,
            }) => (
              <SwiperSlide key={id}>
                {rank ? (
                  <BestSellerCard
                    id={id}
                    rank={rank as number}
                    image={image}
                    title={title}
                    publisher={publisher as string}
                    author={author}
                    year={year as number}
                  />
                ) : (
                  <RecommendCard
                    id={id}
                    image={image}
                    title={title}
                    author={author}
                    talkTitle={talkTitle as string}
                    userName={userName as string}
                    comment={comment as string}
                  />
                )}
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </ul>
    </section>
  );
};

export default DemoSlider;
