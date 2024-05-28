"use client";
import { Button } from "@/app/components/Button/Button";
import { useState } from "react";

type Props = {
  buttonState: ButtonProps[];
  setButtonState: (props: ButtonProps[]) => void;
};
type ButtonProps = { content: string; actived: boolean };
const ConditionButtons = ({ buttonState, setButtonState }: Props) => {
  const onClicked = (idx: number) => {
    const newButtonState = buttonState.map((item, index) => {
      if (index === idx) {
        return { ...item, actived: !item.actived };
      }
      return item;
    });

    setButtonState(newButtonState);
  };

  return (
    <div className="flex gap-[2%] flex-wrap">
      {buttonState?.map((item: ButtonProps, index: number) => (
        <div className="w-[100px]" key={index}>
          <Button
            key={index}
            variant={item.actived ? "main" : "gray"}
            height="md"
            onClick={() => onClicked(index)}
          >
            {item.content}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ConditionButtons;
