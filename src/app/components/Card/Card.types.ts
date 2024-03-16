import { ReactNode } from "react";

export interface CardProps {
  children?: ReactNode;
  title?: string;
  string?: string;
  src?: string;
  className?: string;
  width?: string;
  height?: string;
  border?: string;
  borderColor?: number;
  number?: string | number;
}
