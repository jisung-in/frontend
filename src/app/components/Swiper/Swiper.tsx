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
          {data?.map((data) => (
            <SwiperSlide key={`slide_${data.id}`}>
              {data.rank ? (
                <BestSellerCard
                  id={data.id}
                  rank={data.rank as number}
                  image={data.image}
                  title={data.title}
                  publisher={data.publisher as string}
                  author={data.author}
                  year={data.year as number}
                />
              ) : (
                <RecommendCard
                  id={data.id}
                  image={data.image}
                  title={data.title}
                  author={data.author}
                  talkTitle={data.talkTitle as string}
                  userName={data.userName as string}
                  comment={data.comment as string}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  );
};

export default DemoSlider;
