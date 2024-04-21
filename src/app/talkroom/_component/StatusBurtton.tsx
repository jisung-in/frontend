type StatusButtonProps = {
  status: boolean;
  onClick?: () => void;
};
import Arrow from "@/assets/img/arrow.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

const StatusButton = ({ status, onClick }: StatusButtonProps) => {
  const [isDate, setIsDate] = useState<string>("날짜별");
  const dateType: string[] = ["~한달 전", "7일전", "하루 전"];
  const changeIsDate = (date: string) => {
    setIsDate(date);
  };
  return status ? (
    <>
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
      <div className="flex items-center ml-[26px]">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className="IconButton flex align-center"
              aria-label="Customise options"
            >
              <div className="flex items-center font-Pretendard font-medium text-[#74747B] text-[19px]">
                <div className="mr-2">
                  <Arrow />
                </div>
                {isDate}
              </div>
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="bg-white w-[358px] h-[234px] border border-[#BBB] rounded-[9px] absolute left-[-35px]"
              sideOffset={5}
            >
              <div className="flex text-[21px] font-bold relative border-b-[1px] border-[#D5D5D5] justify-center items-center h-[52px]">
                정렬 기준
                <div className="absolute right-[5%] cursor-pointer">X</div>
              </div>
              <div className="font-Pretendard font-medium px-[5%] text-[#767676] text-[19px]">
                {dateType.map((date, index) => (
                  <DropdownMenu.Item
                    key={index}
                    onClick={() => changeIsDate(date)}
                    className={`w-full h-[60px] flex items-center px-[5%] hover:font-semibold hover:text-black cursor-pointer ${
                      date === "하루 전" ? "" : "border-b-[1px]"
                    }`}
                  >
                    {date}
                  </DropdownMenu.Item>
                ))}
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </>
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
