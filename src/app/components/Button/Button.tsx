import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex px-[3px] gap-[6px] items-center justify-center word-break:keep-all disabled:pointer-events-none disabled:opacity-30 transition-colors duration-200 font-medium md:font-[12px]",
  {
    variants: {
      variant: {
        main: "bg-brown-50 text-white hover:bg-brown-60",
        empty: "bg-white text-gray-50 border-2 border-gray-40",
        none: "text-white",
        gray: "text-gray-80 font-[500] border-2",
        ivory: "bg-ivory-40 text-brown-50",
        notCondition: "bg-[#E7E7E7]",
        mainPage:
          "bg-[#fff] px-4 text-[#80685D] text-[17px] border border-rounded border-[#80685D] rounded-[5px] hover:bg-brown-50 hover:text-white",
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
        xl2: "h-[70px]",
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
