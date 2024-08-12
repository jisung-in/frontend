import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BestSellerCard from "../Card/MainPageCard/BestSellerCard";
import HaveNotData from "../HaveNotData/HaveNotData";
import SkeletonLoadingSwiper from "../SkeletonUI/SkeletonLoadingSwiper";

interface BookSliderProps {
  data?: {
    ranking: number;
    isbn: string;
    title: string;
    publisher: string;
    thumbnail: string;
    authors: string[];
    dateTime: string;
  }[];
  isLoggedIn: boolean;
  myDetailData: { userId: number; userImage: string; userName: string };
  talkRoomLikeIds: number[];
  isLoading: boolean;
}

const BestSellerSwiper: React.FC<BookSliderProps> = ({
  data,
  isLoggedIn,
  myDetailData,
  talkRoomLikeIds,
  isLoading,
}) => {
  if (isLoading) return <SkeletonLoadingSwiper />;

  if (!isLoading && data?.length === 0)
    return <HaveNotData content={"베스트 셀러가"} />;

  return (
    <section>
      <ul className="max-w-[1330px] max-h-[513px]">
        <Swiper
          navigation
          pagination={{ type: "custom", clickable: true }}
          autoplay={true}
          loop={false}
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          slidesPerGroup={2}
        >
          {data?.map((data) => (
            <SwiperSlide key={data.isbn}>
              <BestSellerCard
                isbn={data.isbn}
                thumbnail={data.thumbnail}
                title={data.title}
                isLoggedIn={isLoggedIn}
                talkRoomLikeIds={talkRoomLikeIds}
                myDetailData={myDetailData}
                isLoading={isLoading}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  );
};

export default BestSellerSwiper;
