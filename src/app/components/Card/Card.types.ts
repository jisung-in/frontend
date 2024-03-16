import { ReactNode } from "react";

export interface CardProps {
  children?: ReactNode;
  title?: string;
  string?: string;
  src?: string;
  className?: string;
  number?: string | number;
}
