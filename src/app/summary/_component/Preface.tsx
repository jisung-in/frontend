"use client";
import { TAB_INDEX } from "@/constants/tabIndex";
import { usePathname } from "next/navigation";

const Preface = () => {
  const path = usePathname();

  return (
    <div className="flex flex-col w-full text-[30px] sm:text-[18px] font-bold">
      {TAB_INDEX.map(
        (item, index) => path.includes(item.path) && <div>{item.text}</div>,
      )}
    </div>
  );
};

export default Preface;
