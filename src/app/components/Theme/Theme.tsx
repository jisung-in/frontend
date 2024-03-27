import { Children, ReactNode, isValidElement } from "react";
import { ThemeProps } from "./Theme.types";

const MainTheme = ({ children }: ThemeProps) => {
  return (
    <div className="text-[28px] font-SpoqaHanSansNeo font-Medium flex-grow">
      {children}
    </div>
  );
};
const ShowAll = ({ children }: ThemeProps) => {
  return (
    <div className="text-[20px] text-[#B1B1B1] mr-[116px]">{children}</div>
  );
};
const ShowMore = ({ children }: ThemeProps) => {
  return (
    <div className="text-[20px] text-[#B1B1B1] mr-[116px]">{children}</div>
  );
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
