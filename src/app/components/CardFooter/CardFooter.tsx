import { Children, ReactNode, isValidElement } from "react";
import { CardFooterProps } from "./CartFooter.types";

const LikeNumbers = ({ children, className }: CardFooterProps) => {
  return (
    <div
      className={`flex flex-grow items-center font-Medium text-[17px] text-[#656565] ${className}`}
    >
      {children}
    </div>
  );
};
const Line = ({ children }: CardFooterProps) => {
  return <div className="border-solid border-[#E3E3E3]">{children}</div>;
};
const LikeButton = ({ children }: CardFooterProps) => {
  return (
    <div className="flex items-center justify-center w-[76px] h-[32px] font-Pretendard font-Medium text-[21px] text-[#656565] border-[#D9D9D9] border border-solid rounded-[3px] hover:bg-[#FBFBFB] cursor-pointer">
      {children}
    </div>
  );
};
const DeleteButton = ({ children }: CardFooterProps) => {
  return (
    <div className="flex items-center justify-center w-[61px] h-[32px] font-Pretendard font-Medium text-[21px] text-[#656565] border-[#D9D9D9] border border-solid rounded-[3px] cursor-pointer">
      {children}
    </div>
  );
};

const LikeNumbersType = (<LikeNumbers children={""} />).type;
const LineType = (<Line />).type;
const LikeButtonType = (<LikeButton />).type;
const DeleteButtonType = (<DeleteButton />).type;

const getLikeNumbers = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === LikeNumbersType)
    .slice(0);
};
const getLine = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === LineType)
    .slice(0, 1);
};
const getLikeButton = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === LikeButtonType)
    .slice(0);
};
const getDeleteButton = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === DeleteButtonType)
    .slice(0, 1);
};

const CardFooter = ({ children }: CardFooterProps) => {
  const likeNumbers = getLikeNumbers(children);
  const line = getLine(children);
  const likeButton = getLikeButton(children);
  const deleteButton = getDeleteButton(children);

  return (
    <>
      {likeNumbers && <>{likeNumbers}</>}
      {line && <>{line}</>}
      {likeButton && <>{likeButton}</>}
      {deleteButton && <>{deleteButton}</>}
    </>
  );
};

export const CardFooterMain = Object.assign(CardFooter, {
  LikeNumbers,
  Line,
  LikeButton,
  DeleteButton,
});
