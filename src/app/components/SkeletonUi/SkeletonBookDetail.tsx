import { Skeleton } from "@nextui-org/skeleton";

const SkeletonBookDetail = () => {
  return (
    <div className="flex flex-row mt-[22px] mb-[96px] w-[1680px]">
      <div className="flex mr-6">
        <Skeleton className="w-[363px] h-[469px]" />
      </div>
      <div className="flex flex-col grow justify-start">
        <div className="flex flex-row items-center mt-[30px] gap-x-[70px]">
          <Skeleton className="w-[500px] h-[75px]" />
          <Skeleton className="w-[200px] h-[75px]" />

          <div className="w-full flex flex-row gap-x-[26px] justify-end">
            <Skeleton className="w-[300px] h-[75px]" />
          </div>
        </div>
        <hr className="w-full border border-[#F4E4CE] mt-[18px] mb-[32px]" />
        <div className="flex flex-col">
          <Skeleton className="w-[300px] h-[60px] mb-5" />

          <Skeleton className="w-[700px] h-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonBookDetail;
