import { Skeleton } from "@nextui-org/skeleton";

const SkeletonTalkRoomCard = () => {
  return (
    <div
      className="relative 
      sm:w-[288px] 
      md:w-[317px] 
      lg:w-[346px] 
      xl:w-[375px] 
      xl2:w-[405px] 
      sm:h-[235px]
      md:h-[258px]
      lg:h-[282px]
      xl:h-[306px]
      xl2:h-[330px]
      sm:rounded-[10px]
      md:rounded-[12px]
      lg:rounded-[14px]
      xl:rounded-[16px]
      xl2:rounded-[17px]
      bg-[#fff] border border-[#F4E4CE] font-Pretendard overflow-hidden"
    >
      <div
        className="flex flex-col 
            sm:m-[15px]
            md:m-[17px]
            lg:m-[20px]
            xl:m-[23px]
            xl2:m-[26px]
            w-full"
      >
        <div className="flex mb-3">
          <Skeleton
            className=" 
                  sm:w-[70px]
                  md:w-[77px]
                  lg:w-[85px]
                  xl:w-[95px]
                  xl2:w-[100px]
                  sm:h-[100px] 
                  md:h-[110px] 
                  lg:h-[120px] 
                  xl:h-[130px] 
                  xl2:h-[140px]
                  "
          />
          <div
            className="
                  sm:mt-2
                  md:mt-2 
                  lg:mt-3 
                  xl:mt-3 
                  xl2:mt-4 
                  sm:ml-[6px]
                  md:ml-[7px]
                  lg:ml-[8px]
                  xl:ml-[9px]
                  xl2:ml-[9px]
                  flex-grow"
          >
            <Skeleton className="w-[180px] h-[30px] mb-3" />
            <Skeleton className="w-[100px] h-[30px]" />
          </div>
        </div>
        <div className="flex flex-col">
          <Skeleton className="w-[250px] h-[30px] mb-3" />
          <Skeleton className="w-[280px] h-[30px] mb-3" />
          <Skeleton className="w-[280px] h-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonTalkRoomCard;
