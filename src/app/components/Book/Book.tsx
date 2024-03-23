import { Children, ReactNode, isValidElement } from "react";
import { BookProps } from "./Book.types";

const BookCover = ({ children }: BookProps) => {
  return <div className="w-full h-full bg-gray-50">{children}</div>;
};
const RankBox = ({ children }: BookProps) => {
  return (
    <div className="w-9 h-9 text-[#FFF] text-[21px] bg-[#624E45] border rounded-[4px] text-center">
      {children}
    </div>
  );
};
const BookTitle = ({ children, className }: BookProps) => {
  return (
    <div className={`font-Pretendard font-Medium ${className}`}>{children}</div>
  );
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
  return <div>{children}</div>;
};

const BookCoverType = (<BookCover children={""} />).type;
const RankBoxType = (<RankBox children={""} />).type;
const BookTitleType = (<BookTitle children={""} />).type;
const AuthorType = (<Author children={""} />).type;
const PublisherType = (<Publisher children={""} />).type;
const YearType = (<Year children={""} />).type;
const StarRatingType = (<StarRating children={""} />).type;

const getBookCover = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === BookCoverType)
    .slice(0, 1);
};
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
  const author = getAuthor(children);
  const bookCover = getBookCover(children);
  const bookTitle = getBookTitle(children);
  const rankBox = getRankBox(children);
  const publisher = getPublisher(children);
  const year = getYear(children);
  const starRating = getStarRating(children);

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="relative">
          {bookCover && <>{bookCover}</>}
          <div className="absolute top-[10px] left-[10px]">
            {rankBox && <>{rankBox}</>}
          </div>
        </div>
        {bookTitle && <>{bookTitle}</>}
        {author && <>{author}</>}
        {publisher && <>{publisher}</>}
        {year && <>{year}</>}
        {starRating && <>{starRating}</>}
      </div>
    </div>
  );
};

export const BookMain = Object.assign(Book, {
  Author,
  BookCover,
  BookTitle,
  RankBox,
  Publisher,
  StarRating,
  Year,
});
