import { Layout } from "@/app/components/Layout/Layout";
import UserEvaluationImg from "@/assets/img/user-evaluation.png";
import Image from "next/image";
import MainThemeTitle from "../../components/MainThemeTitle/MainThemeTitle";
import BookDetail from "./_component/BookDetail";
import DropDownStandard from "./_component/DropDownStandard";
import EvaluatiionList from "./_component/EvaluatiionList";

const page = async ({ params }: { params: { isbn: string } }) => {
  const isbn = params.isbn;

  let bookDetail;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/v1/books/${isbn}`,
      {
        cache: "force-cache",
      },
    );

    if (!res.ok) {
      throw new Error("책 정보를 가져오는 데 문제가 발생했습니다.");
    }

    bookDetail = await res.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <Layout className="sm:bg-[white]">
        <div className="px-[5%]">
          <MainThemeTitle
            title="유저들의 평가"
            className="sm:mt-[3px] md:mt-[2px] mt-[1px]"
          >
            <Image src={UserEvaluationImg} alt="평가 아이콘" />
          </MainThemeTitle>
        </div>
      </Layout>

      <hr className="w-full 2xl:h-[6px] xl:h-[5px] lg:h-1 md:h-[3px] sm:h-[2px] bg-[#F5EFE5]" />

      {/* Tablet ~ PC 환경에서 나오는 DropDown */}
      <div className="2xl:py-6 xl:py-5 lg:py-4 md:py-3 w-full flex items-center justify-end bg-[white] pr-[5%] sm:hidden block">
        <DropDownStandard isbn={isbn} />
      </div>

      <Layout className="flex flex-col items-center">
        <div className="font-Pretendard font-medium my-10 px-[5%]">
          <BookDetail data={bookDetail.data} />
        </div>

        {/* Moblie 환경에서 나오는 DropDown */}
        <p className="w-full pr-[5%] sm:block hidden mb-10">
          <span className="flex justify-end">
            <DropDownStandard isbn={isbn} />
          </span>
        </p>

        <div className="w-full max-w-[910px]">
          <EvaluatiionList isbn={isbn} />
        </div>
      </Layout>
    </>
  );
};

export default page;
