"use client";

type StatusButtonProps = {
  isStatus?: boolean;
  onClick?: () => void;
};

const StatusButton = ({ isStatus, onClick }: StatusButtonProps) => {
  return isStatus ? (
    <div className="flex">
      <div
        className="flex items-center justify-center w-[71px] h-[40px] font-Pretendard font-medium text-[17px] text-[#656565] border-[#D9D9D9] border border-solid rounded-[5px] hover:bg-[#FBFBFB] cursor-pointer mr-[11px]"
        onClick={onClick}
      >
        최신순
      </div>
      <div
        className="flex items-center justify-center w-[71px] h-[40px] font-Pretendard font-medium text-[17px] text-[#FFF] border-[#80685D] border border-solid rounded-[5px] bg-[#80685D] pointer-events-none"
        onClick={onClick}
      >
        인기순
      </div>
    </div>
  ) : (
    <div className="flex">
      <div
        className="flex items-center justify-center w-[71px] h-[40px] font-Pretendard font-medium text-[17px] text-[#FFF] border-[#80685D] border border-solid rounded-[5px] bg-[#80685D] mr-[11px] pointer-events-none"
        onClick={onClick}
      >
        최신순
      </div>
      <div
        className="flex items-center justify-center w-[71px] h-[40px] font-Pretendard font-medium text-[17px] text-[#656565] border-[#D9D9D9] border border-solid rounded-[5px] hover:bg-[#FBFBFB] cursor-pointer"
        onClick={onClick}
      >
        인기순
      </div>
    </div>
  );
};

export default StatusButton;
