import { ReactNode } from "react";

export interface CardProps {
  children?: ReactNode;
  className?: string;
  color?: string;
  bigImg?: boolean;
  height?: number;
  px?: number;
  py?: number;
}
