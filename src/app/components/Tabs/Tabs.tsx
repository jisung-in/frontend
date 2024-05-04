"use client";
import { TAB_INDEX } from "@/constants/tabIndex";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
    <div className="flex flex-col w-full">
      <div
        className="flex items-center h-[70px] mb-[20px] px-[5%] shadow-[inset_0_-1px_0_0,0_1px_0_0] shadow-ivory-50"
        style={{ backgroundColor: bgColor }}
      >
        {tabs?.map((item, index) => (
          <button
            key={index}
            className={clsx(
              "min-w-[220px] md:min-w-[85px] flex h-full items-center justify-center text-gray-60 hover:text-brown-50",
              path.includes(item.path) &&
                "shadow-brown-50 shadow-[inset_0_-1px_0_0,0_1px_0_0] shadow-brown-50",
            )}
            onClick={() => router.push(item.path)}
          >
            <div
              className={clsx(
                "flex text-[19px] md:text-[13px]",
                path.includes(item.path) && "text-brown-50",
              )}
            >
              <span className="flex md:hidden pr-2">나의</span>
              {item.text}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
