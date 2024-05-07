"use client";
import { Button } from "@/app/components/Button/Button";
import RelatedTalkRoomCard from "@/app/components/Card/MainPageCard/RelatedTalkRoomCard";
import MainThemeTitle from "@/app/components/MainThemeTitle/MainThemeTitle";
import { Textarea } from "@/app/components/Textarea/Textarea";
import BestSeller from "@/assets/img/best-seller.svg";
import { useGetBookInformation } from "@/hook/reactQuery/book/useGetBookInformation";
import { useGetBookRelatedTalkRoom } from "@/hook/reactQuery/book/useGetBookRelatedTalkRoom";
import { useInput } from "@/hook/useInput";
import Link from "next/link";
import BookInformation from "../_component/BookInformation";

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
  const { value: name, handleChange: onNameChange } = useInput("");
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
        <div className="font-SpoqaHanSansNeo font-bold text-[30px] max-w-[1680px] mx-[120px]">
          <div className="pt-[43px] mb-[28px]">한줄평을 작성해보세요</div>
          <div className="relative">
            <Textarea
              variant="main"
              value={name}
              className="font-Pretendard font-regular max-w-[1680px] h-[179px]"
              onChange={onNameChange}
              placeholder="한줄평을 자유롭게 작성해보세요."
            />
            <div className="absolute bottom-[26px] right-[36px]">
              <Button className="font-Pretendard font-medium text-[21px]">
                <div className="px-[25px] my-[8px]">등록하기</div>
              </Button>
            </div>
          </div>

          <div className="flex flex-row mt-[63px] mb-[28px]">
            <div className="flex flex-row gap-x-[19px] flex-grow">
              <div>유저들의 평가</div>
              <div className="font-Poppins font-medium text-[#74747B]">
                3000+
              </div>
            </div>
            <Link href={"/evaluation"}>
              <div className="text-[20px] text-[#74747B] font-Pretendard font-refular flex items-center">
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
        <div className="flex flex-row mt-[57px] mb-[27px]">
          <div className="font-SpoqaHanSansNeo font-bold text-[30px] flex flex-row flex-grow">
            <div>연관된 토크방 보기</div>
          </div>
          <Link href={`#`}>
            <div className="text-[20px] text-[#74747B] font-Pretendard font-refular flex items-center">
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
