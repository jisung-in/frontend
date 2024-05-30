"use client";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  icon: React.ReactNode;
  path: string;
};
const SummaryCard = ({ data }: { data: Props }) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(data.path)}>
      <div className="flex justify-center items-center rounded-lg w-[100px] h-[100px] bg-ivory-40 border-2">
        {data.icon}
      </div>
      <div className="pt-[20px] font-bold text-center text-[22px]">
        {data.title}
      </div>
    </button>
  );
};

export default SummaryCard;
