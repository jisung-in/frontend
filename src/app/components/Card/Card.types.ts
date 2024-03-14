import { ReactNode } from "react";

export interface CardProps {
  children?: ReactNode;
  title?: string;
  string?: string;
  src?: string;
  number?: string | number;
}
