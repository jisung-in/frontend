import RecentMakeTalkRoom from "@/assets/img/recent-make-talk-room.svg";
import { ThemeMain } from "../components/Theme/Theme";

const page = () => {
  return (
    <div>
      <ThemeMain.MainTheme>
        <div className="flex mb-[23px]">
          <div className="flex grow items-center">
            <div className="text-[30px] mr-[16px]">토크해요</div>
            <RecentMakeTalkRoom />
          </div>
        </div>
      </ThemeMain.MainTheme>
    </div>
  );
};

export default page;
