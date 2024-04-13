import type { Metadata } from "next";
import { Footer } from "./components/Layout/Footer/Footer";
import { Header } from "./components/Layout/Header/Header";
import { GurmukhiMN, Pretendard, SpoqaHanSansNeo } from "./font";
import "./globals.css";
import ReduxProvider from "./components/Provider/ReduxProvider/ReduxProvider";
import ReactQueryProvider from "./components/Provider/ReactQueryProvider/ReactQueryProvider";
import { MSWProvider } from "./components/Provider/MSWProvider/MSWProvider";

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
        <MSWProvider />
        <div className="flex flex-col min-h-screen">
          <ReactQueryProvider>
            <ReduxProvider>
              <Header />
              <div className="flex flex-grow flex-col w-[100%]">{children}</div>
              <Footer />
            </ReduxProvider>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
