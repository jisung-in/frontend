import { BookMain } from "@/app/components/Book/Book";
import { CardMain } from "@/app/components/Card/Card";
import { CardHeaderMain } from "@/app/components/CardHeader/CardHeader";
import { ThemeMain } from "@/app/components/Theme/Theme";
import Like from "@/assets/img/like.svg";
import Profile from "@/assets/img/profile.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div>swiper들어갈 곳</div>
      <div className="mt-[55px] ml-[120px]">
        <ThemeMain.MainTheme theme={"토크해요"} />
        <div className="w-[547px] h-[230px] bg-[#FFF] border border-solid rounded-[17px]">
          <div className="mt-[26px] ml-[26px] w-[520px] h-[24px]">
            <CardMain>
              <CardHeaderMain>
                <CardHeaderMain.Profile>
                  <Image
                    src={Profile}
                    alt="프로필"
                    width={24}
                    height={24}
                    priority
                  />
                </CardHeaderMain.Profile>
                <CardHeaderMain.Name>
                  <div className="text-[17px] ml-[6px]">이름</div>
                </CardHeaderMain.Name>
                <CardHeaderMain.LikeNumbers>
                  <Like width={24} height={22} />
                  <div className="w-[50px] h-[16px] font-Pretendard font-Regular text-[13px] text-[#656565]">
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
        </div>
      </div>
    </>
  );
};

export default page;
