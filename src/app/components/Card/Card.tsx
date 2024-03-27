import { Children, ReactNode, isValidElement } from "react";
import { BookMain } from "../Book/Book";
import { Button } from "../Button/Button";
import { CardFooterMain } from "../CardFooter/CardFooter";
import { CardHeaderMain } from "../CardHeader/CardHeader";
import { TalkCommentMain } from "../TalkComment/TalkComment";
import { CardProps } from "./Card.types";

const AttendCondition = ({ children }: CardProps) => {
  return (
    <div className="flex font-Pretendard font-Medium text-[19px] text-[#FF6363]">
      {children}
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
  return (
    <div className="font-Pretendard font-Regular text-[20px] mt-[20px] mb-[10px]">
      {children}
    </div>
  );
};
const Review = ({ children }: CardProps) => {
  return <div>{children}</div>;
};
const MyReview = ({ children }: CardProps) => {
  return <div>{children}</div>;
};
const Status = ({ children, className }: CardProps) => {
  return (
    <div>
      {className ? (
        <div
          className={`font-Pretendard font-Medium flex justify-center items-center w-auto text-[20px] text-[#656565] bg-[#F3F3F3] px-[13px] py-[6px] mr-[8px] border border-solid rounded-[4px] ${className}`}
        >
          {children}
        </div>
      ) : (
        <div className="font-Pretendard font-Medium flex justify-center items-center w-auto h-[30px] text-[18px] text-[#656565] bg-[#F3F3F3] px-[8px] py-[4.5px] mr-[8px] border border-solid rounded-[4px]">
          {children}
        </div>
      )}
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
const BookMainType = (<BookMain />).type;
const CardHeaderMainType = (<CardHeaderMain />).type;
const BookTitleType = (<BookTitle />).type;
const CardFooterMainType = (<CardFooterMain />).type;
const TalkCommentMainType = (<TalkCommentMain />).type;
const ButtonType = (<Button />).type;

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
const getTalkCommentMain = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) => isValidElement(child) && child.type === TalkCommentMainType,
    )
    .slice(0, 1);
};
const getButton = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === ButtonType)
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
  const bookMain = getBookMain(children);
  const cardHeaderMain = getCardHeaderMain(children);
  const bookTitle = getBookTitle(children);
  const cardFooterMain = getCardFooterMain(children);
  const talkCommentMain = getTalkCommentMain(children);
  const button = getButton(children);

  return (
    <div className="flex flex-col w-full h-full">
      {talkCommentMain && <>{talkCommentMain}</>}
      {cardHeaderMain && <>{cardHeaderMain}</>}
      <div className="flex">
        {bookMain && <>{bookMain}</>}
        <div className="flex flex-col w-auto">
          {questionTitle && <>{questionTitle}</>}
          {opinionTitle && <>{opinionTitle}</>}
          {bookTitle && <>{bookTitle}</>}
          {attendCondition && <>{attendCondition}</>}
          <div className="flex flex-row"> {status && <>{status}</>}</div>
          <div className="flex justify-end w-full ml-[40px]">
            <div className="w-[194px] h-[58px] font-Pretendard font-SemiBold text-[21px]">
              {button && <>{button}</>}
            </div>
          </div>
          {question && <>{question}</>}
          {evaluation && <>{evaluation}</>}
          {opinion && <>{opinion}</>}
          {review && <>{review}</>}
          {myReview && <>{myReview}</>}
          {createDay && <>{createDay}</>}
        </div>
      </div>
      {cardFooterMain && <>{cardFooterMain}</>}
    </div>
  );
};

export const CardMain = Object.assign(Card, {
  AttendCondition,
  BookTitle,
  CreateDay,
  Evaluation,
  Review,
  MyReview,
  Opinion,
  OpinionTitle,
  QuestionTitle,
  Question,
  Status,
});
