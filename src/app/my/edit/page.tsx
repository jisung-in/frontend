"use client";
import Profile from "@/assets/img/profile.png";
import Image from "next/image";
import MyButton from "../_component/MyButton";
import { Button } from "@/app/components/Button/Button";
import { Textarea } from "@/app/components/Textarea/Textarea";
import { useInput } from "@/hook/useInput";
import {
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  useRef,
  useState,
} from "react";

const EditPage = () => {
  const { value: name, handleChange: onNameChange } = useInput("");
  const { value: intro, handleChange: onIntroChange } = useInput("");
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col px-[5%] py-[5%] gap-5 relative">
      <div
        className="relative w-44 h-44 rounded-full overflow-hidden group"
        onClick={handleImageClick}
      >
        <Image
          src={imageSrc ?? Profile}
          alt="Profile"
          width={180}
          height={180}
          priority
        />
        <div className="absolute cursor-pointer inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
      </div>
      <input
        accept="image/*"
        type="file"
        onChange={onUpload}
        className="hidden"
        ref={fileInputRef}
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
