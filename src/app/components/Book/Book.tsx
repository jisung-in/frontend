import { Children, ReactNode, isValidElement } from "react";
import { BookProps } from "./Book.types";

const BookCover = ({ children }: BookProps) => {
  return <div>{children}</div>;
};
const RankBox = ({ children }: BookProps) => {
  return (
    <div
      className="
      sm:w-4
      md:w-5
      lg:w-6
      xl:w-7
      xl2:w-9  
      sm:h-4
      md:h-5
      lg:h-6
      xl:h-7
      xl2:h-9
      sm:text-[9px]
      md:text-[12px]
      lg:text-[15px]
      xl:text-[18px]
      xl2:text-[21px]
      text-[#FFF] bg-[#624E45] border rounded-[4px] text-center
      "
    >
      {children}
    </div>
  );
};
const BookTitle = ({ children }: BookProps) => {
  return <div className="font-Pretendard font-medium">{children}</div>;
};
const Author = ({ children }: BookProps) => {
  return <div>{children}</div>;
};
const Publisher = ({ children }: BookProps) => {
  return <div>{children}</div>;
};
const Year = ({ children }: BookProps) => {
  return <div className="font-Inter">{children}</div>;
};
const StarRating = ({ children }: BookProps) => {
  return <div>{children}</div>;
};

const BookCoverType = (<BookCover />).type;
const RankBoxType = (<RankBox />).type;
const BookTitleType = (<BookTitle />).type;
const AuthorType = (<Author />).type;
const PublisherType = (<Publisher />).type;
const YearType = (<Year />).type;
const StarRatingType = (<StarRating />).type;

const getBookCover = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === BookCoverType)
    .slice(0, 1);
};
const getRankBox = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  const ranBox = childrenArray.filter(
    (child) => isValidElement(child) && child.type === RankBoxType,
  );
  return ranBox.length > 0 ? ranBox.slice(0, 1) : [];
};
const getBookTitle = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === BookTitleType)
    .slice(0, 1);
};
const getAuthor = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  const author = childrenArray.filter(
    (child) => isValidElement(child) && child.type === AuthorType,
  );
  return author.length > 0 ? author.slice(0, 1) : [];
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

const Book = ({ children, className = "" }: BookProps) => {
  const author = getAuthor(children);
  const bookCover = getBookCover(children);
  const bookTitle = getBookTitle(children);
  const rankBox = getRankBox(children);
  const publisher = getPublisher(children);
  const year = getYear(children);
  const starRating = getStarRating(children);

  return (
    <div className={`flex flex-col ${className}`}>
      {rankBox.length > 0 ? (
        <div className="relative">
          {bookCover && <>{bookCover}</>}
          <div className="absolute top-[10px] left-[10px]">{rankBox}</div>
        </div>
      ) : (
        <>{bookCover}</>
      )}
      {bookTitle && <>{bookTitle}</>}
      {author.length > 0 && (
        <div className="flex gap-[1%] items-center text-[#656565]">
          {publisher}·{author}·{year}
        </div>
      )}
      {starRating && <>{starRating}</>}
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
