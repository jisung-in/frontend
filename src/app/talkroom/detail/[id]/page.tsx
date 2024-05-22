"use client";

import HaveNotData from "@/app/components/HaveNotData/HaveNotData";
import MainThemeTitle from "@/app/components/MainThemeTitle/MainThemeTitle";
import PopularTalkRoom from "@/assets/img/popular-talk-room.svg";
import { useGetComments } from "@/hook/reactQuery/talkRoom/useGetComments";
import SpeechBubble from "../../_component/SpeechBubble/SpeechBubble";
import TalkRoomDetailMain from "../../_component/talkroomDetailMain";

const Page = ({ params }: { params: { id: number } }) => {
  const { data: commentsData } = useGetComments(params.id);
  console.log(commentsData);
  return (
    <div>
      <MainThemeTitle title="토크해요">
        <PopularTalkRoom />
      </MainThemeTitle>

      <TalkRoomDetailMain talkRoomId={params.id} />

      <hr className="border-[6px] border-[#F5EFE5] mt-[47px] mb-[42px]" />

      {/* <div className="flex flex-col items-center mt-[37px] mb-[140px]">
        <div className="font-SpoqaHanSansNeo font-bold text-[#80685D] text-[30px] mb-[43px]">
          참가 조건에 부합하여 의견 작성이 가능합니다
        </div>
        <Button
          width="register"
          height="xl2"
          className="font-Pretendard font-semibold text-[28px]"
        >
          <Link className="w-full" href={"/talkroom/comment"}>
            등록하기
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-center mt-[37px] mb-[140px]">
        <div className="font-SpoqaHanSansNeo font-bold text-[#656565] text-[30px] mb-[43px]">
          참가 조건에 부합하지 않습니다
        </div>
        <Button
          width="register"
          height="xl2"
          variant={"notCondition"}
          className="font-Pretendard font-semibold text-[28px] text-[#828282] pointer-events-none"
        >
          등록하기
        </Button>
      </div> */}

      <div className="font-Pretendard font-semibold text-[21px] text-[#818181] mb-[28px]">
        의견{" "}
        {commentsData && commentsData.response.totalCount > 999
          ? "999+"
          : commentsData?.response.totalCount}
      </div>

      {/* <BestSpeechBubble content={"베스트 토크 의견 내용 들어갈 곳 입니다."} /> */}

      {commentsData && commentsData.response.queryResponse.length > 0 ? (
        commentsData.response.queryResponse.map((data) => {
          const isLike = commentsData.userLikeCommentIds.includes(
            data.commentId,
          );
          return (
            <SpeechBubble key={data.commentId} data={data} isLike={isLike} />
          );
        })
      ) : (
        <HaveNotData content={"아직 의견이"} />
      )}
      {/* <MySpeechBubble content={"나의 의견 내용 들어갈 곳 입니다."} /> */}
    </div>
  );
};

export default Page;
