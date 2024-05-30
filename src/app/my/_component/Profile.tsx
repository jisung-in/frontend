"use client";

import Image from "next/image";
import ProfileImage from "@/assets/img/profile.png";
import MyButton from "./MyButton";
import Wheel from "@/assets/img/wheel.svg";
import { useGetMemberData } from "@/hook/reactQuery/auth/useGetMemberData";

const Profile = () => {
  const { data: userData } = useGetMemberData();

  return (
    <div className="flex flex-col px-[5%] pb-[5%] gap-5 relative">
      <div className="w-[200px] sm:w-[50px] sm-h-[50px] h-[200px] relative">
        <Image
          src={userData?.data.userImage ?? ProfileImage}
          className="rounded-[50%] min-w-[100px] min-h-[100px]"
          alt="프로필"
          fill
          priority
        />
      </div>
      <div className="absolute right-[5%]">
        <MyButton width={100}>로그아웃</MyButton>
      </div>

      <div className="flex align-center gap-[5%] sm:flex-col sm:gap-[20px]">
        <span className="text-[27px] font-[700] h-[30px] pl-[6%]">
          {userData?.data.userName}
        </span>

        {/* <MyButton width={133} path="/my/edit">
          프로필 수정
          <Wheel />
        </MyButton> */}
      </div>
    </div>
  );
};

export default Profile;
