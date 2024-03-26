import { Children, ReactNode, isValidElement } from "react";
import { CardHeaderProps } from "./CardHeader.types";

const Profile = ({ children }: CardHeaderProps) => {
  return <div className="rounded-[50%]">{children}</div>;
};
const Name = ({ children }: CardHeaderProps) => {
  return <div className="font-Pretendard font-Medium">{children}</div>;
};
const HoursAgo = ({ children }: CardHeaderProps) => {
  return (
    <div className="font-Pretendard font-Regular text-[#949494]">
      {children}
    </div>
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

const ProfileType = (<Profile children={""} />).type;
const NameType = (<Name children={""} />).type;
const HouerAgoType = (<HoursAgo children={""} />).type;
const LikeNumbersType = (<LikeNumbers children={""} />).type;
const StarRatingType = (<StarRating children={""} />).type;

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
  const profile = getProfile(children);
  const name = getName(children);
  const hoursAgo = getHoursAgo(children);
  const likeNumbers = getLikeNumbers(children);
  const starRating = getStarRating(children);

  return (
    <div className="flex items-center w-full">
      <div className="flex flex-grow w-full h-full items-center">
        {profile && <>{profile}</>}
        <div className="flex flex-col">
          {name && <>{name}</>}
          {hoursAgo && <>{hoursAgo}</>}
        </div>
      </div>
      <div className="flex flex-col">{likeNumbers && <>{likeNumbers}</>}</div>
      <div className="flex">{starRating && <>{starRating}</>}</div>
    </div>
  );
};

export const CardHeaderMain = Object.assign(CardHeader, {
  Profile,
  HoursAgo,
  Name,
  LikeNumbers,
  StarRating,
});
