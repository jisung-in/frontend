"use client";

import MakeTalkRoom from "@/assets/img/make-talk-room.svg";
import RecentMakeTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import { useGetTalkRoomPopular } from "@/hook/reactQuery/main/useGetTalkRoomPopular";
import { useInput } from "@/hook/useInput";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../../../components/Button/Button";
import TalkRoomCard from "../../../components/Card/MainPageCard/TalkRoomCard";
import { Input } from "../../../components/Input/Input";
import Pagination from "../../../components/Pagination/Pagination";
import { ThemeMain } from "../../../components/Theme/Theme";
import StatusButton from "../../_component/StatusBurtton";
<hr className="border-solid border-[3px] border-[#F5EFE5] mb-[19px]" />;

const page = ({ params }: { params: { status: string } }) => {
  const pathName = usePathname();

  const { data: talkRoomPopular } = useGetTalkRoomPopular({
    page: 1,
    size: 10,
    order: params.status,
    search: "",
    sortbydate: "",
  });
  const [status, setStatus] = useState<boolean>(false);
  const { value, handleChange, reset } = useInput("");

  const changeIsStatus = () => {
    setStatus(!status);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[1255px]">
        <ThemeMain.MainTheme>
          <div className="flex mt-[78px] mb-[23px]">
            <div className="flex items-center mb-[23px]">
              <div className="text-[30px] mr-[16px]">토크해요</div>
              <RecentMakeTalkRoom />
            </div>
          </div>
        </ThemeMain.MainTheme>

        <div className="font-SpoqaHanSansNeo font-medium text-[20px] text-[#77777E]">
          "검색" 의 결과
        </div>

        <hr className="border-solid border-[3px] border-[#F5EFE5] mt-3 mb-[19px]" />

        <div className="flex mb-[37px] grow">
          <div className="flex grow">
            <StatusButton status={status} onClick={() => changeIsStatus()} />
          </div>
          <div className="flex h-[40px]">
            <div className="w-[567px] mr-[11px]">
              <Input
                className="font-Pretendard font-[400]"
                variant="empty"
                value={value}
                onChange={handleChange}
                reset={reset}
                placeholder="이곳에 검색해보세요."
              />
            </div>
            <div className="w-[167px]">
              <Button>
                <MakeTalkRoom />
                토크방 생성하기
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-x-[40px] gap-y-[30px]">
        {talkRoomPopular?.queryResponse instanceof Array &&
          talkRoomPopular?.queryResponse.map((data: any) => (
            <TalkRoomCard key={data.id} data={data} isBest={false} />
          ))}
      </div>
      <Pagination
        totalItems={talkRoomPopular?.totalCount}
        pageCount={Math.ceil(
          (talkRoomPopular?.totalCount ?? 0) / (talkRoomPopular?.size ?? 1),
        )}
        postPage={talkRoomPopular?.size}
        link={params.status + "?"}
      />
    </div>
  );
};

export default page;