import { cn } from "@/lib/tailwind.utils";

import { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={cn("w-full max-w-[1920px]", className)}>{children}</div>
  );
};
