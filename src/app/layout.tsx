import type { Metadata } from "next";
import { Pretendard, SpoqaHanSansNeo, GurmukhiMN } from "./font";
import "./globals.css";
import { Header } from "./components/Layout/Header/Header";
import { Footer } from "./components/Layout/Footer/Footer";

export const metadata: Metadata = {
  title: "지성인",
  description: "책의 모든 것",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${Pretendard.variable} ${SpoqaHanSansNeo.variable} ${GurmukhiMN.variable}`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-grow w-[100%] justify-center">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
