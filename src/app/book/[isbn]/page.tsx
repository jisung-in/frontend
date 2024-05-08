"use client";
import RelatedTalkRoomCard from "@/app/components/Card/MainPageCard/RelatedTalkRoomCard";
import MainThemeTitle from "@/app/components/MainThemeTitle/MainThemeTitle";
import BestSeller from "@/assets/img/best-seller.svg";
import { useGetBookInformation } from "@/hook/reactQuery/book/useGetBookInformation";
import { useGetBookRelatedTalkRoom } from "@/hook/reactQuery/book/useGetBookRelatedTalkRoom";
import Link from "next/link";
import BookInformation from "../_component/BookInformation";
import RegisterEvaluation from "../_component/registerEvaluation";

type TalkRoom = {
  id: number;
  profileImage: string;
  username: string;
  title: string;
  content: string;
  bookName: string;
  bookAuthor: string;
  bookThumbnail: string;
  likeCount: number;
};

const page = ({ params }: { params: { isbn: string } }) => {
  const { data: bookDetailData } = useGetBookInformation({
    isbn: params?.isbn,
  });
  const { data: relateData } = useGetBookRelatedTalkRoom({
    isbn: params?.isbn,
    page: 1,
    size: 6,
  });
  return (
    <div>
      <div className="mx-[120px]">
        <MainThemeTitle title="책 상세보기">
          <BestSeller />
        </MainThemeTitle>
        {bookDetailData ? (
          <BookInformation data={bookDetailData} isbn={params.isbn} />
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <div className="bg-white">
        <div className="max-w-[1680px] mx-[120px]">
          <RegisterEvaluation />

          <div className="flex flex-row mt-[63px] mb-[28px] items-center">
            <div className="flex flex-row gap-x-[19px] flex-grow text-[30px] font-SpoqaHanSansNeo items-center">
              <div className="font-bold">유저들의 평가</div>
              <div className="font-medium text-[#74747B]">3000+</div>
            </div>
            <Link href={"/evaluation"}>
              <div className="text-[20px] text-[#74747B] font-Pretendard font-regular">
                더보기 {">"}
              </div>
            </Link>
          </div>

          <div className="w-full flex flex-row flex-wrap gap-x-[20px] gap-y-[22px]">
            {/* {bookEvaluationUser instanceof Array &&
              bookEvaluationUser?.map((data: any) => (
                <MiniEvaluationCard key={data.id} data={data} />
              ))} */}
          </div>
        </div>
      </div>

      <div className="mx-[120px] max-w-[1680px]">
        <div className="flex flex-row mt-[57px] mb-[27px] items-center">
          <div className="font-SpoqaHanSansNeo font-bold text-[30px] flex flex-row flex-grow">
            연관된 토크방 보기
          </div>
          <Link href={`#`}>
            <div className="text-[20px] text-[#74747B] font-Pretendard font-regular flex items-center">
              더보기 {">"}
            </div>
          </Link>
        </div>
        <div className="flex fex-row flex-wrap gap-x-[19px] gap-y-[30px] mb-[121px]">
          {relateData?.response.queryResponse instanceof Array ? (
            relateData?.response.queryResponse.map((data: TalkRoom) => (
              <RelatedTalkRoomCard key={data.id} data={data} />
            ))
          ) : (
            <>loading...</>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
