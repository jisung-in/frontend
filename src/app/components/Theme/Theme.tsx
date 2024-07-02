import { Children, ReactNode, isValidElement } from "react";
import { ThemeProps } from "./Theme.types";

const MainTheme = ({ children }: ThemeProps) => {
  return (
    <div className="text-2xl font-SpoqaHanSansNeo font-bold flex-grow">
      {children}
    </div>
  );
};
const Show = ({ children }: ThemeProps) => {
  return (
    <div className="text-[20px] text-[#B1B1B1] font-Pretendard font-regular flex items-center">
      {children}
    </div>
  );
};

const MainThemeType = (<MainTheme />).type;
const ShowType = (<Show />).type;

const getMainTheme = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === MainThemeType)
    .slice(0, 1);
};
const getShow = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === ShowType)
    .slice(0, 1);
};

const Theme = ({ children }: ThemeProps) => {
  const mainTheme = getMainTheme(children);
  const show = getShow(children);

  return (
    <div className="flex flex-row">
      <div className="flex flex-row flex-grow items-center">
        {mainTheme && <>{mainTheme}</>}
      </div>
      <div className="flex">{show && <>{show}</>}</div>
    </div>
  );
};

export const ThemeMain = Object.assign(Theme, {
  MainTheme,
  Show,
});
