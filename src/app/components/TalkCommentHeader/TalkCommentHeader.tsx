import NumberingImg from "@/assets/img/numbering.svg";
import { Children, ReactNode, isValidElement } from "react";
import { TalkCommentHeaderProps } from "./TalkCommentHeader.types";

const Numbering = ({ children }: TalkCommentHeaderProps) => {
  return (
    <div className="font-Poppins font-semibold text-[#16px] text-[#000] flex items-center mb-[16px]">
      <NumberingImg />
      <div className="ml-[5px]">{children}</div>
    </div>
  );
};
const TimesAgo = ({ children }: TalkCommentHeaderProps) => {
  return (
    <div className="font-Pretendard font-normal text-[#17px] text-[#7E7E7E]">
      {children}
    </div>
  );
};

const NumberingType = (<Numbering />).type;
const TimesAgoType = (<TimesAgo />).type;

const getNumbering = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === NumberingType)
    .slice(0, 1);
};
const getTimesAgo = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === TimesAgoType)
    .slice(0, 1);
};

const TalkCommentHeader = ({ children }: TalkCommentHeaderProps) => {
  const numbering = getNumbering(children);
  const timesAgo = getTimesAgo(children);

  return (
    <div className="flex">
      <div className="flex grow">{numbering && <>{numbering}</>}</div>
      <div className="">{timesAgo && <>{timesAgo}</>}</div>
    </div>
  );
};

export const TalkCommentHeaderMain = Object.assign(TalkCommentHeader, {
  Numbering,
  TimesAgo,
});
