import { Skeleton } from "@nextui-org/skeleton";

const SkeletonEvaluation = () => {
  return (
    <div className="w-full h-[320px] bg-[#FFF] border border-[#F4E4CE] mb-[30px] rounded-[11px]">
      <div className="mt-[20px] ml-[30px] mr-[26px]">
        <div className="flex">
          <div className="flex flex-row grow items-center">
            <Skeleton className="rounded-[50%] w-[40px] h-[40px] mr-2" />
            <Skeleton className="w-[60px] h-[30px]" />
          </div>
          <div>
            <Skeleton className="w-[70px] h-[40px]" />
          </div>
        </div>
        <Skeleton className="w-full h-[30px] mt-5" />
        <Skeleton className="w-full h-[30px] mt-3" />
        <Skeleton className="w-full] h-[30px] mt-3" />
        <Skeleton className="w-[50px] h-[30px] mt-6" />
        <Skeleton className="w-[50px] h-[30px] mt-3" />
      </div>
    </div>
  );
};

export default SkeletonEvaluation;
