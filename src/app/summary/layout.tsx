import { ReactNode } from "react";
import Tabs from "./_component/Tabs";
import { TAB_INDEX } from "@/constants/tabIndex";
import Preface from "./_component/Preface";
import BackButton from "./_component/BackButton";

type Props = { children: ReactNode };
export default function SummaryLayout({ children }: Props) {
  return (
    <div className="flex flex-col justify-center w-full h-full py-[3%]">
      <div className="flex flex-col px-[5%] gap-[20px] pb-[20px]">
        <BackButton />
        <Preface />
      </div>

      <Tabs />

      <div className="flex flex-col items-center justify-center w-full">
        {children}
      </div>
    </div>
  );
}
