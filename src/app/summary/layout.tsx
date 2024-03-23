import { ReactNode } from "react";

type Props = { children: ReactNode };
export default function SummaryLayout({ children }: Props) {
  return (
    <div className="flex justify-center w-full h-full py-[105px]">
      {children}
    </div>
  );
}
