"use client";

import { Button } from "@/app/components/Button/Button";
import TalkRoomCard from "@/app/components/Card/TalkRoomCard/TalkRoomCard";
import { Input } from "@/app/components/Input/Input";
import Pagination from "@/app/components/Pagination/Pagination";
import { ThemeMain } from "@/app/components/Theme/Theme";
import MakeTalkRoom from "@/assets/img/make-talk-room.svg";
import RecentMakeTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import { useInput } from "@/hook/useInput";
import { usePathname } from "next/navigation";
import { useState } from "react";
import StatusButton from "../_component/StatusBurtton";

const page = () => {
  const pathName = usePathname();
  const [isStatus, setIsStatus] = useState<boolean>(false);
  const { value, handleChange, reset } = useInput("");

  const changeIsStatus = () => {
    setIsStatus(!isStatus);
  };

  return (
    <div>
      <ThemeMain.MainTheme>
        <div className="flex mt-[78px] mb-[23px]">
          <div className="flex items-center mb-[23px]">
            <div className="text-[30px] mr-[16px]">토크해요</div>
            <RecentMakeTalkRoom />
          </div>
        </div>
      </ThemeMain.MainTheme>

      <div className="flex items-center h-[40px] mb-[17px]">
        <div className="flex grow font-SpoqaHanSansNeo font-medium text-[#77777E] text-[20px]">
          "검색"의 결과
        </div>
        <div className="w-[404px] mr-[9px]">
          <Input
            className="font-Pretendard font-[400]"
            variant="empty"
            value={value}
            onChange={handleChange}
            reset={reset}
            placeholder="이곳에 검색해보세요."
          />
        </div>
      </div>

      <hr className="border-solid border-[3px] border-[#F5EFE5] mb-[19px]" />

      <div className="flex mb-[37px] grow">
        <div className="flex grow">
          <StatusButton isStatus={isStatus} onClick={changeIsStatus} />
        </div>
        <div className="flex h-[40px]">
          <div className="w-[167px]">
            <Button>
              <MakeTalkRoom />
              토크방 생성하기
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-x-5 gap-y-[30px]">
        {new Array(12).fill(1).map((index: number) => (
          <TalkRoomCard key={index} />
        ))}
      </div>
      <Pagination
        totalItems={120}
        pageCount={12}
        postPage={10}
        link={pathName + "?"}
      />
    </div>
  );
};

export default page;
