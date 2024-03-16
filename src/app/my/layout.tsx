import { ReactNode } from "react";

type Props = { children: ReactNode };
export default function AfterLoginLayout({ children }: Props) {
  return (
    <div className="flex flex-col my-[60px] bg-white w-[910px] min-h-[600px] border-2 rounded-lg der-gray-50bor">
      {children}
    </div>
  );
}
