import { Skeleton } from "@nextui-org/skeleton";

const SkeletonEvaluationMini = () => {
  return (
    <div className="w-[405px] h-[279px] bg-[#FFF] border border-[#F4E4CE] mb-[30px] rounded-[11px]">
      <div className="mt-[18px] ml-[15px] mr-[13px]">
        <div className="flex">
          <div className="flex flex-row grow items-center">
            <Skeleton className="rounded-[50%] w-[40px] h-[40px] mr-2" />
            <Skeleton className="w-[60px] h-[30px]" />
          </div>
          <div>
            <Skeleton className="w-[70px] h-[40px]" />
          </div>
        </div>
        <Skeleton className="w-[300px] h-[30px] mt-3" />
        <Skeleton className="w-[300px] h-[30px] mt-3" />
        <Skeleton className="w-[300px] h-[30px] mt-3" />
        <Skeleton className="w-[50px] h-[30px] mt-6" />
      </div>
    </div>
  );
};

export default SkeletonEvaluationMini;
