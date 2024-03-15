import localFont from "next/font/local";
export const Pretendard = localFont({
  src: [
    {
      path: "../assets/font/Pretendard/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "../assets/font/Pretendard/Pretendard-Regular.woff2",
      weight: "400",
    },
  ],
  variable: "--font-Pretendard",
});

export const SpoqaHanSansNeo = localFont({
  src: [
    {
      path: "../assets/font/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf",
      weight: "700",
    },
    {
      path: "../assets/font/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.ttf",
      weight: "500",
    },
  ],
  variable: "--font-SpoqaHanSansNeo",
});

export const GurmukhiMN = localFont({
  src: "../assets/font/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.ttf",
  weight: "700",
  variable: "--font-GurmukhiMN",
});
