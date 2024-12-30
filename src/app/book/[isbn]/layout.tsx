import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function BookDetailLayout({ children }: Props) {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col items-center w-full h-auto bg-[#FBF7F0]">
        {children}
      </div>
    </div>
  );
}
