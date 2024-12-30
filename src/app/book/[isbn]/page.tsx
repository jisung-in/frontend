import { Layout } from "@/app/components/Layout/Layout";
import MainThemeTitle from "@/app/components/MainThemeTitle/MainThemeTitle";
import BestSeller from "@/assets/img/best-seller.svg";
import { getDehydratedQueries } from "@/lib/react-query.utils";
import { BookServiceQueryOptions } from "@/services/book/BookQueries";
import { EvaluationQueryOptions } from "@/services/evaluation/EvaluationQueries";
import { TalkRoomQueryOptions } from "@/services/talk-room/TalkRoomQueries";
import { HydrationBoundary } from "@tanstack/react-query";
import BookInformation from "../_component/BookInformation";
import RegisterUserEvaluation from "../_component/RegisterUserEvaluation";
import RelatedTalkRoom from "../_component/RelatedTalkRoom";
import UserEvaluation from "../_component/UserEvaluation";

const page = async ({ params }: { params: { isbn: string } }) => {
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
    BookServiceQueryOptions.getBookInformation({
      isbn: params.isbn,
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

          <BookInformation isbn={params.isbn} />
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
