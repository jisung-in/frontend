import BestNumberingImg from "@/assets/img/best-numbering.svg";
import NumberingImg from "@/assets/img/numbering.svg";
import { Children, ReactNode, isValidElement } from "react";
import { TalkCommentHeaderProps } from "./TalkCommentHeader.types";

const Best = ({ children }: TalkCommentHeaderProps) => {
  return (
    <div className="font-Poppins font-semibold text-[#16px] text-[#000] flex items-center cursor-pointer">
      <BestNumberingImg />
      <div className="ml-[5px]">{children}</div>
      <div className="ml-[12px] flex items-center bg-transparent leading-tight text-[18px] text-[#F24D4D] border-2 border-[#F24D4D] rounded-[4px] px-[7.5px] h-[21px]">
        BEST
      </div>
    </div>
  );
};
const Numbering = ({ children }: TalkCommentHeaderProps) => {
  return (
    <div className="font-Poppins font-semibold text-[#16px] text-[#000] flex items-center cursor-pointer">
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

const BestType = (<Best />).type;
const NumberingType = (<Numbering />).type;
const TimesAgoType = (<TimesAgo />).type;

const getBest = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  const best = childrenArray.filter(
    (child) => isValidElement(child) && child.type === BestType,
  );
  return best.length > 0 ? best.slice(0, 1) : [];
};
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
  const best = getBest(children);
  const numbering = getNumbering(children);
  const timesAgo = getTimesAgo(children);

  return (
    <div className="flex w-full">
      {best.length > 0 && <div className="flex grow mb-[8px]">{best}</div>}
      <div className="flex grow mb-[8px]">{numbering && <>{numbering}</>}</div>
      <div className="flex">{timesAgo && <>{timesAgo}</>}</div>
    </div>
  );
};

export const TalkCommentHeaderMain = Object.assign(TalkCommentHeader, {
  Best,
  Numbering,
  TimesAgo,
});
