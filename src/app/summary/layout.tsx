import { ReactNode } from "react";
import Tabs from "./_component/Tabs";

type Props = { children: ReactNode };
export default function SummaryLayout({ children }: Props) {
  return (
    <div className="flex flex-col justify-center w-full h-full py-[105px]">
      <Tabs />

      <div className="flex flex-col items-center justify-center w-full">
        {children}
      </div>
    </div>
  );
}
