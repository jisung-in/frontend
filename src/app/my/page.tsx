import SummaryCard from "./_component/SummaryCard";
import Star from "@/assets/img/star-rate.svg";
import Answer from "@/assets/img/answer-room.svg";
import Review from "@/assets/img/book-review.svg";
import Create from "@/assets/img/create-room.svg";
import Profile from "./_component/Profile";
import MyProfile from "@/assets/img/MyProfile.svg";
import BackButton from "../summary/_component/BackButton";

const data = [
  {
    title: "별점",
    icon: <Star />,
    path: "/summary/star",
  },
  {
    title: "한줄평",
    icon: <Answer />,
    path: "/summary/review",
  },
  {
    title: "토크방",
    icon: <Create />,
    path: "/summary/room",
  },
  {
    title: "독서상태",
    icon: <Review />,
    path: "/summary/state",
  },
];

const MyPage = () => {
  return (
    <>
      <span className="flex gap-[10px] px-[5%] py-[5%] flex-col w-full text-[30px] sm:text-[18px] font-bold">
        <BackButton />
        <div className="flex items-center gap-[10px]">
          마이페이지
          <MyProfile />
        </div>
      </span>
      <Profile />
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
