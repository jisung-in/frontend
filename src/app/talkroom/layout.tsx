import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function TalkRoomLayout({ children }: Props) {
  return (
    <div className="flex justify-center items-center w-full h-full bg-[#FFF]">
      {children}
    </div>
  );
}
