"use client";

import { Button } from "@/app/components/Button/Button";
import { Textarea } from "@/app/components/Textarea/Textarea";
import BackButton from "@/app/summary/_component/BackButton";
import Camera from "@/assets/img/camera.svg";
import TalkIcon from "@/assets/img/talk-icon.svg";
import { useCreateComment } from "@/hook/reactQuery/talkRoom/useCreateComment";
import useImageUpload from "@/hook/useImageUpload";
import { useInput } from "@/hook/useInput";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

const CommentPage = () => {
  const { value, handleChange } = useInput("");
  const { mutate } = useCreateComment();
  const { encodeImageFileAsURL, previewImage, error, uploadImages } =
    useImageUpload();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    encodeImageFileAsURL(files, "comment");
  };

  const handleSubmitClick = () => {
    fileInputRef.current?.click();
  };

  const onSubmitClick = async () => {
    if (!error && previewImage.length) {
      console.log(previewImage);
      const response = await uploadImages();
      console.log("보낸다잉", response);
      if (response?.data) {
        mutate({ content: value, imageUrls: response.data });
      }
    } else {
      mutate({ content: value });
    }
  };

  return (
    <div className="flex flex-col w-[100dvh] h-[100%] justify-center items-center">
      <div className="flex flex-col bg-white my-[100px] border-2 rounded-xl">
        <header className="flex flex-col w-full px-[3%] py-[3%] border-b-2 gap-4">
          <BackButton />

          <span className="flex gap-2 font-bold text-3xl sm:text-xl">
            토크방 의견 작성하기
            <TalkIcon />
          </span>
        </header>

        <div className="flex flex-col w-[50dvw] min-w-[300px] border-gray-50 px-[3%] py-[3%] gap-4">
          <span className="font-bold text-xl sm:text-lg">Q.토크방 제목</span>
          <div className="w-[100%] h-[50dvh] relative">
            <Textarea value={value} onChange={handleChange} />
            <span
              className="flex absolute gap-1 cursor-pointer bottom-[5%] pt-[1%] pl-[1%] w-full border-t-2 font-bold text-gray-70"
              onClick={handleSubmitClick}
            >
              <Camera />
              사진 첨부
            </span>
            <input
              accept="image/*"
              type="file"
              onChange={onUpload}
              ref={fileInputRef}
              multiple
              className="hidden"
            />
          </div>
          <div className="grid grid-cols-4">
            {previewImage?.slice(0, 4).map((src, index) => (
              <div key={index} className="w-29 h-44 relative">
                <Image
                  src={src}
                  alt={`이미지 ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
          <div className="flex w-full justify-end relative">
            <div className="w-[180px]">
              <Button
                onClick={onSubmitClick}
                disabled={value.trim() === "" || value.length > 200}
              >
                의견 등록
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPage;
