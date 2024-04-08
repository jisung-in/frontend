import UserEvaluationImg from "@/assets/img/user-evaluation.svg";
import MainThemeTitle from "../components/MainThemeTitle/MainThemeTitle";

const page = () => {
  return (
    <div className="ml-[120px]">
      <MainThemeTitle title="유저들의 평가">
        <UserEvaluationImg />
      </MainThemeTitle>
    </div>
  );
};

export default page;
