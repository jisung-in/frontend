import { ReactNode } from "react";

export interface CardProps {
  children?: ReactNode;
  onClick?: () => void;
}
export interface RankBoxProps {
  children?: ReactNode;
  number: number | string;
}
