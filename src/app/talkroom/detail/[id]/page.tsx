import MainThemeTitle from "@/app/components/MainThemeTitle/MainThemeTitle";
import PopularTalkRoom from "@/assets/img/popular-talk-room.png";
import Image from "next/image";
import ParticipationCondition from "../../_component/ParticipationCondition";
import TalkRoomComments from "../../_component/TalkRoomComments";
import TalkRoomDetail from "../../_component/TalkRoomDetail";

interface BookProps {
  id: number;
  bookIsbn: string;
  status: string;
}

const Page = ({ params }: { params: { id: number } }) => {
  return (
    <>
      <div className="max-w-[1180px] w-full">
        <div className="px-[5%]">
          <MainThemeTitle title="토크해요" url="/talkroom" query="recent">
            <Image src={PopularTalkRoom} alt="토크해요" />
          </MainThemeTitle>

          <TalkRoomDetail id={params.id} />
        </div>
      </div>

      <hr className="border-[6px] border-[#F5EFE5] w-full my-12 sm:hidden block" />

      <div className="max-w-[1180px] w-full">
        <div className="px-[5%]">
          <div className="flex flex-col items-center mb-9 sm:mt-9">
            <ParticipationCondition id={params.id} />
          </div>

          <TalkRoomComments id={params.id} />
        </div>
      </div>
    </>
  );
};

export default Page;
