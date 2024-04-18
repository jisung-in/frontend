"use client";
import { TAB_INDEX } from "@/constants/tabIndex";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

type Tab = {
  path: string;
  text: string;
};

type TabsProps = {
  tabs: Tab[];
  bgColor?: string;
};

const Tabs = ({ tabs, bgColor = "white" }: TabsProps) => {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className={clsx("flex flex-col w-full", bgColor)}>
      <div className="flex items-center bg-white h-[70px] mb-[20px] px-[5%] shadow-[inset_0_-1px_0_0,0_1px_0_0] shadow-ivory-50">
        {tabs?.map((item, index) => (
          <button
            key={index}
            className={clsx(
              "min-w-[220px] flex h-full items-center justify-center text-gray-60 hover:text-brown-50",
              path.includes(item.path) &&
                "shadow-brown-50 shadow-[inset_0_-1px_0_0,0_1px_0_0] shadow-brown-50 text-brown-50 ",
            )}
            onClick={() => router.push(item.path)}
          >
            <div className="text-[19px]">{item.text}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
