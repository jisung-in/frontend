import { Layout } from "@/app/components/Layout/Layout";
import Image from "next/image";
import BannerImg from "../../../../public/banner.png";

const Banner = () => {
  return (
    <Layout>
      <div className="relative w-full aspect-[3.2/1] max-h-[600px]">
        <Image src={BannerImg} alt={"banner"} fill priority={true} />
      </div>
    </Layout>
  );
};

export default Banner;
