import { BookMain } from "@/app/components/Book/Book";
import { CardMain } from "@/app/components/Card/Card";
import { CardHeaderMain } from "@/app/components/CardHeader/CardHeader";
import Like from "@/assets/img/like.svg";
import Profile from "@/assets/img/profile.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div>swiper들어갈 곳</div>
      <div className="mt-[55px] ml-[120px]">
        <div className="text-[28px] font-SpoqaHanSansNeo font-Medium mb-[23px]">
          토크해요
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
                <div className="w-[95px] h-[135px] mr-[26px]"></div>
                {/* <CardMain.Cover src=""></CardMain.Cover> */}
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
    </>
  );
};

export default page;
