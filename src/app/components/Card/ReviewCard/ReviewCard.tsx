import Like from "@/assets/img/like.svg";
import Profile from "@/assets/img/profile.png";
import Image from "next/image";
import { BookMain } from "../../Book/Book";
import { CardHeaderMain } from "../../CardHeader/CardHeader";
import { CardMain } from "../Card";

const ReviewCard = () => {
  return (
    <div className="bg-white px-6 py-4">
      <CardMain>
        <CardHeaderMain>
          <CardHeaderMain.Profile>
            <Image src={Profile} alt="프로필" width={24} height={24} priority />
          </CardHeaderMain.Profile>
          <CardHeaderMain.Name>
            <div className="text-[17px] ml-[6px]">이름</div>
          </CardHeaderMain.Name>
          <CardHeaderMain.LikeNumbers>
            <Like width={24} height={22} />
            <div className="w-[50px] h-[16px] font-Pretendard font-regular text-[13px] text-[#656565]">
              999+
            </div>
          </CardHeaderMain.LikeNumbers>
        </CardHeaderMain>

        <BookMain>
          <BookMain.BookCover>
            <div className="w-[95px] h-[135px] mr-[26px] bg-[#000]"></div>
          </BookMain.BookCover>
        </BookMain>
        <CardMain.OpinionTitle>
          <div className="text-[20px]">책 제목</div>
        </CardMain.OpinionTitle>
        <CardMain.BookTitle>
          <div className="flex gap-[20px]">
            <div>저자</div>
            <div>출판사</div>
          </div>
        </CardMain.BookTitle>
        <CardMain.Review>
          안녕하세요 이 책은 레전드로 재밌습니다.
        </CardMain.Review>
      </CardMain>
    </div>
  );
};

export default ReviewCard;
