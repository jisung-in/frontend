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
      <div className="mt-[55px] ml-[116px]">
        <div className="flex items-center mb-[23px]">
          <ThemeMain.MainTheme theme={"토크해요"} />
          <ThemeMain.ShowAll />
        </div>
        <div className="flex">
          <CardMain.CardWrapper className="w-[547px] h-[230px] bg-[#FFF]  border border-solid rounded-[17px]">
            <div className="mt-[26px] ml-[26px]">
              <div className="flex">
                <div className="flex flex-grow w-[60px] h-[24px]">
                  <Image
                    src={Profile}
                    className="rounded-[50%]"
                    alt="프로필"
                    width={24}
                    height={24}
                    priority
                  />
                  <CardHeaderMain.Name
                    className="text-[17px] ml-[6px]"
                    name="이름"
                  ></CardHeaderMain.Name>
                </div>
                <div className="flex flex-col w-[48px] h-[48px]">
                  <Like />
                  <CardHeaderMain.LikeNumbers
                    className="font-Pretendard font-Regular text-[13px] text-[#656565]"
                    likeNumber={"999+"}
                  />
                </div>
              </div>
              <div className="flex w-auto h-[135px]">
                <div className="w-[95px] h-[135px] mr-[26px] bg-[#000]"></div>
                <div className="flex flex-col  text-[20px] w-auto">
                  <CardMain.OpinionTitle string={"토크방 제목"} />
                  <BookMain.BookTitle
                    className="text-[#656565]"
                    title={"책 제목"}
                  />
                  <CardMain.AttendCondition />
                  <div className="flex flex-row">
                    <CardMain.Status status="읽고 싶은" />
                    <CardMain.Status status="읽는 중" />
                    <CardMain.Status status="읽음" />
                    <CardMain.Status status="잠시 멈춘" />
                    <CardMain.Status status="중단" />
                  </div>
                </div>
              </div>
            </div>
          </CardMain.CardWrapper>
        </div>
      </div>

      <div className="mt-[55px] ml-[116px]">
        <div className="flex items-center mb-[23px]">
          <ThemeMain.MainTheme theme={"최근 생성된 토크방"} />
          <ThemeMain.ShowAll />
        </div>
        <div className="flex">
          <CardMain.CardWrapper className="w-[547px] h-[230px] bg-[#FFF]  border border-solid rounded-[17px]">
            <div className="mt-[26px] ml-[26px]">
              <div className="flex">
                <div className="flex flex-grow w-[60px] h-[24px]">
                  <Image
                    src={Profile}
                    className="rounded-[50%]"
                    alt="프로필"
                    width={24}
                    height={24}
                    priority
                  />
                  <CardHeaderMain.Name
                    className="text-[17px]  ml-[6px]"
                    name="이름"
                  ></CardHeaderMain.Name>
                </div>
                <div className="flex flex-col w-[48px] h-[48px]">
                  <Like />
                  <CardHeaderMain.LikeNumbers
                    className="font-Pretendard font-Regular text-[13px] text-[#656565]"
                    likeNumber={"999+"}
                  />
                </div>
              </div>
              <div className="flex w-auto h-[135px]">
                <div className="w-[95px] h-[135px] mr-[26px] bg-[#000]"></div>
                <div className="flex flex-col  text-[20px] w-auto">
                  <CardMain.OpinionTitle string={"토크방 제목"} />
                  <BookMain.BookTitle
                    className="text-[#656565]"
                    title={"책 제목"}
                  />
                  <CardMain.AttendCondition />
                  <div className="flex flex-row">
                    <CardMain.Status status="읽고 싶은" />
                    <CardMain.Status status="읽는 중" />
                    <CardMain.Status status="읽음" />
                    <CardMain.Status status="잠시 멈춘" />
                    <CardMain.Status status="중단" />
                  </div>
                </div>
              </div>
            </div>
          </CardMain.CardWrapper>
        </div>
      </div>

      <div className="mt-[55px] ml-[116px]">
        <div className="flex items-center mb-[23px]">
          <ThemeMain.MainTheme theme={"베스트 셀러"} />
          <ThemeMain.ShowAll />
        </div>
        {/* swiper처리 */}

        <div className="flex"></div>
      </div>

      <div className="h-[675px]">
        <div className="mt-[55px] ml-[116px]">
          <div className="flex items-center mb-[23px]">
            <ThemeMain.MainTheme theme={"최근 의견달린 토크방"} />
            <ThemeMain.ShowAll />
          </div>
          <div className="flex">
            <CardMain.CardWrapper className="w-[830px] h-[460px] bg-[#FFF]  border border-solid rounded-[17px]">
              <div className="mt-[33px] ml-[26px]">
                <div className="flex">
                  <div className="flex flex-grow w-[60px] h-[48px]">
                    <Image
                      src={Profile}
                      className="rounded-[50%]"
                      alt="프로필"
                      width={48}
                      height={48}
                      priority
                    />
                    <CardHeaderMain.Name
                      className="text-[22px] ml-[6px] flex items-center"
                      name="이름"
                    ></CardHeaderMain.Name>
                  </div>
                  <div className="flex flex-col w-[48px] h-[48px]">
                    <Like className="w" />
                    <CardHeaderMain.LikeNumbers
                      className="font-Pretendard font-Regular text-[13px] text-[#656565]"
                      likeNumber={"999+"}
                    />
                  </div>
                </div>
                <div className="flex w-auto h-[135px]">
                  <div className="w-[95px] h-[135px] mr-[26px] bg-[#000]"></div>
                  <div className="flex flex-col  text-[20px] w-auto">
                    <CardMain.OpinionTitle string={"토크방 제목"} />
                    <BookMain.BookTitle
                      className="text-[#656565]"
                      title={"책 제목"}
                    />
                    <CardMain.AttendCondition />
                    <div className="flex flex-row">
                      <CardMain.Status status="읽고 싶은" />
                      <CardMain.Status status="읽는 중" />
                      <CardMain.Status status="읽음" />
                      <CardMain.Status status="잠시 멈춘" />
                      <CardMain.Status status="중단" />
                    </div>
                  </div>
                </div>
              </div>
            </CardMain.CardWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
