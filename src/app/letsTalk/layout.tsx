import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function LetsTalkLayout({ children }: Props) {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col w-[910px] h-auto">{children}</div>
    </div>
  );
}
