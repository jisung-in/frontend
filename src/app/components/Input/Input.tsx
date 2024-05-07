"use client";

import { forwardRef, useCallback, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import SearchIcon from "@/assets/img/search-icon.svg";
import RemoveIcon from "@/assets/img/remove-icon.svg";
import clsx from "clsx";

const inputContainerVariants = cva(
  "px-[10px] flex gap-6xs items-center w-full h-[48px] rounded-md border",
  {
    variants: {
      variant: {
        main: "bg-gray-40 border-none font-white",
        empty: "bg-white border-gray-40 font-black",
      },
      isFocused: {
        true: "border-gray-60",
        false: "border-gray-40",
      },
      disabled: {
        true: "",
      },
    },
    defaultVariants: {
      variant: "main",
    },
  },
);

const inputVariants = cva(
  "w-full placeholder-gray-50 bg-transparent disabled:cursor-not-allowed focus-visible:outline-none disabled:opacity-50",
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  onSubmit?: VoidFunction;
  reset?: VoidFunction;
  variant?: "main" | "empty";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      onSubmit = () => {},
      reset = () => {},
      variant,
      ...props
    }: InputProps,
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = useCallback(() => setIsFocused(true), []);
    const handleBlur = useCallback(() => setIsFocused(false), []);
    return (
      <div className={inputContainerVariants({ isFocused, variant })}>
        <SearchIcon className="shrink-0" />
        <input
          className={clsx(inputVariants({ className }), "pl-[10px]")}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...props}
        />
        <RemoveIcon onClick={reset} className="shrink-0" />
      </div>
    );
  },
);

Input.displayName = "Input";
