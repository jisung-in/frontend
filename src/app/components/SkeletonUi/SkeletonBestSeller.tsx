import { Skeleton } from "@nextui-org/skeleton";

const SkeletonBestSeller = () => {
  return (
    <Skeleton
      className="
      border border-[#F4E4CE] 
      sm:rounded-[5px]
      md:rounded-[6px]
      lg:rounded-[8px]
      xl:rounded-[9px]
      xl2:rounded-[10px]
      min-w-[120px]
      min-h-[170px]
      max-w-[320px]
      max-h-[450px]
      w-[32vw]
      h-[52vw]
      "
    />
  );
};

export default SkeletonBestSeller;
