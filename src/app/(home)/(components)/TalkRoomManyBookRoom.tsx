import ManyTalkRoomBookCard from "@/app/components/Card/MainPageCard/ManyTalkRoomBookCard";
import { Layout } from "@/app/components/Layout/Layout";
import { ThemeMain } from "@/app/components/Theme/Theme";
import ManyTalkRoomBookImg from "@/assets/img/many-talk-room-book.svg";
import dynamic from "next/dynamic";
import Link from "next/link";

const HaveNotData = dynamic(
  () => import("@/app/components/HaveNotData/HaveNotData"),
);

interface TalkRoomBookProps {
  isbn: string;
  title: string;
  publisher: string;
  thumbnail: string;
  authors: string[];
  dateTime: string;
}

interface TalkRoomManyBookRoomProps {
  data: TalkRoomBookProps[];
}

const TalkRoomManyBookRoom: React.FC<TalkRoomManyBookRoomProps> = ({
  data,
}) => {
  return (
    <Layout
      className="            
      sm:my-[26px] 
      md:my-[34px]
      lg:my-[42px]
      xl:my-[48px]
      2xl:my-[56px]
      "
    >
      <ThemeMain>
        <ThemeMain.MainTheme>
          <p
            className="
            flex items-center
            sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 2xl:gap-x-3
            sm:mb-[17px]
            md:mb-[19px]
            lg:mb-[22px]
            xl:mb-[24px]
            2xl:mb-[26px]
            mx-[5%]"
          >
            <span className="sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              토크 많은 책
            </span>
            <span className="sm:size-4 size-5 2xl:size-6">
              <ManyTalkRoomBookImg />
            </span>
          </p>
        </ThemeMain.MainTheme>
      </ThemeMain>

      <div className="mx-[5%]">
        {data && data.length > 0 ? (
          <div
            className="
          grid gap-y-3
          sm:grid-cols-3
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
        "
          >
            {data.map((items: TalkRoomBookProps) => (
              <Link key={items.isbn} href={`/book/${items.isbn}`}>
                <ManyTalkRoomBookCard data={items} />
              </Link>
            ))}
          </div>
        ) : (
          <HaveNotData content={"토크 많은 책이"} />
        )}
      </div>
    </Layout>
  );
};

export default TalkRoomManyBookRoom;
