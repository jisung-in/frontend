import Like from "@/assets/img/like.svg";
import NotLike from "@/assets/img/not-like.svg";
import { LikeButtonProps } from "./LikeButton.types";

const LikeButton = ({ isLike, onClick, width, height }: LikeButtonProps) => {
  const LikeComponent = isLike ? Like : NotLike;
  return (
    <LikeComponent
      width={width}
      height={height}
      className="cursor-pointer"
      onClick={onClick}
    />
  );
};

export default LikeButton;
