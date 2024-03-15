import { Pretendard } from "./src/app/font";
import { colors, radius } from "./src/styles/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      radius,
      fontFamily: {
        Pretendard: ["var(--font-Pretendard)"],
        SpoqaHanSansNeo: ["var(--font-SpoqaHanSansNeo)"],
        GurmukhiMN: ["var(--font-GurmukhiMN)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
