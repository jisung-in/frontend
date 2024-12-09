"use client";

import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import SkeletonBestSeller from "@/app/components/SkeletonUi/SkeletonBestSeller";
import RankSwiper from "@/app/components/Swiper/RankSwiper";
import { ThemeMain } from "@/app/components/Theme/Theme";
import BestSellerImg from "@/assets/img/best-seller.svg";

interface BestSellerDataType {
  data: {
    queryResponse: {
      ranking: number;
      isbn: string;
      title: string;
      publisher: string;
      thumbnail: string;
      authors: string[];
      dateTime: string;
    }[];
    size: number;
    totalCount: number;
  };
  isLoading: boolean;
}

const BestSeller = ({ data, isLoading }: BestSellerDataType) => {
  return (
    <div className="bg-[#FBF7F0] py-[1px]">
      <div
        className="
        sm:my-[26px] 
        md:my-[34px]
        lg:my-[42px]
        xl:my-[48px]
        2xl:my-[56px]
        mx-[5%]
        "
      >
        <ThemeMain.MainTheme>
          <div
            className="flex
          sm:mb-[15px] md:mb-[17px] lg:mb-[19px] xl:mb-[19px] 2xl:mb-[21px]"
          >
            <p
              className="
            flex grow items-center
            sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 2xl:gap-x-3 "
            >
              <span>베스트 셀러</span>
              <span className="size-6">
                <BestSellerImg />
              </span>
            </p>
          </div>
        </ThemeMain.MainTheme>

        {isLoading && <SkeletonBestSeller />}
        {data && data.queryResponse.length > 0 ? (
          <RankSwiper data={data.queryResponse} />
        ) : (
          !isLoading && <HaveNotData content={"베스트 셀러가"} />
        )}
      </div>
    </div>
  );
};

export default BestSeller;
