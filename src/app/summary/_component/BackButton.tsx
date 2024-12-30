"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button className="max-w-[25px]" onClick={() => router.back()}>
      <ArrowLeft className="text-[#624E45] sm:size-4 size-6 sm:mb-[2px]" />
    </button>
  );
};

export default BackButton;
