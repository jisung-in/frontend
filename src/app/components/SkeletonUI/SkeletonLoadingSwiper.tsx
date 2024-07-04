import { Skeleton } from "@nextui-org/skeleton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BookMain } from "../Book/Book";

const SkeletonLoadingSwiper = () => {
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
          {Array.from({ length: 4 }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-row justify-center grow font-Pretendard text-[#000]">
                <BookMain className="w-[180px] flex flex-col mr-[26px]">
                  <BookMain.BookCover>
                    <div className="relative min-w-[180px] min-h-[250px] max-w-[180px] max-h-[250px]">
                      <Skeleton className="w-[180px] h-[250px]" />
                    </div>
                  </BookMain.BookCover>
                  <BookMain.BookTitle>
                    <div className="flex flex-row mt-[7px] items-center gap-x-2.5">
                      <Skeleton className="w-[20px] h-[17px]" />
                      <Skeleton className="w-[155px] h-[28.5px]" />
                    </div>
                  </BookMain.BookTitle>
                </BookMain>
                <div className="flex flex-col w-[370px]">
                  <div className="flex flex-row font-semibold">
                    <div className="felx items-center mr-[5px]">
                      <Skeleton className="w-[45px] h-[45px]" />
                    </div>
                    <div className="flex flex-col grow justify-start gap-y-1">
                      <div className="flex">
                        <Skeleton className="w-[250px] h-[24px]" />
                      </div>
                      <div className="flex flex-row gap-x-2 items-center">
                        <Skeleton className="w-[18px] h-[18px] rounded-50%" />
                        <div className="font-medium text-[15px] text-[#777]">
                          <Skeleton className="w-[220px] h-[22.5px]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center mt-2 ml-3">
                      <Skeleton className="w-[21px] h-[30px]" />
                    </div>
                  </div>
                  <hr className="w-full border border-[#F4E4CE] my-[20px]" />
                  <div className="flex flex-row font-semibold">
                    <div className="felx items-center mr-[5px]">
                      <Skeleton className="w-[45px] h-[45px]" />
                    </div>
                    <div className="flex flex-col grow justify-start gap-y-1">
                      <div className="flex">
                        <Skeleton className="w-[250px] h-[24px]" />
                      </div>
                      <div className="flex flex-row gap-x-2 items-center">
                        <Skeleton className="w-[18px] h-[18px] rounded-50%" />
                        <div className="font-medium text-[15px] text-[#777]">
                          <Skeleton className="w-[220px] h-[22.5px]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center mt-2 ml-3">
                      <Skeleton className="w-[21px] h-[30px]" />
                    </div>
                  </div>
                  <hr className="w-full border border-[#F4E4CE] my-[20px]" />
                  <div className="flex flex-row font-semibold">
                    <div className="felx items-center mr-[5px]">
                      <Skeleton className="w-[45px] h-[45px]" />
                    </div>
                    <div className="flex flex-col grow justify-start gap-y-1">
                      <div className="flex">
                        <Skeleton className="w-[250px] h-[24px]" />
                      </div>
                      <div className="flex flex-row gap-x-2 items-center">
                        <Skeleton className="w-[18px] h-[18px] rounded-50%" />
                        <div className="font-medium text-[15px] text-[#777]">
                          <Skeleton className="w-[220px] h-[22.5px]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center mt-2 ml-3">
                      <Skeleton className="w-[21px] h-[30px]" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  );
};

export default SkeletonLoadingSwiper;
