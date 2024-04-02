import Like from "@/assets/img/like.svg";
import NotLikeWhite from "@/assets/img/not-like-white.svg";
import NotLike from "@/assets/img/not-like.svg";
import { HeartButtonProps } from "./HeartButton.types";

const HeartButton = ({
  isHeart,
  onClick,
  width,
  height,
  color,
}: HeartButtonProps) => {
  const HeartButtonComponent = isHeart ? Like : NotLike;
  const HeartButtonWhiteComponent = isHeart ? Like : NotLikeWhite;
  return (
    <>
      {color ? (
        <HeartButtonWhiteComponent
          width={width}
          height={height}
          className="cursor-pointer"
          onClick={onClick}
          color={color}
        />
      ) : (
        <HeartButtonComponent
          width={width}
          height={height}
          className="cursor-pointer"
          onClick={onClick}
        />
      )}
    </>
  );
};

export default HeartButton;
