import Image from "next/image";
import BannerImg from "../../../../public/banner.png";

const Banner = () => {
  return (
    <div className="relative w-full aspect-[3.2/1] max-h-[600px]">
      <Image src={BannerImg} alt={"banner"} fill priority={true} />
    </div>
  );
};

export default Banner;
