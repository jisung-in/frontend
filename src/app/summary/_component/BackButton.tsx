"use client";
import { Button } from "@/app/components/Button/Button";
import BackArrow from "@/assets/img/back-arrow.svg";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/")}>
      <BackArrow />
    </button>
  );
};

export default BackButton;
