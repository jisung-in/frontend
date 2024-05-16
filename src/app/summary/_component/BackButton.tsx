"use client";
import BackArrow from "@/assets/img/back-arrow.svg";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button className="max-w-[25px]" onClick={() => router.back()}>
      <BackArrow />
    </button>
  );
};

export default BackButton;
