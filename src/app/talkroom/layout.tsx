import { ReactNode, Suspense } from "react";

type Props = { children: ReactNode };

export default function TalkRoomLayout({ children }: Props) {
  return (
    <Suspense>
      <div className="flex justify-center items-center w-full h-full bg-white">
        {children}
      </div>
    </Suspense>
  );
}
