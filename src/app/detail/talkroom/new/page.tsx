"use client";

import { Button } from "@/app/components/Button/Button";
import { Input } from "@/app/components/Input/Input";
import BackButton from "@/app/summary/_component/BackButton";
import { BUTTON_INDEX } from "@/constants/buttonIndex";
import { Textarea } from "@/app/components/Textarea/Textarea";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { BookInfo } from "@/hook/reactQuery/search/useGetKakaoResults";
import ConditionButtons from "@/app/components/molecules/ConditionButtons/ConditionButtons";
import { useCreateRoom } from "@/hook/reactQuery/talkRoom/useCreateRoom";
import { useInput } from "@/hook/useInput";
import { useRouter } from "next/navigation";
import SearchedList from "./_component/SearchedList";
import useImageUpload from "@/hook/useImageUpload";
import Camera from "@/assets/img/camera.svg";
import Image from "next/image";

const NewTalkRoom = () => {
  const [input, setInput] = useState({
    value: "",
    onClose: true,
  });
  const [bookInfo, setBookInfo] = useState<BookInfo>();
  const { value: title, handleChange: titleChange } = useInput("");
  const { value: content, handleChange: contentChange } = useInput("");
  const [buttonState, setButtonState] = useState(BUTTON_INDEX);
  const { mutate } = useCreateRoom();
  const { encodeImageFileAsURL, previewImage, error, uploadImages } =
    useImageUpload();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

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

  const onSubmitClicked = async () => {
    const splitedIsbn = bookInfo?.isbn.split(" ").at(1);
    if (!bookInfo || !splitedIsbn) return;
    const response = await uploadImages();
    if (response?.data) {
      mutate({
        bookIsbn: splitedIsbn,
        title,
        content,
        readingStatus: buttonState
          .filter((state) => state.actived)
          .map((state) => state.content),
        imageUrls: response.data,
      });
    } else {
      mutate({
        bookIsbn: splitedIsbn,
        title,
        content,
        readingStatus: buttonState
          .filter((state) => state.actived)
          .map((state) => state.content),
      });
    }

    router.back();
  };

  useEffect(() => {}, []);

  return (
    <main className="flex flex-col w-full p-8">
      <BackButton />
      <h1 className="text-[30px] font-bold py-4 border-b-[1px]">토크방 생성</h1>

      <span className="text-[25px] font-bold py-4">책 찾기</span>

      <div className="flex relative gap-[10px]">
        <Input
          value={input.value}
          onChange={(e) => setInput({ onClose: true, value: e.target.value })}
          placeholder="이곳에 검색해보세요."
        />
        {input.value.length > 0 && input.onClose && (
          <SearchedList
            value={input.value}
            handleChange={setInput}
            setBookInfo={setBookInfo}
          />
        )}
        <div className="w-[130px]">
          <Button>찾아보기</Button>
        </div>
      </div>

      <span className="text-[25px] font-bold py-4">토크방 조건 작성</span>

      <div className="flex gap-[5%] md:flex-col">
        {bookInfo?.thumbnail ? (
          <img
            src={bookInfo?.thumbnail}
            alt="책 이미지"
            className="w-[200px] h-[300px]"
          />
        ) : (
          <div className="w-[200px] h-[300px] bg-gray-40">{/* 이미지 */}</div>
        )}

        <div className="flex flex-col">
          <span className="text-[25px] font-bold py-4">
            {bookInfo?.title || "책 제목"}
          </span>
          <span className="text-[1rem] font-bold text-gray-50">
            {bookInfo?.authors} {bookInfo?.publisher}{" "}
            {bookInfo?.datetime.slice(0, 4)}
          </span>

          <span className="text-[25px] font-bold py-4">참가 조건</span>
          <div className="flex w-full">
            <ConditionButtons
              buttonState={buttonState}
              setButtonState={setButtonState}
            />
          </div>
        </div>
      </div>

      <span className="text-[25px] font-bold py-4">토크방 제목</span>
      <Textarea variant="white" value={title} onChange={titleChange} />

      <span className="text-[25px] font-bold py-4">토크방 주제 작성</span>
      <div className="h-[20dvh] relative">
        <Textarea value={content} onChange={contentChange} />
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
      <div className="grid grid-cols-4 pt-4">
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

      <div className="flex w-full justify-end pt-8">
        <div className="w-[120px] md:w-full">
          <Button onClick={onSubmitClicked} disabled={title.length > 0}>
            생성하기
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NewTalkRoom;
