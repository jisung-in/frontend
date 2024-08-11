import { Skeleton } from "@nextui-org/skeleton";

const SkeletonSpeechBubble = () => {
  return (
    <div className="w-full h-[200px] bg-[#fff] rounded-[15px] mb-[97px] border border-[#F4E4CE]">
      <div className="pt-[20px] pb-[12px] mx-[20px]">
        <div className="flex items-center mb-4">
          <div className="flex grow items-center">
            <Skeleton className="w-[40px] h-[40px] rounded-[50%] mr-3" />
            <Skeleton className="w-[100px] h-[30px]" />
          </div>
          <div className="flex">
            <Skeleton className="w-[100px] h-[30px]" />
          </div>
        </div>
        <Skeleton className="w-full h-[60px] mb-3" />
        <Skeleton className="w-[100px] h-[30px]" />
      </div>
    </div>
  );
};

export default SkeletonSpeechBubble;
