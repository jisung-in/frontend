"use client";
import { useParams } from "next/navigation";

type Props = { content?: "도서" | "토론방" };
const Preface = ({ content = "도서" }: Props) => {
  const { word } = useParams();

  return (
    <div className="flex flex-col gap-[20px]">
      <span className="text-[30px] font-bold">{content} 정보</span>
      <span className="text-[20px] text-gray-50">
        {word}의 {content} 정보입니다.
      </span>
    </div>
  );
};

export default Preface;
