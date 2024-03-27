import { Children, ReactNode, isValidElement } from "react";
import { ThemeProps } from "./Theme.types";

const MainTheme = ({ children }: ThemeProps) => {
  return (
    <div className="text-[28px] font-SpoqaHanSansNeo font-Medium flex-grow">
      {children}
    </div>
  );
};
const Show = ({ children }: ThemeProps) => {
  return (
    <div className="text-[20px] text-[#B1B1B1] mr-[116px] flex items-center">
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
    <>
      {mainTheme && <>{mainTheme}</>}
      {show && <>{show}</>}
    </>
  );
};

export const ThemeMain = Object.assign(Theme, {
  MainTheme,
  Show,
});
