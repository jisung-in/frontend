import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function TalkRoomLayout({ children }: Props) {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col w-[1680px] h-auto">{children}</div>
    </div>
  );
}
