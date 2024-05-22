import BackButton from "@/app/summary/_component/BackButton";
import { ReactNode } from "react";
import { ThemeMain } from "../Theme/Theme";

interface MainThemeTitlePrps {
  children?: ReactNode;
  title?: string;
}

const MainThemeTitle = ({ children, title }: MainThemeTitlePrps) => {
  return (
    <div className="mt-[50px]">
      <BackButton />
      <ThemeMain.MainTheme>
        <div className="flex mt-[18px] mb-[23px]">
          <div className="flex items-center mb-[23px]">
            <div className="text-[30px] mr-[16px]">{title}</div>
            <div className="w-[30px] h-[30px]">{children}</div>
          </div>
        </div>
      </ThemeMain.MainTheme>
    </div>
  );
};

export default MainThemeTitle;
