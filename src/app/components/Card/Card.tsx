import Like from "@/assets/img/like.svg";
import { Children, ReactNode, isValidElement } from "react";
import { CardProps } from "./Card.types";

const CardWrapper = ({ children, className }: CardProps) => {
  return (
    // <div className={`w-[${width}px] h-[${height}px] border border-solid`}>
    <div className={className}>{children}</div>
  );
};
const AttendCondition = () => {
  return (
    <div className="font-Pretendard font-Medium text-[19px] text-[#FF6363]">
      참가 조건
    </div>
  );
};
const QuestionTitle = ({ string, className }: CardProps) => {
  return (
    <div className={`font-Pretendard font-Medium ${className}`}>{string}</div>
  );
};
const OpinionTitle = ({ string }: CardProps) => {
  return <div>{string}</div>;
};
const Question = ({ string }: CardProps) => {
  return <div>{string}</div>;
};
const Evaluation = ({ string }: CardProps) => {
  return <div>{string}</div>;
};
const Opinion = ({ string }: CardProps) => {
  return <div>{string}</div>;
};
const Review = ({ string }: CardProps) => {
  return <div>{string}</div>;
};
const MyReview = ({ string }: CardProps) => {
  return <div>{string}</div>;
};
const Status = ({ status }: CardProps) => {
  return (
    <div className="font-Pretendard font-Medium flex justify-center items-center w-auto h-[30px] text-[18px] text-[#656565] bg-[#F3F3F3] px-[8px] py-[4.5px]  mr-[8px] border border-solid rounded-[4px]">
      {status}
    </div>
  );
};
const CreateDay = ({ createDay }: CardProps) => {
  return (
    <div className="flex flex-row font-Pretendard font-Medium text-[18px] text-[#AEAEAE]">
      <div className="mr-[18px]">생성일</div>
      <div>{createDay}</div>
    </div>
  );
};
const LikeNumbers = ({ likeNumber, className }: CardProps) => {
  return (
    <div className={`font-Medium text-[17px] text-[#656565] ${className}`}>
      <Like width={16} height={15} /> {likeNumber}
    </div>
  );
};
const Attribute = ({ attribute }: CardProps) => {
  return (
    <div className="font-Pretendard font-Medium text-[20px] flex justify-center items-center border border-[#fff] border-t-[#E3E3E3] h-[55px] mt-[20px]">
      {attribute}
    </div>
  );
};

const CardWrapperType = (<CardWrapper children={""} />).type;
const AttendConditionType = (<AttendCondition />).type;
const QuestionTitleType = (<QuestionTitle string={""} />).type;
const OpinionTitleType = (<OpinionTitle string={""} />).type;
const QuestionType = (<Question string={""} />).type;
const EvaluationType = (<Evaluation string={""} />).type;
const OpinionType = (<Opinion string={""} />).type;
const ReviewType = (<Review string={""} />).type;
const MyReviewType = (<MyReview string={""} />).type;
const StatusType = (<Status status={""} />).type;
const CreateDayType = (<CreateDay createDay={""} />).type;
const LikeNumbersType = (<LikeNumbers likeNumber={""} />).type;
const AttributeType = (<Attribute />).type;

const getCardWrapper = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === CardWrapperType)
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
    .slice(0, 1);
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

const Card = ({ children }: CardProps) => {
  const cardWrapper = getCardWrapper(children);
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

  return (
    <>
      {cardWrapper && <>{cardWrapper}</>}
      {attendCondition && <>{attendCondition}</>}
      {questionTitle && <>{questionTitle}</>}
      {opinionTitle && <>{opinionTitle}</>}
      {question && <>{question}</>}
      {evaluation && <>{evaluation}</>}
      {opinion && <>{opinion}</>}
      {review && <>{review}</>}
      {myReview && <>{myReview}</>}
      {status && <>{status}</>}
      {createDay && <>{createDay}</>}
      {likeNumbers && <>{likeNumbers}</>}
      {attribute && <>{attribute}</>}
    </>
  );
};

export const CardMain = Object.assign(Card, {
  CardWrapper,
  AttendCondition,
  QuestionTitle,
  OpinionTitle,
  Question,
  Evaluation,
  Opinion,
  Review,
  MyReview,
  Status,
  CreateDay,
  LikeNumbers,
  Attribute,
});
