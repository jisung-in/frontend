import { ReactNode } from "react";

interface SpeechBubbleProps {
  children?: ReactNode;
}

const SpeechBubble = ({ children }: SpeechBubbleProps) => {
  return (
    <div className="relative bg-white rounded-[15px] h-[224px]">
      {children}
      <div className="skew-x-[-30deg] absolute bottom-[-90px] left-[12%] border-solid border-transparent border-[90px] border-t-white border-l-0 border-b-0"></div>
    </div>
  );
};

export default SpeechBubble;
