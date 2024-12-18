import { Layout } from "@/app/components/Layout/Layout";
import MainThemeTitle from "@/app/components/MainThemeTitle/MainThemeTitle";
import BestSeller from "@/assets/img/best-seller.svg";
import BookInformation from "../_component/BookInformation";
import RelatedTalkRoom from "../_component/RelatedTalkRoom";
import UserEvaluation from "../_component/UserEvaluation";
import RegisterEvaluation from "../_component/registerEvaluation";

const page = ({ params }: { params: { isbn: string } }) => {
  return (
    <>
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
          <RegisterEvaluation isbn={params.isbn} />

          <UserEvaluation params={params} />
        </Layout>
      </div>

      <Layout className="max-w-[2000px] py-10 px-[5%]">
        <RelatedTalkRoom params={params} />
      </Layout>
    </>
  );
};

export default page;
