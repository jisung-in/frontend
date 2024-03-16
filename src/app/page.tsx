import { CardMain } from "@/app/components/Card/Card";

const page = () => {
  return (
    <CardMain.CardWrapper className="w-[193px] h-[231px] border-gray-40">
      안녕하세요?
      <CardMain.RankBox number={1}></CardMain.RankBox>
    </CardMain.CardWrapper>
  );
};

export default page;
