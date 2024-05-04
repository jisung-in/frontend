import { ReactNode, Suspense } from "react";

type Props = { children: ReactNode };

export default function TalkRoomResultLayout({ children }: Props) {
  return (
    <Suspense>
      <div className="flex justify-center items-center bg-[#fff] w-full h-full">
        <div className="flex flex-col w-[1295px] h-auto">{children}</div>
      </div>
    </Suspense>
  );
}
