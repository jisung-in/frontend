"use client";
import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Arrow from "@/assets/img/arrow.svg";
import Dropdown from "../components/DropDown/DropDown";

const filterList: string[] = [
  "5 점",
  "4.5 점",
  "3.5 점",
  "3.0 점",
  "2.5 점",
  "2.0 점",
  "1.5 점",
  "1.0 점",
];

const SummaryPage = () => {
  const [filter, setFilter] = useState("별점 순");

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full justify-end pr-[160px]">
        <Dropdown
          items={filterList}
          selectedItem={filter}
          setSelectedItem={setFilter}
        />
      </div>

      {/* <Tabs.Content value="tab1">
          <div className="flex flex-col items-center justify-center px-[5%]">
            <div className="grid grid-cols-8 gap-[20px]">
              {new Array(50).fill(1).map((_, index) => (
                <MyBookCard key={index} />
              ))}
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value="tab2">
          <div className="flex flex-col items-center justify-center">
            <div className="grid w-[80%] grid-cols-2 gap-[20px]">
              {new Array(50).fill(1).map((_, index) => (
                <ReviewCard key={index} />
              ))}
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root> */}
    </div>
  );
};

export default SummaryPage;
