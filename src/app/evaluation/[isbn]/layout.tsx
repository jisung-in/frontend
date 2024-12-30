import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function TalkRoomLayout({ children }: Props) {
  return (
    <div className="flex w-full h-full min-h-screen">
      <div className="flex justify-center items-center flex-col w-full h-auto bg-[#FBF7F0]">
        {children}
      </div>
    </div>
  );
}
