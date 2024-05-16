import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function RelatedTalkRoomLayout({ children }: Props) {
  return (
    <div className="flex justify-center items-center w-full h-full bg-white">
      <div className="flex flex-col w-[1295px] h-auto">{children}</div>
    </div>
  );
}
