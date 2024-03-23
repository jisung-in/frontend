import { BookMain } from "@/app/components/Book/Book";
import { CardMain } from "@/app/components/Card/Card";
import { CardHeaderMain } from "@/app/components/CardHeader/CardHeader";
import Like from "@/assets/img/like.svg";
import Profile from "@/assets/img/profile.png";
import Image from "next/image";

const TalkPage = () => {
  return (
    <div className="flex flex-col">
      <CardMain>
        <BookMain>
          <BookMain.ImageBox>
            <div className="w-[100px] h-[200px] bg-gray-50"></div>
          </BookMain.ImageBox>
          <BookMain.BookTitle>책 제목</BookMain.BookTitle>
        </BookMain>
      </CardMain>
    </div>
  );
};

export default TalkPage;
