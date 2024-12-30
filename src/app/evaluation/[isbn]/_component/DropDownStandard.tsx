"use client";

import DropDown from "@/app/components/DropDown/DropDown";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface DropDownStandardProps {
  isbn: string;
}

const DropDownStandard: React.FC<DropDownStandardProps> = ({ isbn }) => {
  const router = useRouter();

  const [likeStandard, setLikeStandard] = useState<string>("좋아요 순");
  const standardType: Record<string, string> = {
    "좋아요 순": "like",
    "높은 평가 순": "rating_desc",
    "낮은 평가 순": "rating_asc",
    "작성 순": "recent",
  };
  const handleChangeStandard = (selectedStandard: string) => {
    const order = standardType[selectedStandard];
    setLikeStandard(selectedStandard);
    router.push(`/evaluation/${isbn}?order=${order}`);
  };

  return (
    <DropDown
      items={Object.keys(standardType)}
      selectedItem={likeStandard}
      setSelectedItem={handleChangeStandard}
    />
  );
};

export default DropDownStandard;
