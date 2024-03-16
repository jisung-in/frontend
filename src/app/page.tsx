import { CardMain } from "@/app/components/Card/Card";

const page = () => {
  return (
    <CardMain.CardWrapper
      width={"w-smCard"}
      height={"h-smOpCard"}
      borderColor={40}
    >
      안녕하세요?
      <CardMain.RankBox number={1}></CardMain.RankBox>
    </CardMain.CardWrapper>
  );
};

export default page;
