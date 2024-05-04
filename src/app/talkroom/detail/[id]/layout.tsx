import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function TalkRoomLayout({ children }: Props) {
  return (
    <div className="flex justify-center items-center w-full h-full bg-[#FBF7F0]">
      <div className="flex flex-col w-[1402px] h-auto">{children}</div>
    </div>
  );
}
