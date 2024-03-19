import { ReactNode } from "react";

export interface CardHeaderProps {
  children?: ReactNode;
  className?: string;
  starRating?: string | number;
  likeNumber?: string | number;
  hoursAgo?: string;
  name?: string;
}
