"use client";
import MyBookCard from "@/app/components/Card/MyInfoCard/MyBookCard";
import Dropdown from "@/app/components/DropDown/DropDown";
import Pagination from "@/app/components/Pagination/Pagination";
import { useGetMyStar } from "@/hook/reactQuery/my/useGetMyStars";
import { useGetPageParams } from "@/hook/useGetPageParams";
import { useRouter } from "next/navigation";
import { useState } from "react";

const filterList: { [key: string]: number | "" } = {
  "별점 순": "",
  "5 점": 5,
  "4.5 점": 4.5,
  "4.0 점": 4.0,
  "3.5 점": 3.5,
  "3.0 점": 3.0,
  "2.5 점": 2.5,
  "2.0 점": 2.0,
  "1.5 점": 1.5,
  "1.0 점": 1.0,
};

const StarPage = () => {
  const [starFilter, setStartFilter] = useState("별점 순");
  const { currentUrl, page } = useGetPageParams();
  const { data: starData } = useGetMyStar({
    order: filterList[starFilter],
    page: page,
  });
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex w-full justify-end pr-[10%] pb-[10px]">
        <Dropdown
          items={Object.keys(filterList)}
          selectedItem={starFilter}
          setSelectedItem={setStartFilter}
        />
      </div>
      <div className="grid grid-cols-6 sm:grid-cols-2 md:grid-cols-4 gap-[20px] w-[90%]">
        {(starData as any)?.data?.queryResponse.map((book: any) => (
          <MyBookCard
            key={book.isbn}
            onClick={() => router.push(`/book/${book.isbn}`)}
            postId={book.postId}
            title={book.title}
            image={book.image}
            starRate={book.rating}
          />
        ))}
      </div>
      {starData?.data.totalCount && (
        <Pagination
          totalItems={starData?.data.totalCount ?? 0}
          postPage={12}
          link={currentUrl + `?order=${starFilter}`}
        />
      )}
    </div>
  );
};

export default StarPage;
