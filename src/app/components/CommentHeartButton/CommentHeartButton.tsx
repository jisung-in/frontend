import CommentLike from "@/assets/img/comment-like.svg";
import NotLike from "@/assets/img/not-like.svg";
import { CommentLikeHeartButtonProps } from "./CommentLikeHeartButton.types";

const CommentLikeHeartButton = ({
  isLike,
  onClick,
  width,
  height,
}: CommentLikeHeartButtonProps) => {
  const CommentLikeHeartButtonComponent = isLike ? CommentLike : NotLike;
  return (
    <CommentLikeHeartButtonComponent
      width={width}
      height={height}
      className="cursor-pointer"
      onClick={onClick}
    />
  );
};

export default CommentLikeHeartButton;
