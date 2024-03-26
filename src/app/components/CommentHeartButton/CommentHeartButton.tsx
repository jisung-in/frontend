import CommentLike from "@/assets/img/comment-like.svg";
import NotLike from "@/assets/img/not-like.svg";
import { CommentHeartButtonProps } from "./CommentHeartButton.types";

const CommentHeartButton = ({
  isCommentHeart,
  onClick,
  width,
  height,
}: CommentHeartButtonProps) => {
  const CommentHeartButton = isCommentHeart ? CommentLike : NotLike;
  return (
    <CommentHeartButton
      width={width}
      height={height}
      className="cursor-pointer"
      onClick={onClick}
    />
  );
};

export default CommentHeartButton;
