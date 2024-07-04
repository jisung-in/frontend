import { Skeleton } from "@nextui-org/skeleton";

const SkeletonTalkRoomCard = () => {
  return (
    <div className="min-w-[328px] w-[84vw] max-w-[1280px] max-h-[236px] rounded-[17px] bg-[#fff] border border-[#F4E4CE] overflow-hidden">
      <div className="flex justify-center mx-[32px] my-[35px]">
        <div className="flex">
          <Skeleton className="min-w-[110px] max-w-[110px] min-h-[150px] max-h-[150px]" />
          <div className="flex flex-col ml-[25px] w-[68vw] max-w-[1044px]">
            <div className="flex flex-row items-center">
              <div className="flex flex-row growitems-center gap-x-[8px]">
                {/* 기록, 질문, 평가 테마에 맞게 데이터 추가되면 작성 */}
                <Skeleton className="flex flex-row w-[668px] h-[33px]" />
              </div>
              <div className="flex flex-col items-center mt-1.5 ml-3">
                <Skeleton className="w-[21px] h-[30px]" />
              </div>
            </div>

            <div className="flex flex-row items-center gap-x-[5px]">
              <Skeleton className="w-[20px] h-[17px]" />
              <Skeleton className="w-[400px] h-[32.5px]" />
            </div>

            <div className="flex flex-row gap-x-2.5 items-center text-base">
              <Skeleton className="w-[18px] h-[18px] rounded-50%" />
              <Skeleton className="w-[100px] h-[24px]" />
              <div className="">|</div>
              <Skeleton className="w-[50px] h-[24px]" />
            </div>

            <Skeleton className="relative flex items-center mt-[10px] max-h-[40px] rounded-[8px] px-[20px] py-[17px]">
              <Skeleton className="absolute top-[10%] left-[-10px] border-r-[20px] border-t-[8px] border-t-transparent border-b-[10px] border-b-transparent" />
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonTalkRoomCard;
