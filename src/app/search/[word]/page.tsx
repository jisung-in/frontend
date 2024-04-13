"use client";

import BackButton from "@/app/summary/_component/BackButton";
import Preface from "./_component/Preface";
import MyBookCard from "@/app/components/Card/MyInfoCard/MyBookCard";
import RoomCard from "@/app/components/Card/RoomCard/RoomCard";
import { useMyStarRate } from "@/hook/reactQuery/my/useMyStarRate";

const SearchingWordPage = () => {
  const { data: bookData } = useMyStarRate();

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-full bg-white px-[5%] py-[3%]">
        <div className="flex flex-col gap-[20px] pb-[20px]">
          <BackButton />
          <Preface />
        </div>
        <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {bookData.map((data: any) => (
            <MyBookCard
              key={data.postId}
              title={data.title}
              image={data.image}
              starRate={data.starRate}
            ></MyBookCard>
          ))}
        </div>
      </div>

      {/* 토크룸 */}

      <div className="w-full h-full px-[5%] py-[3%]">
        <Preface content="토론방" />
        <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(700px,1fr))]">
          {new Array(20).fill(1).map((_, index) => (
            <RoomCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchingWordPage;
