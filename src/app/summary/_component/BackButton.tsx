"use client";
import BackArrow from "@/assets/img/back-arrow.svg";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      <BackArrow />
    </button>
  );
};

export default BackButton;
