import { ReactNode } from "react";

export interface BookProps {
  children?: ReactNode;
  className?: string;
}

export interface StarProps {
  children?: ReactNode;
  starsCnt: number;
}
