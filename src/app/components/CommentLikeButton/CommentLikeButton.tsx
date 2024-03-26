import CommentLike from "@/assets/img/comment-like.svg";
import NotLike from "@/assets/img/not-like.svg";
import { CommentLikeButtonProps } from "./CommentLikeButton.types";

const CommentLikeButton = ({
  isLike,
  onClick,
  width,
  height,
}: CommentLikeButtonProps) => {
  const CommentLikeComponent = isLike ? CommentLike : NotLike;
  return (
    <CommentLikeComponent
      width={width}
      height={height}
      className="cursor-pointer"
      onClick={onClick}
    />
  );
};

export default CommentLikeButton;
