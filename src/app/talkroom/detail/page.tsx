"use client";

import { ThemeMain } from "@/app/components/Theme/Theme";
import BackButton from "@/app/summary/_component/BackButton";
import PopularTalkRoom from "@/assets/img/popular-talk-room.svg";
import MySpeechBubble from "../_component/SpeechBubble/MySpeechBubble";
import SpeechBubble from "../_component/SpeechBubble/SpeechBubble";
import TalkRoomDetailMain from "../_component/talkroomDetailMain";

const Page = () => {
  return (
    <div className="mt-[50px]">
      <BackButton />
      <ThemeMain.MainTheme>
        <div className="flex mt-[18px] mb-[23px]">
          <div className="flex items-center mb-[23px]">
            <div className="text-[30px] mr-[16px]">토크해요</div>
            <PopularTalkRoom />
          </div>
        </div>
      </ThemeMain.MainTheme>

      <TalkRoomDetailMain />

      <hr className="border-[6px] border-[#F5EFE5] mt-[47px] mb-[42px]" />

      <div className="font-Pretendard font-semibold text-[21px] text-[#818181] mb-[28px]">
        의견 999+
      </div>

      {new Array(10).fill(1).map((content: string, index: number) => (
        <SpeechBubble
          key={index}
          content={"토크 의견 내용 들어갈 곳 입니다."}
        />
      ))}
      <MySpeechBubble content={"나의 의견 내용 들어갈 곳 입니다."} />

      <div className="font-SpoqaHanSansNeo font-bold text-[30px] mt-[37px] mb-[16px]">
        같이 토크해요
      </div>
    </div>
  );
};

export default Page;
