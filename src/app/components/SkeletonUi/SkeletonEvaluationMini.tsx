import { Skeleton } from "@nextui-org/skeleton";

const SkeletonEvaluationMini = () => {
  return (
    <div className="w-full h-full 2xl:w-[425px] 2xl:h-[320px] xl:w-[385px] xl:h-[320px] lg:w-[340px] md:w-[340px] sm:min-w-[288px] bg-[#FFF] rounded-[18px] border border-[#F4E4CE]">
      <div className="m-6 w-auto">
        <div className="flex flex-row grow items-center">
          <Skeleton className="rounded-[50%]  sm:size-5 md:size-6 lg:size-7 xl:size-8 2xl:size-10 mr-2" />
          <Skeleton className="w-[60px] h-[30px]" />
        </div>
        <div>
          <Skeleton className="w-[70px] h-[40px]" />
        </div>
        <Skeleton className="w-full h-[30px] mt-3" />
        <Skeleton className="w-full h-[30px] mt-3" />
        <Skeleton className="w-[50px] h-[30px] mt-6" />
      </div>
    </div>
  );
};

export default SkeletonEvaluationMini;
