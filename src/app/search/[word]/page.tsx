import BackButton from "@/app/summary/_component/BackButton";
import Preface from "./_component/Preface";
import RoomCards from "./_component/RoomCards";
import SearchTab from "./_component/SearchTab";
import TabProvider from "./_component/TabProvider";
import MainContent from "./_component/MainContent";

const SearchingWordPage = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <TabProvider>
        <div className="w-full h-full bg-white px-[5%] pt-[3%]">
          <div className="flex flex-col gap-[20px] pb-[20px]">
            <BackButton />
            <Preface />
          </div>
        </div>
        <SearchTab />
        <div className="w-full h-full px-[5%] py-[3%] bg-white">
          <MainContent />
        </div>
      </TabProvider>
      {/* 인기 */}

      <div className="flex flex-col w-full h-full px-[5%] py-[3%] gap-6">
        <span className="text-[30px] font-bold">실시간 인기 토크방</span>
        <RoomCards order="recommend" search="" />
      </div>
    </div>
  );
};

export default SearchingWordPage;
