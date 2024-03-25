import Like from "@/assets/img/like.svg";
import { Children, ReactNode, isValidElement } from "react";
import { CardFooterProps } from "./CartFooter.types";

const LikeNumbers = ({ children, className }: CardFooterProps) => {
  return (
    <div
      className={`flex flex-grow items-center font-Medium text-[17px] text-[#656565] ${className}`}
    >
      <Like width={18} height={17} />
      <div className="ml-[5px]">{children}</div>
    </div>
  );
};
const Attribute = ({ children }: CardFooterProps) => {
  return (
    <div className="font-Pretendard font-Medium text-[20px] flex justify-center items-center border border-[#fff] border-t-[#E3E3E3] h-[55px] mt-[20px]">
      {children}
    </div>
  );
};
const Line = () => {
  return <div className="border border-solid border-[#E3E3E3] mt-[5px]"></div>;
};
const LikeButton = ({ className }: CardFooterProps) => {
  return (
    <div className="flex items-center justify-center w-[76px] h-[32px] font-Pretendard font-Medium text-[21px] text-[#656565] border-[#D9D9D9] border border-solid rounded-[3px]">
      {className} 좋아요
    </div>
  );
};
const DeleteButton = ({ className }: CardFooterProps) => {
  return (
    <div className="flex items-center justify-center w-[61px] h-[32px] font-Pretendard font-Medium text-[21px] text-[#656565] border-[#D9D9D9] border border-solid rounded-[3px]">
      {className} 삭제
    </div>
  );
};

const LikeNumbersType = (<LikeNumbers children={""} />).type;
const AttributeType = (<Attribute />).type;
const LineType = (<Line />).type;
const LikeButtonType = (<LikeButton />).type;
const DeleteButtonType = (<DeleteButton />).type;

const getLikeNumbers = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === LikeNumbersType)
    .slice(0, 1);
};
const getAttribute = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === AttributeType)
    .slice(0, 1);
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
    .slice(0, 1);
};
const getDeleteButton = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === DeleteButtonType)
    .slice(0, 1);
};

const CardFooter = ({ children }: CardFooterProps) => {
  const likeNumbers = getLikeNumbers(children);
  const attribute = getAttribute(children);
  const line = getLine(children);
  const likeButton = getLikeButton(children);
  const deleteButton = getDeleteButton(children);

  return (
    <div className="flex flex-row">
      {likeNumbers && <>{likeNumbers}</>}
      {likeButton && <>{likeButton}</>}
      {deleteButton && <>{deleteButton}</>}
      {line && <>{line}</>}
      {attribute && <>{attribute}</>}
    </div>
  );
};

export const CardFooterMain = Object.assign(CardFooter, {
  Attribute,
  LikeNumbers,
  Line,
  LikeButton,
  DeleteButton,
});
