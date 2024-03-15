"use client";

import { forwardRef, useCallback, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const textareaContainerVariants = cva(
  "p-[10px] flex gap-6xs w-full h-full rounded-md border",
  {
    variants: {
      variant: {
        main: "bg-gray-30 border-2 font-gray-60",
        white: "bg-white border-gray-40",
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

const textareaVariants = cva(
  "w-full h-full placeholder-gray-50 bg-transparent disabled:cursor-not-allowed focus-visible:outline-none disabled:opacity-50",
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  onSubmit?: VoidFunction;
  maxNum?: number;
  value?: string;
  variant?: "main" | "white";
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      onSubmit = () => {},
      variant,
      value,
      maxNum,
      ...props
    }: TextareaProps,
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = useCallback(() => setIsFocused(true), []);
    const handleBlur = useCallback(() => setIsFocused(false), []);
    return (
      <div
        className={clsx(
          textareaContainerVariants({ isFocused, variant }),
          "flex flex-col",
        )}
      >
        <textarea
          className={clsx(textareaVariants({ className }), "pl-[10px]")}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...props}
        />
        {variant !== "main" && (
          <div className="flex w-full justify-end text-gray-50">
            <>
              {value?.length ?? 0}/{maxNum ?? 200}
            </>
          </div>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
