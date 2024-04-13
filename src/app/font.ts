import localFont from "next/font/local";
export const Pretendard = localFont({
  src: [
    {
      path: "../assets/font/Pretendard/Pretendard-Bold.woff",
      weight: "700",
    },
    {
      path: "../assets/font/Pretendard/Pretendard-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../assets/font/Pretendard/Pretendard-Medium.woff",
      weight: "500",
    },
    {
      path: "../assets/font/Pretendard/Pretendard-Regular.woff",
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

export const Inter = localFont({
  src: [
    {
      path: "../assets/font/Inter/Inter-Medium.ttf",
      weight: "500",
    },
    {
      path: "../assets/font/Inter/Inter-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-Inter",
});

export const GurmukhiMN = localFont({
  src: "../assets/font/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.ttf",
  weight: "500",
  variable: "--font-GurmukhiMN",
});
