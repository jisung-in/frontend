import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function TalkRoomDetailLayout({ children }: Props) {
  return (
    <div className="min-h-screen w-full h-full bg-[#FBF7F0]">
      <div className="flex justify-center items-center flex-col w-full h-auto">
        {children}
      </div>
    </div>
  );
}
