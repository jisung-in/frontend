import { ReactNode } from "react";

export interface CardProps {
  children?: ReactNode;
  title?: string;
  string?: string;
  className?: string;
  status?: string;
  category?: string;
  number?: string | number;
}
