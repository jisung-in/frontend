import MyBookCard from "@/app/components/Card/MyInfoCard/MyBookCard";
import Image from "next/image";

const StarPage = () => {
  return (
    <div className="grid grid-cols-8 gap-[20px] w-[90%]">
      {new Array(50).fill(1).map((_, index) => (
        <MyBookCard key={index}>
          {/* <Image src={""} alt={""}>

          </Image> */}
          <div className="w-full h-[280px] bg-gray-40"></div>
        </MyBookCard>
      ))}
    </div>
  );
};

export default StarPage;
