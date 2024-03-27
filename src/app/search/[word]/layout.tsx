import { ReactNode } from "react";

type Props = { children: ReactNode };
export default function SummaryLayout({ children }: Props) {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <div className="flex flex-col w-full">{children}</div>
    </div>
  );
}
