import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex px-[3px] gap-[6px] items-center justify-center word-break:keep-all disabled:pointer-events-none disabled:opacity-30 transition-colors duration-200 font-medium",
  {
    variants: {
      variant: {
        main: "bg-brown-50 text-white hover:bg-brown-60",
        empty: "bg-white text-gray-50 border-2 border-gray-40",
        none: "text-white",
        gray: "text-gray-80 font-[500] border-2",
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
      },
      height: {
        big: "h-[58px]",
        mid: "h-[40px]",
        sm: "h-[35px]",
      },
      weight: {
        md: "font-medium",
        semi: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "main",
      rounded: "lg",
      width: "full",
      weight: "md",
      height: "big",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, rounded, width, weight, height, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({
          variant,
          rounded,
          width,
          weight,
          height,
          className,
        })}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
