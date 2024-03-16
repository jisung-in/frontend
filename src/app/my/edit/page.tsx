"use client";
import Profile from "@/assets/img/profile.png";
import Image from "next/image";
import MyButton from "../_component/MyButton";
import { Button } from "@/app/components/Button/Button";
import { Textarea } from "@/app/components/Textarea/Textarea";
import { useInput } from "@/hook/useInput";

const EditPage = () => {
  const { value: name, handleChange: onNameChange } = useInput("");
  const { value: intro, handleChange: onIntroChange } = useInput("");

  return (
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
      <h2 className="text-[27px] font-[700]">이름</h2>

      <div className="h-[100px]">
        <Textarea value={name} onChange={onNameChange} />
      </div>

      <h2 className="text-[27px] font-[700]">한줄 소개</h2>

      <div className="h-[300px] bg-gray-30">
        <Textarea value={intro} onChange={onIntroChange} />
      </div>
      <div className="flex justify-end w-[100%]">
        <div className="w-[180px]">
          <Button>변경하기</Button>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
