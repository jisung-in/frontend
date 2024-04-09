import { ReactNode } from "react";

export interface IconButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
}
