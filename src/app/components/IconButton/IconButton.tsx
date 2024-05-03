import { ReactNode } from "react";

export interface IconButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  className?: string;
}

const IconButton = ({ onClick, children, className = "" }: IconButtonProps) => {
  return (
    <button className={`cursor-pointer ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;
