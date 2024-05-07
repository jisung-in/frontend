"use client";
import { Button } from "@/app/components/Button/Button";
import { TabContext } from "./TabProvider";
import style from "./tab.module.css";
import { useContext } from "react";

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);
  const onClickCreated = () => {
    setTab("created");
  };
  const onClickReplied = () => {
    setTab("replied");
  };
  const onClickLiked = () => {
    setTab("liked");
  };

  return (
    <div className="flex gap-[10px] w-full pl-[10%]">
      <div className="w-[70px]">
        <Button
          height="sm"
          variant={tab === "created" ? "main" : "empty"}
          onClick={onClickCreated}
        >
          생성
        </Button>
      </div>
      <div className="w-[70px]">
        <Button
          variant={tab === "replied" ? "main" : "empty"}
          height="sm"
          onClick={onClickReplied}
        >
          답글
        </Button>
      </div>
      <div className="w-[70px]">
        <Button
          variant={tab === "liked" ? "main" : "empty"}
          height="sm"
          onClick={onClickLiked}
        >
          좋아요
        </Button>
      </div>
    </div>
  );
}
