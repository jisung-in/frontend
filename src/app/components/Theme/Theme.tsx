import { Children, ReactNode, isValidElement } from "react";
import { ThemeProps } from "./Theme.types";

const MainTheme = ({ theme }: ThemeProps) => {
  return (
    <div className="text-[28px] font-SpoqaHanSansNeo font-Medium mb-[23px]">
      {theme}
    </div>
  );
};
const ShowAll = () => {
  return (
    <div className="flex justify-center items-center">전체보기 {">"} </div>
  );
};
const ShowMore = () => {
  return <div className="flex justify-center items-center">더보기 {">"} </div>;
};

const MainThemeType = (<MainTheme />).type;
const ShowAllType = (<ShowAll />).type;
const ShowMoreType = (<ShowMore />).type;

const getMainTheme = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === MainThemeType)
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

const Theme = ({ children }: ThemeProps) => {
  const mainTheme = getMainTheme(children);
  const showAll = getShowAll(children);
  const showMore = getShowMore(children);

  return (
    <>
      {mainTheme && <>{mainTheme}</>}
      {showAll && <>{showAll}</>}
      {showMore && <>{showMore}</>}
    </>
  );
};

export const ThemeMain = Object.assign(Theme, {
  MainTheme,
  ShowAll,
  ShowMore,
});
