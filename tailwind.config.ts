import type { Config } from "tailwindcss";
import { border, colors, radius } from "./src/styles/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      border,
      colors,
      radius,
      fontFamily: {
        Pretendard: ["var(--font-Pretendard)"],
        SpoqaHanSansNeo: ["var(--font-SpoqaHanSansNeo)"],
        Inter: ["var(--font-Inter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: { max: "819px" },
      md: { min: "820px", max: "1023px" },
      lg: { min: "1024px", max: "1200px" },
    },
  },
  plugins: [],
};
export default config;
