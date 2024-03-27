import BackButton from "@/app/summary/_component/BackButton";
import Preface from "./_component/Preface";
import MyBookCard from "@/app/components/Card/MyInfoCard/MyBookCard";
import RoomCard from "@/app/components/Card/RoomCard/RoomCard";
import Image from "next/image";
import Profile from "@/assets/img/profile.png";

const SearchingWordPage = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-full bg-white px-[5%] py-[3%]">
        <div className="flex flex-col gap-[20px] pb-[20px]">
          <BackButton />
          <Preface />
        </div>
        <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {new Array(20).fill(1).map((_, index) => (
            <MyBookCard key={index}>
              <div className="relative w-full pb-[135%]">
                <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gray-40"></div>
                </div>
              </div>
            </MyBookCard>
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
