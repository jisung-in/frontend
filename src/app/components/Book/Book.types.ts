import { ReactNode } from "react";

export interface BookProps {
  children?: ReactNode;
  rankBox?: string | number;
  title?: string;
  year?: string | number;
  publisher?: string;
  author?: string;
  rank?: string | number;
  starRating?: string | number;
  className?: string;
}
