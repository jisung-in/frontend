import { ReactNode } from "react";

type Props = { children: ReactNode };
export default function NewTalkRoomLayout({ children }: Props) {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col my-[60px] bg-white w-[910px] min-h-[600px] border-2 rounded-lg der-gray-50bor md:w-full md:my-0">
        {children}
      </div>
    </div>
  );
}
