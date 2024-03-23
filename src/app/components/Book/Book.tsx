import { Children, ReactNode, isValidElement } from "react";
import { BookProps } from "./Book.types";

const RankBox = ({ children }: BookProps) => {
  return <div className="text-xl w-9 h-9">{children}</div>;
};
const BookTitle = ({ className, children }: BookProps) => {
  return <div className={`font-bold ${className}`}>{children}</div>;
};
const ImageBox = ({ children }: BookProps) => {
  return <div className="w-full h-full bg-gray-50">{children}</div>;
};
const Author = ({ children }: BookProps) => {
  return <div>{children}</div>;
};
const Publisher = ({ children }: BookProps) => {
  return <div>{children}</div>;
};
const Year = ({ children }: BookProps) => {
  return <div>{children}</div>;
};
const StarRating = ({ children }: BookProps) => {
  return <div className="text-gray-80">{children}</div>;
};

const RankBoxType = (<RankBox rank={0} />).type;
const BookTitleType = (<BookTitle title={""} />).type;
const AuthorType = (<Author author={""} />).type;
const PublisherType = (<Publisher publisher={""} />).type;
const YearType = (<Year year={""} />).type;
const StarRatingType = (<StarRating starRating={""} />).type;

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
const getStarRating = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === StarRatingType)
    .slice(0, 1);
};

const Book = ({ children }: BookProps) => {
  const rankBox = getRankBox(children);
  const bookTitle = getBookTitle(children);
  const author = getAuthor(children);
  const publisher = getPublisher(children);
  const year = getYear(children);
  const starRating = getStarRating(children);

  return (
    <>
      {rankBox && <>{rankBox}</>}
      {bookTitle && <>{bookTitle}</>}
      {author && <>{author}</>}
      {publisher && <>{publisher}</>}
      {year && <>{year}</>}
      {starRating && <>{starRating}</>}
    </>
  );
};

export const BookMain = Object.assign(Book, {
  RankBox,
  BookTitle,
  Author,
  Publisher,
  StarRating,
  Year,
});
