import { cn } from "@/lib/tailwind.utils";

import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex px-[3px] gap-[6px] items-center justify-center word-break:keep-all disabled:pointer-events-none disabled:opacity-30 transition-colors duration-200 font-medium md:font-[12px]",
  {
    variants: {
      variant: {
        main: "bg-brown-50 text-white hover:bg-brown-60",
        empty: "bg-white text-brown-40 border-2 border-brown-40",
        none: "text-white",
        gray: "text-gray-80 font-[500] border-2",
        ivory: "bg-ivory-40 text-brown-50",
        notCondition: "bg-[#E7E7E7]",
        mainPage:
          "bg-[#fff] px-4 text-[#80685D] text-[17px] border border-rounded border-[#80685D] rounded-[5px] hover:bg-brown-50 hover:text-white",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      width: {
        full: "w-full",
        register: "w-[350px]",
      },
      height: {
        "2xl": "h-[70px]",
        xl: "h-[58px]",
        lg: "h-[48px]",
        md: "h-[40px]",
        sm: "h-[35px]",
      },
      weight: {
        md: "font-medium",
        semi: "font-semibold",
        bold: "font-bold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "main",
      rounded: "lg",
      width: "full",
      weight: "md",
      height: "lg",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, rounded, width, weight, height, ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            rounded,
            width,
            weight,
            height,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
