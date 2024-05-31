"use client";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";
import { TabContext } from "./TabProvider";

type Tab = {
  text: string;
};

type TabsProps = {
  tabs: Tab[];
  bgColor?: string;
};

const tabs = [
  { text: "도서", value: "book" },
  {
    text: "토크룸",
    value: "talkRoom",
  },
];

const SearchTab = () => {
  const { tab, setTab } = useContext(TabContext);

  const onClicked = (value: string) => {
    setTab(value);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center h-[70px] sm:h-[45px] px-[5%] shadow-[inset_0_-1px_0_0,0_1px_0_0] shadow-ivory-50 ">
        {tabs?.map((item, index) => (
          <button
            key={index}
            className={clsx(
              "min-w-[220px] sm:min-w-[85px] flex h-full items-center justify-center text-gray-60 hover:text-brown-50",
              item.value === tab &&
                "shadow-brown-50 shadow-[inset_0_-2px_0_0,0_1px_0_0] shadow-brown-50",
            )}
            onClick={() => onClicked(item.value)}
          >
            <div
              className={clsx(
                "flex text-[19px] sm:text-[13px]",
                item.value === tab && "text-brown-50",
              )}
            >
              {item.text}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchTab;
