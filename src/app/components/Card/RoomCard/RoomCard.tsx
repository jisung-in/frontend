import Like from "@/assets/img/like.svg";
import { BookMain } from "../../Book/Book";
import { CardHeaderMain } from "../../CardHeader/CardHeader";
import { CardMain } from "../Card";

const RoomCard = () => {
  return (
    <div className="bg-white px-6 py-4">
      <CardMain>
        <CardHeaderMain>
          <CardHeaderMain.Profile></CardHeaderMain.Profile>
          <CardHeaderMain.Name>
            <div className="text-[17px] ml-[6px]">이름</div>
          </CardHeaderMain.Name>
          <CardHeaderMain.LikeNumbers>
            <Like width={24} height={22} />
            <div className="w-[50px] h-[16px] font-Pretendard font-normal text-[13px] text-[#656565]">
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
          <div className="text-[20px]">토크방 제목</div>
        </CardMain.OpinionTitle>
        <CardMain.BookTitle>책 제목</CardMain.BookTitle>
        <CardMain.AttendCondition />
        <CardMain.Status>읽고 싶은</CardMain.Status>
        <CardMain.Status>읽는 중</CardMain.Status>
        <CardMain.Status>읽음</CardMain.Status>
        <CardMain.Status>잠시 멈춘</CardMain.Status>
        <CardMain.Status>중단</CardMain.Status>
      </CardMain>
    </div>
  );
};

export default RoomCard;
