import { LikeButtonProps } from "./LikeButton.types";

const LikeButton = ({ isLike, onClick }: LikeButtonProps) => {
  return isLike ? (
    <div
      className="flex items-center justify-center font-Pretendard font-medium text-[21px] text-[#FFF] px-[10px] border-[#80685D] border border-solid rounded-[3px] bg-[#80685D] cursor-pointer"
      onClick={onClick}
    >
      좋아요
    </div>
  ) : (
    <div
      className="flex items-center justify-center font-Pretendard font-medium text-[21px] text-[#656565] px-[10px] border-[#D9D9D9] border border-solid rounded-[3px] bg-[#FFF] hover:bg-[#FBFBFB] hover:border-[#80685D] cursor-pointer"
      onClick={onClick}
    >
      좋아요
    </div>
  );
};

export default LikeButton;
