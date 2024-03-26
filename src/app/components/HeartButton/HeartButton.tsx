import Like from "@/assets/img/like.svg";
import NotLike from "@/assets/img/not-like.svg";
import { HeartButtonProps } from "./HeartButton.types";

const HeartButton = ({ isLike, onClick, width, height }: HeartButtonProps) => {
  const HeartButtonComponent = isLike ? Like : NotLike;
  return (
    <HeartButtonComponent
      width={width}
      height={height}
      className="cursor-pointer"
      onClick={onClick}
    />
  );
};

export default HeartButton;
