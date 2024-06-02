"use client";
import { useState } from "react";
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
    </div>
  );
};

export default SummaryPage;
