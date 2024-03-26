import { LikeButtonProps } from "./LikeButton.types";

const LikeButton = ({ isLike, onClick }: LikeButtonProps) => {
  return isLike ? (
    <div
      className="flex items-center justify-center w-[76px] h-[32px] font-Pretendard font-Medium text-[21px] text-[#656565] border-[#D9D9D9] border border-solid rounded-[3px] hover:bg-[#FBFBFB] cursor-pointer"
      onClick={onClick}
    >
      좋아요
    </div>
  ) : (
    <div
      className="flex items-center justify-center w-[76px] h-[32px] font-Pretendard font-Medium text-[21px] text-[#FFF] border-[#80685D] border border-solid rounded-[3px] bg-[#80685D] cursor-pointer"
      onClick={onClick}
    >
      좋아요
    </div>
  );
};

export default LikeButton;
