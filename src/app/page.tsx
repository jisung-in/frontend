import { BookMain } from "@/app/components/Book/Book";
import { CardMain } from "@/app/components/Card/Card";
import { CardHeaderMain } from "@/app/components/CardHeader/CardHeader";
import { ThemeMain } from "@/app/components/Theme/Theme";
import Like from "@/assets/img/like.svg";
import Profile from "@/assets/img/profile.png";
import Star from "@/assets/img/star.svg";
import Image from "next/image";
import { CardFooterMain } from "./components/CardFooter/CardFooter";

const page = () => {
  return (
    <>
      <div>swiper들어갈 곳</div>
      <div className="mt-[55px] ml-[120px]">
        <ThemeMain.MainTheme theme={"토크해요"} />
        <div className="w-[547px] h-[230px] bg-[#FFF] border border-solid rounded-[17px]">
          <div className="mt-[26px] ml-[26px] w-auto">
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
              <CardMain.AttendCondition>참가조건</CardMain.AttendCondition>
              <CardMain.Status>읽고 싶은</CardMain.Status>
              <CardMain.Status>읽는 중</CardMain.Status>
              <CardMain.Status>읽음</CardMain.Status>
              <CardMain.Status>잠시 멈춘</CardMain.Status>
              <CardMain.Status>중단</CardMain.Status>
            </CardMain>
          </div>
        </div>
      </div>

      <div className="mt-[55px] ml-[120px]">
        <BookMain>
          <BookMain.BookCover>
            <div className="w-[320px] h-[460px] bg-black rounded-[10px]" />
          </BookMain.BookCover>
          <BookMain.RankBox>1</BookMain.RankBox>
          <BookMain.BookTitle className="text-[#656565]">
            책 제목
          </BookMain.BookTitle>
        </BookMain>
      </div>

      <div className="mt-[55px] ml-[120px]">
        <ThemeMain.MainTheme theme={"토크해요"} />
        <div className="w-[830px] h-[380px] bg-[#FFF] border border-solid rounded-[17px]">
          <div className="mt-[26px] ml-[26px] w-auto">
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
                <CardHeaderMain.StarRating>
                  <div className="w-[51px] h-[24px] mx-[8px] my-[4px] flex items-center font-Pretendard font-Regular text-[18px] text-[#80685D]">
                    <Star />
                    <div className="ml-[3px]">4.5</div>
                  </div>
                </CardHeaderMain.StarRating>
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
              <CardMain.AttendCondition>
                참가조건
                <div className="flex flex-row ml-[15px]">
                  <CardMain.Status>읽고 싶은</CardMain.Status>
                  <CardMain.Status>읽는 중</CardMain.Status>
                  <CardMain.Status>읽음</CardMain.Status>
                  <CardMain.Status>잠시 멈춘</CardMain.Status>
                  <CardMain.Status>중단</CardMain.Status>
                </div>
              </CardMain.AttendCondition>
            </CardMain>
          </div>
        </div>
      </div>

      <div className="mt-[55px] ml-[120px]">
        <ThemeMain.MainTheme theme={"토크해요"} />
        <div className="w-[830px] h-[380px] bg-[#FFF] border border-solid rounded-[17px]">
          <div className="mt-[26px] ml-[26px] w-auto">
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
                  <div className="w-[140px] h-[200px] mr-[26px] bg-[#000]"></div>
                </BookMain.BookCover>
              </BookMain>
              <CardMain.OpinionTitle>
                <div className="text-[20px]">토크방 제목</div>
              </CardMain.OpinionTitle>
              <CardMain.BookTitle>책 제목</CardMain.BookTitle>
              <CardMain.AttendCondition>참가조건</CardMain.AttendCondition>
              <CardMain.Status>읽고 싶은</CardMain.Status>
              <CardMain.Status>읽는 중</CardMain.Status>
              <CardMain.Status>읽음</CardMain.Status>
              <CardMain.Status>잠시 멈춘</CardMain.Status>
              <CardMain.Status>중단</CardMain.Status>
            </CardMain>
            <div className="mt-[8px] mr-[26px]">
              <CardFooterMain.LikeNumbers>23</CardFooterMain.LikeNumbers>
              <CardFooterMain.Line />
              <div className="mt-[10px]">
                <CardFooterMain.LikeButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[55px] ml-[120px]">
        <ThemeMain.MainTheme theme={"토크해요"} />
        <div className="w-[830px] h-[380px] bg-[#FFF] border border-solid rounded-[17px]">
          <div className="mt-[26px] ml-[26px] w-auto">
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
                  <div className="w-[140px] h-[200px] mr-[26px] bg-[#000]"></div>
                </BookMain.BookCover>
              </BookMain>
              <CardMain.OpinionTitle>
                <div className="text-[20px]">토크방 제목</div>
              </CardMain.OpinionTitle>
              <CardMain.BookTitle>책 제목</CardMain.BookTitle>
              <CardMain.AttendCondition>참가조건</CardMain.AttendCondition>
              <CardMain.Status>읽고 싶은</CardMain.Status>
              <CardMain.Status>읽는 중</CardMain.Status>
              <CardMain.Status>읽음</CardMain.Status>
              <CardMain.Status>잠시 멈춘</CardMain.Status>
              <CardMain.Status>중단</CardMain.Status>
            </CardMain>
            <div className="flex mt-[8px] mr-[26px]">
              <div className="flex grow">
                <CardFooterMain.LikeNumbers>
                  <div className="flex">
                    <div className="mr-[11px]">23</div>{" "}
                    <CardFooterMain.LikeButton />
                  </div>
                </CardFooterMain.LikeNumbers>
              </div>
              <div className="flex">
                <CardFooterMain.DeleteButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
