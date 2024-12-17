import BackButton from "@/app/summary/_component/BackButton";
import { ReactNode } from "react";
import { ThemeMain } from "../Theme/Theme";

interface MainThemeTitlePrps {
  className?: string;
  children: ReactNode;
  title: string;
}

const MainThemeTitle = ({ children, title, className }: MainThemeTitlePrps) => {
  return (
    <ThemeMain.MainTheme>
      <p className="flex flex-col sm:flex-row 2xl:mt-[78px] 2xl:mb-[23px] xl:mt-16 xl:mb-5 lg:mt-10 lg:mb-4 md:mt-6 md:mb-3 sm:mt-4 sm:mb-2">
        <span className="sm:mr-2">
          <BackButton />
        </span>
        <span className="flex items-center sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5 xl:gap-x-2.5 2xl:gap-x-3">
          <span className="sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl cursor:pointer">
            {title}
          </span>
          <span
            className={`2xl:size-7 xl:size-6 lg:size-5 size-4 ${className}`}
          >
            {children}
          </span>
        </span>
      </p>
    </ThemeMain.MainTheme>
  );
};
export default MainThemeTitle;
