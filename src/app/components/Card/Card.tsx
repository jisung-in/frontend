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
const LikeButton = () => {
  return (
    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
      좋아요
    </button>
  );
};
const Status = ({ status }: CardProps) => {
  return (
    <div className="font-Pretendard font-Medium flex justify-center items-center w-auto h-[30px] text-[18px] text-[#656565] bg-[#F3F3F3] px-[8px] py-[4.5px]  mr-[8px] border border-solid rounded-[4px]">
      {status}
    </div>
  );
};
const Category = ({ category }: CardProps) => {
  return <div className="flex justify-center items-center">{category} </div>;
};
const ShowAll = () => {
  return (
    <div className="flex justify-center items-center">전체보기 {">"} </div>
  );
};
const ShowMore = () => {
  return <div className="flex justify-center items-center">더보기 {">"} </div>;
};
const EntranceButton = () => {
  return <div className="flex justify-center items-center">입장하기</div>;
};
const ViewDetailsButton = () => {
  return <div className="flex justify-center items-center">상세보기</div>;
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
const LikeButtonType = (<LikeButton />).type;
const StatusType = (<Status status={""} />).type;
const CategoryType = (<Category category={""} />).type;
const ShowAllType = (<ShowAll />).type;
const ShowMoreType = (<ShowMore />).type;
const EntranceButtonType = (<EntranceButton />).type;
const ViewDetailsButtonType = (<ViewDetailsButton />).type;

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
const getLikeButton = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === LikeButtonType)
    .slice(0, 1);
};
const getStatus = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === StatusType)
    .slice(0, 1);
};
const getCategory = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === CategoryType)
    .slice(0, 1);
};
const getShowAll = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === ShowAllType)
    .slice(0, 1);
};
const getShowMore = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === ShowMoreType)
    .slice(0, 1);
};
const getEntranceButton = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) => isValidElement(child) && child.type === EntranceButtonType,
    )
    .slice(0, 1);
};
const getViewDetailsButton = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) => isValidElement(child) && child.type === ViewDetailsButtonType,
    )
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
  const likeButton = getLikeButton(children);
  const status = getStatus(children);
  const category = getCategory(children);
  const showAll = getShowAll(children);
  const showMore = getShowMore(children);
  const entranceButton = getEntranceButton(children);
  const viewDetailsButton = getViewDetailsButton(children);

  return (
    <>
      {cardWrapper}
      {attendCondition && <>{attendCondition}</>}
      {questionTitle && <>{questionTitle}</>}
      {opinionTitle && <>{opinionTitle}</>}
      {question && <>{question}</>}
      {evaluation && <>{evaluation}</>}
      {opinion && <>{opinion}</>}
      {review && <>{review}</>}
      {myReview && <>{myReview}</>}
      {likeButton && <>{likeButton}</>}
      {status && <>{status}</>}
      {category && <>{category}</>}
      {showAll && <>{showAll}</>}
      {showMore && <>{showMore}</>}
      {entranceButton && <>{entranceButton}</>}
      {viewDetailsButton && <>{viewDetailsButton}</>}
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
  LikeButton,
  Status,
  Category,
  ShowAll,
  ShowMore,
  EntranceButton,
  ViewDetailsButton,
});
