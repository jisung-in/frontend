import BookTitleBihImg from "@/assets/img/book-title-big.svg";
import BookTitleImg from "@/assets/img/book-title.svg";
import TitleThemeBigImg from "@/assets/img/theme-title-big.svg";
import TitleThemeImg from "@/assets/img/theme-title.svg";
import { Children, ReactNode, isValidElement } from "react";
import { BookMain } from "../Book/Book";
import { CardFooterMain } from "../CardFooter/CardFooter";
import { CardHeaderMain } from "../CardHeader/CardHeader";
import { TalkCommentHeaderMain } from "../TalkCommentHeader/TalkCommentHeader";
import { CardProps } from "./Card.types";

const TitleTheme = ({ children, className = "", bigImg }: CardProps) => {
  return (
    <div
      className={`flex items-center font-Pretendard font-semibold text-[22px] text-[#000] ${className}`}
    >
      <div className="mr-[7px]">
        {bigImg ? <TitleThemeBigImg /> : <TitleThemeImg />}
      </div>
      {children}
    </div>
  );
};
const BookTitle = ({ children, className = "", bigImg }: CardProps) => {
  return (
    <div
      className={`flex items-center font-Pretendard font-medium text-[20px] text-[#656565] ${className}`}
    >
      <div className="mr-[7px]">
        {bigImg ? <BookTitleBihImg /> : <BookTitleImg />}
      </div>
      {children}
    </div>
  );
};
const AttendCondition = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`flex font-Pretendard font-medium text-[18px] text-[#FF6363] ${className}`}
    >
      {children}
    </div>
  );
};
const Status = ({
  children,
  className = "",
  color = "",
  height = 30,
}: CardProps) => {
  return (
    <div
      className={`font-Pretendard font-medium flex justify-center items-center w-auto h-[${height}px] text-[18px] text-[#656565] bg-[#${color}] border border-[#F4E4CE] border-solid rounded-[4px] ${className}`}
    >
      {children}
    </div>
  );
};
const Opinion = ({ children }: CardProps) => {
  return (
    <div className="font-Pretendard font-regular text-[20px] text-[#000]">
      {children}
    </div>
  );
};
const Review = ({ children }: CardProps) => {
  return <div>{children}</div>;
};
const CreateDay = ({ children }: CardProps) => {
  return (
    <div className="flex flex-row font-Pretendard font-medium text-[18px] text-[#AEAEAE]">
      <div className="mr-[18px]">생성일</div>
      <div>{children}</div>
    </div>
  );
};

const TitleThemeType = (<TitleTheme />).type;
const AttendConditionType = (<AttendCondition />).type;
const StatusType = (<Status />).type;
const CreateDayType = (<CreateDay />).type;
const ReviewType = (<Review />).type;
const BookMainType = (<BookMain />).type;
const CardHeaderMainType = (<CardHeaderMain />).type;
const BookTitleType = (<BookTitle />).type;
const CardFooterMainType = (<CardFooterMain />).type;
const TalkCommentHeaderMainType = (<TalkCommentHeaderMain />).type;
const OpinionType = (<Opinion />).type;

const getTitleTheme = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === TitleThemeType)
    .slice(0, 1);
};
const getAttendCondition = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) => isValidElement(child) && child.type === AttendConditionType,
    )
    .slice(0, 1);
};
const getStatus = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  const status = childrenArray.filter(
    (child) => isValidElement(child) && child.type === StatusType,
  );
  return status.length > 0 ? status.slice(0) : [];
};
const getCreateDay = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  const createDay = childrenArray.filter(
    (child) => isValidElement(child) && child.type === CreateDayType,
  );
  return createDay.length > 0 ? createDay.slice(0, 1) : [];
};
const getReview = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  const review = childrenArray.filter(
    (child) => isValidElement(child) && child.type === ReviewType,
  );
  return review.length > 0 ? review.slice(0, 1) : [];
};
const getBookMain = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === BookMainType)
    .slice(0, 1);
};
const getCardHeaderMain = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) => isValidElement(child) && child.type === CardHeaderMainType,
    )
    .slice(0, 1);
};
const getBookTitle = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === BookTitleType)
    .slice(0, 1);
};
const getCardFooterMain = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) => isValidElement(child) && child.type === CardFooterMainType,
    )
    .slice(0, 1);
};
const getTalkCommentHeaderMain = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  const talkCommentHeaderMain = childrenArray.filter(
    (child) =>
      isValidElement(child) && child.type === TalkCommentHeaderMainType,
  );
  return talkCommentHeaderMain.length > 0
    ? talkCommentHeaderMain.slice(0, 1)
    : [];
};
const getOpinionType = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  const opinion = childrenArray.filter(
    (child) => isValidElement(child) && child.type === OpinionType,
  );
  return opinion.length > 0 ? opinion.slice(0, 1) : [];
};

const Card = ({ children, className = "" }: CardProps) => {
  const titleTheme = getTitleTheme(children);
  const attendCondition = getAttendCondition(children);
  const status = getStatus(children);
  const createDay = getCreateDay(children);
  const review = getReview(children);
  const bookMain = getBookMain(children);
  const cardHeaderMain = getCardHeaderMain(children);
  const bookTitle = getBookTitle(children);
  const cardFooterMain = getCardFooterMain(children);
  const talkCommentHeaderMain = getTalkCommentHeaderMain(children);
  const opinion = getOpinionType(children);

  return (
    <div className="flex flex-col w-full h-full">
      {talkCommentHeaderMain.length > 0 && <>{talkCommentHeaderMain}</>}
      {cardHeaderMain && <>{cardHeaderMain}</>}
      <div className={`flex ${className}`}>
        {bookMain && <>{bookMain}</>}
        <div className="flex flex-col w-auto">
          {titleTheme && <>{titleTheme}</>}
          {bookTitle && <>{bookTitle}</>}
          {attendCondition && <>{attendCondition}</>}
          {status.length > 0 && <div className="flex flex-row">{status}</div>}
          {review.length > 0 && <>{review}</>}
          {createDay.length > 0 && <>{createDay}</>}
          {opinion.length > 0 && <>{opinion}</>}
        </div>
      </div>
      {cardFooterMain && <>{cardFooterMain}</>}
    </div>
  );
};

export const CardMain = Object.assign(Card, {
  TitleTheme,
  BookTitle,
  AttendCondition,
  Status,
  Review,
  CreateDay,
  Opinion,
});
