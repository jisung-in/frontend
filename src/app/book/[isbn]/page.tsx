import { Layout } from "@/app/components/Layout/Layout";
import MainThemeTitle from "@/app/components/MainThemeTitle/MainThemeTitle";
import BestSeller from "@/assets/img/best-seller.svg";
import { getDehydratedQueries } from "@/lib/react-query.utils";
import { EvaluationQueryOptions } from "@/services/evaluation/EvaluationQueries";
import { TalkRoomQueryOptions } from "@/services/talk-room/TalkRoomQueries";
import { HydrationBoundary } from "@tanstack/react-query";
import BookInformation from "../_component/BookInformation";
import RegisterUserEvaluation from "../_component/RegisterUserEvaluation";
import RelatedTalkRoom from "../_component/RelatedTalkRoom";
import UserEvaluation from "../_component/UserEvaluation";

const page = async ({ params }: { params: { isbn: string } }) => {
  let bookDetail;

  // ISR
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/v1/books/${params.isbn}`,
      {
        next: {
          revalidate: 86400 * 24, // 4주 마다 책 정보 갱신
        },
      },
    );

    if (!res.ok) {
      throw new Error("책 정보를 가져오는 데 문제가 발생했습니다.");
    }
    bookDetail = await res.json();
  } catch (error) {
    console.error(error);
  }

  const queries = [
    EvaluationQueryOptions.getEvaluationCount({
      isbn: params.isbn,
    }),
    EvaluationQueryOptions.getEvaluation({
      isbn: params.isbn,
      size: 8,
      order: "recent",
    }),
    TalkRoomQueryOptions.getRelatedTalkRooms({
      isbn: params.isbn,
      page: 1,
      size: 8,
    }),
  ];

  const dehydratedState = await getDehydratedQueries(queries);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Layout>
        <div className="px-[5%]">
          <MainThemeTitle title="책 상세보기" url={`/book/${params.isbn}`}>
            <BestSeller />
          </MainThemeTitle>

          <BookInformation isbn={params.isbn} data={bookDetail} />
        </div>
      </Layout>

      <div className="w-full bg-white flex flex-col items-center">
        <Layout className="max-w-[2000px] py-10 px-[5%]">
          <RegisterUserEvaluation isbn={params.isbn} />

          <UserEvaluation params={params} />
        </Layout>
      </div>

      <Layout className="max-w-[2000px] py-10 px-[5%]">
        <RelatedTalkRoom params={params} />
      </Layout>
    </HydrationBoundary>
  );
};

export default page;
