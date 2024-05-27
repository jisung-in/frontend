import NoData from "@/assets/img/no-data.png";
import Image from "next/image";

interface HaveNotDataProps {
  content: string;
}

const HaveNotData = ({ content }: HaveNotDataProps) => {
  return (
    <div
      className="flex flex-col items-center 
      sm:my-[26px] 
      md:my-[34px]
      lg:my-[42px]
      xl:my-[48px]
      xl2:my-[56px]"
    >
      <div
        className="
      sm:w-[80px]
      md:w-[98px]
      lg:w-[115px]
      xl:w-[132px]
      xl2:w-[150px]
      sm:h-[71px]
      md:h-[89px]
      lg:h-[106px]
      xl:h-[124px]
      xl2:h-[141px]
      mb-2
      "
      >
        <Image src={NoData} alt={"Have Not Data"} width={150} height={141} />
      </div>
      <div
        className="
        sm:text-[18px]
        md:text-[21px]
        lg:text-[24px]
        xl:text-[27px]
        xl2:text-[30px]
        font-SpoqaHanSansNeo font-bold text-[#624E45]"
      >
        {content} 없습니다
      </div>
    </div>
  );
};

export default HaveNotData;
