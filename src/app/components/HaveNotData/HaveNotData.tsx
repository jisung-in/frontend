import NoData from "@/assets/img/no-data.png";
import Image from "next/image";

interface HaveNotDataProps {
  content: string;
}

const HaveNotData = ({ content }: HaveNotDataProps) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={NoData} alt={"Have Not Data"} width={150} height={141} />
      <div className="font-SpoqaHanSansNeo font-bold text-[30px] text-[#624E45]">
        {content} 없습니다
      </div>
    </div>
  );
};

export default HaveNotData;
