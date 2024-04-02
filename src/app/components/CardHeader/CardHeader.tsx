import TalkRoomTitle from "@/assets/img/talkroom-title.svg";
import { Children, ReactNode, isValidElement } from "react";
import { CardHeaderProps } from "./CardHeader.types";

const Title = ({ children }: CardHeaderProps) => {
  return (
    <div className="flex items-center font-Pretendard font-semibold text-[21px] text-[#fff] ml-[2px]">
      <TalkRoomTitle />
      <div>{children}</div>
    </div>
  );
};
const Profile = ({ children }: CardHeaderProps) => {
  return <div className="rounded-[50%]">{children}</div>;
};
const Name = ({ children }: CardHeaderProps) => {
  return <div className="font-Pretendard font-medium">{children}</div>;
};
const HoursAgo = ({ children }: CardHeaderProps) => {
  return (
    <div className="font-Pretendard font-normal text-[#949494]">{children}</div>
  );
};
const LikeNumbers = ({ children }: CardHeaderProps) => {
  return <div className="flex flex-col">{children}</div>;
};
const StarRating = ({ children }: CardHeaderProps) => {
  return (
    <div className="w-full h-full border border-[#624E45] border-solid rounded-[16px] bg-[#FBF7F0] mr-[26px]">
      {children}
    </div>
  );
};

const TitleType = (<Title />).type;
const ProfileType = (<Profile />).type;
const NameType = (<Name />).type;
const HouerAgoType = (<HoursAgo />).type;
const LikeNumbersType = (<LikeNumbers />).type;
const StarRatingType = (<StarRating />).type;

const getTitle = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  const title = childrenArray.filter(
    (child) => isValidElement(child) && child.type === TitleType,
  );
  return title.length > 0 ? title.slice(0, 1) : [];
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
const getHoursAgo = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  const hoursAgo = childrenArray.filter(
    (child) => isValidElement(child) && child.type === HouerAgoType,
  );
  return hoursAgo.length > 0 ? hoursAgo.slice(0, 1) : [];
};
const getLikeNumbers = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  const likeNumbers = childrenArray.filter(
    (child) => isValidElement(child) && child.type === LikeNumbersType,
  );
  return likeNumbers.length > 0 ? likeNumbers.slice(0, 1) : [];
};
const getStarRating = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  const starRating = childrenArray.filter(
    (child) => isValidElement(child) && child.type === StarRatingType,
  );
  return starRating.length > 0 ? starRating.slice(0, 1) : [];
};

const CardHeader = ({ children }: CardHeaderProps) => {
  const profile = getProfile(children);
  const name = getName(children);
  const hoursAgo = getHoursAgo(children);
  const likeNumbers = getLikeNumbers(children);
  const title = getTitle(children);
  const starRating = getStarRating(children);

  return (
    <div className="flex items-center w-full">
      {title.length > 0 ? (
        <div className="flex flex-grow w-full h-full items-center">
          {title}
          <div className="flex flex-col">{name}</div>
        </div>
      ) : (
        <div className="flex flex-grow w-full h-full items-center">
          {profile}
          <div className="flex flex-col">
            {name}
            {hoursAgo.length > 0 && <>{hoursAgo}</>}
          </div>
        </div>
      )}

      {likeNumbers.length > 0 && (
        <div className="flex flex-col">{likeNumbers}</div>
      )}
      {starRating.length > 0 && <div className="flex">{starRating}</div>}
    </div>
  );
};

export const CardHeaderMain = Object.assign(CardHeader, {
  Title,
  Profile,
  HoursAgo,
  Name,
  LikeNumbers,
  StarRating,
});
