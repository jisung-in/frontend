import { Children, ReactNode, isValidElement } from "react";
import { CardHeaderProps } from "./CardHeader.types";

const Name = ({ name, className }: CardHeaderProps) => {
  return (
    <div className={`font-Pretendard font-Medium ${className}`}>{name}</div>
  );
};
const HoursAgo = ({ hoursAgo }: CardHeaderProps) => {
  return <div>{hoursAgo}</div>;
};
const LikeNumbers = ({ likeNumber, className }: CardHeaderProps) => {
  return <div className={className}>{likeNumber}</div>;
};
const StarRating = ({ starRating }: CardHeaderProps) => {
  return <div>{starRating}</div>;
};

const NameType = (<Name name={""} />).type;
const HouerAgoType = (<HoursAgo hoursAgo={""} />).type;
const LikeNumbersType = (<LikeNumbers likeNumber={""} />).type;
const StarRatingType = (<StarRating starRating={""} />).type;

const getName = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === NameType)
    .slice(0, 1);
};
const getHoursAgo = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === HouerAgoType)
    .slice(0, 1);
};
const getLikeNumbers = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === LikeNumbersType)
    .slice(0, 1);
};
const getStarRating = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === StarRatingType)
    .slice(0, 1);
};

const CardHeader = ({ children }: CardHeaderProps) => {
  const name = getName(children);
  const hoursAgo = getHoursAgo(children);
  const likeNumbers = getLikeNumbers(children);
  const starRating = getStarRating(children);

  return (
    <>
      {hoursAgo && <>{hoursAgo}</>}
      {name && <>{name}</>}
      {likeNumbers && <>{likeNumbers}</>}
      {starRating && <>{starRating}</>}
    </>
  );
};

export const CardHeaderMain = Object.assign(CardHeader, {
  HoursAgo,
  Name,
  LikeNumbers,
  StarRating,
});
