import { Skeleton } from "@nextui-org/skeleton";

const SkeletonRelatedTalkRoom = () => {
  return (
    <div className="bg-[#fff] border border-[#F4E4CE] w-[547px] h-[426px] rounded-[17px]">
      <div className="flex flex-col mx-8 mt-[31px] mb-3 w-full">
        <div className="flex flex-row mb-4">
          <Skeleton className="w-[135px] h-[188px]" />
          <div className="mt-2 ml-4">
            <Skeleton className="w-[230px] h-[30px] mb-3" />
            <Skeleton className="w-[150px] h-[30px]" />
          </div>
        </div>
        <div className="flex flex-col">
          <Skeleton className="w-[300px] h-[30px] mb-3" />
          <Skeleton className="w-[400px] h-[30px] mb-3" />
          <Skeleton className="w-[400px] h-[30px] mb-3" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonRelatedTalkRoom;
