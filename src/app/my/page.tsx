import SummaryCard from "./_component/SummaryCard";
import Profile from "@/assets/img/profile.png";
import Star from "@/assets/img/start-rate.svg";
import Answer from "@/assets/img/answer-room.svg";
import Review from "@/assets/img/book-review.svg";
import Create from "@/assets/img/create-room.svg";
import Wheel from "@/assets/img/wheel.svg";
import Image from "next/image";
import MyButton from "./_component/MyButton";

const userData = {
  id: "이름 (아이디)",
  profile: "",
  decribe: "한줄 소개를 작성해 보세요. 한줄 소개를 작성해 주실래요?",
};

const data = [
  {
    title: "별점",
    icon: <Star />,
    path: "/summary/star",
  },
  {
    title: "서평",
    icon: <Answer />,
    path: "/summary/review",
  },
  {
    title: "생성방",
    icon: <Create />,
    path: "/summary/room",
  },
  {
    title: "답변방",
    icon: <Review />,
    path: "/summary/state",
  },
];

const MyPage = () => {
  return (
    <>
      <div className="flex flex-col px-[5%] py-[5%] gap-5 relative">
        <Image
          src={Profile}
          className="rounded-[50%]"
          alt="프로필"
          width={180}
          height={180}
          priority
        />
        <div className="absolute right-[10px]">
          <MyButton width={100}>로그아웃</MyButton>
        </div>

        <div className="flex align-center gap-[5%] sm:flex-col sm:gap-[20px]">
          <span className="text-[27px] font-[700]">{userData.id}</span>

          <MyButton width={133} path="/my/edit">
            프로필 수정
            <Wheel />
          </MyButton>
        </div>
        <span className="text-[16px] text-gray-50 font-[500]">
          {userData.decribe}
        </span>
      </div>
      <div className="block w-[100%] bg-gray-30 border-t-2">
        <br />
      </div>
      <div className="flex flex-col px-[5%] py-[5%] gap-5">
        <h2 className="text-[27px] font-[700]">내 정보 요약</h2>
        <div className="flex justify-between px-[5%] pt-[5%] sm:flex-wrap">
          {data.map((item) => (
            <SummaryCard data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyPage;
