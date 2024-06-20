import type { Metadata } from "next";
import { Footer } from "./components/Layout/Footer/Footer";
import { Header } from "./components/Layout/Header/Header";
import ReactQueryProvider from "./components/Provider/ReactQueryProvider/ReactQueryProvider";
import ReduxProvider from "./components/Provider/ReduxProvider/ReduxProvider";
import { GurmukhiMN, Inter, Kalufo, Pretendard, SpoqaHanSansNeo } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "지성인",
  description: "책과 관련된 주제로 자유롭게 이야기를 나누는 곳",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${Pretendard.variable} ${SpoqaHanSansNeo.variable} ${Inter.variable} ${GurmukhiMN.variable} ${Kalufo.variable}`}
      >
        <div className="flex flex-col min-h-screen">
          <ReactQueryProvider>
            <ReduxProvider>
              <Header />
              <div className="flex flex-col items-center w-[100%]">
                {children}
              </div>
              <Footer />
            </ReduxProvider>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
