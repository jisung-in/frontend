import BackButton from "@/app/summary/_component/BackButton";
import { ReactNode } from "react";
import { ThemeMain } from "../Theme/Theme";

interface MainThemeTitlePrps {
  className?: string;
  children?: ReactNode;
  title?: string;
}

const MainThemeTitle = ({ children, title, className }: MainThemeTitlePrps) => {
  return (
    <div className="2xl:my-[50px] xl:my-11 lg:my-8 md:my-6 sm:my-4">
      <span className="sm:hidden block">
        <BackButton />
      </span>
      <ThemeMain.MainTheme>
        <h1 className="flex items-center 2xl:gap-x-4 gap-x-2 sm:gap-x-1.5">
          <span className="hidden sm:block">
            <BackButton />
          </span>
          <span className="sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            {title}
          </span>
          <div
            className={`2xl:size-7 xl:size-6 lg:size-5 md:size-4 sm:size-4 ${className}`}
          >
            {children}
          </div>
        </h1>
      </ThemeMain.MainTheme>
    </div>
  );
};
export default MainThemeTitle;
