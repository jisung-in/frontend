import MainThemeTitle from "@/app/components/MainThemeTitle/MainThemeTitle";
import BestSeller from "@/assets/img/best-seller.svg";
import BookInformation from "../_component/BookInformation";

const page = () => {
  return (
    <>
      <div className="ml-[120px]">
        <MainThemeTitle title="책 상세보기">
          <BestSeller />
        </MainThemeTitle>
        <BookInformation />
      </div>

      <div className="bg-white"></div>
      <div className="ml-[120px]"></div>
    </>
  );
};

export default page;
