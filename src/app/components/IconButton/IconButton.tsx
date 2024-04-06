import { IconButtonProps } from "./IconButton.types";

const IconButton = ({ onClick, children, className = "" }: IconButtonProps) => {
  return (
    <button className={`cursor-pointer ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;
