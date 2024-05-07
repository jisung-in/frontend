"use client";

import Tabs from "@/app/components/Tabs/Tabs";
import { useSearchParams } from "next/navigation";

const SearchTab = () => {
  const params = useSearchParams();
  const name = params.get("name");

  return (
    <Tabs
      tabs={[
        { path: `/search/book?name=${name}`, text: "도서" },
        { path: `/search/talkroom?name=${name}`, text: "토크방" },
      ]}
      bgColor="#FBF7F0"
    />
  );
};

export default SearchTab;
