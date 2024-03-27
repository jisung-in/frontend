"use client";
import { Button } from "@/app/components/Button/Button";
import { useState } from "react";

type Props = { content: string; actived: boolean };
const ConditionButtons = ({ conditions }: { conditions: Props[] }) => {
  const [buttonState, setButtonState] = useState(conditions);
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
    <div className="flex gap-[2%]">
      {buttonState?.map((item: Props, index: number) => (
        <div className="w-[100px]">
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
