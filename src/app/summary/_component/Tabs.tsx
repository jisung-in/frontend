"use client";
import { TAB_INDEX } from "@/constants/tabIndex";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

const Tabs = () => {
  const router = useRouter();
  const path = usePathname();
  console.log(path.includes("/star"));
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center bg-white h-[70px] mb-[20px] px-[5%] shadow-[inset_0_-1px_0_0,0_1px_0_0] shadow-ivory-50">
        {TAB_INDEX.map((item, index) => (
          <button
            key={index}
            className={clsx(
              "w-[220px] flex h-full items-center justify-center text-gray-60 hover:text-brown-50",
              path.includes(item.path) &&
                "text-brown-40 shadow-brown-50 shadow-[inset_0_-1px_0_0,0_1px_0_0] shadow-current :focus:relative",
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
