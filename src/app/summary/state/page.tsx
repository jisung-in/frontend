import MyBookCard from "@/app/components/Card/MyInfoCard/MyBookCard";

const StatePage = () => {
  return (
    <div className="grid grid-cols-5 gap-[20px] w-[80%]">
      {new Array(50).fill(1).map((_, index) => (
        <MyBookCard key={index}>
          {/* <Image src={""} alt={""}>

          </Image> */}
          <div className="w-full h-[380px] bg-gray-40"></div>
        </MyBookCard>
      ))}
    </div>
  );
};

export default StatePage;
