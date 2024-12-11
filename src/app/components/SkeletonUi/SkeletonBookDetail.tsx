import { Skeleton } from "@nextui-org/skeleton";

const SkeletonBookDetail = () => {
  return (
    <div className="flex flex-row mt-5 mb-24 md:mb-8 sm:mb-8">
      <Skeleton className="md:hidden sm:hidden 2xl:w-[360px] 2xl:h-[470px] xl:w-[300px] xl:h-[400px] lg:w-[240px] lg:h-[320px] md:w-[180px] md:h-[240px] sm:w-[120px] sm:h-[160px] mr-10" />

      <div className="w-full flex flex-col justify-start  mt-7 md:mt-0 sm:mt-0">
        <div className="flex md:flex-col items-center sm:flex-col flex-row 2xl:gap-16 xl:gap-16 gap-0">
          <div className="hidden md:flex md:flex-row sm:flex sm:flex-row w-full md:justify-center">
            <Skeleton className="2xl:w-[360px] 2xl:h-[470px] xl:w-[300px] xl:h-[400px] lg:w-[240px] lg:h-[320px] md:w-[180px] md:h-[240px] sm:w-[120px] sm:h-[160px] mr-5" />

            <div className="flex flex-col mt-5">
              <Skeleton className="mb-2 w-20 h-10" />

              <div className="flex flex-row flex-wrap gap-4 mb-10">
                <Skeleton className="w-10 h-5" />
                <Skeleton className="w-10 h-5" />
                <Skeleton className="w-10 h-5" />
              </div>
            </div>
          </div>

          <Skeleton className="w-full h-20 md:text-center sm:text-start hidden md:block sm:block my-4" />

          <hr className="w-full border border-[#F4E4CE] my-5 hidden md:block sm:block" />

          <Skeleton className="h-40 w-40" />

          <hr className="w-full border border-[#F4E4CE] my-5 hidden md:block sm:block" />

          <Skeleton className="w-full h-5 md:text-center sm:text-start hidden md:block sm:block mb-4" />
          <Skeleton className="h-10 w-full" />
        </div>

        <hr className="w-full border border-[#F4E4CE] mt-5 mb-8 block md:hidden sm:hidden" />

        <div className="flex flex-col block md:hidden sm:hidden">
          <Skeleton className="mb-2 w-20 h-10" />

          <div className="flex flex-row flex-wrap gap-7 mb-[41px]">
            <Skeleton className="w-10 h-5" />
            <Skeleton className="w-10 h-5" />
            <Skeleton className="w-10 h-5" />
          </div>

          <Skeleton className="overflow-hidden w-full h-10" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonBookDetail;
