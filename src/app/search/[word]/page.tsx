import BackButton from "@/app/summary/_component/BackButton";
import Preface from "./_component/Preface";
import BookCards from "./_component/BookCards";
import RoomCards from "./_component/RoomCards";
import Tabs from "@/app/components/Tabs/Tabs";

const SearchingWordPage = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-full bg-white px-[5%] pt-[3%]">
        <div className="flex flex-col gap-[20px] pb-[20px]">
          <BackButton />
          <Preface />
        </div>
      </div>
      <Tabs
        tabs={[
          { path: "/search/book", text: "도서" },
          { path: "/search/talkroom", text: "토크방" },
        ]}
        bgColor="#FBF7F0"
      />
      <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] px-[5%]">
        <BookCards />
      </div>

      {/* 토크룸 */}

      <div className="w-full h-full px-[5%] py-[3%]">
        <Preface content="토론방" />
        <div className="grid gap-8 grid-cols-3">
          <RoomCards />
        </div>
      </div>
    </div>
  );
};

export default SearchingWordPage;
