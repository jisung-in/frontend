import Like from "@/assets/img/like.svg";
import { Children, ReactNode, isValidElement } from "react";
import { BookMain } from "../Book/Book";
import { CardHeaderMain } from "../CardHeader/CardHeader";
import { CardProps } from "./Card.types";

const AttendCondition = () => {
  return (
    <div className="font-Pretendard font-Medium text-[19px] text-[#FF6363]">
      참가 조건
    </div>
  );
};
const QuestionTitle = ({ children }: CardProps) => {
  return <div>{children}</div>;
};
const OpinionTitle = ({ children }: CardProps) => {
  return <div className="font-Pretendard font-Medium">{children}</div>;
};
const Question = ({ children }: CardProps) => {
  return <div>{children}</div>;
};
const Evaluation = ({ children }: CardProps) => {
  return <div>{children}</div>;
};
const Opinion = ({ children }: CardProps) => {
  return <div>{children}</div>;
};
const Review = ({ children }: CardProps) => {
  return <div>{children}</div>;
};
const MyReview = ({ children }: CardProps) => {
  return <div>{children}</div>;
};
const Status = ({ children }: CardProps) => {
  return (
    <div className="font-Pretendard font-Medium flex justify-center items-center w-auto h-[30px] text-[18px] text-[#656565] bg-[#F3F3F3] px-[8px] py-[4.5px]  mr-[8px] border border-solid rounded-[4px]">
      {children}
    </div>
  );
};
const CreateDay = ({ children }: CardProps) => {
  return (
    <div className="flex flex-row font-Pretendard font-Medium text-[18px] text-[#AEAEAE]">
      <div className="mr-[18px]">생성일</div>
      <div>{children}</div>
    </div>
  );
};
const LikeNumbers = ({ children, className }: CardProps) => {
  return (
    <div className={`font-Medium text-[17px] text-[#656565] ${className}`}>
      <Like width={16} height={15} /> {children}
    </div>
  );
};
const Attribute = ({ children }: CardProps) => {
  return (
    <div className="font-Pretendard font-Medium text-[20px] flex justify-center items-center border border-[#fff] border-t-[#E3E3E3] h-[55px] mt-[20px]">
      {children}
    </div>
  );
};
const BookTitle = ({ children }: CardProps) => {
  return (
    <div className="font-Pretendard font-Medium text-[20px] text-[#656565]">
      {children}
    </div>
  );
};

const AttendConditionType = (<AttendCondition />).type;
const QuestionTitleType = (<QuestionTitle children={""} />).type;
const OpinionTitleType = (<OpinionTitle children={""} />).type;
const QuestionType = (<Question children={""} />).type;
const EvaluationType = (<Evaluation children={""} />).type;
const OpinionType = (<Opinion children={""} />).type;
const ReviewType = (<Review children={""} />).type;
const MyReviewType = (<MyReview children={""} />).type;
const StatusType = (<Status children={""} />).type;
const CreateDayType = (<CreateDay children={""} />).type;
const LikeNumbersType = (<LikeNumbers children={""} />).type;
const AttributeType = (<Attribute />).type;
const BookMainType = (<BookMain />).type;
const CardHeaderMainType = (<CardHeaderMain />).type;
const BookTitleType = (<BookTitle />).type;

const getAttendCondition = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) => isValidElement(child) && child.type === AttendConditionType,
    )
    .slice(0, 1);
};
const getQuestionTitle = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) => isValidElement(child) && child.type === QuestionTitleType,
    )
    .slice(0, 1);
};
const getOpinionTitle = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === OpinionTitleType)
    .slice(0, 1);
};
const getQuestion = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === QuestionType)
    .slice(0, 1);
};
const getEvaluation = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === EvaluationType)
    .slice(0, 1);
};
const getOpinion = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === OpinionType)
    .slice(0, 1);
};
const getReview = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === ReviewType)
    .slice(0, 1);
};
const getMyReview = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === MyReviewType)
    .slice(0, 1);
};
const getStatus = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === StatusType)
    .slice(0);
};
const getCreateDay = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === CreateDayType)
    .slice(0, 1);
};
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

const Card = ({ children }: CardProps) => {
  const attendCondition = getAttendCondition(children);
  const questionTitle = getQuestionTitle(children);
  const opinionTitle = getOpinionTitle(children);
  const question = getQuestion(children);
  const evaluation = getEvaluation(children);
  const opinion = getOpinion(children);
  const review = getReview(children);
  const myReview = getMyReview(children);
  const status = getStatus(children);
  const createDay = getCreateDay(children);
  const likeNumbers = getLikeNumbers(children);
  const attribute = getAttribute(children);
  const bookMain = getBookMain(children);
  const cardHeaderMain = getCardHeaderMain(children);
  const bookTitle = getBookTitle(children);

  return (
    <div className="flex flex-col w-full h-full">
      {cardHeaderMain && <>{cardHeaderMain}</>}
      <div className="flex flex-grow">
        {bookMain && <>{bookMain}</>}
        <div className="flex flex-col w-auto">
          {questionTitle && <>{questionTitle}</>}
          {opinionTitle && <>{opinionTitle}</>}
          {bookTitle && <>{bookTitle}</>}
          {attendCondition && <>{attendCondition}</>}
          {question && <>{question}</>}
          {evaluation && <>{evaluation}</>}
          {opinion && <>{opinion}</>}
          {review && <>{review}</>}
          {myReview && <>{myReview}</>}
          {createDay && <>{createDay}</>}
          <div className="flex flex-row"> {status && <>{status}</>}</div>
        </div>
        {likeNumbers && <>{likeNumbers}</>}
        {attribute && <>{attribute}</>}
      </div>
    </div>
  );
};

export const CardMain = Object.assign(Card, {
  AttendCondition,
  Attribute,
  BookTitle,
  CreateDay,
  Evaluation,
  Review,
  LikeNumbers,
  MyReview,
  Opinion,
  OpinionTitle,
  QuestionTitle,
  Question,
  Status,
});
