import { Layout } from "@/app/components/Layout/Layout";
import RankSwiper from "@/app/components/Swiper/RankSwiper";
import { ThemeMain } from "@/app/components/Theme/Theme";
import BestSellerImg from "@/assets/img/best-seller.svg";
import dynamic from "next/dynamic";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);

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
}

const BestSeller = ({ data }: BestSellerDataType) => {
  return (
    <Layout
      className="
        sm:my-[26px] 
        md:my-[34px]
        lg:my-[42px]
        xl:my-[48px]
        2xl:my-[56px]
        "
    >
      <ThemeMain.MainTheme>
        <div
          className="flex
          sm:mb-[15px] md:mb-[17px] lg:mb-[19px] xl:mb-[19px] 2xl:mb-[21px] mx-[5%]"
        >
          <p
            className="
            flex grow items-center
            sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 2xl:gap-x-3"
          >
            <span className="sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              베스트 셀러
            </span>
            <span className="sm:size-4 size-5 2xl:size-6">
              <BestSellerImg />
            </span>
          </p>
        </div>
      </ThemeMain.MainTheme>

      <div className="mx-[5%]">
        {data && data.queryResponse.length > 0 ? (
          <RankSwiper data={data.queryResponse} />
        ) : (
          <HaveNotData content={"베스트 셀러가"} />
        )}
      </div>
    </Layout>
  );
};

export default BestSeller;
