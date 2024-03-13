import { Children, ReactNode, isValidElement } from "react";
import { CardProps } from "./Card.types";

const RankBox = ({ number }: { number: number }) => {
  return (
    <div className="text-xl w-9 h-9" font-size="21">
      {number}
    </div>
  );
};
const BookTitle = ({ title }: { title: string }) => {
  return <div>{title}</div>;
};
const Cover = ({ src }: { src: string }) => {
  return <img src={src} />;
};
const Numbering = ({ number }: { number: string | number }) => {
  return <div>{number}</div>;
};
const HoursAgo = ({ string }: { string: string }) => {
  return <div>{string}</div>;
};
const Author = ({ string }: { string: string }) => {
  return <div>{string}</div>;
};
const Publisher = ({ string }: { string: string }) => {
  return <div>{string}</div>;
};
const Year = ({ string }: { string: string }) => {
  return <div>{string}</div>;
};
const Profile = ({ src }: { src: string }) => {
  return <img src={src} />;
};
const Name = ({ string }: { string: string }) => {
  return <div>{string}</div>;
};
const NickName = ({ string }: { string: string }) => {
  return <div>{string}</div>;
};
const QuestionTitle = ({ string }: { string: string }) => {
  return <div>{string}</div>;
};
const OpinionTitle = ({ string }: { string: string }) => {
  return <div>{string}</div>;
};
const Question = ({ string }: { string: string }) => {
  return <div>{string}</div>;
};
const Evaluation = ({ string }: { string: string }) => {
  return <div>{string}</div>;
};
const Opinion = ({ string }: { string: string }) => {
  return <div>{string}</div>;
};
const Review = ({ string }: { string: string }) => {
  return <div>{string}</div>;
};
const MyReview = ({ string }: { string: string }) => {
  return <div>{string}</div>;
};
const StarRating = ({ number }: { number: string | number }) => {
  return <div>{number}</div>;
};
const LikeButton = () => {
  return (
    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
      좋아요
    </button>
  );
};
const IsLike = ({ number }: { number: string | number }) => {
  return <div>{number}</div>;
};
const LikeNumbers = ({ number }: { number: string | number }) => {
  return <div>{number}</div>;
};
const EntranceButton = () => {
  return <div className="flex justify-center items-center">입장하기</div>;
};
const ViewDetailsButton = () => {
  return <div className="flex justify-center items-center">상세보기</div>;
};

const RankBoxType = (<RankBox number={0} />).type;
const BookTitleType = (<BookTitle title={""} />).type;
const CoverType = (<Cover src={""} />).type;
const NumberingType = (<Numbering number={""} />).type;
const HouerAgoType = (<HoursAgo string={""} />).type;
const AuthorType = (<Author string={""} />).type;
const PublisherType = (<Publisher string={""} />).type;
const YearType = (<Year string={""} />).type;
const ProfileType = (<Profile src={""} />).type;
const NameType = (<Name string={""} />).type;
const NickNameType = (<NickName string={""} />).type;
const QuestionTitleType = (<QuestionTitle string={""} />).type;
const OpinionTitleType = (<OpinionTitle string={""} />).type;
const QuestionType = (<Question string={""} />).type;
const EvaluationType = (<Evaluation string={""} />).type;
const OpinionType = (<Opinion string={""} />).type;
const ReviewType = (<Review string={""} />).type;
const MyReviewType = (<MyReview string={""} />).type;
const StarRatingType = (<StarRating number={""} />).type;
const LikeButtonType = (<LikeButton />).type;
const IsLikeType = (<IsLike number={""} />).type;
const LikeNumbersType = (<LikeNumbers number={""} />).type;
const EntranceButtonType = (<EntranceButton />).type;
const ViewDetailsButtonType = (<ViewDetailsButton />).type;

const getRankBox = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === RankBoxType)
    .slice(0, 1);
};
const getBookTitle = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === BookTitleType)
    .slice(0, 1);
};
const getCover = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === CoverType)
    .slice(0, 1);
};
const getNumbering = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === NumberingType)
    .slice(0, 1);
};
const getHoursAgo = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === HouerAgoType)
    .slice(0, 1);
};
const getAuthor = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === AuthorType)
    .slice(0, 1);
};
const getPublisher = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === PublisherType)
    .slice(0, 1);
};
const getYear = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === YearType)
    .slice(0, 1);
};
const getProfile = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === ProfileType)
    .slice(0, 1);
};
const getName = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === NameType)
    .slice(0, 1);
};
const getNickName = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === NickNameType)
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
const getStarRating = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === StarRatingType)
    .slice(0, 1);
};
const getLikeButton = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === LikeButtonType)
    .slice(0, 1);
};

const getIsLike = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === IsLikeType)
    .slice(0, 1);
};
const getLikeNumbers = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === LikeNumbersType)
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
  const rankBox = getRankBox(children);
  const bookTitle = getBookTitle(children);
  const cover = getCover(children);
  const numbering = getNumbering(children);
  const hoursAgo = getHoursAgo(children);
  const author = getAuthor(children);
  const publisher = getPublisher(children);
  const year = getYear(children);
  const profile = getProfile(children);
  const name = getName(children);
  const nickName = getNickName(children);
  const questionTitle = getQuestionTitle(children);
  const opinionTitle = getOpinionTitle(children);
  const question = getQuestion(children);
  const evaluation = getEvaluation(children);
  const opinion = getOpinion(children);
  const review = getReview(children);
  const myReview = getMyReview(children);
  const starRating = getStarRating(children);
  const likeButton = getLikeButton(children);
  const isLike = getIsLike(children);
  const likeNumbers = getLikeNumbers(children);
  const entranceButton = getEntranceButton(children);
  const viewDetailsButton = getViewDetailsButton(children);

  return (
    <>
      {rankBox && <>{rankBox}</>}
      {bookTitle && <>{bookTitle}</>}
      {cover && <>{cover}</>}
      {numbering && <>{numbering}</>}
      {hoursAgo && <>{hoursAgo}</>}
      {author && <>{author}</>}
      {publisher && <>{publisher}</>}
      {year && <>{year}</>}
      {profile && <>{profile}</>}
      {name && <>{name}</>}
      {nickName && <>{nickName}</>}
      {questionTitle && <>{questionTitle}</>}
      {opinionTitle && <>{opinionTitle}</>}
      {question && <>{question}</>}
      {evaluation && <>{evaluation}</>}
      {opinion && <>{opinion}</>}
      {review && <>{review}</>}
      {myReview && <>{myReview}</>}
      {starRating && <>{starRating}</>}
      {likeButton && <>{likeButton}</>}
      {isLike && <>{isLike}</>}
      {likeNumbers && <>{likeNumbers}</>}
      {entranceButton && <>{entranceButton}</>}
      {viewDetailsButton && <>{viewDetailsButton}</>}
    </>
  );
};

export const CardMain = Object.assign(Card, {
  RankBox,
  BookTitle,
  Cover,
  Numbering,
  HoursAgo,
  Author,
  Publisher,
  Year,
  Profile,
  Name,
  NickName,
  QuestionTitle,
  OpinionTitle,
  Question,
  Evaluation,
  Opinion,
  Review,
  MyReview,
  StarRating,
  LikeButton,
  IsLike,
  LikeNumbers,
  EntranceButton,
  ViewDetailsButton,
});
