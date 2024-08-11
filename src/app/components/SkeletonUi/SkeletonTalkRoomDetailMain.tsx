import { Skeleton } from "@nextui-org/skeleton";

const SkeletonTalkRoomDetailMain = () => {
  return (
    <div className="w-full min-h-[1194px] bg-[white] border-2 border-[#F4E4CE] rounded-[12px] flex flex-col">
      <div className="mx-[46px] mt-[44px]">
        <div className="flex flex-col">
          <div className="flex flex-col items-end">
            <div className="flex flex-col">
              <div className="flex flex-col items-center">
                <Skeleton className="w-[26px] h-[24px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Skeleton className="w-[300px] h-[50px] mt-3 mb-4" />
            <Skeleton className="w-[250px] h-[50px] mb-4" />
            <Skeleton className="w-[260px] h-[339px] mb-4" />
            <Skeleton className="w-[300px] h-[50px]" />
          </div>
          <div className="flex flex-col items-center mt-[19px]">
            <Skeleton className="w-[100px] h-[50px] mb-4" />
            <Skeleton className="border border-[#F4E4CE] border-solid rounded-[4px] w-[300px] h-[50px]" />
          </div>
        </div>

        <hr className="border border-solid border-[#F5EFE5] mt-[34px] mb-[25px]" />

        <div className="min-h-[120px]">
          <Skeleton className="w-[200px] h-[40px] mb-4" />
          <Skeleton className="w-full h-[50px] mb-4" />
        </div>

        <hr className="border border-solid border-[#F5EFE5] mt-[25px] mb-[35px]" />

        <div className="font-semibold text-2xl mb-[18px]">이미지</div>
        <Skeleton className="w-[160px] h-[160px] mb-4" />
      </div>
    </div>
  );
};
export default SkeletonTalkRoomDetailMain;
