import { ReactNode } from "react";
import Tabs from "../components/Tabs/Tabs";
import { TAB_INDEX } from "@/constants/tabIndex";
import BackButton from "./_component/BackButton";
import BookIcon from "@/assets/img/summary-book.svg";

type Props = { children: ReactNode };
export default function SummaryLayout({ children }: Props) {
  return (
    <div className="flex flex-col justify-center w-full h-full py-[3%]">
      <div className="flex flex-col sm:flex-row px-[5%] gap-[20px] pb-[20px]">
        <BackButton />
        <div className="flex gap-4 items-center">
          <span className="text-[27px] font-bold">내 정보 요약</span>
          <BookIcon />
        </div>
      </div>

      <Tabs tabs={TAB_INDEX} />

      <div className="flex flex-col items-center justify-center w-full">
        {children}
      </div>
    </div>
  );
}
