import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * tailwind의 조건문을 쉽게 사용할 수 있는 clsx 라이브러리와
 * tailwind의 중복적인 클래스를 병합해주는 tailwind-merge 라이브러리
 * 두 라이브러리를 사용하여 tailwind 클래스를 쉽게 사용할 수 있는 함수를 만들어줍니다.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
